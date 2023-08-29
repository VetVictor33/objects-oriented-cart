import { Summary } from "../types/Summary";
import Client from "./Client";
import Product from "./Product";

export default class Cart {
  private _products: Product[]
  private _owner: Client

  constructor(owner: Client, products: Product[] = []) {
    this._products = products
    this._owner = owner
  }

  public get products(): Product[] {
    return this._products
  }

  public set products(products: Product[]) {
    this._products = this._products.concat(products)
  }

  public removeProduct(id: Product['id']): void {
    const index = this._products.findIndex(({ id: productId }) => productId === id)
    if (index === -1) throw new Error('Product not found!')
    this._products.splice(index, 1)
  }

  public changeAmount(id: Product['id'], amount: Product['amount']): void {
    const product = this._products.find(({ id: productId }) => productId === id)
    if (!product) throw new Error('Product not found!')
    product.amount = amount
  }

  public summary(): Summary {
    let totalProducts: number = 0
    const products = this._products
    let totalValue: number = 0
    products.forEach(({ value, amount }) => {
      totalValue += value * amount
      totalProducts += amount
    })
    return {
      totalProducts,
      products,
      totalValue
    }
  }

  public owner(): Client {
    return this._owner
  }
}