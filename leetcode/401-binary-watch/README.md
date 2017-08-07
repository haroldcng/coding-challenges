# Binary watch

**Please read the full description of the problem [here](https://leetcode.com/problems/binary-watch/description/) before continuing.**

### Assumed input
- ```[1, ... , 8]```
- ```int```

### How to solve it?

1. Loop all the hour/minute combinations possible. It means it looks like ```[0:00, 0:01, 0:02, ... , 11:57, 11:58, 11:59]```. This might look like a problem becase the complexity is ``n^2``, but since there are only 12 hours and 60 minutes the runtime will be always the same. *(12\*60 = 720)*
2. For each iteration you will have both ```hour``` and ```minute``` as integer values. Get the number of ones from the binary form of each number with ```countOnes()```, then add them up and compare the result to the parameter or input. 
3. If they are equal to the input, ```if( (countOnes(hour) + countOnes(minute)) == input )```, that is a result you want to add to your answer array. **NOTE:** Here we have to add leading zeros when necessary, an ```if(minute<10)``` statement will be enough.
4. When all permutations are done, return the ```answer``` array.

### Count Ones Function

The way this function works is the following:

1. Operate the ```number & 1```. What this does is it will end up being ```1``` if the very right position in ```number``` is ```1```.
2. Push ```number``` one bit to the right with ```number >> 1```.
3. Evaluate as indicated in step #1 until ```number===0```.

**NOTE:** This will only work for numbers less than 32-bits, which is our scope.
