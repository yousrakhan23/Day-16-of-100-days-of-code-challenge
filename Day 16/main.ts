
// Q 121:

// Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when
// you want to ignore specific cases without stopping the entire loop.

for (let i = 1 ; i <= 10 ; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i) ; // logs 1-4 and 6-10
}

//.................................................................................................................................

// Q 122:

// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a
// certain condition is met, even if the loop's original termination condition hasn't been reached yet.

let counter : number = 10 ; 
while (counter > 0 ) {
    if (counter === 5 ) {
        break ; 
    }
    console.log(counter) ;
    counter-- ;
}

//.............................................................................................................................................

// Q 123: Create a loop that iterates through a string and stops when it finds the first vowel.

// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition 
//to check for vowels. The loop can stop once a vowel is found.

function logUntilVowel(string : string ) : void {
    const vowels = "aeiouAEIOU" ;
    for (const character of string) {
        if (vowels.includes(character)) {
            console.log(`First vowel found : ${character}`) ;
        }
        console.log(character) ;
    }
}
logUntilVowel("abcde") ; 

//...............................................................................................................................

// Q 124:

//Create a function inside an object that returns the object's own name property using the this keyword.

// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward 
//to access its properties from within its methods.

const person = {
    name : "Yousra" ,
    getName : function () {
        return this.name ; 
    }
} ;
console.log(person.getName()) ;

//........................................................................................................................

// Q 125:

// Modify a method in an object to use the this keyword to access another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.

const square = {
    length : 8 ,
    width : 6 ,
    calculateArea : function() {
        return this.length * this.width ;
    },
};

console.log(square.calculateArea()) ; // 48

//.........................................................................................................................................................


// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the
// object itself but to the global object (in a browser, window). This behavior often requires workarounds like 
//assigning this to another variable in the outer function.

const myObject = {
    property: "Value",
    outerMethod  : function () {
        console.log(this.property) ;

        const innerMethod = () => {
            console.log(this.property) ;
        } ;
        innerMethod() ;
    },
};
myObject.outerMethod() ;

//......................................................................................................................



