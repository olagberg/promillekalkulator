<script>
    import {Drink} from "./Drink";
    import {drinks} from "./stores";
    let name = "Screwdriver";
    let liter = 0.2;
    let prosent = 15;

    const newDrink = () => {
        $drinks = [...$drinks, Drink(name, prosent, liter)];
    };
</script>

<div class="box">
    <h2>Ny drink:</h2>
    <label>
        Navn på drink
        <input bind:value={name}>
    </label>
    <label>
        Liter:
        <input type=number step=0.1 min=0 bind:value={liter}>
    </label>
    <label>
        Prosent
        <input type=number step=0.1 min=0 bind:value={prosent}>
    </label>
    <button on:click={newDrink}>Ny drink!</button>
</div>

<style>
    .box {
        box-sizing: border-box;
        width: min-content;
        border: 5px solid gray;
        border-radius: 1em;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 2em;
        margin: 2em;
    }
</style>