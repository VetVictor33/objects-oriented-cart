import IProduct from "../interfaces/IProduct";

export default class Product implements IProduct {
  public readonly id: number
  public description: string
  public category: string
  public value: number
  public amount: number

  constructor(product: IProduct) {
    this.id = product.id
    this.description = product.description
    this.category = product.category
    this.value = product.value
    this.amount = product.amount
  }
}