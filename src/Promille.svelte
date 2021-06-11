<script>
    import {drinks} from "./stores";
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

<DinPromille/>
<ConsoleLogAllStores/>
<style>
    .container {
        display: flex;
        flex-wrap: wrap;
    }
</style>

















<!--<label>
    Vekt:
    <input type=number bind:value={vekt}>
</label>
<label>Timer siden drikkestart:
    <input type=number bind:value={timer}>
</label>
<label>Forbrenning i timen:
    <input type=number step=0.01 bind:value={forbrenning}>
</label>
<label>
    <input type=radio bind:group={gender} value={0.7}>
    Mann
</label>
<label>
    <input type=radio bind:group={gender} value={0.6}>
    Kvinne
</label>
<label>
    <input type=radio bind:group={gender} value={0.65}>
    Ikke-binær
</label>
<p>Alkohol: {gram.toFixed(2)} gram</p>
<p>Promille: {promille > 0 ? promille.toFixed(2) : 0}</p> -->