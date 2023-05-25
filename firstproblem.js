//This is object 1

const carOne = {
    color: 'blue',
    status: {
       running: true,
       passengers: 4,
       wiperFluid: 'empty' 
    },
    age: 5,
    miles: 50000,
    value: '8000'
}

//This is object 2

const carTwo = {
    color: 'green',
    status: {
        running: 'yes',
        passengers: 2,
        fuelTank: 'empty',
    },
    value: 9000
}

//This is a varible set equal to both obejcts using the spread operator (...)
//The spread operator allows us to QUICKLY copy all/ part of an existing array/object into another array or object
//So in the variable below not only are the object copied and combined,
//but since they have similiar properties (color,"status: running, passengers",value)
//their values overlap!//
//Whichever object is called second in the varible below, that objects property values will take priority in the overlapping.
//However, if the first object listed has properties that the second object doesn't they will also be taken into the varible and added to the new properties of the combined variable.



//So, in the resulting combinedCar object (combining Object 1 and Object 2):

// The color property is set to the value 'green' from carTwo, overwriting the 'blue' value from carOne.
// The status property is also overwritten by the object from carTwo, so it contains the values { running: 'yes', passengers: 2, fuelTank: 'empty' } instead of the original values from carOne.

// The age and miles properties are taken from carOne since they are not present in carTwo!//

// Finally, the value property is set to 9000 from carTwo (as a number), overwriting the original value '8000' from carOne (a string).

const combinedCar = {
...carOne,
...carTwo
}

    
//Now if the combined varible changed and CarTwo was called first instead of second. The properties in carOne would take priority, being the second object listed in the combined varible.
//Changing the color, status, value.//

// const combinedCar = {
//     ...carTwo,
//     ...carOne
// }

//When you console.log you will see the copying, combining and overlapping mentioned above.


console.log(combinedCar);

