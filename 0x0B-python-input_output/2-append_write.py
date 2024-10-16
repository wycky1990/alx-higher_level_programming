 #!/usr/bin/python3

 """defining append_file function"""

 def append_file(filename="", text=""):
     """append file name with utf-8"""
     with open(filename, "a", encoding='utf-8') as f:
         return f.write(text)

