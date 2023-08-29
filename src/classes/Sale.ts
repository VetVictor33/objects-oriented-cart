import Cart from "./Cart";
import Client from "./Client";

type paymentMethod = 'debit' | 'credit'

export default class Sale {
  private debitPromoOfferIndex = 0.07
  private creditPromoOfferBreakpoint = 100
  private creditPromoOfferIndex = 0.05
  private cart: Cart
  private client: Client

  constructor(cart: Cart) {
    this.cart = cart
    this.client = cart.owner()
  }

  public close(paymentMethod: paymentMethod): string {
    const { totalValue } = this.cart.summary()
    let total: number = totalValue;
    switch (paymentMethod) {
      case 'debit':
        total = totalValue - (totalValue * this.debitPromoOfferIndex)
        break;
      case 'credit':
        if (totalValue > this.creditPromoOfferBreakpoint) {
          total = totalValue - (totalValue * this.creditPromoOfferIndex)
        }
        break;
    }

    const formattedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return `Pedido finalizado. Total: ${formattedTotal}.`
  }
}