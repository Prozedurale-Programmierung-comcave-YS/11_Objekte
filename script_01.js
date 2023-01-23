

// /***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// // nested arrays - Prinzip: [[[]]]
// // nested arrays  - hier: [[],[]]
// arr =   [
//                 ["Ich","bin","Max"],
//                 ["Ich","bin","Moritz"]
//         ];

        
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }


// let person = {
// firstName:"Yvonne",
// familyName:"Schubert",
// salary: [120000,160000],
// permission: true,
// sayHello:
//         function(){
//                 return "Hallo ich bin " + this.firstName + "!";
// }
// }
// // output(person);
// // output(person.firstName);
// // output(person.permission);
// // output(person.salary[1]);

// person.familyName = "Schubert";


// const txt = "Ich bin " + person.firstName + " " +
// person.familyName +
//  " und verdiene " +
// person.salary[1] + " p.a";

// output(txt)
// output(person.sayHello());

// Objekt

const baikal = {
        value:"10m",
        deep:{
                deeper:{
                        deepest: {
                                value:"Das Licht - auf 1642m!",
                                temperature:1
                        }
                }
        }




}


output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);
output(baikal.deep.deeper.deepest.value);
output(baikal.deep.deeper.deepest.temperature);



/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}