// debugger; // hata ayıklaması yaparken tüm satırları çalıştırmamak, her satırı elle tek tek çalıştırmak için kullanılır.
// sayfa kaynağını incelerken source kısmından takip edilir.

for (let i=1; i<=10; i++) {
    console.log(i);
}

for (let i = 0; i <= 10; i+=2) {
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if (i%2 === 0) {
        console.log(i + " çift");
    }
    else {
        console.log(i + " tek")
    }
}

let toplam = 0
for (let i = 50; i >= 0; i--) {
    toplam+=i;
    console.log(i);
}
console.log(toplam)

// while döngüsü

let counter = 0;
while (counter <= 10) {
    console.log(counter)
    counter+=1;
}

// do-while döngüsü
// while döngüsünden farkı condition yani şart kodlardan sonra geldiği için,
// şart sağlanmasa bile döngü kodları en az bir kez, derleyicinin standart çalışma düzeninde çalışır.

let counter = 0;
do {
    console.log(counter)
    counter++;
} while (counter <= 10);