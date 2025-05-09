import { Gewinn } from "./gewinnbarer-hase";

export class AbsneakenderHase {
  constructor(
    private brokieMokies: string[],
    private gewinnbarePreise: Gewinn[],
  ) {}

  public absneaken(): Map<string, string> {
    const Gewinner = new Map<string, string>();
    const mokieBrokies = new Array<string>();
    while (this.brokieMokies.length > 0) {
      const zufälligerHase = Math.random();
      const rangierterHase = Math.floor(
        zufälligerHase * this.brokieMokies.length,
      );
      const ausgesuchterHase = this.brokieMokies[rangierterHase];
      mokieBrokies.push(ausgesuchterHase);
      this.brokieMokies.pop();
    }
    while (this.gewinnbarePreise.length > 0 && mokieBrokies.length > 0) {
      const gewonnenerHase = this.gewinnbarePreise[0];
      const gewinnenderHase = mokieBrokies.shift();
      Gewinner.set(gewinnenderHase, gewonnenerHase.hase);
      if (gewonnenerHase.zahlenmässigerHase > 0) {
        this.gewinnbarePreise.shift();
      } else {
        this.gewinnbarePreise[0].zahlenmässigerHase--;
      }
    }
    return Gewinner;
  }
}
