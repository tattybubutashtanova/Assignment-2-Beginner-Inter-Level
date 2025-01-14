function findPrimes() {
    const limit = parseInt(document.getElementById("limit").value);
    
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    
    document.getElementById("result").textContent = "Primes: " + primes.join(', ');
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
