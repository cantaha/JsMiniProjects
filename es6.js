// ? Arrow Function

const example = () => console.log("example") 

// console.log(example)

// example()

const welcome = (firstName) => {console.log(`Merhaba ${firstName}`)}

// welcome("Taha")

/* Eğer arrow func kullanılarak oluşturulan bir fonksiyon tek satırdan oluşuyor ise
kvırıcık parantez olmak zorunda değil. Ayrıca eğer tek bir parametre alıyor ise de parantez kullanılmak zorunda değil.  */

const print = age => console.log(`Taha's Age: ${age}`)

// print(32)

/* Eğer tek satır ile yalnızca return kullanılıyorsa, return yazmak zorunda da değiliz. */

const cube = x => x*x*x

console.log(cube(3))


// ? Destructuring

let langs = ["c+", "python", "js", "c#"]

// let lang1, lang2, lang3, lang4; 

// lang1 = langs[0]
// lang2 = langs[1]
// lang3 = langs[2]
// lang4 = langs[3]

/* eski kullanım tarzı fakat destructuring ile böyle yapılmıyor. örnek aşağıda  */

let [lang1, lang2, lang3, lang4] = langs /* destructuring ile kullanımı */

console.log(lang1, lang2, lang3, lang4) 



const calculate = (a,b) => {
    const result = [a+b, a-b, a*b, a/b]
    return result
}

let [add, sub, mul, div] = calculate(10, 5)

console.log(add)
console.log(sub)
console.log(mul)
console.log(div)

// const person = {
//     name: "Taha",
//     lastName: "Can",
//     age: 32}

// let {name, lastName, age} = person

// console.log(name, lastName, age)

// ? Spread Operator

let numbers = [10,20,30,40]

function calc(a,b,c,d) {
    console.log(a+b+c+d)
}

// eski yöntem
calc(numbers[0],numbers[1],numbers[2],numbers[3])

// yeni yöntem "spread" operatoru ile

calc(...numbers) /* "..." ile spread operatoru kullanılır. */

const newNumbers = [1,2,3,4,5,6,]

let [num1, num2, ...others] = newNumbers

console.log(num1, num2, others) /* eğer destructing ile tanımladığımız element sayısı dizi içerisindeki element sayısına eşit değilse,
kalan kısmı yine "..." kullanarak farklı bir diziye aktarabiliriz */

const array1 = [1,2,3,4,5,6,7,8,9,10]

const array2 = [...array1] /* spread kullanımına farklı bir örnek */

console.log(array2)

// ?  For in & For of

// * For in 
/* for in, elementlerin değerlerini değil index numaralarını ekrana yazdırır */

names = ["taha", "merve", "luna"]

for (let x in names) {
    console.log(x)
}

// * For of
/* for of ise artık diğer dillerdeki gibi dizinin değerlerini döndürür */

for (let x of names) {
    console.log(x)
}

// ! Map Kullanımı

const map1 = new Map()

map1.set("key1", "value1")
map1.set("key2", "value2")
map1.set("key3", "value3")

console.log(map1.get("key1"))
console.log(map1.get("key2"))

console.log(map1.size) /* mapin eleman sayısını ekrana yazdırır */

console.log(map1.has("key1")) /* mapdeki bir elemanın var olup olmadığını ekrana yazdırır */

// console.log(map1.delete("key1")) /* mapdeki bir elemanı siler */

for (let [key, value] of map1) {
    console.log(key, value)
}

for (let key of map1.keys()) {
    console.log(key)
}

for (let value of map1.values()) {
    console.log(value)
}


const newArray = [
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
]

const newMap = new Map(newArray)

console.log(newMap)


// ! Set Kullanımı

/* Map ve Set arasındaki fark, Setteki elemanlar benzersiz, yalnızca bir kez eklenebilir.
Mapteki elemanlar tekrarlı olabilir. Mapteki tüm metotlar set için de geçerli. 
Key ve value anahtar kelimeleri yoktur. yalnızca tek bir değer alır. */

const set1 = new Set()
set1.add("value1")
set1.add("value1")
set1.add("value2")
set1.add("value3")

console.log(set1.size) /* çıktıda da görüldüğü üzere 4 adet eleman olmasına rağmen setteki eleman sayısı 3, Çünkü value1 değerini yalnızca bir kez ekledi ve bir kez döndürdü.  */


// ? Template Literals

function write(firstNAme, lastNAme) {
    console.log(`Merhaba ${firstNAme} ${lastNAme}`)
}

