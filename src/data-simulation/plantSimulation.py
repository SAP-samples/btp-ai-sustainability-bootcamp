import plant as plant
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt


class FactorySimulation():

    def __init__(self, factory_nr):
        self._factory = plant.Factory(factory_nr)
        self._cyclicStartDate = datetime.strptime('2020-01-01','%Y-%m-%d')
        self._cyclicEndDate = datetime.strptime('2021-01-01','%Y-%m-%d')
        self._proactiveEndDate = datetime.now()
        self._cyclicMaintFreq = 28 #in days
        self._MaintDuration = 24 #in hours
        self._cyclicMaintList=[]
        self._cyclicMaintClock=0
        self._downtimesClock={}
        self._faultClock={}
        self._RepairDuration = 5*24 #in hours
        self.nPlants=1
        self.nMachines=2
        self._corrective_nr = 1
        self._predictive_nr = 1
        self._cyclic_nr = 1
        self.cfg= 'cfg/machine1.yaml'
        self._outfile = 'sim_'+factory_nr+'.csv'


    # Populate the factory with plants and machines and create the clock
    def build_factory(self):
        for p in range(1,self.nPlants+1):
            p_name='p'+str(p)
            P = plant.Plant(p_name)
            self._downtimesClock[p_name]={}
            self._faultClock[p_name]={}
            self._factory.add_plants(P)
            for m in range(1,self.nMachines+1):
                m_name='m'+str(m)
                M = plant.Machine(m_name, self.cfg)
                P.add_machine(M)
                self._downtimesClock[p_name][m_name]=0
                self._faultClock[p_name][m_name]=0
        return

    # Populate the factory with plants and machines and create the clock
    def draw_factory(self):

        #create figure
        fig_width = 20  # cm
        max_fig_height = 20  # cm
        height_per_plant = 5
        width_per_machines = fig_width / self.nMachines
        fig_height= height_per_plant * self.nPlants
        if fig_height > max_fig_height:
            fig_height = max_fig_height
        fig = plt.figure(figsize=(fig_width / 2.54, fig_height / 2.54))

        #create axis. 1 unit = 1 cm
        ax = fig.add_axes((0, 0, 1, 1))
        ax.set_xlim(0, fig_width)
        ax.set_ylim(0, fig_height)
        ax.tick_params(bottom=False, top=False, left=False, right=False)
        ax.tick_params(labelbottom=False, labeltop=False, labelleft=False, labelright=False)

        #border
        ax.spines["top"].set_color("black")
        ax.spines["bottom"].set_color("black")
        ax.spines["left"].set_color("black")
        ax.spines["right"].set_color("black")
        ax.spines["top"].set_linewidth(4)
        ax.spines["bottom"].set_linewidth(4)
        ax.spines["left"].set_linewidth(4)
        ax.spines["right"].set_linewidth(4)

        #plants and machines
        plants_titles_coordinates=[]
        plants_titles=[]

        plant_counter=self.nPlants-1
        radii = min(height_per_plant,width_per_machines) * 0.3
        for kp,p in self._factory._plants_dict.items():
            plants_titles_coordinates.append((fig_width*0.1, height_per_plant* 0.9  + height_per_plant * plant_counter))
            plants_titles.append(kp)

            machine_counter=0
            machines_coordinates=[]
            machines_titles=[]

            for km,m in p._machine_dict.items():
                machines_coordinates.append( ( width_per_machines * 0.5 + width_per_machines * machine_counter , height_per_plant* 0.5  + height_per_plant * plant_counter))
                machines_titles.append(km)
                machine_counter=machine_counter+1

            #Draw machines
            for i, m_coord in enumerate(machines_coordinates):
                x, y = m_coord
                theta = np.linspace(0, 2 * np.pi, 100)
                ax.plot(
                x + radii * np.cos(theta),
                y + radii * np.sin(theta),
                color="gold",
                )
                ax.text(
                x, y,
                machines_titles[i],
                horizontalalignment="center",
                verticalalignment="center",
                color="black",
                )
            for i in range(self.nMachines-1):
                ax.annotate(
                    "",
                (machines_coordinates[i+1][0] - radii, machines_coordinates[i+1][1]),
                (machines_coordinates[i][0] + radii, machines_coordinates[i][1]),
                        arrowprops=dict(arrowstyle = "-|>"),
                    )

            plant_counter=plant_counter -1

        #Draw plants titles
        for i, m_coord in enumerate(plants_titles_coordinates):
            x, y = m_coord
            ax.text(
            x, y,
            plants_titles[i],
            horizontalalignment="center",
            verticalalignment="center",
            color="black",
            )
        png_title=str(self._factory._factory_nr)+'.png'
        fig.savefig(png_title,dpi=300)
        return

    # Create cyclic maintenance list
    def schedule_cyclic_maintenance(self):
        s=self._cyclicStartDate
        e=self._cyclicEndDate
        Delta=timedelta(days=self._cyclicMaintFreq)
        while s <= e:
            s = s + Delta
            self._cyclicMaintList.append(s)
        return

    # Function to extract events according to a certain probability
    def event_generator( self, probability ):
        x= np.random.uniform()
        if x < probability:
            return 1
        else:
            return 0

    # Function to extract faults on a certain machine
    def measure_generator(self):
        for p in self._factory._plants_dict.values():
            if p._isOn:
                for m in p._machine_dict.values():
                    if m._status!='BROKEN':
                        mu=m._statusParameters['energy_consumption_avg']
                        sigma=m._statusParameters['energy_consumption_std']
                        m._statusParameters['energy_consumption']=np.random.normal(loc=mu, scale=sigma, size=1)[0]
                        mu=m._statusParameters['yield_avg']
                        sigma=m._statusParameters['yield_std']
                        m._statusParameters['yield']=np.random.normal(loc=mu, scale=sigma, size=1)[0]
                        mu=m._statusParameters['defect_rate_avg']
                        sigma=m._statusParameters['defect_rate_std']
                        m._statusParameters['defect_rate']=np.random.normal(loc=mu, scale=sigma, size=1)[0]
        p._set_status()
        return


    # Function to extract faults on a certain machine
    def fault_generator(self, plant, machine, proactive ):
        prob=machine._statusParameters['fault_prob']
        fault=self.event_generator(prob)
        #if proactive maintenance is not in place
        if fault:
            machine._set_status('NONOK')
            plant._set_status()
            if proactive:
                # set the fault clock to -1: the maintenance hasn't started yet.
                #The AI algo will recognise the fault and schedule the machine within few hours
                self._faultClock[plant._plant_nr][machine._equipment_nr]=-2
        return

    # Function to generate breakdown on a certain machine
    def breakdown_generator(self, plant, machine ):
        prob=machine._statusParameters['breakdown_prob']
        breakdown=self.event_generator(prob)
        if breakdown:
            machine._set_status('BROKEN')
            plant._turnOff()
            plant._set_status()
            self._downtimesClock[plant._plant_nr][machine._equipment_nr]=self._RepairDuration
            return 1
        else:
            return 0

    # Function to bring up a plant after a corrective maintenance
    def corrective_maintenance( self, plant, machine):
        if self._downtimesClock[plant._plant_nr][machine._equipment_nr] == 1 :
            machine._set_status('OK')
            plant._turnOn()
            plant._set_status()
            self._corrective_nr = self._corrective_nr+1
        return

    # Function to :
    # - stop the environment for a maintenance
    # - bring up a plant after a "predictive" maintenance
    def predictive_maintenance( self, plant, machine):
        if self._faultClock[plant._plant_nr][machine._equipment_nr] == -1 :
            plant._turnOff()
            plant._set_status()
            self._faultClock[plant._plant_nr][machine._equipment_nr] = self._MaintDuration
        if self._faultClock[plant._plant_nr][machine._equipment_nr] == 1 :
            machine._set_status('OK')
            plant._turnOn()
            plant._set_status()
            self._predictive_nr = self._predictive_nr+1
        return

    # Function to bring up the factory after a corrective maintenance
    def cyclic_maintenance(self):
        if self._cyclicMaintClock==1:
            for p in self._factory._plants_dict.values():
                for m in p._machine_dict.values():
                    m._set_status('OK')
                p._turnOn()
                p._set_status()
                self._cyclic_nr = self._cyclic_nr+1
        return

    def run(self):

        ### Open output file
        f = open(self._outfile, "w")
        sep=','

        ### Start the simulation
        t=self._cyclicStartDate
        D=timedelta(hours=1)
        proactive = 0

        while t < self._proactiveEndDate:
            t =t + D

            if t > self._cyclicEndDate :
                proactive=1

            #Update clocks
            # cyclic maintenance
            if self._cyclicMaintClock>0:
                self._cyclicMaintClock=self._cyclicMaintClock -1
            # corrective maintenance
            for kp, vp in self._downtimesClock.items():
                for km, vm in vp.items():
                    if vm > 0:
                        self._downtimesClock[kp][km]=vm-1
            # predictive maintenance
            for kp, vp in self._faultClock.items():
                for km, vm in vp.items():
                    if vm > 0:
                        self._faultClock[kp][km]=vm-1
                    if vm < 0:
                        self._faultClock[kp][km]=vm+1

            # Was a cyclic maintenance scheduled for today? if so, turn the factory off
            if self._cyclicMaintClock == 0 and t.strftime('%Y-%m-%d') in [ d.strftime('%Y-%m-%d') for d in self._cyclicMaintList]:
                self._cyclicMaintClock = self._MaintDuration
                self._factory._turnOff()

            # Extract current energy consumption and yield value of the machines according to gaussian ditributions
            self.measure_generator()

            # Loop on plants
            for p in self._factory._plants_dict.values():

                # If plant is on, extract random faults/breakdowns.
                for m in p._machine_dict.values():
                    if p._isOn:
                        self.fault_generator(p, m, proactive)
                        self.breakdown_generator(p, m)


                    #Execute maintenance, if needed
                    self.corrective_maintenance(p,m)
                    self.predictive_maintenance(p,m)
                    self.cyclic_maintenance()

                    #Print the status of each machine
                    f.write(str(t))
                    f.write(sep)
                    f.write(p._print_status())
                    f.write(sep)
                    f.write(m._print_status())
                    f.write(sep)
                    if self._cyclicMaintClock > 1 :
                        maintenance_nr='CYCLIC'+str(self._cyclic_nr).zfill(5)
                        f.write(maintenance_nr)
                        f.write(sep)
                    else:
                        f.write(sep)
                    if self._downtimesClock[p._plant_nr][m._equipment_nr] > 1 :
                        maintenance_nr='CORRECTIVE'+str(self._corrective_nr).zfill(5)
                        f.write(maintenance_nr)
                        f.write(sep)
                    else:
                        f.write(sep)
                    if self._faultClock[p._plant_nr][m._equipment_nr] > 1 :
                        maintenance_nr='PROACTIVE'+str(self._predictive_nr).zfill(5)
                        f.write(maintenance_nr)
                        f.write('\n')
                    else:
                        f.write('\n')

        f.close()
        return

def main():
        Sim = FactorySimulation('factory_1x2_random')
        Sim.build_factory()
        Sim.draw_factory()
        Sim._factory._turnOn()
        Sim.schedule_cyclic_maintenance()
        print(Sim._cyclicMaintList)
        Sim.run()


if __name__ == "__main__":
    main()
