import { AbsneakenderHase } from "./absneakender-hase.js";
import { Gewinn } from "./gewinnbarer-hase.js";

export class Verlosung {
  public main() {
    const redArmy = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@Ronaldo7",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
    ];
    const fiktivePreise = [
      new Gewinn("iPhone 16 Pro", 1),
      new Gewinn("Trip nach Dubi", 1),
      new Gewinn("Stepper nach Isti", 1),
      new Gewinn("10 kg Haribo", 2),
      new Gewinn("PlayStation 5 Slim", 3),
      new Gewinn("gebrauchte Sneaker", 5),
    ];
    const luckyMuckies = new AbsneakenderHase(
      redArmy,
      fiktivePreise,
    ).absneaken();
    for (const [opfer, gewonnenerHase] of luckyMuckies.entries()) {
      console.log(`${opfer} gewinnt ${gewonnenerHase}`);
    }
  }
}

new Verlosung().main();
