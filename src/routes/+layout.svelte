<script>
    import "../app.css"
    import Nav from "$lib/components/Nav.svelte"
    import Footer from "$lib/components/Footer.svelte";
    import WhatsappWidget from "../lib/components/WhatsappWidget.svelte";
    export let data = []
    let {agents} = data
    // $:if(agents){
    //     console.log(agents);
    // }
</script>

<div>
    <Nav></Nav>
    <main>
        <slot></slot>
        <WhatsappWidget {agents}/>
    </main>
    <Footer/>
</div>

<style>
    div {
        background-image: linear-gradient(to right, hsl(0, 6%, 90%), hsl(0, 0%, 78%));

    }
    
    main {
        position: relative;
        padding-top: var(--nav-height-mobile);
    }

    @media (min-width: 510px){
        main {
            padding-top: var(--navBarHeight);
        }
    }
</style>