/* obje oluşturma */

let info = {
    name : "taha",
    surname : "can",
    age : 32
}

console.log(info)
console.log(info.name) /* obje içerisindeki bir değişkene objenin adını yazdıp daha sonra nokta koyarak,
değişkeni adını yazıp ulaşabiliriz. */

/* array ise liste gibi düşünülebilir. Her tip elemanı barındırabilir.
* Aşağıdaki örnekte olduğu gibi birden çok obje eklenebilir. */
let array = [
    {
        name : "taha",
        surname : "can",
        age : 32
    },
    {
        name : "merve",
        surname : "can",
        age : 31
    }
]

console.log(array)
console.log(array[0].name)
console.log(array[0].age)
console.log(array[1].name)

/* Görüldüğü üzere index ile array içerisindeki objenin bir değişkenine bu şekilde ulaşıyoruz. */

/* Fonksiyonlar */

function func1() {
    console.log("taha deneme")
    document.writeln("function works")
}

function func2() {
    const p = document.getElementById("p")
    p.innerText = "Function works"
}

/* Farklı bir fonksiyon oluşturma örneği */

const func3 = () => {
    document.writeln("Function Works")
}

let sayi1 = 20;
let sayi2 = 10;

const sum = (num1, num2) => {
    let result = num1 + num2
    return result
}

let res = sum(sayi1,sayi2)
console.log(res)

