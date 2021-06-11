import { writable } from 'svelte/store';
import {Drink} from "./Drink";

export const drinks = writable(
    [Drink('Brennevin', 100, 1),
        Drink('Øl', 100, 1),
        Drink('Vin', 100, 1)]);