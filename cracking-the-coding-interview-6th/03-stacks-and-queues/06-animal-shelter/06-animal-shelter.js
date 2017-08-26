/**
 * Problem: 3.6 Animal shelter | Page 99 | Cracking the Coding Interview 6th
 * Algorithm author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */

 // Array to hold the animals
let shelter = new Array();

// Animal object definition
let Animal = function(name, kind){
    this.name = name;
    this.kind = kind;
};

let popNextAnimal = (kind) => {
    for(let i=0; i<shelter.length; i++){
        if(shelter[i].kind === kind){
            console.log(shelter[i].name + " is your new pet.");
            shelter.splice(i,1);
            break;
        }
    }
};

let addAnimal = (name, kind) => {
    shelter.push(new Animal(name, kind));
};

// Add animals to the shelter
addAnimal("Firulais", "dog");
addAnimal("Edna", "cat");
addAnimal("Hachiko", "dog");
addAnimal("Garfield", "cat");
addAnimal("Delilah", "cat");
addAnimal("Beethoven", "dog");

// Get next availible dog
popNextAnimal("dog");

// Print what is in the shelter
console.log(shelter);