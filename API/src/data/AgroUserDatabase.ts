import { AgroUser } from "../entities/AgroUser";
import connection from "./connection";

export class AgroUserDatabase {
  public async createAgroData(agroUser: AgroUser) {
    try {
      await connection("AgroUsers_Hackaa").insert({
        id: agroUser.getAgroId(),
        lote: agroUser.getLote(),
        fotoLote: agroUser.getFotoLote(),
        areaPlantio: agroUser.getAreaPlantio(),
        dataPlantacao: agroUser.getDataPlantacao(),
        tempoColheita: agroUser.getTempoColheita(),
        creator_user_id: agroUser.getCreatorUserId(),
      });
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
  public async getAgroUserWalletInfo(id: string): Promise<AgroUser[]> {
    try {
      const userAgroInfoDatabase = await connection("AgroUsers_Hackaa")
        .select(
          "id",
          "lote",
          "fotoLote",
          "areaPlantio",
          "dataPlantacao",
          "tempoColheita"
        )
        .where({ creator_user_id: id });
      return userAgroInfoDatabase.map((user) => AgroUser.toAgroUserModel(user));
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
}
