var totalCost, foodCost, rentCost, clothsCost, income, currentBalance;



// error function 
function errorMessege(errorType) {
    var errorElement = document.getElementById(errorType + '-error')
    errorElement.classList.remove('hidden');
}


function numberValidation(inputName) {
    if (true || inputName == '' || isNaN(inputName)) {
        errorMessege('NaN')
    }
    return false
}






document.getElementById('btn-calc').addEventListener('click', function() {

    let foodtag = document.getElementById('food-cost');
    let renttag = document.getElementById('rent-cost');
    let clothstag = document.getElementById('cloths-cost');

    // value 
    var foodValue = foodtag.value;
    var rentValue = renttag.value;
    var clothsValue = clothstag.value;

    // parse  
    foodCost = parseInt(foodValue)
    rentCost = parseInt(rentValue)
    clothsCost = parseInt(clothsValue)
    totalCost = foodCost + rentCost + clothsCost;

    // display total expense

    var totalExpenseTag = document.getElementById('expense')

    totalExpenseTag.innerText = totalCost;


    // update balance 
    var incomeTag = document.getElementById('total-income');
    var incomeValue = incomeTag.value;
    income = parseInt(incomeValue);
    currentBalance = income - totalCost;


    // error handle for negative balance 

    if (currentBalance > 0) {
        document.getElementById('extravagant-error').classList.add('hidden');
        var balanceTag = document.getElementById('total-balance');
        balanceTag.innerText = currentBalance;
    } else {
        document.getElementById('extravagant-error').classList.remove('hidden');


    }








})



// saving btn

document.getElementById('save-btn').addEventListener('click', function() {

    var saveTag = document.getElementById('save-input')
    var saveValue = saveTag.value;
    var savePercent = parseInt(saveValue)
    var saveMoney = income / savePercent;



    var savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = saveMoney;

    // update remaing balance

    var remainbalance = document.getElementById('remain-balance')
    remainbalance.innerText = currentBalance - saveMoney;

})