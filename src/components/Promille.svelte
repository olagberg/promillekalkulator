<script>
    import {drinks} from "../scripts/stores";
    import DrinkWidget from "./DrinkWidget.svelte";
    import NewDrinkInput from "./NewDrinkInput.svelte";
    import DinPromille from "./DinPromille.svelte";
    import Person from "./Person.svelte";
    import ConsoleLogAllStores from "./ConsoleLogAllStores.svelte";
</script>

<div class="container">
    {#each $drinks as drink, i}
        <DrinkWidget drink={drink} index={i}/>
    {/each}
</div>

<div class="container">
    <NewDrinkInput/>
    <Person/>
</div>

<div class="container bottom">
    <DinPromille/>
    <ConsoleLogAllStores/>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .bottom {
        padding-bottom: 2em;
    }
</style>