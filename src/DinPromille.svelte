<script>
    import {drinks, vekt, gender, forbrenning, timer} from "./stores";
    import {gramAlkohol} from "./Drink";
    const reducer = (accumulator, currentValue) => accumulator + gramAlkohol(currentValue);

    $: gram = $drinks.reduce(reducer, 0);
    $: promille = (gram / ($vekt * $gender)) - ($forbrenning * $timer);
    $: output = () => {
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
    $: console.log("Promille: " + promille);
</script>

<p>Din promille er etter {$timer} {$timer === 1 ? "time" : "timer"}:</p>

{#if promille !== Infinity}
    <h2>{output()}</h2>
{:else}
    <h2>Kan ikke kalkulere din promille. Sjekk om du har skrevet inn riktige verdier.</h2>
{/if}