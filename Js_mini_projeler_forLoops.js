for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + (i*j));
    }
    console.log("----------------")
}

// Asal sayi bulma

let sayi = Number(prompt("Bir sayı giriniz: "))

for (let x = 2; x <= Math.round(sayi/2); x++) { // Math modülü js içerisindeki matematik modülü. Round ise yuvarlama metodu.
    if (sayi%x === 0) {
        console.log("Asal sayi değildir")
        break;
    }
    else {
        console.log("Asal sayidir")
        break;
    }
}

// Fatöriyel Hesaplama

let sayi2 = Number(prompt("Bir sayi giriniz: "))
let i = 1;

for (i; sayi > 0; sayi--) {
    i *= sayi;
}

console.log(i)

// Armstrong Sayısı Bulma

let sayi3 = prompt("Bir sayi giriniz: ");
let total = 0;

for (let i = 0; i < sayi.length; i++) {
    let index = sayi[i];
    total+=index*index*index
}
if (Number(sayi) == total) {
        console.log(sayi + " = " + total)
        console.log("Armstrong sayısıdır")
    }
    else {
        console.log(sayi + " = " + total)
        console.log("Armstrong sayısı değildir")
    }