import Dragron from "./classes/dragon.class";
import Mage from "./classes/mage.class";
import Wise from "./classes/wise.class";

const dragon = new Dragron();
const mage = new Mage();

dragon.lockOpponent(mage);

dragon.attack();

console.log(dragon);
console.log(mage);

const wise = new Wise();
wise.summon();

wise.pet.lockOpponent(dragon);

console.log(wise);