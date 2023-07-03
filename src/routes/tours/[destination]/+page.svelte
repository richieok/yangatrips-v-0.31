<script>
    import {page} from '$app/stores'
    export let data;
    let {description, message, pictures, name} = data
    let imgBucketPrefix =
        "https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/";
    // console.log(data);
    // $: ({description, message, pictures, name} = $page.data)

    let style = `<style>.markup p { font-size: .9em; line-height: 1.2rem}
                        .markup li { font-size: .8rem}
                        .markup h3, h4 { font-size: smaller; padding-top: 10px}
                        .markup ul {margin-left: 10px}
                </style>`
</script>

{@html style}

<div class="page">
    <div class="content">
        {#if data}
        <div class="img-display">
            <img
                src={`${imgBucketPrefix}${name}/${pictures[0]}`}
                alt="hotel decor"
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
            
        {/if}
    </div>
</div>

<style>
    .page {
        padding: 5px;
        min-height: clamp(500px, calc(100vh - var(--nav-height-mobile)), 800px);
        animation: pageFade 1s forwards;
    }
    .content {
        grid-template-columns: 1fr;
        padding: 10px;
        border-radius: 5px;
        background-color: white;
    }
    .img-display {
        overflow: hidden;
        height: 300px;
    }
    .img-display img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .tour-details {
        padding-top: 10px;
    }
    .tour-details h3 {
        text-align: center;
        padding: 20px;
    }
    .tour-details p {
        font-size: .9em;
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
    @keyframes pageFade {
        0% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    }
</style>
