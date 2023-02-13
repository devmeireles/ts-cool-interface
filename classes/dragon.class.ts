import IDragon from "../interfaces/dragon.interface";
import Mob from "./mob.class";
import IMovement from "../interfaces/movement.interface";

export default class Dragron extends Mob implements IDragon {
    constructor() {
        super()
        this.damage = 60;
        this.defence = 30;
        this.hp = 300;
        this.opponent = null;
        this.coordinates = {
            x: 0,
            y: 0,
            z: 0,
        };
    }

    fly(coordinates: IMovement): void {
        throw new Error("Method not implemented.");
    }
}