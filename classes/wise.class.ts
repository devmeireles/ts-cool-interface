import IWise from "../interfaces/wise.interface";
import Mob from "./mob.class";
import Pet from "./pet.class";

export default class Wise extends Mob implements IWise {
    public pet: Pet;

    constructor() {
        super()
        this.damage = 70;
        this.defence = 40;
        this.hp = 290;
        this.opponent = null;
        this.coordinates = {
            x: 10,
            y: 10,
            z: 0,
        };
    }
    summon(): void {
        this.pet = new Pet("Poring");
    }
    fireBallAtack(): void {
        throw new Error("Method not implemented.");
    }
}