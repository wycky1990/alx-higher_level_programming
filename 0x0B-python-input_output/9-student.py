#!/usr/bin/python3
"""contains student class"""

class student:
    """represent the student"""
    def __init__(self, first_name, last_name,Age):
         """initiates the student"""
         self.first_name = first_name
         self.last_name = last_name
         self.age =Age

    def to_json(self):
        """returns dictionary"""
        return self.__dict__
