<script>
    import {Drink} from "./Drink.js";
    import DrinkWidget from "./DrinkWidget.svelte";

    let drinks = [new Drink('Brennevin', 100, 1), new Drink('Øl', 100, 1), new Drink('Vin', 100, 1)];
    let vekt = 70;
    let gender = 0.7;
    let forbrenning = 0.18;
    let timer = 1;
    $: gram = drinks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.gram();
    }, 0);
    $: promille = (gram / (vekt * gender)) - (forbrenning * timer)
    $: console.log(gram)
</script>

<DrinkWidget drinks={drinks}/>

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