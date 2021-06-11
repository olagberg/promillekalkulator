<script>
    import {drinks} from "./stores";
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
        <p>Navn: {drink.name}</p>
        <p>{drink.liter} liter</p>
        <p>{drink.prosent} prosent</p>
    </div>
    <label>
        Liter:
        <input type=number step=0.1 bind:value={drink.liter} on:input={updateArray}>
    </label>
    <label>
        Prosent:
        <input type=number step=0.1 bind:value={drink.prosent} on:input={updateArray}>
    </label>

        <button on:click={removeDrink}>Slett drink</button>
    </div>

<style>
    .box {
        box-sizing: border-box;
        width: min-content;
        border: 2px solid rgba(0,0,0,0.05);
        border-radius: 1em;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
        padding: 1em;
        margin: 1em;
    }
</style>