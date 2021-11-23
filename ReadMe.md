<img width="444" alt="Screenshot 2021-11-22 at 16 36 53" src="https://user-images.githubusercontent.com/87530494/142890013-696b3aec-6bc5-44d1-8e8a-80d6bc5c1f8b.png">

In this task I've implemented the logic for the calculator based on the simple HTML and Jquery as a part of the requirement. 

https://my-sandbox.w3spaces.com/calc.html

Activity

In calc.js, write the JavaScript code using jQuery to implement the calculator functionality. Your calculator should work as a “normal” calculator would be expected to operate, but here are the different use cases that your app needs to consider:
If the user chooses the divide operation and the result is not an integer, it should be displayed using floating point notation, e.g. “10” divided by “4” should produce “2.5”.
If the user chooses the subtract operation and the result is negative, it should be displayed as a negative number, e.g. “5” minus “8” should produce “-3”. This includes subtracting from zero, too, of course.
If the user attempts to divide by 0, the result should be shown as “Infinity”.

Using the clear button:
During or after any of the cases above, if the user clicks the clear button, then the app should reset itself back to the state in which the page was just loaded. It should not reload the page, of course, but rather should clear the display and “forget” the results of prior inputs or operations. 

Using the equals button:
If the app is in the “reset” state – because the page has just been loaded, or because an operation was just completed, or because the user clicked the clear button – and the user enters one or more numbers and then clicks the equals button without first selecting an operator and entering another operand, the display should be the same and the equals button should be ignored. For instance, if the app is reset and the user clicks “2” and then “3” and then “=”, the display should still read “23” and that value should be used as normal for the next button click.

Likewise, if the app is in the reset state and the user enters some numbers, and then an operator, and then clicks the equals button without entering another operand, the display should be the same and the equals button should be ignored. For instance, if the app is reset and the user clicks “1” and then “5” and then “+” and then “=”, the display should still read “15” and that value and the “+” operator should be used as normal for the next button click.
However, if the user has just completed an operation using the equals button and then clicks the equals button again, the previous operation should be repeated using the result of the operation and the most recently entered operand. For instance, if the app is reset and the user enters “8” and then “+” and then “6” and then “=”, the display should read “14” as normal. If the user enters “=” again, the “+6” operation should be repeated and the display should now read “20”. If the user then enters “=” again, the “+6” operation should again be repeated and the display should read “26” and so on.

Selecting multiple operators:
If the app is in the “reset” state and the user enters some numbers, and then an operator, and then a different operator, the first operator should be ignored and the second operator should be used in the operation. For example, if the app is reset and the user enters “6” and then “+” and then “*” and then “2” and then “=”, the “+” operator should be ignored and the “*” operator should be used, so the display should read “12”.

