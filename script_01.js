
/***** Erinnerung: Arrays *******/

 let arr;
arr = ["Ich","bin","Max"];
output(arr);
output(arr[0]);


output("------------");


/***** Objekte 1 Daten/Funktionen *******/

// nested arrays - Prinzip:[[[]]]
// nested arraysn-hier: [[],[]]
arr =   [
                ["Ich","bin","Max"],
                ["Ich","bin","Moritz"]
        ];
        // output(arr[0][2]);
        // output(arr[0][0]);

for (let i = 0; i < arr.length; i++) {
     output(arr[i]);
        
}

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}