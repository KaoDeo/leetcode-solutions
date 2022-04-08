let isPalindrome = function reversedNum(x) {
    return (parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x))         
  }