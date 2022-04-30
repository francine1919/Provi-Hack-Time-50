export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}

  //to access the attributes in the class

  public getId() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getEmail() {
    return this.email;
  }
  public getPassword() {
    return this.password;
  }

  //any object comming from the bank receives an instance of user even if it is empty
  static toUserModel(data: any): User {
    return new User(data.id, data.name, data.email, data.password);
  }
}
