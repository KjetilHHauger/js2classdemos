// Why do I care about typescript

// let num : number = 4;
// let word = "five";

// console.log(num + word); // Ends up as "4Five"

// function add(num1, num2) {
//     return num1 + num2
// }

// add(5,[]) // Even tough its wrong there is nothing stopping us from trying to add number and array together



class Duck {
    #id : number;
    #name : string;
    nickName : string;

    constructor (id:number, name:string, nickName:string) {
        this.#id = id;
        this.#name = name;
        this.nickName = nickName;
    }

    Quack() {

    }
}

const duck2 = new Duck(1,"Jimmy", "JimDawg")

function processDuck(duckObj:Duck) {
    duckObj.Quack()
    console.log(duckObj.nickName)
}

processDuck(duck2)