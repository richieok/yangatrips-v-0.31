<script>
    import "../app.css"
    import Nav from "$lib/components/Nav.svelte"
    import Footer from "$lib/components/Footer.svelte";
    import WhatsappWidget from "../lib/components/WhatsappWidget.svelte";
    export let data = []
    let {agents} = data
    $:if(agents){
        console.log(agents);
    }
</script>

<Nav></Nav>
<main>
    <slot></slot>
    <WhatsappWidget {agents}/>
</main>
<Footer/>

<style>
    /* main {
        height: 100vh;
        padding-top: calc(var(--row1) + var(--row2));
        background-color: black;
    }
    @media (min-width: 510px){
        main {
            padding-top: var(--navBarHeight);

        }
    } */
    main {
        position: relative;
        /* height: 100vh; */
        padding-top: calc(2em + 1.5em);
    }
</style>