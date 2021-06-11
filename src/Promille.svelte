<script>
    import {drinks} from "./stores";
    import DrinkWidget from "./DrinkWidget.svelte";
    import NewDrinkInput from "./NewDrinkInput.svelte";

    let vekt = 70;
    let gender = 0.7;
    let forbrenning = 0.18;
    let timer = 1;
    $: $drinks.forEach((drink) => {
        console.log(drink)
    })
    //$: console.log("Inni første: " + drinks)
    //    $: gram = drinks.reduce((accumulator, currentValue) => {
    //        return accumulator + currentValue.gram();
    //    }, 0);
    //    $: promille = (gram / (vekt * gender)) - (forbrenning * timer)
    //    $: console.log(gram)
</script>

<div class="container">
{#each $drinks as drink}
<DrinkWidget drink={drink}/>
{/each}
</div>
<NewDrinkInput drinks={drinks}/>

<style>
    .container {
        display: flex;
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