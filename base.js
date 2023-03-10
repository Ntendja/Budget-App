//set input

const input_budget = document.querySelector("#input-budget");
const input_ExpenseName = document.querySelector("#input-expenseName");
const input_ExpenseAmount = document.querySelector("#input-expense-amount");

//set button

const calculate_btn = document.querySelector("#calculate");
const add_expense_btn = document.querySelector("#add-expense");

//set Budget - expense - balance

const budget_value = document.querySelector("#budget-value");
const expensive_total = document.querySelector("#expensive-total");
const balance_amount = document.querySelector("#balance-amount");

//set error-message
const error_message = document.querySelector(".error-message");

//set addEventListener

calculate_btn.addEventListener("click", GetBudget, false);
add_expense_btn.addEventListener("click", AddExpense, false);

// set parameter

const Parameters = {
    budget_amount : 0,
    expense_amount : 0,
    balance : 0,
    expense : []
};


// setting GetBudgetButton function
function GetBudget(){
    if (input_budget.value === "" || input_budget.value <= 0){
        error_message.classList.add("hide");
    } else{
        error_message.classList.remove("hide");
        Calculate_amount(false);
    }
}

// setting AddExpense function
function AddExpense() {
    if (input_ExpenseName.value === "" || input_ExpenseAmount.value === "" ){
        error_message.classList.remove("hide");
    } else {
        error_message.classList.add("hide");
        Parameters.expense.push({
            title: input_ExpenseName.value,
            value: input_ExpenseAmount.value
        });
        Calculate_amount(true);
    }
}

//setting Calculate_amount
function Calculate_amount(bool){
    if (!bool){
        Parameters.budget_amount = input_budget.value;
    }
    Parameters.expense_amount = GetExpenseTotal();
    Parameters.balance = Parameters.budget_amount - Parameters.expense_amount
    ShowValue();
}

//calculate Total Expense
function GetExpenseTotal(){
    let sum = 0;
    Parameters.expense.map(items =>{
        sum += items.value;
    })
}

// show value of Dom

function ShowValue(){
    budget_value.innerHTML = `$${Parameters.budget_amount}`;
    expensive_total.innerHTML = `$${Parameters.expense_amount}`;
    balance_amount.innerHTML = `$${Parameters.balance}`;

    // clean the Dom after setting value
    input_budget.value = "";
    input_ExpenseName.value = "";
     input_ExpenseAmount.value = "";

    DeployList();
}

//create Element

const DeployList = () => {
    let ParentDiv = document.querySelector(".parent-div");
    ParentDiv.innerHTML = "";

    //forEach

    Parameters.expense.forEach(items => {

        const p_first = document.createElement("p");
        p_first.classList.add("item-title", "form-list");
        const node_1 = document.createTextNode(`- ${items.title}`);
        p_first.appendChild(node_1);

        const p_second = document.createElement("p");
        p_second.classList.add("item-value", "form-list");
        const node_2 = document.createTextNode(`$${items.value}`);
        p_second.appendChild(node_2);

        const div_child = document.createElement("div");

        //edit_btn
        const edit_btn = document.createElement("button");
        edit_btn.classList.add("fa-solid", "fa-pen-to-square");
        edit_btn.style.fontSize = "1em";
        edit_btn.id = "edit-button";

        //delete_btn
        const delete_btn = document.createElement("button");
        delete_btn.classList.add("fa-solid", "fa-trash-can");
        delete_btn.style.fontSize = "1em";
        delete_btn.id = "delete-button";


        div_child.appendChild(edit_btn);
        div_child.appendChild(delete_btn);
        ParentDiv.appendChild(p_first);
        ParentDiv.appendChild(p_second);
        ParentDiv.appendChild(div_child);
    })
}






