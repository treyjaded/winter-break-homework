// Question 1. Multiples of 3 or 5
function solution(number) {
    let sum = 0
// I declare a sum varable to be initized later
    for (i = 0; i < number; i++) {
// I interated through the number between 0 and number in order to get the mutiples of three in five within our parameter.
        if (i % 3 === 0 || i % 5 === 0) {
//This modulates goes through each number betwwen our parameter to get our mutiples of five and three 
            sum += i // i + sum = sum 
        }
// I then initized the sum varable to be equal to the sum of the mutiples of three and five
    }
    return number > 0 ? sum : 0
// We then use a Conditional (ternary) operator to either return our sum or 0 if the umber is greater than zero( a postive number)
}
console.log(solution(10))

//Question 2.Who likes it?
function likes(names) {

    if (names.length === 0) {
        return "no one likes this"
    }
    // Created an If Statement for our arguemnt 'names' that if the length of 'names'is zero it will return "no one likes this"
    else if (names.length === 1) {
        return names[0] + " likes this"
    }
    //If the length of 'names' is one , it will return the first index and concatnate the string "likes this" to create the string "(insert name) likes this"
    else if (names.length === 2) {
        return names[0] + " and " + names[1] + " like this"
    }
    //If the length is two add both indexes and the strings "and" & "like this" in their proper places
    else if (names.length === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    }
    //If the length is three add all indexes and the strings just like above.
    else if (names.length >= 4) {
        return names[0] + ", " + names[1] + ` and ${names.length-2} others like this`
    }
    //Just like above we do our if statement similarly, but since its more than or eqaul to four we add another condition to get the last two names in our argument. (names.length -2)
}
console.log(likes(["Peter"]))

//Question 3.Find the unique number
function findUniq(arr) {

    for (let i = 0; i < arr.length; i++) {
        //create a for loop that interates through our arguments length
        let cur = arr[i]
        //initize a variable for our elements in the loop
        if (arr.indexOf(cur) === arr.lastIndexOf(cur)) {
            // create a If statement that compares the first index of with the last. Since its in the loop, it will interate each element until it finds the unqiue one. Once it's found, it will return that same element.
            return cur
        }
    }
}
console.log(findUniq([1, 1, 1, 2, 1, 1]))

//Question 4. Find The Parity Outlier
function findOutlier(integers) {
    
    let evenA = []
    let oddA = []
    //Initize variable for the arrays we will put our odd and even numbers into.
    
    for (i = 0; i < integers.length; i++) {
        //for loop that will inerate the lenegth of our argument "integers"
        const cur = integers[i]
        // initize our element variable
        if (cur % 2 === 0) {
            evenA.push(cur)
        }
        // This If statement creates our array of even numbers. If the current element in the loop is divided by 2 and the remainer is zero, It is even. We push that even number into our even array.
        else {
            oddA.push(cur)
            //anything else that isn't even has to be odd.
        }

    }
    return evenA.length > oddA.length ? oddA[0] : evenA[0]
    //We create a teneray operater that says if the length of our even array is greater than the odd, it has more even numbers than odd so return the first element of that even array. If odd array is bigger, return the first odd element.
}
console.log(findOutlier([1, 2, 3]))

//Question 5.Counting Duplicates
function duplicateCount(text) {
    //...
    const hash = {}
    //create an empty object/hashmap
    let counter = 0
    //initize a variable for our counter. This will count each key for our property.
    const char = text.toLowerCase()
    //Lowercase any element that's in our argument 
    for (let i of char) {
        //create a for of loop that interates through our argument.
        if (!hash[i]) {
            hash[i] = 1;
        }
        // If the character has not been seen before, set its count to 1
        else hash[i]++
        // If the character has been seen before, increment its count
        if (hash[i] === 2) {
            counter += 1
        }
        //If the element is equal to 2, add one to our counter.
    }
    return counter
    //return that counter, it will give us the number of repeating elements, or characters, in our string.
}
console.log(duplicateCount("Indivisibility"))

//Question 6.Moving Zeros To The End
function moveZeros(arr) {
    const result = [];
    const zeros = []
    // Iterate through the elements of the input array
    for (const x of arr) {
        // If x is not equal to 0, push it inside the new array 
        if (x !== 0) {
            result.push(x);
        }
        //if x is equal to zero, push it inside the zero array
        if (x === 0) {
            zeros.push(x);
        }
    }
    //concatnate the result to give you all umbers in order plus the zeroes at the end.
    return result.concat(zeros)
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
//Question 7.Simple Pig Latin
function pigIt(str) {
    /*I split the str parameter to make the string into an array
    I use the map. method create a new array
    */
    return str.split(" ").map(word => {
            if (/[A-Z]/ig.test(word)) {
                return word.slice(1) + word[0] + 'ay'
            }
            //I use the slice. method to cut off the first index of every element.Then I add the first index back, along with the string 'ay'
            else return word
        })
        // I join them together to get back the complete phrase in a string.
        .join(" ")

}