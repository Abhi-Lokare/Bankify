class UI {
    constructor() {
    }
    getUiData(banks) {
        const UiDataHolder = document.querySelector('.x')
        let output = ``

        banks.forEach(function (bank) {
            output += `
            <tr>
                 <td>${bank.BANK}</td>
                 <td>${bank.BRANCH}</td>
                 <td>${bank.CITY}</td>
                 <td>${bank.IFSC}</td>
            </tr>
                  `
        })
        UiDataHolder.innerHTML = output
    }
}