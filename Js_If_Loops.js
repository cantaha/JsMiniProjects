let not = 45;

if (not>50) {
    console.log("Pass")
    console.log("Your note: " + not)
}
else {
    console.log("loser")
}


let vize1 = Number(prompt("Vize1: "))
let vize2 = Number(prompt("Vize2: "))
let final = Number(prompt("Final: "))
let avg = (vize1*0.3)+(vize2*0.3)+(final*0.4)

if (avg >= 60) {
    console.log("Your Done!")
    console.log(avg)
}
else {
    console.log("loser")
    console.log(avg)
}

/* Çoklu if yapısı */

let isim = prompt("Adınız: ")
let tckn = prompt("Tc: ")

function check() {
    if (isim !== "") {
        if (tckn.length == 11) { // ".length" ifadesiyle bir değişkenin uzunluğuna ya da değer sayısına ulaşabiliriz.
            alert("Done")
        }
    }
    else {
        alert("bilgileri kontrol et")
    }
}

function check2(ad, tc) {
    if (ad == "") {
        console.log("Ad gir")
        if (tc.length != 11) {
            console.log("Tc'yi kontrol et")
    }
    }
    else {
        "Giriş başarılı"

    }
}

/* Beden Kitle Endeksi Hesaplama */

let weight = Number(prompt("Kilonuz: "))
let height = Number(prompt("Boyunuz (m cinsinden): "))

let result = weight / (height*2)

if (result <= 18.5) {
    console.log("BKİ: " + result + " ile ideal kilonun altında")
}
else if (result >= 18.5 && result <= 24.99) {
    console.log("BKİ: " + result + " ile ideal kiloda")
}
else if (result >=25 && result <= 29.99) {
    console.log("BKİ: " + result + " ile ideal kilonun üstünde")
}
else if (result >= 30 && result <= 39.99) {
    console.log("BKİ: " + result + " ile ideal kilonun çok üzerinde obez")
}
else if (result >= 40) {
    console.log("Yuh amk")
    console.log("BKİ: " + result + " ile morbid obez")
}

// Swicth Case

let sayi = prompt("Bir değer gir: ");

switch (sayi) {
    case "1" :
        console.log("1")
        break;
    case "2" :
        console.log("2")
        break;
    case "3" :
        console.log("3")
        break;
    case "4" :
        console.log("4")
        break;
    case "5" :
        console.log("5")
        break;
    default:
        console.log("Yanlış Sayı")
        break;
}

// atm mini proje

let newLine = "\n"
let balance = 1000;

let process = "1-Bakiye Görüntüleme"+newLine
+"2-Para Çekme"+newLine+"3-Para Yatırma"+newLine+
    "4-Çıkış"+newLine+"Seçim: ";
let choise = prompt(process);

switch (choise) {
 case "1":
     console.log(balance)
     break;
 case "2":
     let getMoney = Number(prompt("Çekilecek tutar: "));
     if (getMoney<=balance) {
        balance -= getMoney
        console.log("Kalan tutar: " + balance)
     }
     else {
         console.log("Bakiye yeterli değil!")
     }
     break;
 case "3":
     let giveMoney = Number(prompt("Yatırılacak tutar: "));
     balance += giveMoney
     console.log("Yeni miktar: " + balance)
     break;
 case "4":
     console.log("İşlem sonlandırıldı.")
     break;
 default:
     console.log("Hata")
     break;
}


