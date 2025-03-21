// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm global, but scoped with let";
const globalConst = "I'm a global constant";

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

// Block scope
{
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

//Block Scope
console.log(blockVar);
console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a bock-scoped const";
}
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);

{
    var practiceVar = "Practice var variable";
    let practiceLet = "Practice let variable";
    const practiceConst = "Practice const variable";

    practiceVar = "practice Var within block";
    practiceLet = "practicing Let within block";
    practiceConst = "constant practice within block";    
}

console.log(practiceVar);
console.log(practiceLet);
console.log(practiceConst);