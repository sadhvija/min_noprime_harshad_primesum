// 1) WAP to print the minimum non prime in the given number
//input: Enter a number: 67439
//output: 4
num=prompt("enter a number")
nonPrimes=""
function checkPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0)
            return false
    }
    return true
}
for(j of num){
    if(j>1){
        if(!checkPrime(j)){
            nonPrimes+=j;
        }
    }
    min=nonPrimes[0]
    for(i=1;i<nonPrimes.length;i++){
        if(nonPrimes[i]<min)
            min=nonPrimes[i]
    }
}
console.log("minimum non prime is:"+min)


// 2) WAP to print the prime sum is more or non prime sum is more
// input: Enter number: 6655
// output: Non prime sum is more
num=prompt("enter a number")
primeSum=0,nonPrimeSum=0,primes="",nonPrimes=""
function checkPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0)
            return false
    }
    return true
}
for(j of num){
    if(j>1){
        if(!checkPrime(j)){
            nonPrimes+=j;
            nonPrimeSum+=Number(j)

        }
        if(checkPrime(j)){
            primes+=j;
            primeSum+=Number(j)
        }
    }
    
}
console.log("prime sum is:"+primeSum)
console.log("non prime sum is:"+nonPrimeSum)

if(primeSum>nonPrimeSum){
    console.log("prime sum is more")
}
else if(nonPrimeSum>primeSum){
    console.log("non prime is more")
}
else{
    console.log("both are equal")
}

//33)
//Problem Statement: Check if the number is a Harshad(or Niven) number or not.
   
originalNum=prompt("enter a number")
digitSum=0
for(i of originalNum){
    digitSum+=Number(i)
}
result=(originalNum%digitSum==0)?"Yes it's harshad Number":"No it's not a harshad Number"

console.log(result)