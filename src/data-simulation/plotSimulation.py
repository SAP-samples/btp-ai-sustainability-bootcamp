import plant as plant
import plantSimulation as sim
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

class PlotSimulation():

    def __init__(self, inputFile1, inputFile2):
        self._inputFile1 = inputFile1
        self._inputFile2 = inputFile2
        self.df=pd.DataFrame()
        self.maint_df=pd.DataFrame()
        self.dfm=pd.DataFrame()
        self.maint_mdf=pd.DataFrame()
        self.energy_cost= 0.219  # euros/kWh
        self.CO2= 0.0301  # kg/kW

    def load_sim(self):

        #read input file
        cols=['Timestamp',\
        'Plant','PlantStatus','PlantYield', 'PlantDefectiveProducts','PlantEnergyConsumption (kW)', \
        'Machine','MachineStatus','MachineEnergyConsumption (kW)', 'MachineFaultProb', 'MachineBreakDownProb', 'MachineDefectsRate', 'MachineYield', 'MachineNoise' ,\
        'MachineCyclicMaintenance','MachineCorrectiveMaintenance','MachineProactiveMaintenance']
        self.df = pd.read_csv(self._inputFile1, low_memory=False, names=cols)

        #compute additional columns
        self.df['PlantEffectiveYield']= self.df['PlantYield']-self.df['PlantDefectiveProducts']
        self.df['PlantCO2Emissions']= self.df['PlantEnergyConsumption (kW)']*self.CO2
        self.df['PlantEnergyCost']= self.df['PlantEnergyConsumption (kW)']*self.energy_cost

        self.df['Timestamp']=pd.to_datetime(self.df['Timestamp'])
        self.df=self.df.fillna('-')
        self.df['year_month']=self.df['Timestamp'].apply(lambda x: str(x.year)+'-'+str(x.month).zfill(2))

        plant_cols=[ c for c in cols if 'Plant' in c ]
        machine_cols=[ c for c in cols if 'Machine' in c ]
        plant_measures=['PlantStatus','PlantYield','PlantEffectiveYield','PlantDefectiveProducts','PlantEnergyConsumption (kW)','PlantCO2Emissions', 'PlantEnergyCost']

        #aggregate monthly
        self.dfm=self.df.drop_duplicates(subset=['Timestamp']+plant_cols)
        self.dfm=self.dfm.groupby(['year_month','Plant'],as_index=False)[plant_measures].sum()
        self.dfm['PlantEnergyConsumption_PP']=self.dfm['PlantEnergyConsumption (kW)'] / self.dfm['PlantEffectiveYield']
        self.dfm['PlantCO2Emissions_PP']=self.dfm['PlantCO2Emissions'] / self.dfm['PlantEffectiveYield']
        self.dfm['PlantEnergyCost_PP']=self.dfm['PlantEnergyCost'] / self.dfm['PlantEffectiveYield']
        return

    def load_maint(self):
        #read input file
        cols=['start_time',\
              'end_time',\
              'Plant',\
              'equipment_nr',\
              'maint_nr',\
              'cost',\
              'duration']

        self.maint_df = pd.read_csv(self._inputFile2, low_memory=False, names=cols)
        self.maint_df['start_time']=pd.to_datetime(self.maint_df['start_time'])
        self.maint_df=self.maint_df.fillna('-')
        maint_types=['CORRECTIVE','PROACTIVE','CYCLIC']
        for t in maint_types:
            self.maint_df[t]=0
            self.maint_df.loc[ self.maint_df['maint_nr'].str.contains(t)  , t]=1
        maint_cost=['CORRECTIVE_cost','PROACTIVE_cost','CYCLIC_cost']
        for t,c in zip(maint_types,maint_cost):
            self.maint_df[c]=0
            self.maint_df.loc[ self.maint_df[t]==1 , c]=self.maint_df.loc[ self.maint_df[t]==1 , 'cost']

        maint_cols=maint_types+maint_cost+['cost']

        #aggregate monthly
        self.maint_df['year_month']=self.maint_df['start_time'].apply(lambda x: str(x.year)+'-'+str(x.month).zfill(2))
        self.maint_mdf=self.maint_df.groupby(['year_month','Plant'],as_index=False)[maint_cols].sum()

        #merge effective yield
        self.maint_mdf=pd.merge(self.maint_mdf, self.dfm[['year_month','Plant','PlantEffectiveYield']] ,how='inner',on=['year_month','Plant'])
        costs_cols = [c for c in self.maint_mdf if 'cost' in c]
        for c in costs_cols:
            self.maint_mdf[c+'_PP']=self.maint_mdf[c]/self.maint_mdf['PlantEffectiveYield']
        return

    def plot(self, dataframe , measures, figname):
        nfigs=len(measures)
        fig, axs = plt.subplots(nfigs, 1, sharex=True, figsize=(15,5*nfigs))
        for i, m in enumerate(measures):
            for p,dfmp in dataframe.groupby('Plant'):
                ax=axs[i]
                ax.plot(dfmp[m].values , label=p )
                ax.set_ylabel(m)
                ax.set_ylim(0,ax.get_ylim()[1])
                ax.grid()
                labels = [item.get_text() for item in ax.get_xticklabels()]
                newlabels=[]
                for il,l in enumerate(labels):
                    try:
                        newlabels.append(dfmp['year_month'].values[int(ax.get_xticks()[il])])
                    except:
                        newlabels.append('')
            axs[-1].set_xticklabels(newlabels, rotation=45)
        fig.savefig(figname,dpi=300)
        return

    def plot_together(self, dataframe , measures, figname):
        nfigs=len(measures)
        fig, axs = plt.subplots(nfigs, 1, sharex=True, figsize=(15,5*nfigs))
        for I, M in enumerate(measures):
            mydf=dataframe.groupby(['year_month'],as_index=False)[M].sum()
            ax=axs[I]
            for i,m in enumerate(M):
                ax.plot(mydf[m].values , label=m )
            ax.set_ylabel(M)
            ax.set_ylim(0,ax.get_ylim()[1])
            ax.legend()
            ax.grid()
            labels = [item.get_text() for item in ax.get_xticklabels()]
            newlabels=[]
            for il,l in enumerate(labels):
                try:
                    newlabels.append(mydf['year_month'].values[int(ax.get_xticks()[il])])
                except:
                    newlabels.append('')
        axs[-1].set_xticklabels(newlabels, rotation=45)
        fig.savefig(figname,dpi=300)
        return

    def plot_maintenance(self):
        maint_types=['CORRECTIVE','PROACTIVE','CYCLIC']
        maint_cost=['CORRECTIVE_cost','PROACTIVE_cost','CYCLIC_cost','cost']
        maint_cost_PP=['CORRECTIVE_cost_PP','PROACTIVE_cost_PP','CYCLIC_cost_PP','cost_PP']
        figname='maintenance_plots_'+self._inputFile1.split('.')[0]+'.png'
        self.plot_together(self.maint_mdf,[maint_types,maint_cost,maint_cost_PP], figname)
        return

    def plot_energy(self):
        measures = [c for c in self.dfm.columns if ('Energy' in c or 'CO2' in c) ]
        figname='energy_plots_'+self._inputFile1.split('.')[0]+'.png'
        self.plot(self.dfm, measures, figname)
        return


    def plot_quality(self):
        measures = [c for c in self.dfm.columns if ('Yield' in c or 'Product' in c or 'PlantStatus' in c) ]
        figname='quality_plots_'+self._inputFile1.split('.')[0]+'.png'
        self.plot(self.dfm, measures, figname)
        return

if __name__ == "__main__":
    plots=PlotSimulation('sim_LGP_factory.csv','maintenance_LGP_factory.csv')
    plots.load_sim()
    plots.load_maint()
    plots.plot_maintenance()
    plots.plot_energy()
    plots.plot_quality()
