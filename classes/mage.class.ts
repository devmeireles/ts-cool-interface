import IMage from "../interfaces/mage.interface";
import Mob from "./mob.class";

export default class Mage extends Mob implements IMage {
    constructor() {
        super()
        this.damage = 40;
        this.defence = 20;
        this.hp = 200;
        this.opponent = null;
        this.coordinates = {
            x: 10,
            y: 10,
            z: 0,
        };
    }

    fireBallAtack(): void {
        throw new Error("Method not implemented.");
    }
}