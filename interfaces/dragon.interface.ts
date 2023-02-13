import IMovement from "../interfaces/movement.interface";
import IMob from "./mob.interface";

export default interface IDragon extends IMob {
    fly(coordinates: IMovement): void
}