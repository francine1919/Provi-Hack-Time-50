export class AgroUser {
  constructor(
    private id: string,
    private lote: string,
    private fotoLote: string,
    private areaPlantio: number,
    private dataPlantacao: string,
    private tempoColheita: number,
    private creator_user_id: string
  ) {}

  //to access the attributes in the class

  public getAgroId() {
    return this.id;
  }
  public getLote() {
    return this.lote;
  }
  public getFotoLote() {
    return this.fotoLote;
  }
  public getAreaPlantio() {
    return this.areaPlantio;
  }
  public getDataPlantacao() {
    return this.dataPlantacao;
  }
  public getTempoColheita() {
    return this.tempoColheita;
  }
  public getCreatorUserId() {
    return this.creator_user_id;
  }

  //any object comming from the bank receives an instance of user even if it is empty
  static toAgroUserModel(data: any): AgroUser {
    return new AgroUser(
      data.id,
      data.lote,
      data.fotoLote,
      data.areaPlantio,
      data.dataPlantacao,
      data.tempoColheita,
      data.creator_user_id
    );
  }
}
