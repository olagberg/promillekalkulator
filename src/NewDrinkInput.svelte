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
    <div class="row">
        <label for="name">Navn:</label>
        <input id="name" bind:value={name}>
    </div>

    <div class="row">
        <label for="liter">Liter:</label>
        <input id="liter" type=number step=0.1 min=0 max=100 bind:value={liter}>
    </div>

    <div class="row">
        <label for="prosent">Prosent:</label>
        <input id="prosent" type=number step=0.1 min=0 max=100 bind:value={prosent}>
    </div>

    <button on:click={newDrink}>Legg til drink!</button>
</div>

<style>
    .box {
        box-sizing: border-box;
        width: min-content;
        border: 5px solid gray;
        border-radius: 1em;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        padding: 2em;
        margin: 2em;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    label {
        padding-top: 0.3em;
        margin-right: 0.4em;
    }
</style>