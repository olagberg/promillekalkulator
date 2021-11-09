import {writable} from 'svelte/store';
import {Drink} from "./Drink";

export const drinks = writable(
    [Drink('Brennevin', 40, 0),
        Drink('Øl', 4.7, 0),
        Drink('Vin', 12, 0)]);

export const vekt = writable(70);
export const gender = writable(0.70);
export const forbrenning = writable(0.18);
export const timer = writable(1);
