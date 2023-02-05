/*function calculate() {


    let EnterBudget = document.getElementById("enter_budget");

    document.querySelector("#amount").innerHTML = EnterBudget.value;


}*/

const EnterBudget = document.querySelector("#enter_budget");
const ErrorMessage = document.querySelector("#error-message");
let BudgetShow = document.querySelector("#amount");

BudgetShow.addEventListener("click", calculate);

let BudgetValue = 0;

//input budget
 function calculate(){
    BudgetValue = EnterBudget.value;
    if (BudgetValue === "" || BudgetValue < 0){
        ErrorMessage.classList.remove("hide");
    } else {
        ErrorMessage.classList.add("hide");

        //set budget
        BudgetShow.innerHTML = BudgetValue;
    }

}

const ExpenseName = document.querySelector("#expense-name");
 const ExpenseAmount = document.querySelector("#expense-amount");

 let ExpensiveList = document.querySelector(".expensive-list");
 let CostValue = document.querySelector(".cost-value");

 ExpensiveList.addEventListener("click", AddExpense);
 CostValue.addEventListener("click", AddExpense);

 let ExpensiveValue = 0;
 let ListName = [];

 function AddExpense (){
     //set expensive value
     ExpensiveValue = ExpenseAmount.value;
     if(ExpensiveValue === "" || ExpensiveValue < 0){
         ErrorMessage.classList.remove("hide");
     } else {
         ErrorMessage.classList.add("hide");
         CostValue.innerHTML = ExpensiveValue;
     }
     ListName = ExpenseName.value;
     ExpensiveList.innerHTML = ListName;

 }




// create Element list
/*let ParentDiv = document.createElement("div");
 let FirstChildDiv = document.createElement("div");
 let ul = document.createElement("ul");
 let li = document.createElement("li");

*/
