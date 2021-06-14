<script>
    import {forbrenning} from "./stores";

    export let promille;
    $: tid = () => {
        let estimate = Math.floor(promille/$forbrenning);
        console.log("Estimate: " + estimate);
        if (estimate <= 0) return 0;
        return estimate;
    }
    $: output = () => {
        if (tid() === 0) return "";
        if (tid() === 1) return "1 time til du er edru grovt estimert."
        else return tid() + " timer til du er edru grovt estimert."
    }
</script>

<p>{output()}</p>