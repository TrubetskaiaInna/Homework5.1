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

const isSorted = (arr) => {
  let arrIsSorted = []
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      arrIsSorted.push('true')
    } else {arrIsSorted.push('false')}
  }
  let resultIsSorted = true
  for (let i = 0; i < arrIsSorted.length; i++) {
    if (arrIsSorted[i] === 'false') {
      resultIsSorted = false
      break
    }
  }
  return resultIsSorted
}
console.log(isSorted([1, 9, -8, 0, -Infinity]))
console.log(isSorted([-Infinity, -9, 0, 1, 10, 45]))

const reverse = (str) => {
  const arrReverseResult = []
  const arrStr = str.slice('')
  for (let i = arrStr.length - 1; i >= 0; i--) {
    arrReverseResult.push(arrStr[i])
    str = arrReverseResult.join('')
  }
  return str
}
console.log(reverse('abcd'))

const indexOf = (arr, element) => {
  let resultIndexOf = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      resultIndexOf = i
    }
  }
  return resultIndexOf
}
console.log(indexOf([0, 1, 2, 7, 4, 5], 7))
console.log(indexOf([0, 1, 2, 7, 4, 5], 9))
