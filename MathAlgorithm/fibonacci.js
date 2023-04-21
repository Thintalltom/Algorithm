//Given a number 'n'. find the first 'n' element of the fibonacci sequence 
/* steps in solving this problem 
In mathematics, fibonacci sequence is a sequence in which each number is the sum of the preceeding one
example 
fibonacci(2) = [0, 1]
*/
//Solution

function fibonnaci(n) {
    const fib = [0, 1] // this is a contant for fibonacci the well known number is [0,1]
    for(let i = 2; i < n; i++){// i starts from 2 because 0 and 1 is known 
        fib[i] = fib [i - 1] + fib[i - 2]
    }
    return fib
}
console.log(fibonnaci(5));
console.log(fibonnaci(7));
console.log(fibonnaci(8));
