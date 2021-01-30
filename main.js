// // Fist class event Handaler

// document.getElementById('first_class_increase').addEventListener('click', function () {
//     let firstClassInput = document.getElementById('first_class_input_count')
//     let firstClassNumber = parseInt(firstClassInput.value)
//     let firstClassNumberCount = firstClassNumber + 1
//     firstClassInput.value = firstClassNumberCount   
//     let firstClassTotal = firstClassNumberCount * 150
//     document.getElementById('totalPrice').innerText = firstClassTotal
// })



// document.getElementById('first_class_decrease').addEventListener('click', function () {
//     let firstClassInput = document.getElementById('first_class_input_count')
//     let firstClassNumber = parseInt(firstClassInput.value)
//     let firstClassNumberCount = firstClassNumber - 1
//     firstClassInput.value = firstClassNumberCount   
//     let firstClassTotal = firstClassNumberCount * 150
//     document.getElementById('totalPrice').innerText = firstClassTotal
// })


document.getElementById('first_class_increase').addEventListener('click', function () {
ticketRate(true)
})

document.getElementById('first_class_decrease').addEventListener('click', function () {
    ticketRate(false)
})






function ticketRate(isIncrease) {

        let firstClassInput = document.getElementById('first_class_input_count')
        let firstClassNumber = parseInt(firstClassInput.value)
        let firstClassNumberCount = firstClassNumber
        if (isIncrease == true) {
            firstClassNumberCount = firstClassNumber + 1
            
        }
if(isIncrease == false && firstClassNumber > 0){
    firstClassNumberCount = firstClassNumber - 1
}
          
        // let firstClassNumberCount = firstClassNumber - 1
        firstClassInput.value = firstClassNumberCount   
        let firstClassTotal = firstClassNumberCount * 150
       
        document.getElementById('totalPrice').innerText = firstClassTotal

        calculateTotal()
    
}



// document.getElementById('economy_class_increase').addEventListener('click', function () {
//     ticketRate2(true)
//     })
    
//     document.getElementById('economy_class_dcrease').addEventListener('click', function () {
//         ticketRate2(false)
//     })



// function ticketRate2(isIncrease) {

//     let firstClassInput = document.getElementById('economy_class_input_count')
//     let firstClassNumber = parseInt(firstClassInput.value)
//     let firstClassNumberCount = firstClassNumber
//     if (isIncrease == true) {
//         firstClassNumberCount = firstClassNumber + 1
        
//     }
// if(isIncrease == false && firstClassNumber > 0){
// firstClassNumberCount = firstClassNumber - 1
// }
      
//     // let firstClassNumberCount = firstClassNumber - 1
//     firstClassInput.value = firstClassNumberCount   
//     let firstClassTotal = firstClassNumberCount * 100
   
//     document.getElementById('totalprice').innerHTML = firstClassTotal

// }






document.getElementById('economy_class_increase').addEventListener('click', function () {
    let firstClassInput = document.getElementById('economy_class_input_count')
    let firstClassNumber = parseInt(firstClassInput.value)
    let firstClassNumberCount2 = firstClassNumber + 1
    firstClassInput.value = firstClassNumberCount2  
    let firstClassTotal = firstClassNumberCount2 * 100
    document.getElementById('totalPrice').innerText = firstClassTotal

    calculateTotal()
})


document.getElementById('economy_class_dcrease').addEventListener('click', function () {
    let firstClassInput = document.getElementById('economy_class_input_count')
    let firstClassNumber = parseInt(firstClassInput.value)
    let firstClassNumberCount2= firstClassNumber - 1
    firstClassInput.value = firstClassNumberCount2  
    let firstClassTotal = firstClassNumberCount2 * 100
    document.getElementById('totalPrice').innerText = firstClassTotal

    calculateTotal()
})


function calculateTotal() {
    let firstClassCost = document.getElementById('first_class_input_count')
    let firstClassCostNumber = parseInt(firstClassCost.value)

    let ecomomyClassCost = document.getElementById('economy_class_input_count')
    let economyClassCostNumber = parseInt(ecomomyClassCost.value)


    let total = firstClassCostNumber * 150 + economyClassCostNumber * 100

    document.getElementById('totalPrice').innerText = total

    let tax = total * 0.1

    document.getElementById('tax_amount').innerText = tax
    
    let grandTotal = total + tax
     document.getElementById('grand_total').innerText = grandTotal
}





