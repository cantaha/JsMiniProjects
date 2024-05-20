
let ingredients = [
    {
        productName: "milk",
        price: 10,
    },
    {
        productName: "water",
        price: 2,
    },
    {
        productName: "beef",
        price: 300,
    }
]

let message = `
Migros'a Hoşgeldiniz
Money kartınızı var ise onaylayınız`

let result = confirm(message)
let moneyPay;

if (result) {
    let name1 = prompt("Adınız: ")
    let surName = prompt("Soyadınız: ")

    const customer1 = new customer(name1, surName, result, ingredients)
    moneyPay = customer1.calc()
    alert(`Alışveriş toplamı ${moneyPay} lira`)
}
else {
    const customer2 = new customer("", "", false, ingredients)
    moneyPay = customer2.calc()
    alert(`Alışveriş toplamı ${moneyPay} lira`)
}


