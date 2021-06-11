<script>
    import {Drink} from "./Drink.js";

    export let drinks;
    let navn = "";
    let prosent = 0;

    function newDrink() {
        drinks.push(new Drink(navn, prosent, 0));
        console.log(drinks)
    }
    $: console.log("n: " + navn + ", p: " + prosent)
</script>

{#each drinks as drink}
    <div class="box">
    <div>
        <p>Navn: {drink.navn}</p>
        <p>{drink.liter} liter</p>
        <p>{drink.prosent} prosent</p>
    </div>
    <label>
        Liter:
        <input type=number step=0.1 bind:value={drink.liter}>
    </label>
    <label>
        Prosent:
        <input type=number step=0.1 bind:value={drink.prosent}>
    </label>
    </div>
{/each}
<div class="box">
    <label>
        Navn på drink
        <input bind:value={navn}>
    </label>
    <label>
        Prosent
        <input type=number step=0.1 bind:value={prosent}>
    </label>
    <button on:click={newDrink}>Ny drink!</button>
</div>

<style>
    .box {
        box-sizing: border-box;
        width: min-content;
        border: 1px solid red;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>