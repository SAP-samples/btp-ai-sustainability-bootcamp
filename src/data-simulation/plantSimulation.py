import plant as plant
from datetime import datetime, timedelta
import pandas as pd
import numpy as np


class FactorySimulation():

    def __init__(self, factory_nr):
        self._factory = plant.Factory(factory_nr)
        self._cyclicStartDate = datetime.strptime('2020-01-01','%Y-%m-%d')
        self._cyclicEndDate = datetime.strptime('2020-12-31','%Y-%m-%d')
        self._preventiveEndDate = datetime.now()
        self._cyclicMaintFreq = 28 #in days
        self._MaintDuration = 24 #in hours
        self._cyclicMaintList=[]
        self._cyclicMaintClock=0
        self._downtimesClock={}
        self._RepairDuration = 5*24 #in hours
        self.nPlants=1
        self.nMachines=2
        self._corrective_nr = 1
        self._cyclic_nr = 1
        self._proactive_nr = 1
        self.cfg= 'cfg/machine1.yaml'
        self._outfile = 'sim_'+factory_nr+'.csv'


    # Populate the factory with plants and machines and create the clock
    def build_factory(self):
        for p in range(1,self.nPlants+1):
            p_name='p'+str(p)
            P = plant.Plant(p_name)
            self._downtimesClock[p_name]={}
            self._factory.add_plants(P)
            for m in range(1,self.nMachines+1):
                m_name='m'+str(m)
                M = plant.Machine(m_name, self.cfg)
                P.add_machine(M)
                self._downtimesClock[p_name][m_name]=0
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
    def fault_generator(self, plant, machine ):
        prob=machine._statusParameters['fault_prob']
        print('fault_gen ',prob)
        fault=self.event_generator(prob)
        if fault:
            machine._set_status('NONOK')
            plant._set_status()
        return

    # Function to generate breakdowns on a certain machine
    def breakdown_generator(self, plant, machine ):
        prob=machine._statusParameters['breakdown_prob']
        print('break_gen ',prob)
        breakdown=self.event_generator(prob)
        if breakdown:
            machine._set_status('BROKEN')
            plant._turnOff()
            plant._set_status()
            self._downtimesClock[plant._plant_nr][machine._equipment_nr]=self._RepairDuration
            return 1
        else:
            return 0

    def corrective_maintenance( self, plant, machine):
        if self._downtimesClock[plant._plant_nr][machine._equipment_nr] == 1 :
            machine._set_status('OK')
            plant._turnOn()
            plant._set_status()
            self._corrective_nr = self._corrective_nr+1
        return

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
        while t < self._cyclicEndDate:
            t =t + D
            print("***",t)

            #Update clocks
            if self._cyclicMaintClock>0:
                self._cyclicMaintClock=self._cyclicMaintClock -1
            for kp, vp in self._downtimesClock.items():
                for km, vm in vp.items():
                    if vm > 0:
                        self._downtimesClock[kp][km]=vm-1

            print(self._cyclicMaintClock)
            print(self._downtimesClock)

            # Was a cyclic maintenance scheduled for today? if so, turn the factory off
            if self._cyclicMaintClock == 0 and t.strftime('%Y-%m-%d') in [ d.strftime('%Y-%m-%d') for d in self._cyclicMaintList]:
                self._cyclicMaintClock = self._MaintDuration
                self._factory._turnOff()
                print(" start cyclic ",self._cyclicMaintClock)

            # Loop on plants
            for p in self._factory._plants_dict.values():

                # If plant is on, extract random faults/breakdowns
                for m in p._machine_dict.values():
                    if p._isOn:
                        self.fault_generator(p, m)
                        self.breakdown_generator(p, m)

                    #Execute maintenance, if needed
                    self.corrective_maintenance(p,m)
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
                        f.write('\n')
                    else:
                        f.write('\n')

        f.close()
        return

def main():
        Sim = FactorySimulation('factory_1')
        Sim.build_factory()
        Sim._factory._turnOn()
        Sim.schedule_cyclic_maintenance()
        print(Sim._cyclicMaintList)
        Sim.run()


if __name__ == "__main__":
    main()
