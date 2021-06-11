<script>
    import {drinks, vekt, gender, forbrenning, timer} from "./stores";
    import {gramAlkohol} from "./Drink";
    const reducer = (accumulator, currentValue) => accumulator + gramAlkohol(currentValue);

    $: gram = $drinks.reduce(reducer, 0);
    $: promille = (gram / ($vekt * $gender)) - ($forbrenning * $timer);
    $: promilleOutput = () => {
        const tekst = promille.toFixed(2) + " promille";
        if (promille <= 0) return "😎 0.00 promille 😎";
        else if (promille < 0.5) return "😀 " + tekst + " 😀";
        else if (promille < 1) return "😁 " + tekst + " 😁";
        else if (promille < 1.5) return "😆 " + tekst + " 😆";
        else if (promille < 2) return "😅 " + tekst + " 😅";
        else if (promille < 2.5) return "🤢 " + tekst + " 🤢";
        else if (promille < 3) return "🤮 " + tekst + " 🤮";
        else return "☠ " + tekst + " ☠";
    };
    $: timerOutput = () => {
        if (!$timer) return "Din promille etter 0 timer:"
        if ($timer === 1) return "Din promille etter 1 time:";
        else return "Din promille etter " + $timer + " timer:"
    };
    $: validPromille = ((promille !== Infinity) && (!isNaN(promille)));
    $: console.log("Promille: " + promille);
</script>
<div class="center">
<p>{timerOutput()}</p>

{#if validPromille}
    <h2>{promilleOutput()}</h2>
{:else}
    <h2>Kan ikke kalkulere din promille. Sjekk om du har skrevet inn riktige verdier.</h2>
{/if}
<p>{gram.toFixed(0)} gram alkohol, {(gram * 7).toFixed(0)} kcal i ren etanol</p>

</div>

<style>
    p {
        font-size: 1.2em;
    }
    .center {
        flex-wrap: nowrap;
        text-align: center;
    }
</style>