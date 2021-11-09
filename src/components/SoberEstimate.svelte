<script>
    import {forbrenning} from "../scripts/stores";

    export let promille;
    $: tid = () => {
        let estimate = Math.floor(promille/$forbrenning);
        console.log("Estimate: " + estimate);
        if (estimate <= 0) return 0;
        return estimate;
    }
    $: output = () => {
        if (tid() === 0 || isNaN(tid())) return "";
        else if (tid() === 1) return "1 time til du er edru grovt estimert.";
        else if (tid() === Infinity) return "🤯 Uendelig timer til du er edru 🤯";
        else return tid() + " timer til du er edru grovt estimert.";
    }
</script>

<p>{output()}</p>