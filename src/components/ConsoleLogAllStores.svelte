<script>

    import {forbrenning, gender, timer, vekt} from "../scripts/stores";

    $: console.log("Vekt: " + $vekt);
    $: console.log("Gender: " + $gender);
    $: console.log("Forbrenning: " + $forbrenning);
    $: console.log("Timer: " + $timer);
</script>