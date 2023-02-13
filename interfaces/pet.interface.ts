import IMob from "./mob.interface";

export default interface IPet extends IMob {
    name: string;
    eat(): void;
    updateHungry(): void;
    updateHumor(): void;
}