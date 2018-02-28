/*eslint-env browser*/

//user defined function
function displayMenu() {
    "use strict";
    window.console.log("Welcome to the employee management application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - show all employees");
    window.console.log("add - add an employee");
    window.console.log("del - delete an employee");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function show(employeelist) {
    "use strict";
    var i = 1;
    //call back function, employee a perameter
    employeelist.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        //loop
        i += 1;
    });
    window.console.log("");
}
function add(employeelist) {
    "use strict";
    var employee = window.prompt("Enter the employee's name");
    //use push method to quickly add item to array
    employeelist.push(employee);
    window.console.log(employee + " was added.");
    window.console.log("");
}
function del(employeelist) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if (num < 1 || num > employeelist.length) {
        window.alert("Invalid employee number");
    } else {
        employee = employeelist.splice(num - 1, 1);
        window.console.log(employee + " was deleted.");
    }
}
function main() {
    "use strict";
    var employeelist, command;
    displayMenu();
    
    employeelist = ["Zak Ruvalcaba", "Sally Smith", "Fred Franklin", "John Smith", "Jane Curuthers"];
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                show(employeelist);//show method
            } else if (command === "add") {
                add(employeelist);//add method
            } else if (command === "del") {
                del(employeelist);//del method
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Command is not valid");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();
