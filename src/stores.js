import {readable, writable} from 'svelte/store';
import {Drink} from "./Drink";

export const drinks = writable(
    [Drink('Brennevin', 100, 1),
        Drink('Øl', 100, 1),
        Drink('Vin', 100, 1)]);

export const vekt = writable(70);
export const gender = writable(0.70);
export const forbrenning = writable(0.18);
export const timer = writable(1);
