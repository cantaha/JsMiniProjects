/*Çıktılar*/

/* Scope
*
* Global Scope = Heryerden erişilebilir değişkenler
* Function Scope = Süslü parantez içinde tanımlanan değişkenler. Yalnızca süslü parantez içerisinden erişilebilir.
* Block Scope = Süslü parantez içerisine açılan süslü parantezlerin içerisinde tanımlanan değişkenler. Yalnızca tanımladığı konumdan erişilebilir. */

var example = "example" // global scope.
function example1() {
    var example = "example" // function scope. Önemli not: var ile tanımlanan değişken block scope olarak tanımlansa dahi function scope gibi erişilebilir.
    if (true) {
        let example3 = "example" // block scope. bir fonksiyon süslü parantezi içerisinde yine bir döngü süslü parantezinin de içerisinde tanımlanmış değişken.
        var example2 = "example" // normalde block scope olması gerek fakat "var" ile tanımlanması sebebiyle function scope. Bu sebeple ram bellekte fazla yer kaplar.
    }
}

/* Veri Tipleri */

let a = null; /* Boş yerine kullanılır. Değişkene daha sonra değer atanabilir. */
let a; /* undefined tanımlanmamış veri tipi demektir. Değişkene veri atanmadığı zaman bu veri tipi ile adlandırırız. */

console.log("Console Log")
// alert("alert")
document.writeln("document wright")
document.writeln("document wrigt 2")
function degisim() {
    document.getElementById("js").innerHTML = "yeni deneme"
}

/* const ile oluşturulan değişkenler değiştirilemez */
const name = "taha"
console.log(name)

let num1 = 10;
let num2 = 5;

let result = num1 + num2
document.writeln(result)
console.log(result)

result2 = num1%num2;
console.log(result2) /* yüzde işareti ile kullanılan işlem "kalan". bir sayının bir sayıya bölümünde kalanı gösterir. */
console.log(typeof result + "// result değişkeni")
console.log(typeof name + "// name değişkeni") /* js ile değişkenin tipini "typeof" kullanarak öğreniriz. */
 let num3 = "10"
console.log(num1 + Number(num3)) /* "Number" metodunu kullanarak değişkenleri number'a dönüştürebiliriz. */

/* "===" üç adet eşittir kullanarak tip (type) eşitliğini kontrol ederiz fakat "==" iki adet eşittir kullanarak tip gözetmeksizin,
* içeriğin / değerin eşit olup olmadığını kontrol edebiliriz. */
console.log(num1 === num3)
console.log(num1 == num3)

/* yukarıdaki ifadenin tam tersi olarak "!==" ünlem ve iki adet eşittir işareti kullanarak tip ile eşit olmadığını,
* aynı zamanda "!=" ünlem ve tek eşittir işareti kullanarak tip gözetmeksizin eşit olmadığını kontrol ederiz. */

console.log(num1 !== num3)
console.log(num1 != num3)

console.log("satır")

let a = true
let b = false

console.log(a && b) /* "&&" "ve" olarak kullanılır. İki değişken de aynı sonucu veriyorsa true, farklı sonuç veriyorlar ise false döner. */
console.log(a || b) /* "||" "veya" kavramı. Yalnızca biri true ise true sonucunu verir. */

console.info("info deneme")
console.warn("warn deneme")
console.error("error deneme")
console.clear() // tüm consolu temizler.


// "++" ya da "--" 1 arttır ya da 1 eksilt demek için kullanılır.
let a = 5;
a++
console.log(a)
a--;

// ** ise sayının üstünü almak için kullanılır

let b = 5
console.log(b**2)

// diyalog kutuları

alert("alert deneme") /* Yalnızca göndermek istediğin uyarının çıktısını verir*/
confirm("confirm deneme") /* Alertten farklı olarak geri bildirim şansı verir. Daha çok kullanıcıya yöneltilen bir soru gibi düşünülebilir
örn; mail listesine kaydolmak istermisin? evet ya da hayır gibi*/

prompt("prompt deneme") /* Kullanıcıdan bilgi almak için kullanılır. Alınan veri daha sonra bir değişkene atanabilir. Kullanıcıdan alınan değerler her zaman string döner */