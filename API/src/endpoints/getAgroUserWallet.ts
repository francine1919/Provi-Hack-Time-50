import { Request, Response } from "express";
import { AgroUserDatabase } from "../data/AgroUserDatabase";
import { Authenticator } from "../services/authenticator";

export async function getAgroUserWallet(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const token = req.headers.authorization;
    //validation
    if (!token) {
      return res
        .status(422)
        .send(
          "Esse endpoint exige uma authorization a ser passada nos headers."
        );
    }
    //token authentication comparation with id
    const authenticator = new Authenticator();
    const tokenData = authenticator.verifyTokenData(token as string);

    if (!tokenData) {
      return res.status(422).send("Token inválido.");
    }

    //getting wallet
    const userAgroDatabase = new AgroUserDatabase();
    const wallet = await userAgroDatabase.getAgroUserWalletInfo(tokenData.id);

    if (wallet.length === 0) {
      return res.status(200).send("Sua carteira está vazia.");
    }

    //sending to front
    res.status(200).send(wallet);
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
