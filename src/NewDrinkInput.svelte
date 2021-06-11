<script>
    import {Drink} from "./Drink";
    import {drinks} from "./stores";
    let name = "";
    let prosent = 0;
    $: console.log("n: " + name)
    const newDrink = () => {
        $drinks = [...$drinks, Drink(name, prosent, 0)];
    };
    $: console.log("n: " + name + ", p: " + prosent)
</script>

<div class="box">
    <label>
        Navn på drink
        <input bind:value={name}>
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
        border: 5px solid red;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 2em;
        margin: 2em;
    }
</style>