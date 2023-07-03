<script>
    import DestinationCard from "$lib/components/DestinationCard.svelte";

    export let data

    let imgBucketPrefix = "https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/"
    let basePic = "773c2856bf.jpg"
</script>

<div class="page">
    <div class="tours-display">
        <!-- <div class="tour-card">
            <a href="/tours/zanzibar">
                <img src={imgBucketPrefix+"zanzibar/"+basePic} alt="">
            </a>
            <h3>Discover Zanzibar</h3>
            <a class="button" href="/tours/zanzibar">View</a>
        </div> -->
        {#each data.destinations as {name, pictures, base_pic, message}}
            <DestinationCard img={imgBucketPrefix+name+"/"+base_pic} {message} url={"/tours/"+name}/>
        {/each}
    </div>
</div>

<style>
    .page {
        padding: 5px;
        min-height: clamp(500px, calc(100vh - var(--nav-height-mobile)), 800px);
        animation: pageFade 1s forwards
    }
    .tours-display {
        display: grid;
        place-items: center;
        row-gap: 20px;
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
        .tours-display {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
