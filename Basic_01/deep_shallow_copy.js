

let originalObject={
    name:"apple"
}
let clonedObject={...originalObject}

clonedObject.name="orange";
console.log(clonedObject.name)