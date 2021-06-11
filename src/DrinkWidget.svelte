<script>
    export let drink;
    const removeDrink = () => {
        console.log("removed!")
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
        <input type=number step=0.1 bind:value={drink.liter}>
    </label>
    <label>
        Prosent:
        <input type=number step=0.1 bind:value={drink.prosent}>
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