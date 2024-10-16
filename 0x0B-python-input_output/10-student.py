#!/usr/bin/python3
"""contains student class"""

class student:
    """represent the student"""
    def __init__(self, first_name, last_name,Age):
        """initiates the student"""
        self.first_name = first_name
        self.last_name = last_name
        self.age =Age

        def to_json(self, attrs=None):
            """returns dictionary"""
            try:
                for attr in attrs:
                    if type(attr) is not str:
                        return self.__dict__
            except Exception:
                return self.__dict__
            my_dict = dict()
            for key, vakue in self.__dict__.items():
                if key in attrs:
                    my_dict[key] = value
            return my_dict
