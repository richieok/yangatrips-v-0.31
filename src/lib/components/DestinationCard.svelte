<script>
    export let url;
    export let img;
    export let message;
</script>

<div class="tour-card">
    <a href={url}>
        <img src={img} alt="">
    </a>
    <h3>{message}</h3>
    <a class="button" href={url}>View</a>
</div>

<style>
    .tour-card {
        position: relative;
        height: 400px;
        width: 300px;
        padding: 5px;
        border-radius: 5px;
        background-image: linear-gradient(to bottom right, hsla(0, 0%, 100%, 0.748), rgba(230, 232, 233, 0.838));
        box-shadow: 5px 5px 15px rgba(29, 28, 28, 0.404);
        transition: all .5s;
        overflow: hidden;
    }
    .tour-card:hover {
        box-shadow: 7px 5px 5px rgba(29, 28, 28, 0.404);
    }
    .tour-card > a:has(img) {
        display: block;
    }
    .tour-card img {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }
    .tour-card h3 {
        display: block;
        width: 70%;
        text-align: center;
        margin: 5px auto 10px;
        border-bottom: 2px solid hsla(240, 89%, 51%, 0.565);
    }
    .button {
        position: absolute;
        bottom: 10px;
        left: 50%;
        translate: -50%;
        display: block;
        max-width: 150px;
        text-align: center;
        text-decoration: none;
        padding: .5em .7em;
        /* background-color: hsl(227, 89%, 34%); */
        background-color: goldenrod;
        border-radius: 4px;
        margin: 0 auto;
    }
    .button,
    .button:visited,
    .button:link {
        color: hsla(240, 74%, 17%, 0.965);
        font-weight: bolder;
    }
</style>