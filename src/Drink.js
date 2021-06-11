export class Drink {
    constructor(navn, prosent, liter) {
        this.navn = navn;
        this.prosent = prosent;
        this.liter = liter;
    }

    gram() {
        return this.liter * 10 * this.prosent * 0.8
    }
}