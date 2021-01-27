1. We will see the length of prices, prices.length, as i was declared with var, making it function scoped
2. Will print the value of discountedPrice, it was declared with var, so it is function scoped
3. It will print the value of finalPrice, it was declared with var, then set in the for loop, so it is function scoped.
4. [50, 100, 150], the for loop will multiply 1-0.5 = 0.5 to each price 100,200, 300, then round that new price times 100 to the nearest integer, then divide by 100 (gives us the same number in this case as we have a clean number). This value is pushed to the end of the discounted array, so we have an array of each price in the input array halved. 
5. Error, i is declared with let, so it is out of scope outside of the for loop
6. Error, discountedPrice is declared within the for loop with let, so it is out of scope outside the for loop
7. The value in finalPrice will be printed, it was declared with let in the same block as the console.log statement, so it is in the correct scope.
8. [50,100,150], for the same reason as question4, as nothing in terms of errors or functionality has changed. 
9. Error, i is declared with let in the for loop, so outside of the for loop it is out of scope. An error will be occur before reaching line 11 as well, in trying to re-set a const variable. 
10. Assuming all previous statements work, line 12 will also cause an error as discountedPrice is declared with a const, making it block-scoped, so it is out of scope outside of the for loop.
11. Assuming all previous statements work, line 13 will print finalPrice as const is block scoped and the console.log statement is in the same scope as the definition const finalPrice = 0.
12. The function will return an error, as we are trying to re-set a const variable in finalPrice and discounted.
13. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
14. A. '32', as an number is being added to a string, the number is converted to a string then concatenated
    B. 1, as we have a string and an int in a non-add mathematical expression, they are both converted to a number
    C. 0, In mathematical expressions, null is converted to 0, so we have 3+0 = 0
    D. '3null' we are using add on a string, so null is converted to string 'null' and concatenated to '3'
    E. 4, in mathematical expressions, true is converted to 1, so we get 1+3=4
    F. 0, in mathematical expressions, false is converted to 0, and null is converted to 0, so we have 0+0 = 0
    G. '3undefined' we are adding to a string, so undefined is converted to string and concatenated
    H. NaN, undefined becomes NaN in a mathematical expression, so an error in performing the math returns NaN
15. A. true, string '2' becomes a number 2 
    B. false, as both are strings we compare the first character and '2'>'1' so we get false
    C. true, the double equals checks value, so true
    D. false, triple equals checks type as well, so false
    E. false, true takes on the value of 1, so 1 is not equal to 2, so false
    F. true, any non 0 number declared by Boolean is converted to true, so true === true returns true
16. == checks value while === checks value and type
17. 'How are you?' is printed because 2 is converted to a Boolean value in the else if block, making it true. 
19. [6, 8,10] is returned. For every value in the array (1,2,3), we call the callback doSomething with input current value in array, and callback function that returns x*2. So we go to the callback doSomething first, which adds 2 to the input, and calls callback with that new number as input. The callback of doSomething multiplies the new number by 2 and then returns, so we are back to modifyArray. newArr then has this new number we created pushed to it. So for example, when array[i] = 1, 1 and the function that multiplies 2 to x is input to doSomething, which returns callback(1+2), which will call function(x){return x*2}, giving us a new number of 3*2, then we are back to modifyArray and 6 is pushed to newArr. This repeats.
21. 1 is output, then 4, then 3, then 2. This is because we start by printing 1, then the setTimeout functions set timeout times. Although the timeout for 3 is 0, it must wait for the next event cycle, so console.log(4) happens first, then 3 is printed, then 2, as it must wait 1000 milliseconds.

    
