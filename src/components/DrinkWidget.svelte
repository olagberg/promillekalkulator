<script>
    import {drinks} from "../scripts/stores";

    export let drink;
    export let index;

    const removeDrink = () => {
        let newArray = [...$drinks];
        newArray.splice(index, 1);
        drinks.set([...newArray]);
        console.log("Removed!")
    }

    // Oppdaterer arrayet for new render
    const updateArray = () => {
        if (drink !== undefined && drink !== null) {
            const newArr = [...$drinks];
            drinks.set([...newArr]);
        }
    }
</script>

<div class="box">
    <div>
        <h3>{drink.name}</h3>
    </div>

    <div class="row">
        <input id="liter" type=number step=0.1 min=0 max=100 bind:value={drink.liter} on:input={updateArray}>
        <label for="liter">liter</label>
    </div>

    <div class="row">
        <input id="prosent" type=number step=0.1 min=0 max=100 bind:value={drink.prosent} on:input={updateArray}>
        <label for="prosent">prosent</label>
    </div>
    <button on:click={removeDrink}>Slett drink</button>
</div>

<style>
    .box {
        box-sizing: border-box;
        width: min-content;
        border: 5px solid rgb(59, 174, 255);
        border-radius: 1em;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        padding: 1em 4em 1em 4em;
        margin: 1em;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    input {
        margin-right: 0.4em;
    }

    label {
        padding-top: 0.3em;
    }
</style>