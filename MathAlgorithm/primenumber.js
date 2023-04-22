/*
QUESTION 
Given a natural number 'n' determine if the number is prime or not 
Mathematically
prime numbers only has two factors which is 1 and themselves 
*/
function primeNumbers(n){
    if(n < 2) {// must evaluate to 2 because two is te smallest prime number
        return false; 
    } for (let i = 2; i < n; i++) {
        if(n % i === 0 ) {// this checks if n is dividible by i and remainder is 0 then n is not a prime number and returns false 
            return false; // false if a prime number
        }
    }
    return true;// returns true if not a prime number
  
}
console.log(primeNumbers(7))
//Time complexity = O(n) linear
