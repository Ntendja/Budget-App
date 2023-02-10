//set budget form1

let Budget = 0;
const GetBudgetButton = document.querySelector("#get-budget-button");
const AmountBudget = document.querySelector("#amount-budget");
let BalanceAmount = document.querySelector("#balance-amount");


let ErrorMessage = document.querySelector(".error-message");

GetBudgetButton.addEventListener("click", () => {
    const InputBudget = document.querySelector("#input_budget");
    Budget = `$${+InputBudget.value}`;

    if (Budget === 0 || Budget < 0) {
        ErrorMessage.classList.remove("hide");
    } else {
        ErrorMessage.classList.add("hide");
    }
    AmountBudget.innerHTML = Budget;
    // console.log(Budget);
})

// set Expense list form2

let Expense = [];

const AddExpense = document.querySelector(".add-expense");

AddExpense.addEventListener("click", () => {
    let ExpenseName = document.querySelector("#expense-name");
    let ExpenseAmount = document.querySelector("#expense-amount");
    Expense.push({name: ExpenseName.value, value: +ExpenseAmount.value});

    ExpenseName.value = "";
    ExpenseAmount.value = "";
    deployList();
})


// create Element
const deployList = () => {
    const ParentDiv = document.querySelector(".parent-div");
    ParentDiv.innerHTML = "";
    let sum = 0;
    //forEach
    Expense.forEach(items => {

        const p_first = document.createElement("p");
        p_first.classList.add("item-title", "form-list");
        const node_1 = document.createTextNode(items.name);
        p_first.appendChild(node_1);

        const p_second = document.createElement("p");
        p_second.classList.add("item-title", "form-list");
        const node_2 = document.createTextNode(`$${items.value}`);
        p_second.appendChild(node_2);

        const div_child = document.createElement("div");

        //edit_btn
        const edit_btn = document.createElement("button");
        edit_btn.classList.add("fa-solid", "fa-pen-to-square");
        edit_btn.id = "edit-button";

        //delete_btn
        const delete_btn = document.createElement("button");
        delete_btn.classList.add("fa-solid", "fa-trash-can");
        delete_btn.id = "delete-button";

        div_child.appendChild(edit_btn);
        div_child.appendChild(delete_btn);


        ParentDiv.appendChild(p_first);
        ParentDiv.appendChild(p_second);
        ParentDiv.appendChild(div_child);
    })


    //Expense Sum split with Map() method

    Expense.map(items => {
        sum += items.value;
    });
    const ExpensiveTotal = document.querySelector("#expensive-total");
    ExpensiveTotal.innerHTML = `$${sum}`;

    // Balance show

   // const balanceTotal = Budget - sum;
   // BalanceAmount.innerHTML = balanceTotal;
}



































