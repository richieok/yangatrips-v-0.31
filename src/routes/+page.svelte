<script>
    import MyCarousel from "$lib/components/MyCarousel.svelte";
    import TextOverlay from "$lib/components/TextOverlay.svelte";
    export let data

    let mobileImages = []
    let deskImages = []

    $:if (data?.d_signed_urls){
        deskImages = data?.d_signed_urls
        // console.log(data.d_signed_urls);
    }
    $: if (data?.m_signed_urls){
        mobileImages = data.m_signed_urls
        // console.log(data.m_signed_urls);
    }

    // let mobileImages = [
    //     'https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/mobile1-pexels-alex-azabache-3723038.jpg',
    //     'https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/mobile2-pexels-oleksandr-pidvalnyi-2070485.jpg',
    //     'https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/mobile3-pexels-nextvoyage-3780224.jpg'
    // ]

    // let deskImages = [
    //     'https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/desktop2-pexels-addie-3152126+(1).jpg',
    //     'https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/desktop3-pexels-pixabay-2363.jpg',
    //     'https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/desktop4-pexels-sudipta-mondal-1603650.jpg'
    // ]
</script>

<div class="page">
    <div class="img-frame">
        <div class="narrow">
            <!-- <img src="{mobileImages[0]}" alt="doorway in marakesh"> -->
            {#if mobileImages?.length}
                <MyCarousel images={mobileImages}/>
            {/if}
            <TextOverlay message="Travel… see the world broaden your mind"/>
        </div>
        <div class="wide">
            {#if deskImages?.length}
                <MyCarousel images={deskImages}/>
            {/if}
            <TextOverlay message="Travel… see the world broaden your mind"/>
            <!-- <img src="{deskImages[0]}" alt="taiwan fake trees"> -->
        </div>
    </div>
</div>

<style>
    .page {
        /* min-height: 500px; */
        min-height: clamp(500px, calc(100vh - var(--nav-height-mobile)), 800px);
        display: grid;
        place-items: center;
        padding: 5px;
        animation: pageFade 1s forwards;
    }
    .narrow {
        display: block;
        width: 100%;
        height: 100%;
    }
    .wide {
        display: none;
    }
    .img-frame {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .img-frame img {
        /* display: block; */
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        float: left;
    }
    h2 {
        text-align: center;
    }
    
    @keyframes pageFade {
        0% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    }
    @media (min-width: 510px){
        .page {
            height: clamp(500px, calc(100vh - var(--navBarHeight)), 800px);
        }
        .narrow {
            display: none;
        }
        .wide {
            display: block;
            width: 100%;
            height: 100%;
        }
        .img-frame img {
            /* object-fit: contain; */
        }
    }
</style>