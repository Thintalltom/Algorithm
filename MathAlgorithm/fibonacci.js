//Given a number 'n'. find the first 'n' element of the fibonacci sequence 
/* steps in solving this problem 
In mathematics, fibonacci sequence is a sequence in which each number is the sum of the preceeding one
example 
fibonacci(2) = [0, 1]
*/
//Solution

function fibonnaci(n) {
    const fib = [0, 1] // this is a contant for fibonacci the well known number is [0,1]
    for(let i = 2; i < n; i++){// the for loop starts from the second index
        fib[i] = fib [i - 1] + fib[i - 2]
        //this equation stands that to get the present fibonnacci former fib - 1 + former fib - 2 and stored into fib
    }
    return fib
}
console.log(fibonnaci(5));
console.log(fibonnaci(7));
console.log(fibonnaci(8));
// Therefore the time complexity is linear O(n) this is because it has one loop and also run based on input 
