
# practice python

# variables in python
value  = 10;
print(value)

name = "Sunny";
print(name)

isActive = False;
print(isActive)

# basic for loop in python
n = 5
for j in range(n):
  print(j)

# arr in python 
arr = [1,2,3,4]
print(arr)

#loop over arr in python
for val in arr:
  print(val)
  
# dictionary in python / in js similar to object but more of a map
obj = { "name":"Rajat","age":22}
print(obj)

# loop over dictionary in python
# 1 only keys
for key in obj.keys():
  print(key)
  
# 2 only values
for key in obj.values():
  print(key)
  
# 3 both key values
for key,value in obj.items():
  print(key,value)
  
#  set in python
uniques = {1,2,3,4,4}
print(uniques) # op - {1,2,3,4}

# tuples in python - same as array but immutable and syntax differnece
tup = (1,2,3,4);
print(tup)
print(tup[1]) # op -2
# tup[1] = 10  not allowed due to immutability;

# if else 
x = 2
if(x > 5):
  print("x greater than 5")
else: print("not greater than 5")  

# function declaration
def sum(a,b):
  return a+b;
  
print(sum(10,20))  
  
# well done champ you are ready to work in production champ  
  