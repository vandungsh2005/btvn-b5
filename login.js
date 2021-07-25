localStorage.setItem("data", JSON.stringtify([]))
let btnPopUp = document.getElementById('btn-popup');
btnPopUp.addEventListener('click', function () {
    let data = JSON.parse(localStorage.getItem("data"))
    let item = {
        name: "headphone",
        quantity: 1,
        price: "5.5$"
    }
    data.push(item)
    localStorage.setItem("data", JSON.stringtify(data))
})