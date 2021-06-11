<script>
    import {forbrenning} from "./stores";

    export let promille;
    $: tid = () => {
        let temp = promille;
        let i = 0;
        while (temp > 0) {
            temp -= $forbrenning;
            i++;
        }
        return i;
    }
    $: output = () => {
        if (tid() === 0) return "";
        if (tid() === 1) return "1 time til du er edru grovt estimert."
        else return tid() + " timer til du er edru grovt estimert."
    }
</script>

<p>{output()}</p>