<script>
    import DestinationDetails from "$lib/components/DestinationDetails.svelte"
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

<!-- {@html style} -->

<div class="page">
    <DestinationDetails {description} imgsrc={`${imgBucketPrefix}${name}/${pictures[0]}`} {message} alt="panaroma"/>
</div>

<style>
    .page {
        padding: 5px;
        min-height: clamp(500px, calc(100vh - var(--nav-height-mobile)), 800px);
        animation: pageFade 1s forwards;
    }
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
