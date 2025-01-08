// key : value pair data storing

let Details = {
    name : "krishn",
    age : 19,
    city : "Vrindavan",
    hobbie : ['Bhakti','Dancing'],
    address : {
        street : "Gokul",
        house : "B-303,RadhaMahal",
    },
    sayHello : function () {
        return `Hare Krishna!!`
    }
}

// console.log(Details);
// console.log(Details.sayHello());
// console.log(Details["address"].street);
// console.log(Details["address"]['house']);
// console.log(Details.name);
// console.log(Details['city']);
// console.log(Details['hobbie'][1]);

//objects Method
// console.log(Details.hasOwnProperty("age"));
// console.log(Object.keys(Details));
// console.log(Object.values(Details));

// Details.email = "krishn@gmail.com" //add

// delete Details.age // delete

// console.log(Details);


// Shallow copy  and Deep copy

// let a = [11,22,33,44,55];
// let b = a;

// b.push(66)

// console.log("a ==>",a);
// console.log("b ==>",b);

// deep copy

// let a = [11,22,33,44,55];
// let b = [...a];


// b.push(66)

// console.log("a ==>",a);
// console.log("b ==>",b);


// Shallow Object 
// let a = {name : "krishn"};
// let b = a;

// b.age = 19
// console.log("a ==>",a);
// console.log("b ==>",b);

// Deep object

// let a = {name : "krishn"};
// let b = {...a};

// b.age = 19
// console.log("a ==>",a);
// console.log("b ==>",b);

//merging in Object

// let a = {name : "krishn" , age : 19};
// let b = {city : "vrindavan" , name : "radha"};

// let c = {...a,...b};
// console.log(c);

// let a = {name : "krishn" , age : 19};
// let b = {city : "vrindavan" , name : "radha"};

// let c = {...b,...a};
// console.log(c);

//mering array

// let a = [11,22,33];
// let b = [44,55,66];

// let c= [...a,...b];
// console.log(c);

let a = [11,22,33];
let b = [44,55,66];

let c= [...b,...a];
console.log(c);




