const isPrime = (n) => {
  if (n === 0 || n === 1) {
    return false
  } else {
    const arr = []
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
const someN1 = 13
const testFunctionIsPrime = isPrime(someN1)
console.log(`is prime ${someN1} : ${testFunctionIsPrime}`)

const factorial = (n) => {
  let resultFactorial = 1
  while (n) {
    resultFactorial *= n--
  }
  return resultFactorial
}
const someN2 = 6
const testFunctionFactorial = factorial(someN2)
console.log(`factorial ${someN2} = ${testFunctionFactorial}`)

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
const someN3 = 3
const testFunctionFib = fib(someN3)
console.log(` ${someN3}  fibonacci number: ${testFunctionFib}`)

const isSorted = (arr) => {
  let resultIsSorted = true
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      resultIsSorted = false
    }
  }
  return resultIsSorted
}
const someArr = [-Infinity, -9, 0, 1, 10, 45]
const testFunctionIsSorted = isSorted(someArr)
console.log(` [${someArr}]  is sorted: ${testFunctionIsSorted}`)

const reverse = (str) => {
  const arrReverseResult = []
  const arrStr = str.split('')
  for (let i = arrStr.length - 1; i >= 0; i--) {
    arrReverseResult.push(arrStr[i])
    str = arrReverseResult.join('')
  }
  return str
}
const someStr = 'abcdef'
const testFunctionReverse = reverse(someStr)
console.log(` ${someStr}  reverse: ${testFunctionReverse}`)

const indexOf = (arr, element) => {
  let resultIndexOf = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      resultIndexOf = i
      break
    }
  }
  return resultIndexOf
}
const someArr2 = [0, 1, 2, 7, 4, 5]
const someElement = 7
const testFunctionIndexOf = indexOf(someArr2, someElement)
console.log(` index ${someElement}  in [${someArr2}]: ${testFunctionIndexOf}`)

const isPalindrome = (str) => {
  str = str.toLowerCase()
  const arrStrRev = []
  const arrStr = str.split(' ').join('').split('')
  for (let i = arrStr.length - 1; i >= 0; i--) {
    arrStrRev.push(arrStr[i])
  }
  let resultIsPalindrome = true
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] !== arrStrRev[i]) {
      resultIsPalindrome = false
      break
    }
  }
  return resultIsPalindrome
}
const someStr2 = 'A man a plan a canal Panama'
const testResultFuncIsPalindr = isPalindrome(someStr2)
console.log(` '${someStr2}' is palindrome: ${testResultFuncIsPalindr}`)

const missing = (arr) => {
  let resultMissing = undefined
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== 1) {
      resultMissing = 1
    } else {
      if ((arr[i + 1] - arr[i]) === 2) {
        resultMissing = i + 2
      }
    }
  }
  return resultMissing
}
const someArr3 = [6, 8, 3, 4, 2, 5, 7, 1, 9, 11]
const testResultFunctionMissing = missing(someArr3)
console.log(` in ['${someArr3}'] missed: ${testResultFunctionMissing}`)

const isBalanced = (str) => {
  let k = 0
  let j = 0
  let resultIsBalance = false
  const arrStr = str.split(' ').join('').split('')
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === '{') {
      k++
    }
    if (arrStr[i] === '}') {
      j++
    }
    if (k < j) { return false }
  }
  if (k === j) {
    resultIsBalance = true
  }
  return resultIsBalance
}
const someStr3 = 'foo{ bar { baz } boo }'
const testResultFuncIsBalanced = isBalanced(someStr3)
console.log(`'${someStr3}' balanced: ${testResultFuncIsBalanced}`)
