#!/usr/bin/python3

"""defining wrute_filr with 2 args"""

def write_file(filename="", text=""):
    """reads file with utf-8"""
    with open(filename, "w", encoding='utf-8') as f:
        return f.write(text)
