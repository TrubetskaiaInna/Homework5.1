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

const fib = (n) => {
  if (n === 0) {
    return 0
  } else {
    let f
    let f1 = 1
    let f2 = 1
    for (let i = 3; i <= n; i++) {
      f = f2 + f1
      f1 = f2
      f2 = f
    }
    return f2
  }
}
console.log(fib(3))
