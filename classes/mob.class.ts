import IMob from "../interfaces/mob.interface";
import IMovement from "../interfaces/movement.interface";

export default class Mob implements IMob {
    public coordinates: IMovement;
    public opponent: Mob;
    public hp: number;
    public damage: number;
    public defence: number;

    move(coordinates: IMovement): void {
        throw new Error("Method not implemented.");
    }
    lockOpponent(opponent: Mob): void {
        this.opponent = opponent;
    }
    attack(): void {
        if (this.opponent) {
            const { hp, defence } = this.opponent;

            if (defence > this.damage) return;
            this.opponent.hp = hp - (this.damage - defence);
        }
    }
    defend(): void {
        throw new Error("Method not implemented.");
    }

}