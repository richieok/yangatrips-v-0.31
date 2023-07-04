<script>
    import {onMount} from "svelte"
    export let description
    export let message
    export let imgsrc
    export let alt

    let style = `<style>.markup p { font-size: .9em; line-height: 1.2rem}
                        .markup li { font-size: .8rem}
                        .markup h3, h4 { font-size: smaller; padding-top: 10px}
                        .markup ul {margin-left: 10px}
                </style>`
</script>

{@html style}

<div class="content">
    <div class="img-display">
        <img
            src={imgsrc}
            alt={alt}
        />
    </div>
    <div class="tour-details">
        <div class="mini-menu">
            <a href="/#">Package Description</a>
            <a href="/#">Locations</a>
            <a href="/#">Book this tour</a>
        </div>
        <h3>{message}</h3>
        <div class="markup">
            {@html description}
        </div>
    </div>
</div>

<style>
    .content {
        display: grid;
        grid-template-columns: 1fr;
        padding: 10px;
        border-radius: 5px;
        background-color: white;
    }
    .img-display {
        overflow: hidden;
        height: clamp(300px, 100vw, 500px);
    }
    .img-display img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .tour-details {
        padding: 10px;
    }
    .tour-details h3 {
        text-align: center;
        padding: 20px;
    }
    .mini-menu {
        display: flex;
        justify-content: left;
    }
    .mini-menu a {
        display: inline-grid;
        text-decoration: none;
        width: 100px;
        place-items: center;
        text-align: center;
        padding: 5px 5px;
        margin-right: 10px;
        background-color: goldenrod;
        border-radius: 3px;
        font-size: small;
        font-weight: bold;
    }
    .mini-menu a:visited, a:link {
        color: hsla(240, 74%, 17%, 0.965);
        font-weight: 900;
        line-height: 1.1rem;
    }
    @media (min-width: 810px){
        .content {
            grid-template-columns: 1fr 1fr 1fr;
        }
        .img-display {
            grid-column-start: 1;
            grid-column-end: 3;
        }
        .tour-details {
            padding: 0 10px;
            grid-column-start: 3;
            grid-column-end: 4;
        }

    }
</style>