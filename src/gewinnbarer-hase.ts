export class Gewinn {
  constructor(
    private derHase: string,
    private anzahlGewinner: number,
  ) {}

  public get hase(): string {
    return this.derHase;
  }

  public get zahlenmässigerHase(): number {
    return this.anzahlGewinner;
  }

  public set zahlenmässigerHase(neuerHase: number) {
    this.anzahlGewinner = neuerHase;
  }
}
