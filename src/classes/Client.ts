import IClient from "../interfaces/IClient";

export default class Client implements IClient {
  public id: number
  public name: string

  constructor(client: IClient) {
    this.id = client.id
    this.name = client.name
  }
}