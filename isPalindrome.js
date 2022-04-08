let isPalindrome = function reversedNum(x) {
    if (x <= 0){
        return false
    }
  if (x == (parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x))) {
      return true
  }  
}
