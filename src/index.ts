import Cart from "./classes/Cart";
import Client from "./classes/Client";
import Product from "./classes/Product";
import Sale from "./classes/Sale";

const luca: Client = { id: 1, name: 'Lukinha' }
const lucaCart: Cart = new Cart(luca)
const product1: Product = { id: 1, amount: 1, category: 'salto baixo', description: 'para o seu pé', value: 100 }
const product2: Product = { id: 2, amount: 1, category: 'sandália', description: 'para o seu pé', value: 50 }
const product3: Product = { id: 3, amount: 1, category: 'tênis', description: 'para o seu pé', value: 120 }

console.log(lucaCart.owner())
lucaCart.products = [product1, product2]
console.log(lucaCart.products)
lucaCart.products = [product3]
console.log(lucaCart.products)

lucaCart.removeProduct(2)
console.log(lucaCart.products)

lucaCart.changeAmount(3, 6)

console.log(lucaCart.summary())

const lucasSale = new Sale(lucaCart)

console.log(lucasSale.close("credit"))
console.log(lucasSale.close("debit"))