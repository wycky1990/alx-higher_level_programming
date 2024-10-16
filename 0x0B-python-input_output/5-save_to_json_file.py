#!/usr/bin/python3
"""defining save_to_json_file function"""

import json
def  save_to_json_file(my_obj, filename):
    """write an object to the file"""
    with open(filename, "w", encoding='utf-8') as f:
        json.dump(my_obj, f)
