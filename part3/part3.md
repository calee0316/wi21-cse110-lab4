The bug was that the numbers that were input were being taken in as strings, so the sum was just a concatenation. For example, if 2 and 3 were input, what was taken in was "2" and "3" so the sum became "23". 

My fix was in calculateSum function, when defining result, I converted num1 and num2 to numbers by using Number(num1) and Number(num2) a screenshot is found at fix.png.

Part2:
1. citylots.json
2. part2.js
3. 11.7 MB
4. 15.68 s
5. Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData