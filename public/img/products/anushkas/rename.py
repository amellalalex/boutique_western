import os

dir = os.fsencode(".")

x = 0
for file in os.listdir(dir):
  f = os.fsdecode(file)
  if f == "rename.py": 
    continue
  os.rename(f, str(x) + ".jpg")
  x += 1