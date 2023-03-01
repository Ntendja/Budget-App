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

calculate_btn.addEventListener("click", GetBudgetButton, false);
add_expense_btn.addEventListener("click", AddExpense, false);

// set parameter

const Parameters = {
    budget_amount : 0,
    expense_amount : 0,
    balance : 0,
    expense : []
};


// setting GetBudgetButton function

function GetBudgetButton(){
    if (input_budget.value === "" || input_budget.value <= 0){
        error_message.classList.add("hide");
    } else{
        error_message.classList.remove("hide");
        calculate_btn(false);
    }
}

// setting AddExpense function
function AddExpense() {
    if (input_ExpenseName.value === "" || input_ExpenseAmount.value === "" ){
        error_message.classList.add("hide");
    } else {
        error_message.classList.remove("hide");
        Parameters.expense.push({
            title: input_ExpenseName.value,
            value: input_ExpenseAmount.value
        });
        calculate_btn(true);
    }

}



