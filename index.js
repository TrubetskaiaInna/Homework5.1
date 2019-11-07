const isPrime = (n) => {
  if (n === 0 || n === 1) {
    return false
  } else {
    let arr = []
    const steps = Math.round(Math.sqrt(n))
    for (let i = 2; i <= steps; i++) {
      arr.push(n % i)
    }
    let resultIsPrime = true
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        resultIsPrime = false
        break
      }
    }
    return resultIsPrime
  }
}
console.log(isPrime(13))

const factorial = (n) => {
  let resultFactorial = 1
  while (n) {
    resultFactorial *= n--
  }
  return resultFactorial
}
console.log(factorial(6))
