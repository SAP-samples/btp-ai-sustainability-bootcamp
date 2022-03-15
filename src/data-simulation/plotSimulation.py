import plant as plant
import plantSimulation as sim
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

class PlotSimulation():

    def __init__(self, inputFile):
        self._inputFile = inputFile
        self.df=pd.DataFrame()
        self.dfw=pd.DataFrame()
        self.dfm=pd.DataFrame()
        self.nPlants=1
        self.nMachines=2
        self.maintCost=2000
        self.repairCost=20000
        self.energy_cost= 0.219  # euros/kWh
        self.CO2= 0.0301  # kg/kW

    def load_sim(self):

        #read input file
        cols=['Timestamp',\
        'Plant','PlantStatus','PlantYield', 'PlantDefectiveProducts','PlantEnergyConsumption (kW)', \
        'Machine','MachineStatus','MachineEnergyConsumption (kW)', 'MachineFaultProb', 'MachineBreakDownProb', 'MachineDefectsRate', 'MachineYield', 'MachineNoise' ,\
        'MachineCyclicMaintenance','MachineCorrectiveMaintenance','MachineProactiveMaintenance']
        self.df = pd.read_csv(self._inputFile, low_memory=False, names=cols)

        #compute additional columns
        self.df['PlantEffectiveYield']= self.df['PlantYield']-self.df['PlantDefectiveProducts']
        self.df['PlantCO2Emissions']= self.df['PlantEnergyConsumption (kW)']*self.CO2
        self.df['PlantEnergyCost']= self.df['PlantEnergyConsumption (kW)']*self.energy_cost

        self.df['Timestamp']=pd.to_datetime(self.df['Timestamp'])
        self.df=self.df.fillna('-')
        self.df['year_week']=self.df['Timestamp'].apply(lambda x: str(x.year)+'w'+str(x.week).zfill(2))
        self.df['year_month']=self.df['Timestamp'].apply(lambda x: str(x.year)+'w'+str(x.month).zfill(2))

        plant_cols=[ c for c in cols if 'Plant' in c ]
        machine_cols=[ c for c in cols if 'Machine' in c ]
        plant_measures=['PlantYield','PlantEffectiveYield','PlantDefectiveProducts','PlantEnergyConsumption (kW)','PlantCO2Emissions', 'PlantEnergyCost']

        #aggregate weekly
        self.dfw=self.df.drop_duplicates(subset=['Timestamp']+plant_cols)
        self.dfw=self.dfw.groupby(['year_week','Plant'],as_index=False)[plant_measures].sum()
        self.dfw['PlantEnergyConsumption_PP']=self.dfw['PlantEnergyConsumption (kW)'] / self.dfw['PlantEffectiveYield']
        self.dfw['PlantCO2Emissions_PP']=self.dfw['PlantCO2Emissions'] / self.dfw['PlantEffectiveYield']
        self.dfw['PlantEnergyCost_PP']=self.dfw['PlantEnergyCost'] / self.dfw['PlantEffectiveYield']


        #aggregate monthly
        self.dfm=self.df.drop_duplicates(subset=['Timestamp']+plant_cols)
        self.dfm=self.dfm.groupby(['year_month','Plant'],as_index=False)[plant_measures].sum()
        self.dfm['PlantEnergyConsumption_PP']=self.dfm['PlantEnergyConsumption (kW)'] / self.dfm['PlantEffectiveYield']
        self.dfm['PlantCO2Emissions_PP']=self.dfm['PlantCO2Emissions'] / self.dfm['PlantEffectiveYield']
        self.dfm['PlantEnergyCost_PP']=self.dfm['PlantEnergyCost'] / self.dfm['PlantEffectiveYield']
        return


    def plot_maintenance(self):
        return

    def plot_energy(self):
        measures = [c for c in self.dfw.columns if 'PP' in c and ('Energy' in c or 'CO2' in c) ]
        nfigs=len(measures)
        fig, axs = plt.subplots(nfigs, 1, sharex=True, figsize=(15,5*nfigs))
        for i, m in enumerate(measures):
            ax=axs[i]
            ax.plot(self.dfw[m].values )
            ax.set_ylim((self.dfw[m].min()-0.10*self.dfw[m].min(),self.dfw[m].max()+0.10*self.dfw[m].max()))
            ax.set_ylabel(m)
            ax.grid()
        labels = [item.get_text() for item in ax.get_xticklabels()]
        newlabels=[]
        for i,l in enumerate(labels):
            try:
                newlabels.append(self.dfw['year_week'][ax.get_xticks()[i]])
            except:
                newlabels.append('')
        axs[-1].set_xticklabels(newlabels, rotation=45)
        figname='energy_plots_'+self._inputFile.split('.')[0]+'.png'
        fig.savefig(figname,dpi=300)
        return

    def plot_quality(self):
        return

if __name__ == "__main__":
    plots=PlotSimulation('sim_factory_1x2.csv')
    plots.load_sim()
    plots.plot_maintenance()
    plots.plot_energy()
    plots.plot_quality()
