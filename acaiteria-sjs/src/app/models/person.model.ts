export class Person{
  private _id?: number | undefined;

  private _name: string;
  private _cpf: string;
  private _birthDate?: Date | undefined;

  constructor(name:string,cpf:string,birtDate:string){
    this._name=name;
    this._cpf=cpf;
    this._birthDate = new Date(birtDate);

  }

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
  public get cpf(): string {
    return this._cpf;
  }
  public set cpf(value: string) {
    this._cpf = value;
  }
  public get birthDate(): Date | undefined {
    return this._birthDate;
  }
  public set birthDate(value: Date | undefined) {
    this._birthDate = value;
  }


}
