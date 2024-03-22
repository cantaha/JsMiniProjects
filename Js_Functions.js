// TODO call, apply, bind


function cube(x) {
    let result = x*x*x;
    return result;
}

console.log(cube(2))

// Burada önemli not; "return" burada fonksiyon scope'unu global olarak çağırmak için kullanılır.
// Daha önce python çalışırken çalışma mantığını anlamadığımı farkettim.
// Çünkü return, print gibi consola ya da ekrana döndürmez.
// Ama sen örnek olarak bir fonksiyonda, fonksiyonu çağırırken aynı zamanda bir değere atarsan,
// örn; let x = cube(1)
// Bu şekilde return sana değeri ekrana yazdırabilme fırsatı vermiş olur.
// Ayrıca diğer bir konu ise, return yazdıktan sonra, fonksiyona yazdığın hiç bir kod çalışmaz.
// Fonksiyon tooltip'lerinde eğer void görüyorsan, void geriye bir değer döndürmüyor olduğu, yani return kullanılmadığı anlamına gelir.

// harf sayısı bulma

let text = "Çünkü return, print gibi consola ya da ekrana döndürmez."
// let letter = prompt("bir harf giriniz: ")

function search(l) {
    let total = 0;
    for (let i = 0; i<text.length; i++)
        if (text[i].toLowerCase() === letter.toLowerCase()) { //küçük harfe çevirirsek büyük-küçük duyarlılığı ortadan kalkar. 
            total+=1
        }
        return total;
}


// Mükemmel Sayı Uygulaması

function perNum(x) {
    let total = 0;
    for (let i = 2; i<=x/2; i++){ 
        if (x%i === 0) {
            total+=i;
        }
    }
    total+=1+x;
    if (total === x*2) {
        console.log("mükemmel sayı");
        console.log(total);
        console.log(x);
    }
    else {
        console.log("mükemmel sayı değil")
        console.log(total)
        console.log(x)
    }
}

// Decimal to binary dönüştürme 

// binary, "010101010101" gibi makine sayılarıdır.

function convertToBinary(num) {
    let binary = "";
    while (true) {
        binary = (num%2).toString() + binary;
        num = Math.floor(num/2);
        if (num == 1) {
            binary = 1 + binary;
            break;
        }
    }
    return binary;
}

// Binary to decimal

let binary = "10010000"

function convertToDecimal() {
    let total = 0;
    let pow = 0;
    for (let i = binary.length-1; i>=0; i--) {
        total+= Number(binary[i]*Math.pow(2,pow));
        pow++;
    }
    console.log(total)
}

convertToDecimal(binary)