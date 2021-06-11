<script>
    import {onMount} from "svelte";

    function addZero(time) {
        if (time < 10) {
            time = "0" + time;
        }
        return time;
    }

    let date = new Date();

    $: hours = addZero(date.getHours());
    $: minutes = addZero(date.getMinutes());
    $: seconds = addZero(date.getSeconds());

    onMount(() => {
        const interval = setInterval(() => {
            date = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<p>
    {hours} : {minutes} : {seconds}
</p>