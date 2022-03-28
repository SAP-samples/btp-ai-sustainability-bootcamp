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
        self._cyclicMaintFreq = 30 #in days
        self._cyclicMaintDuration = 24 #in hours
        #self._proactiveMaintDuration = 4 #in hours
        self._cyclicMaintList=[]
        #self._RepairDuration = 5*24 #in hours
        self._corrective_nr = 1
        self._predictive_nr = 1
        self._cyclic_nr = 1
        self._gaussian_sigma_perc = 0.01
        self._proactivness = 4 # time to schedule a proactive maintenance ( in hours)
        self.cfg= 'cfg/machine1.yaml'
        self._outfile1 = 'sim_'+factory_nr+'.csv'
        self._outfile2 = 'maintenance_'+factory_nr+'.csv'
        self.t = self._cyclicStartDate


    # Populate the factory with plants and machines and create the clock
    def draw_factory(self):

        #create figure
        fig_width = 20  # cm
        max_fig_height = 20  # cm
        height_per_plant = 5
        width_per_machines = fig_width / np.max([ len(p._machine_dict.keys()) for p in self._factory._plants_dict.values() ] )
        fig_height= height_per_plant * len(self._factory._plants_dict.keys())
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

        plant_counter=len(self._factory._plants_dict.keys())-1
        radii = min(height_per_plant,width_per_machines) * 0.3
        for kp,p in self._factory._plants_dict.items():
            plants_titles_coordinates.append((fig_width*0.1, height_per_plant* 0.9  + height_per_plant * plant_counter))
            plants_titles.append('Plant '+kp)

            machine_counter=0
            machines_coordinates=[]
            machines_titles=[]

            for km,m in p._machine_dict.items():
                machines_coordinates.append( ( width_per_machines * 0.5 + width_per_machines * machine_counter , height_per_plant* 0.5  + height_per_plant * plant_counter))
                machines_titles.append('Equipment nr \n'+km)
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
                fontsize=5
                )
            for i in range(len(p._machine_dict.keys())-1):
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
        while s + Delta <= e:
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
                        mu=m._statusParameters['nominal_energy_consumption']
                        sigma=m._statusParameters['nominal_energy_consumption']*self._gaussian_sigma_perc
                        m._statusParameters['energy_consumption']=np.random.normal(loc=mu, scale=sigma, size=1)[0]
                        mu=m._statusParameters['nominal_yield']
                        sigma=m._statusParameters['nominal_yield']*self._gaussian_sigma_perc
                        m._statusParameters['yield']=np.random.normal(loc=mu, scale=sigma, size=1)[0]
                        mu=m._statusParameters['nominal_defect_rate']
                        sigma=m._statusParameters['nominal_defect_rate']*self._gaussian_sigma_perc
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
                self._factory._faultClock[plant._plant_nr][machine._equipment_nr]=-1-self._proactivness
        return

    # Function to generate breakdown on a certain machine
    def breakdown_generator(self, plant, machine ):
        prob=machine._statusParameters['breakdown_prob']
        breakdown=self.event_generator(prob)
        if breakdown:
            machine._set_status('BROKEN')
            plant._turnOff()
            plant._set_status()
            self._factory._downtimesClock[plant._plant_nr][machine._equipment_nr]=machine._statusParameters['maintenance_hours']
            return 1
        else:
            return 0

    # Function to bring up a plant after a corrective maintenance
    def corrective_maintenance( self, plant, machine, f2):
        if self._factory._downtimesClock[plant._plant_nr][machine._equipment_nr] == 1 :

            #Print maintenance
            start_time=str(self.t-timedelta(hours=machine._statusParameters['maintenance_hours']))
            end_time=str(self.t)
            maintenance_nr='CORRECTIVE'+str(self._corrective_nr).zfill(5)
            maintenance_str=start_time + ',' + end_time + ',' +\
                            plant._plant_nr + ',' +\
                            machine._equipment_nr + ',' +\
                            maintenance_nr + ',' +\
                            str(machine._statusParameters['maintenance_cost']) + ',' +\
                            str(machine._statusParameters['maintenance_hours']) + '\n'
            print('status',machine._status,machine._statusParameters['maintenance_cost'])
            f2.write(maintenance_str)

            #Turn machine up
            machine._set_status('OK')
            plant._turnOn()
            plant._set_status()
            self._corrective_nr = self._corrective_nr+1
        return

    # Function to :
    # - stop the environment for a maintenance
    # - bring up a plant after a "predictive" maintenance
    def predictive_maintenance( self, plant, machine, f2):

        #if there has been a breakdown, forget about the predictive maintenance, you're late
        if self._factory._faultClock[plant._plant_nr][machine._equipment_nr] !=0 and self._factory._downtimesClock[plant._plant_nr][machine._equipment_nr]>0:
            self._factory._faultClock[plant._plant_nr][machine._equipment_nr]=0

        # shut down the plant for a proactive maintenance if it is time to do so
        if self._factory._faultClock[plant._plant_nr][machine._equipment_nr] == -1 :
            plant._turnOff()
            plant._set_status()
            self._factory._faultClock[plant._plant_nr][machine._equipment_nr] = machine._statusParameters['maintenance_hours']

        # bring everything up if the proactive maintenance is done
        if self._factory._faultClock[plant._plant_nr][machine._equipment_nr] == 1 :

            #Print maintenance
            start_time=str(self.t-timedelta(hours=machine._statusParameters['maintenance_hours']))
            end_time=str(self.t)

            maintenance_nr='PROACTIVE'+str(self._predictive_nr).zfill(5)
            maintenance_str=start_time + ',' + end_time + ',' +\
                            plant._plant_nr + ',' +\
                            machine._equipment_nr + ',' +\
                            maintenance_nr + ',' +\
                            str(machine._statusParameters['maintenance_cost']) + ',' +\
                            str(machine._statusParameters['maintenance_hours']) + '\n'
            f2.write(maintenance_str)

            #Turn machine up
            machine._set_status('OK')
            plant._turnOn()
            plant._set_status()
            self._predictive_nr = self._predictive_nr+1
        return

    # Function to bring up the factory after a corrective maintenance
    def cyclic_maintenance(self, plant, machine, f2):

        if self._factory._cyclicMaintClock[plant._plant_nr][machine._equipment_nr] !=0 and self._factory._downtimesClock[plant._plant_nr][machine._equipment_nr]>0:
            self._factory._cyclicMaintClock[plant._plant_nr][machine._equipment_nr]=0

        if self._factory._cyclicMaintClock[plant._plant_nr][machine._equipment_nr]==1:
            #Print maintenance
            start_time=str(self.t-timedelta(hours=self._cyclicMaintDuration))
            end_time=str(self.t)
            maintenance_nr='CYCLIC'+str(self._cyclic_nr).zfill(5)
            maintenance_str=start_time + ',' + end_time + ',' +\
                            plant._plant_nr + ',' +\
                            machine._equipment_nr + ',' +\
                            maintenance_nr + ',' +\
                            str(machine._statusParameters['maintenance_cost']) + ',' +\
                            str(self._cyclicMaintDuration) + '\n'
            f2.write(maintenance_str)

            #Turn machine up
            machine._set_status('OK')
            self._cyclic_nr = self._cyclic_nr+1
            all_good=1
            for m in plant._machine_dict.values():
                if m._status=='BROKEN':
                    all_good=0
                    break
            if all_good:
                 plant._turnOn()
            plant._set_status()
        return

    def run(self):

        ### Open output file
        f1 = open(self._outfile1, "w")
        f2 = open(self._outfile2, "w")

        sep=','

        ### Start the simulation
        D=timedelta(hours=1)
        proactive = 0

        while self.t < self._proactiveEndDate:
            self.t =self.t + D

            if self.t > self._cyclicEndDate :
                proactive=1

            #Update clocks
            # cyclic maintenance
            for kp, vp in self._factory._cyclicMaintClock.items():
                for km, vm in vp.items():
                    if vm > 0:
                        self._factory._cyclicMaintClock[kp][km]=vm-1
                    # Was a cyclic maintenance scheduled for today? if so, turn the factory off
                    elif vm == 0 and self.t.strftime('%Y-%m-%d') in [ d.strftime('%Y-%m-%d') for d in self._cyclicMaintList]:
                        self._factory._cyclicMaintClock[kp][km] = self._cyclicMaintDuration
                        self._factory._turnOff()
            # corrective maintenance
            for kp, vp in self._factory._downtimesClock.items():
                for km, vm in vp.items():
                    if vm > 0:
                        self._factory._downtimesClock[kp][km]=vm-1
            # predictive maintenance
            for kp, vp in self._factory._faultClock.items():
                for km, vm in vp.items():
                    if vm > 0:
                        self._factory._faultClock[kp][km]=vm-1
                    if vm < 0:
                        self._factory._faultClock[kp][km]=vm+1


            # Extract current energy consumption and yield value of the machines according to gaussian ditributions
            self.measure_generator()

            # Loop on plants
            for p in self._factory._plants_dict.values():

                # If plant is on, extract random faults/breakdowns.
                for m in p._machine_dict.values():
                    if p._isOn:
                        self.fault_generator(p, m, proactive)
                        self.breakdown_generator(p, m)


                    # Execute maintenance, if needed
                    self.corrective_maintenance(p,m,f2)
                    self.predictive_maintenance(p,m,f2)
                    self.cyclic_maintenance(p,m,f2)

                    #Print the status of each machine
                    f1.write(str(self.t))
                    f1.write(sep)
                    f1.write(p._print_status())
                    f1.write(sep)
                    f1.write(m._print_status())
                    f1.write(sep)
                    if self._factory._cyclicMaintClock[p._plant_nr][m._equipment_nr] > 1 :
                        maintenance_nr='CYCLIC'+str(self._cyclic_nr).zfill(5)
                        f1.write(maintenance_nr)
                        f1.write(sep)
                    else:
                        f1.write(sep)
                    if self._factory._downtimesClock[p._plant_nr][m._equipment_nr] > 1 :
                        maintenance_nr='CORRECTIVE'+str(self._corrective_nr).zfill(5)
                        f1.write(maintenance_nr)
                        f1.write(sep)
                    else:
                        f1.write(sep)
                    if self._factory._faultClock[p._plant_nr][m._equipment_nr] > 1 :
                        maintenance_nr='PROACTIVE'+str(self._predictive_nr).zfill(5)
                        f1.write(maintenance_nr)
                        f1.write('\n')
                    else:
                        f1.write('\n')

        f1.close()
        f2.close()
        return

def main():
        Sim = FactorySimulation('LGP_factory')
        Sim._factory._build_from_yaml('cfg/LGP_factory.yaml')
        Sim.draw_factory()
        Sim._factory._turnOn()
        Sim.schedule_cyclic_maintenance()
        print(Sim._cyclicMaintList)
        Sim.run()


if __name__ == "__main__":
    main()
