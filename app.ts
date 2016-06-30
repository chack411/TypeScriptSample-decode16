"use strict"

interface Labor {
    Answer: (quest: string) => string;
    Battle: (labor: Labor) => boolean;
}

namespace MS {
    export class Employee implements Labor {

        protected _name: string;
        protected _jobLevel: number;
        protected _message: string;

        public get Name(): string {
            return this._name;
        }

        constructor(name: string) {
            this._name = name;
            this._jobLevel = 1;
            this._message = "YES!";    
        }

        Answer(quest: string): string {
            let answer = "";
            for (let index = 0; index < 3; index++) {
                answer += (this._message + " ");
            }
            return answer;
        }

        Battle(labor: Labor): boolean {
            let emp = <Employee>labor;
            return (this._jobLevel >= emp._jobLevel) ? true : false; 
        }
    }
    
    export class CEO extends Employee {
        constructor(name: string) {
            super(name);
            this._jobLevel = 10;
            this._message = "Linux!";
        }
    }
    
    // export class EVP extends CEO {
    //     constructor(name: string) {
    //         super(name);
    //         this._jobLevel = 9;
    //         this._message = "Red!";
    //     }
    // }
}

function doQuestion(quest: string, emp: MS.Employee) {
    // var el = document.getElementById('content');
    // var div = document.createElement('div');
    // el.appendChild(div);
    // div.innerText = quest + " --- " + emp.Answer(q) + " by " + enp.name;
    var log = quest + " --- " + emp.Answer(quest) + " by " + emp.Name;   
    console.log(log);
}

function doBattle(emp1: MS.Employee, emp2: MS.Employee) {
    // var el = document.getElementById('content');
    // var div = document.createElement('div');
    // el.appendChild(div);
    // var winner = p1.Battle(p2) ? p1.name : p2.name; 
    // div.innerText = p1.name + " vs. " + p2.name + " --- " + "Winner is " + winner;
    var winner = emp1.Battle(emp2) ? emp1.Name : emp2.Name; 
    var log = emp1.Name + " vs. " + emp2.Name + " --- Winner is " + winner;
    console.log(log);
}

async function doQuestions(emp: MS.Employee, questions: string[]) {
    for (var index in questions) {
        await delay(3000);
        doQuestion(questions[index], emp);
    }
}

async function delay(msec: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, msec);
    });
}

(function () {
    var chack = new MS.Employee("Akira");
    var satya = new MS.CEO("Satya");
    //var scott = new MS.EVP("ScottGu");
    
    doQuestion("Love??", satya);
    doQuestion("Work?", chack);
    // doQuestion("Shirt?", scott);
    
    //chack.jobLevel = 1000;
    doBattle(chack, satya);
    // doBattle(chack, scott);
    // doBattle(satya, scott);
    
    doQuestions(chack, ["Work", "Sing", "NO sleep", "NO rest", "NO salary", "You are fired!"]).then(() => {
        console.log("Bye!!"); 
    });
})();