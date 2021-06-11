<script>
    import {drinks, vekt, gender, forbrenning, timer} from "./stores";
    import {gramAlkohol} from "./Drink";
    const reducer = (accumulator, currentValue) => accumulator + gramAlkohol(currentValue);
    let promille;

    // TODO: Må fikses med "$:" ?
    let gram = $drinks.reduce(reducer, 0);
    drinks.subscribe(drink => {
        gram += gramAlkohol(drink);

    })
    // $: promille = (gram / ($vekt * $gender)) - ($forbrenning * $timer);
    $: console.log("Gram: " + gram);
    $: console.log("Gram typeof", typeof gram);
    // $: console.log("Vekt: " + $vekt);
    // $: console.log("Gender: " + $gender);
    // $: console.log("Forbrenning: " + $forbrenning);
    // $: console.log("Timer: " + $timer);
    // $: console.log("promille: " + promille);
</script>