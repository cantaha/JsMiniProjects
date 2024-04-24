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