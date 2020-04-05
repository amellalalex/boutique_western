filename = input("Enter filename: ")

f = open(filename, "r")
text = f.read()

result = ""
doublespace = False
for c in text:
  if c == '"': 
    if doublespace: 
      result += ' '
      doublespace = False
    result += '\\"'
  elif c == '\n': continue
  elif c == ' ' and not doublespace: doublespace = True
  elif c == ' ' and doublespace: 
    continue
    doublespace = False
  else:
    if doublespace: 
      result += ' '
      doublespace = False 
    result += c

print(result)