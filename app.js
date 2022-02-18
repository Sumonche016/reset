// initialization of variables
var totalCost, foodCost, rentCost, clothsCost, income, currentBalance, nanTag, positiveText;

// this for number Validation error

nanTag = document.getElementById('NaN-error');

function numberValidation(inputValue) {
    if (inputValue == '' || isNaN(inputValue)) {
        nanTag.classList.remove('hidden');

    } else {
        nanTag.classList.add('hidden');


    }

}


// positive validation 

positiveText = document.getElementById('positive-text')

function positiveCheck(inputName) {
    if (inputName < 0) {
        positiveText.classList.remove('hidden')
        return true;
    } else {
        positiveText.classList.add('hidden')
        totalCost = foodCost + rentCost + clothsCost;
        return false;
    }
}



document.getElementById('btn-calc').addEventListener('click', function() {
    nanTag = document.getElementById('NaN-error');

    // select the tag 
    let foodtag = document.getElementById('food-cost');
    let renttag = document.getElementById('rent-cost');
    let clothstag = document.getElementById('cloths-cost');

    // value 
    var foodValue = foodtag.value;
    var rentValue = renttag.value;
    var clothsValue = clothstag.value;
    numberValidation(clothsValue);


    // parse  
    foodCost = parseInt(foodValue)
    rentCost = parseInt(rentValue)
    clothsCost = parseInt(clothsValue)

    //error handle
    positiveCheck(clothsCost);
    positiveCheck(foodCost);
    positiveCheck(rentCost);



    // display total expense

    var totalExpenseTag = document.getElementById('expense')

    totalExpenseTag.innerText = totalCost;
    totalCost = totalExpenseTag.innerText

    numberValidation(totalCost)


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
    } else if (currentBalance < 0) {
        document.getElementById('extravagant-error').classList.remove('hidden');
    }
    // console.log(positiveText)


})


// saving btn

document.getElementById('save-btn').addEventListener('click', function() {

    var saveTag = document.getElementById('save-input')
    var saveValue = saveTag.value;

    numberValidation(saveValue);

    var savePercent = parseInt(saveValue)

    positiveCheck(savePercent)
    var saveMoney = income / savePercent;

    var savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = saveMoney;

    // update remaing balance

    var remainbalance = document.getElementById('remain-balance')
    remainbalance.innerText = currentBalance - saveMoney;

})