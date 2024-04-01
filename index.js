#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let remainingBalance;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin :",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select From The Given Options :",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawOption = await inquirer.prompt([
            {
                name: "option",
                message: "Enter or Select Withdrawal Amount  :",
                type: "list",
                choices: [2500, 5000, 7500, 10000, "Enter Amount"],
            },
        ]);
        if (withdrawOption.option === "Enter Amount") {
            let enterAmount = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Please Enter Withdrawal Amount :",
                    type: "number",
                },
            ]);
            if (enterAmount.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                remainingBalance = myBalance - enterAmount.amount;
                console.log("Your Remaining Balance Is :" + remainingBalance);
            }
        }
        else {
            remainingBalance = myBalance - withdrawOption.option;
            console.log("Your Remaining Balance Is :" + remainingBalance);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your Balance Is :" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code !");
}
