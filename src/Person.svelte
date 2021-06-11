<script>
import {vekt, gender, forbrenning, timer} from "./stores";
</script>

<div class="box">
    <h2>Personlige opplysninger:</h2>
    <label>
        Vekt:
        <input step=1 type="number" bind:value={$vekt}>
    </label>
    <label>
        Timer siden drikkestart:
        <input type="number" step=1 bind:value={$timer}>
    </label>
    <label>
        Forbrenning per time:
    <input type="number" step=0.01 bind:value={$forbrenning}>
    </label>
    <!-- Gender-->
    <label>
        <input type="radio" bind:group={$gender} value={0.7}>
        Mann
    </label>
    <label>
        <input type="radio" bind:group={$gender} value={0.55}>
        Kvinne
    </label>
    <label>
        <input type="radio" bind:group={$gender} value={0.65}>
        Non-binary
    </label>
    <label>
        Eller endre kroppsmasse selv:
        <input type="number" bind:value={$gender}>
    </label>
</div>

<style>
    .box {
        box-sizing: border-box;
        width: min-content;
        border: 5px solid gray;
        border-radius: 1em;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 2em;
        margin: 2em;
    }
</style>