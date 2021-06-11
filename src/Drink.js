export const Drink = (name, prosent, liter) => {
        return {name, prosent, liter};
}

export function gram(drink) {
        return drink.liter * 10 * drink.prosent * 0.8
}