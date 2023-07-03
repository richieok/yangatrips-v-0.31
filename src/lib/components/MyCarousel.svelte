<script>
    import { onMount } from "svelte";
    export let images = []
    let imgElems = []
    // let duration
    let imgDispTimeSecs = 4 * 1000  //Web Animations API timing is in milliseconds

    // $:  if (images.length > 1){
    //     duration = images.length * imgDispTimeSecs
    // }
    onMount(()=>{
        if (!(images.length > 1)){
            console.log('exiting onMount');
            return
        }
        let duration = images.length * imgDispTimeSecs
        let slice = (1 / images.length)
        let ramp = (0.11 * slice)
        let downRampSlice = Number((slice + ramp).toPrecision(4))
        let upRampSlice = Number((1 - ramp).toPrecision(4))
        for(let c = 0; c < imgElems.length; c++){
            let animation = [
                { opacity: 1},
                { opacity: 1, offset: Number(slice.toPrecision(4))},
                { opacity: 0, offset: downRampSlice},
                { opacity: 0, offset: upRampSlice},
                { opacity: 1},
            ]
            let timing = {
                duration,
                iterations: 'Infinity',
                delay:  (imgElems.length-c-1) * imgDispTimeSecs
            }
            imgElems[c].animate(animation, timing)
        }
    })
</script>

<div class="frame">
    <div class="slide">
        {#if images.length}
            {#each images as img, i}
                <img src="{img}" alt="slide" bind:this={imgElems[i]} >
            {/each}
        {/if}
    </div>
</div>

<style>
    .frame {
        position: relative;
        height: 100%;
        width: 100%;
        /* background: linear-gradient(45deg, blue, red); */
        overflow: hidden;
    }
    .slide {
        width: 100%;
        height: 100%;
    }
    .slide img{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        float: left;
    }
</style>