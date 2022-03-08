export class Product {
  private _id: number | undefined;
  private _name!: string;
  private _providerId!: number;
  private _preco!: number;

  constructor(){}

  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get providerId(): number {
    return this._providerId;
  }
  public set providerId(value: number) {
    this._providerId = value;
  }
  public get preco(): number {
    return this._preco;
  }
  public set preco(value: number) {
    this._preco = value;
  }
}
