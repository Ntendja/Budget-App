const InputBudget = document.querySelector("#input_budget");
const ErrorMessage = document.querySelector("#error-message");
let BudgetShow = document.querySelector("#amount");
const ExpensiveTotal = document.querySelector("#expensive-total");
const BalanceAmount = document.querySelector("#balance-amount");

BudgetShow.addEventListener("click", calculate);

let BudgetValue = 0;

//input budget
function calculate() {
    BudgetValue = InputBudget.value;
    // empty or negative value test
    if (BudgetValue === "" || BudgetValue < 0) {
        ErrorMessage.classList.remove("hide");
    } else {
        ErrorMessage.classList.add("hide");

        //set budget
        BudgetShow.innerHTML = BudgetValue;
        //set balance
        BalanceAmount.innerHTML = BudgetValue - ExpensiveTotal.innerHTML;
    }

}


const ExpenseName = document.querySelector("#expense-name");
const ExpenseAmount = document.querySelector("#expense-amount");
const ErrorMessageRed = document.querySelector("#error-message-red");

let ExpensiveTitle = document.querySelector(".expensive-title");
let ExpensiveValue = document.querySelector(".expensive-value");

ExpensiveTitle.addEventListener("click", AddExpense);
ExpensiveValue.addEventListener("click", AddExpense);


// to contents expensive-list
const ListItems = {
    ItemsName: [],
    ListPrice: [],
};

function AddExpense() {
    //set expensive value
    ListItems.ListPrice = ExpenseAmount.value;
    // empty or negative value test
    if (ListItems.ListPrice === "" || ListItems.ListPrice < 0) {
        ErrorMessageRed.classList.remove("hide");
    } else {
        ErrorMessageRed.classList.add("hide");
        //set expensive amount
        ExpensiveValue.innerHTML = ListItems.ListPrice;
    }
    //set expensive name
    ListItems.ItemsName = ExpenseName.value;
    ExpensiveTitle.innerHTML = ListItems.ItemsName;


}

//create document

const CreateElement = (ExpensiveTitle, ExpensiveValue) => {
    let ParentDiv = document.createElement("div");
    ParentDiv.classList.add("sub-container");

    let FirstChildDiv = document.createElement("div");
    FirstChildDiv.innerHTML = `<p class="expensive-title form-list">${ExpensiveTitle}`;

    let SecondChildDiv = document.createElement("div");
    SecondChildDiv.innerHTML =`<p class="expensive-value  form-list"></p>${ExpensiveValue}`;

    let ThreeChildDiv = document.createElement("div");

    let EditButton = document.createElement("button");
    EditButton.classList.add("fa-solid", "fa-pen-to-square");
    EditButton.addEventListener("click", EditCheck);

    let DeleteButton = document.createElement("button");
    DeleteButton.classList.add("fa-solid", "fa-trash-can");
    DeleteButton.addEventListener("click", DeleteCheck);

    ThreeChildDiv.appendChild(EditButton);
    ThreeChildDiv.appendChild(DeleteButton);

    ParentDiv.appendChild(FirstChildDiv);
    ParentDiv.appendChild(SecondChildDiv);
    ParentDiv.appendChild(ThreeChildDiv);
    CreateElement.appendChild(ParentDiv);
}



