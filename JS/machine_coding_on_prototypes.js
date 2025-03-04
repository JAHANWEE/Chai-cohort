// Problem: Create an object representing a type of tea with properties for name, type and caffeine content
const teas ={
    name :"Oolong tea",
    type: "herbal",
    "caffeine content": "not-caffeinated"
}

// Problem: Access and print the name and type properties of the tea object
console.log("Name of tea is "+ teas.name + " and type is " +teas.type + " and is " + teas["caffeine content"]);    //in case if the space in case of caffeine-content

// Problem: Add a new property origin to the tea object
teas.origin ="China";

// Problem: Change the caffeine level of the tea object to "Medium"
teas["caffeine content"] = "medium";

// Problem: Remove the type property from the tea object
delete teas.origin

//Problem: Check if the tea object has a property origin
console.log(Object.hasOwn(teas ,"origin"))  //^gives true as hasOwn property has signature :Object.hasOwn(objectname, "property")); or ("property" in objectname)

// Problem: Use a for...in loop to print all properties of the tea object
for(let key in teas){
    console.log(`${key}: ${teas[key]}`); //~ or console.log(`${key}: ${teas[key]}`);
}

// Problem: Create a nested object representing different types of teas and their properties
const myTeas ={
    greenTea :{
        name:"Green Tea",
        property :"herbal"
    },
    chamomileTea:{
        name : "chamomile tea",
        property : "sleep-inducing"
    },
    hibiscusTea:{
    name : "Hibiscus Tea",
    property :"stress-buster"
    }
}

// Problem: Create a copy of the tea object
const teaCopy ={
    ...myTeas   //^ shallow copy --copies only keys not nested objects or 
}
const copyTea = JSON.parse(JSON.stringify(myTeas));  //^ deep copy as converts myTeas to string then creates an object of the string and stores it in the memory loaction of new variable copyTea
console.log(teaCopy);
console.log(copyTea);
const anotherCopy = myTeas; //^ is just a reference is not a copy 
console.log(anotherCopy); 


// Problem: Add a custom method describe to the tea object that returns a description string
teas.describe = function(){
    return `The ${this.name} is a ${this.type} from ${this.origin}, made in China `;
}; 
console.log(teas.describe()); //~gives "The Oolong tea is a herbal from China, made in China"

// Problem: Merge two objects representing different teas into one
const merged = {...myTeas , ...teas} //*Using Spread Operator (...)   ----shallow copy 
const mergedTeas =Object.assign({},myTeas,teas) //*Using Object.assign()
console.log(mergedTeas);

console.log(teas)