/*
Solving for a given integer 'n' , find the factoral of the integer.
To solve this
A factorial is  the factors of a non negative integer n!

example 
3! = 3 x 2 x 1
*/

function factorial(n) {
    let factor = 1 
    for (let i = 2; i <= n; i++) // i is intialize to 2 because 1 is a known factor 
    {
        factor = factor * i// to get factor simplay say factor multplied by i
    }
    return factor
}

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(3))
//time complexity is linear O(n)