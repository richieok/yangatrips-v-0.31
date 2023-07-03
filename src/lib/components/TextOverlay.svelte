<script>
    export let message = ''
</script>

<div>
    <h3>{message}</h3>
</div>

<style>
    div {
        display: grid;
        place-content: center;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
    h3 {
        font-family: 'Dancing Script', cursive;
        text-align: center;
        margin-left: 20%;
        margin-right: 20%;
        color: white;
        text-shadow: 1px 1px rgb(41, 39, 39), -1px -1px rgb(41, 39, 39), -1px 1px rgb(41, 39, 39);
        font-size: 3em;
    }
</style>