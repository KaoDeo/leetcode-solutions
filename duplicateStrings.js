// Create a function that takes a string and returns a new string with duplicates removed


 const str = 'This is is a test test string';
// 'This is a test string'


function removeDuplicates(str){

    const arr = str.split('')
    const set = new set(str) //set method cannot have a duplicates
    const newString = [...set].join('') //it's just one of the ways to turn set array into string
    return newArray
}

