import Mob from "../classes/mob.class"
import IMovement from "./movement.interface"

export default interface IMob {
    damage: number;
    defence: number;
    hp: number;
    opponent: Mob;
    coordinates: IMovement;
    move(coordinates: IMovement): void
    lockOpponent(opponent: Mob): void
    attack(): void
    defend(): void
}