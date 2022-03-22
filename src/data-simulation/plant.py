import numpy as np
import yaml

class Machine:
    def __init__(self, equipment_nr, cfg):
        self._equipment_nr = equipment_nr
        self._dict = self._createDict(cfg)
        self._status = "OK"
        self._statusParameters = self._dict[self._status]


    def _createDict(self, cfg):
        with open(cfg) as file:
            return yaml.load(file, Loader=yaml.FullLoader)

    def _set_status(self, status):
        self._status=status
        self._statusParameters=self._dict[self._status]
        return

    def _print_status(self):
        sep=','
        status_string=self._equipment_nr+sep+self._status+sep
        status_string=status_string+str( self._statusParameters['energy_consumption'] )+sep
        status_string=status_string+str( self._statusParameters['fault_prob'] )+sep
        status_string=status_string+str( self._statusParameters['breakdown_prob'] )+sep
        status_string=status_string+str( self._statusParameters['defect_rate'] )+sep
        status_string=status_string+str( self._statusParameters['yield'] )+sep
        status_string=status_string+str( self._statusParameters['noise'] )+sep
        return status_string[0:-1]


class Plant():
    def __init__(self, plant_nr):
        self._plant_nr = plant_nr
        self._machine_dict = {}
        self._isOn = 0
        self._status = {
                        'yield':0,
                        'defects':0,
                        'energy_consumption':0,
                        }

    def add_machine(self,  m  ):
        self._machine_dict[m._equipment_nr]=m
        return

    def _turnOff(self):
        self._isOn = 0
        return

    def _turnOn(self):
        self._isOn = 1
        return

    def _print_status(self):
        sep=','
        status_string=self._plant_nr+sep+str(self._isOn)+sep
        for v in self._status.values():
            status_string=status_string+str(v)+sep
        return status_string[0:-1]

    def _compute_yield(self):
        if self._isOn:
            result = np.min( [m._statusParameters['yield'] for m in self._machine_dict.values()] )
            return result
        else:
            return 0

    def _compute_energy_consumption(self):
        if self._isOn:
            result = np.sum( [m._statusParameters['energy_consumption'] for m in self._machine_dict.values()] )
            return result
        else:
            return 0

    def _compute_defects(self):
        if self._isOn:
            result = np.sum( [m._statusParameters['defect_rate'] for m in self._machine_dict.values()] )
            result = self._status['yield'] * result
            return result
        else:
            return 0

    def _set_status(self):
        self._status['yield']=self._compute_yield()
        self._status['defects']=self._compute_defects()
        self._status['energy_consumption']=self._compute_energy_consumption()


class Factory():
    def __init__(self, factory_nr):
        self._factory_nr = factory_nr
        self._plants_dict = {}

    def add_plants(self,  p  ):
        self._plants_dict[p._plant_nr]=p
        return

    def _turnOn(self):
        for p in self._plants_dict.values():
            p._turnOn()
            p._set_status()
        return

    def _turnOff(self):
        for p in self._plants_dict.values():
            p._turnOff()
            p._set_status()
        return

    def _set_status(self):
        for p in self._plants_dict.values():
            p._set_status()
        return
