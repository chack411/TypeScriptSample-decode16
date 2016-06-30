"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var MS;
(function (MS) {
    class Employee {
        constructor(name) {
            this._name = name;
            this._jobLevel = 1;
            this._message = "YES!";
        }
        get Name() {
            return this._name;
        }
        Answer(quest) {
            let answer = "";
            for (let index = 0; index < 3; index++) {
                answer += (this._message + " ");
            }
            return answer;
        }
        Battle(labor) {
            let emp = labor;
            return (this._jobLevel >= emp._jobLevel) ? true : false;
        }
    }
    MS.Employee = Employee;
    class CEO extends Employee {
        constructor(name) {
            super(name);
            this._jobLevel = 10;
            this._message = "Linux!";
        }
    }
    MS.CEO = CEO;
})(MS || (MS = {}));
function doQuestion(quest, emp) {
    // var el = document.getElementById('content');
    // var div = document.createElement('div');
    // el.appendChild(div);
    // div.innerText = quest + " --- " + emp.Answer(q) + " by " + enp.name;
    var log = quest + " --- " + emp.Answer(quest) + " by " + emp.Name;
    console.log(log);
}
function doBattle(emp1, emp2) {
    // var el = document.getElementById('content');
    // var div = document.createElement('div');
    // el.appendChild(div);
    // var winner = p1.Battle(p2) ? p1.name : p2.name; 
    // div.innerText = p1.name + " vs. " + p2.name + " --- " + "Winner is " + winner;
    var winner = emp1.Battle(emp2) ? emp1.Name : emp2.Name;
    var log = emp1.Name + " vs. " + emp2.Name + " --- Winner is " + winner;
    console.log(log);
}
function doQuestions(emp, questions) {
    return __awaiter(this, void 0, void 0, function* () {
        for (var index in questions) {
            yield delay(3000);
            doQuestion(questions[index], emp);
        }
    });
}
function delay(msec) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(resolve, msec);
        });
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
//# sourceMappingURL=app.js.map