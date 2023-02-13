import IPet from "../interfaces/pet.interface";
import Mob from "./mob.class";

export default class Pet extends Mob implements IPet {
    public name: string;
    public humor: number;
    public hungry: number;
    public hp: number;

    constructor(name: string) {
        super()
        this.name = name;
        this.humor = 20;
        this.hungry = 0;
        this.hp = 60;
    }

    eat(): void {
        throw new Error("Method not implemented.");
    }
    updateHungry(): void {
        throw new Error("Method not implemented.");
    }
    updateHumor(): void {
        throw new Error("Method not implemented.");
    }

}