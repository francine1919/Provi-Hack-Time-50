import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/authenticator";
import { hashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

export async function signup(req: Request, res: Response): Promise<any> {
  try {
    const { name, email, password } = req.body;

    //generating id (instance)
    const idGenerator = new IdGenerator(); //instance of class IdGenerator
    const id = idGenerator.generate(); //generating id (method generate)

    //generating hash
    const genHash = new hashManager();
    const hashPassword = await genHash.hash(password);

    //validations
    if (
      !name ||
      !email ||
      !password ||
      email.indexOf("@") === -1 ||
      typeof name !== "string" ||
      typeof password !== "string" 
    ) {
      return res
        .status(422)
        .send("Insira corretamente as informações: name, email e password. Todos os campos devem ser strings.");
    }
    if (password.length < 6) {
      return res
        .status(422)
        .send("A senha deve possuir no mínimo 6 caracteres.");
    }

    //finding out if user is already saved on database
    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
    if (user) {
      return res
        .status(409)
        .send("Já existe um usuário criado com este email.");
    }
    //create user
    const newUser = new User(id, name, email, hashPassword);
    await userDatabase.createUser(newUser);
   
    //generating token
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id });

    //sending token to front
    res.status(201).send({ messagem: "criado!", token: token });
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
