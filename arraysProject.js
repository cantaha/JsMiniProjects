// let product1 = {
//   name: "casper",
//   price: 3200,
//   category: "pc",
// };
// let product2 = {
//   name: "dell",
//   price: 5600,
//   category: "pc",
// };
// let product3 = {
//   name: "asus",
//   price: 7200,
//   category: "pc",
// };
// let product4 = {
//   name: "lenovo",
//   price: 10400,
//   category: "pc",
// };
// let product5 = {
//   name: "acer",
//   price: 8300,
//   category: "pc",
// };
// let product6 = {
//   name: "apple macbook",
//   price: 54650,
//   category: "pc",
// };

// let products = [product1, product2, product3, product4, product5, product6];
// let filterProducts = [];

// let quest = prompt("ürün arama");

// products.forEach(function (product) {
//   if (
//     product.name.toUpperCase().includes(quest.toUpperCase(), 0) ||
//     "para" == quest.toUpperCase()
//   ) {
//     console.log(product.name);
//     console.log(product.price + " TL");
//     filterProducts.push(product);
//   }
// });


// ? Kitap Bul Projesi

let books1 = {name: "book1", author: "author1", price: 100, shelf: "1-1 shelf"};
let books2 = {name: "book2", author: "author2", price: 200, shelf: "3-2 shelf"};
let books3 = {name: "book3", author: "author3", price: 300, shelf: "1-3 shelf"};
let books4 = {name: "book4", author: "author4", price: 400, shelf: "6-4 shelf"};
let books5 = {name: "book5", author: "author5", price: 500, shelf: "5-5 shelf"};
let books6 = {name: "book6", author: "author6", price: 600, shelf: "4-2 shelf"}

let books = [books1, books2, books3, books4, books5, books6];

let shelf1_1 = {code: "1-1 shelf", show: false};
let shelf1_2 = {code: "1-2 shelf", show: false};
let shelf1_3 = {code: "1-3 shelf", show: false};
let shelf1_4 = {code: "1-4 shelf", show: false};
let shelf1_5 = {code: "1-5 shelf", show: false};
let shelf1_6 = {code: "1-6 shelf", show: false};

let shelf2_1 = {code: "2-1 shelf", show: false};
let shelf2_2 = {code: "2-2 shelf", show: false};
let shelf2_3 = {code: "2-3 shelf", show: false};
let shelf2_4 = {code: "2-4 shelf", show: false};
let shelf2_5 = {code: "2-5 shelf", show: false};
let shelf2_6 = {code: "2-6 shelf", show: false};

let shelf3_1 = {code: "3-1 shelf", show: false};
let shelf3_2 = {code: "3-2 shelf", show: false};
let shelf3_3 = {code: "3-3 shelf", show: false};
let shelf3_4 = {code: "3-4 shelf", show: false};
let shelf3_5 = {code: "3-5 shelf", show: false};
let shelf3_6 = {code: "3-6 shelf", show: false};

let shelf4_1 = {code: "4-1 shelf", show: false};
let shelf4_2 = {code: "4-2 shelf", show: false};
let shelf4_3 = {code: "4-3 shelf", show: false};
let shelf4_4 = {code: "4-4 shelf", show: false};
let shelf4_5 = {code: "4-5 shelf", show: false};
let shelf4_6 = {code: "4-6 shelf", show: false};

let shelf5_1 = {code: "5-1 shelf", show: false};
let shelf5_2 = {code: "5-2 shelf", show: false};
let shelf5_3 = {code: "5-3 shelf", show: false};
let shelf5_4 = {code: "5-4 shelf", show: false};
let shelf5_5 = {code: "5-5 shelf", show: false};
let shelf5_6 = {code: "5-6 shelf", show: false};

let shelf6_1 = {code: "6-1 shelf", show: false};
let shelf6_2 = {code: "6-2 shelf", show: false};
let shelf6_3 = {code: "6-3 shelf", show: false};
let shelf6_4 = {code: "6-4 shelf", show: false};
let shelf6_5 = {code: "6-5 shelf", show: false};
let shelf6_6 = {code: "6-6 shelf", show: false};

let shelfs = [
  [shelf6_1, shelf6_2, shelf6_3, shelf6_4, shelf6_5, shelf6_6],
  [shelf5_1, shelf5_2, shelf5_3, shelf5_4, shelf5_5, shelf5_6],
  [shelf4_1, shelf4_2, shelf4_3, shelf4_4, shelf4_5, shelf4_6],
  [shelf3_1, shelf3_2, shelf3_3, shelf3_4, shelf3_5, shelf3_6],
  [shelf2_1, shelf2_2, shelf2_3, shelf2_4, shelf2_5, shelf2_6],
  [shelf1_1, shelf1_2, shelf1_3, shelf1_4, shelf1_5, shelf1_6],
]

function show() {
  console.clear()
  let line = "";
  for (let i = 0; i < shelfs.length; i++) {
    for (let j = 0; j < shelfs[i].length; j++) {
          line += "| " + (shelfs[i][j].show ? shelfs[i][j].code : "---") + " |";
    }
    console.log(line)
    console.log("-----------------------------------------")
    line = "";
  }
}

function codeFind(bookname) {
  let shelfCode = null;
  books.forEach(function(book){
    if (book.name.toUpperCase().includes(bookname.toUpperCase(), 0)) {
      shelfCode = book.shelf;
    }
  })
  return shelfCode;
}

function showInShelf(shelfcode) {
  for (let i = 0; i < shelfs.length; i++) {
    for (let j = 0; j < shelfs[i].length; j++) {
      if (shelfs[i][j].code == shelfcode) {
        shelfs[i][j].show = true;
        break;
      }
    }
  }
}


// let findBook = prompt("Enter book name");

// let shelfCode = codeFind(findBook);

// showInShelf(shelfCode);

// if (shelfCode != null) {
//   show();
// } else {
//   prompt("Book not found")
// }