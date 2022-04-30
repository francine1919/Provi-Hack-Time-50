import { Request, Response } from "express";
import { AgroUserDatabase } from "../data/AgroUserDatabase";
import { AgroUser } from "../entities/AgroUser";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";

export async function createAgroWallet(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { lote, fotoLote, areaPlantio, dataPlantacao, tempoColheita } =
      req.body;
    const token = req.headers.authorization;

    //changing date format
    const [day, month, year] = dataPlantacao.split("/");
    const newDataPlantacao = `${year}/${month}/${day}`;

    //generating id (instance)
    const idGenerator = new IdGenerator(); //instance of class IdGenerator
    const id = idGenerator.generate(); //generating id (method generate)

    //validations
    if (
      !lote ||
      !fotoLote ||
      !areaPlantio ||
      !dataPlantacao ||
      !tempoColheita ||
      typeof lote !== "string" ||
      typeof fotoLote !== "string" ||
      typeof dataPlantacao !== "string" ||
      typeof tempoColheita !== "number" ||
      typeof areaPlantio !== "number"
    ) {
      return res
        .status(422)
        .send(
          "Insira corretamente as informações: lote, fotoLote, areaPlantio, dataPlantacao e tempoColheita. Todos os campos são strings exceto pelo areaPlantio e tempoColheita que são números."
        );
    }
    if (!token) {
      return res
        .status(422)
        .send(
          "Esse endpoint exige uma authorization a ser passada nos headers."
        );
    }
    const agroUserDatabase = new AgroUserDatabase();

    //verify token
    const authenticator = new Authenticator();
    const tokenCheck = authenticator.verifyTokenData(token);

    if (!tokenCheck) {
      return res.status(403).send("Token invalido.");
    }

    //create user
    const newAgroUser = new AgroUser(
      id,
      lote,
      fotoLote,
      areaPlantio,
      newDataPlantacao,
      tempoColheita,
      tokenCheck.id // getting user id from jwt verify token data
    );
    await agroUserDatabase.createAgroData(newAgroUser);

    //sending to front
    res.status(201).send({ messagem: "criado!" });
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
