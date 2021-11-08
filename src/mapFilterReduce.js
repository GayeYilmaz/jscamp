///DAY 3
//bu fonksiyonlar pratictir.
let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]
//MAP
//İterasyon yapar.Arrayi tek tek dolaşmaya yarar.Iterasyon esnasındada o değerler üzerinde iş
//lem yapar ve istersen sana yeni bir array döndürür.
//product: arrayi tek tek gezerken her elemana verdiği takma isim.
//okdan sonraki kısım her eleman için yapılacak işlemi yazarız.
//cart.map(product=>console.log(product.productName))
//birden fazla satırda operasyon yapılcaksa
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+":"+product.unitPrice*product.quantity+"</li>")
})
console.log("</ul>")

//FILTER
//datayı filtrelemek için kullanılır.

//Her bir ürün için o ürünün quantitisi 2 nin üzerindeyse bunu quantityOver2 nun içerisine at.
let quantityOver2=cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

//REDUCE
//acc+product.unitPrice==>acc=acc+product.unitPrice,acc 0 dan başalayacak
let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)

console.log(total)














//stack managment:ekranın yönettiği datanın durumunu yönetmek 
//SPA:Single Page Application


// Referans tip ile işlem yapıldığı için aslında data değil onun adresi gönderilir.
function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)

console.log(cart)
// DEğer tiplerde değer atanır ve işi biter.
let sayi=10
function sayiTopla(number) {
    number+=1
    
}
sayiTopla(sayi)
console.log(sayi)