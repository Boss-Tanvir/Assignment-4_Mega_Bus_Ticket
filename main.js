
document.getElementById('first_class_increase').addEventListener('click', function () {
    firstClassticketRate(true)
})

document.getElementById('first_class_decrease').addEventListener('click', function () {
    firstClassticketRate(false)
})


function firstClassticketRate(isIncrease) {

        let firstClassInput = document.getElementById('first_class_input_count')
        let firstClassNumber = parseInt(firstClassInput.value)
        let firstClassNumberCount = firstClassNumber
        if (isIncrease == true) {
            firstClassNumberCount = firstClassNumber + 1          
        }
if(isIncrease == false && firstClassNumber > 0){
    firstClassNumberCount = firstClassNumber - 1
}
                 
        firstClassInput.value = firstClassNumberCount   
        let firstClassTotal = firstClassNumberCount * 150
       
        document.getElementById('totalPrice').innerText = firstClassTotal
        calculateTotal()
    
}







document.getElementById('economy_class_increase').addEventListener('click', function () {
    let economyClassInput = document.getElementById('economy_class_input_count')
    let economyClassNumber = parseInt(economyClassInput.value)
    let economyClassNumberCount2 = economyClassNumber + 1
    economyClassInput.value = economyClassNumberCount2  
    let economyClassTotal = economyClassNumberCount2 * 100
    document.getElementById('totalPrice').innerText = economyClassTotal

    calculateTotal()
})


document.getElementById('economy_class_dcrease').addEventListener('click', function () {
    let economyClassInput = document.getElementById('economy_class_input_count')
    let economyClassNumber = parseInt(economyClassInput.value)
    let economyClassNumberCount2= economyClassNumber - 1
    economyClassInput.value = economyClassNumberCount2  
    let economyClassTotal = economyClassNumberCount2 * 100
    document.getElementById('totalPrice').innerText = economyClassTotal

    calculateTotal()
})


function calculateTotal() {
    let allClassCost = document.getElementById('first_class_input_count')
    let allClassCostNumber = parseInt(allClassCost.value)

    let ecomomyClassCost = document.getElementById('economy_class_input_count')
    let economyClassCostNumber = parseInt(ecomomyClassCost.value)


    let total = allClassCostNumber * 150 + economyClassCostNumber * 100

    document.getElementById('totalPrice').innerText = total

    let tax = total * 0.1

    document.getElementById('tax_amount').innerText = tax
    
    let grandTotal = total + tax
     document.getElementById('grand_total').innerText = grandTotal
}





