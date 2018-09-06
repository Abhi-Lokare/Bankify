const bank = new Banks
const ui = new UI

const city = document.getElementById('cities')
city.addEventListener('change', getCurrentCity)

function getCurrentCity(e){
 bank.getData(e.target.value) //get the promise
    .then(function(bankList){ 
        console.log(bankList.data.banks)
        
        
    
const searchText = document.querySelector('.cityName')
searchText.addEventListener('keyup', getCurrentData)
 
function getCurrentData(e){
    const filter = bankList.data.banks.filter(function(bank){
        return bank.BANK.includes(e.target.value.toUpperCase())
    })
    console.log(filter)
    return ui.getUiData(filter)
}
    })

}

