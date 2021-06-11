<script>
    import {forbrenning, gender, timer, vekt} from "./stores";
</script>

<div class="box">
    <h2>Personlige opplysninger:</h2>

    <!-- Vekt number input -->
    <label>
        Vekt:
        <input bind:value={$vekt} step=1 min=0 max=500 type="number">
    </label>

    <!-- Drikkestart number input -->
    <label>
        Timer siden drikkestart:
        <input bind:value={$timer} step=1 min=0 type="number">
    </label>

    <!-- Forbrenning number input -->
    <label>
        Forbrenning per time:
        <input bind:value={$forbrenning} step=0.01 min=0 max=1 type="number">
    </label>

    <!-- Gender radios -->
    <label>
        <input bind:group={$gender} type="radio" value={0.7}>
        Mann
    </label>
    <label>
        <input bind:group={$gender} type="radio" value={0.55}>
        Kvinne
    </label>
    <label>
        <input bind:group={$gender} type="radio" value={0.65}>
        Non-binary
    </label>

    <!-- Gender number input -->
    <label>
        Eller endre kroppsmasse selv:
        <input bind:value={$gender} step=0.01 min=0 max=1 type="number">
    </label>
</div>

<style>
    .box {
        box-sizing: border-box;
        width: min-content;
        border: 5px solid gray;
        border-radius: 1em;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        padding: 2em;
        margin: 2em;
    }
</style>