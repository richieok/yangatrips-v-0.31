<script>
    import {onMount} from "svelte"
    import {afterNavigate} from "$app/navigation"
    import {page} from "$app/stores"
    // import {navData} from "./mystores";
    // const logo =
    //     "https://s3.eu-west-3.amazonaws.com/yangatrips.com/images/1ed133ba-f9ac-4c94-accc-7bbe0b4d1be3.JPG";

    // const phone = "+234 803 888 5165";
    let x = 0
    let width;
    let regAbout = /^\/about(?:\/[0-9a-zA-Z]+)?$/
    
    afterNavigate(()=>{
        updateMenuList()
        // let a2 = document.querySelector(`a.active`)
        // width = a2.parentNode.clientWidth
        // x = a2.parentNode.offsetLeft
    })
    const updateMenuList = ()=>{
        let a2 = document.querySelector(`a.active`)
        if (!a2){
            return
        }
        width = a2.parentNode.clientWidth
        x = a2.parentNode.offsetLeft
    }
    const ulResize = ()=>{
        console.log('ul resize');
        updateMenuList()
    }
    onMount(()=>{
        updateMenuList()
    })
</script>

<nav>
    <!-- <div class="logo">
        <img src={logo} alt="logo" />
    </div> -->
    <ul on:resize={ulResize}>
        <li>
            <div class="sweeper" style="left: {x}px;width: {width}px"></div>
            <a class:active={$page.url.pathname ==='/'} href="/">Home</a>
        </li>
        <li><a class:active={regAbout.test($page.url.pathname)} href="/about">About Us</a></li>
        <!-- <li><a class:active={/^\/tours(?:\/[0-9a-zA-Z]+)?$/.test('/tours')} href="/tours">Tours</a></li> -->
    </ul>
    <!-- <div class="phone">
        {phone}
    </div> -->
</nav>

<style>
    nav {
        display: flex;
        position: fixed;
        z-index: 3;
        background-color: white;
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    ul li {
        position: relative;
        list-style: none;
        display: grid;
        place-content: center;
    }

    ul a {
        text-decoration: none;
        padding: 1em;
    }
    a, a:link, a:visited {
        color: var(--defaultTextColor);
    }
    .sweeper {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -2;
        background-color: mediumpurple;
        transition: left 1s, width 1s;
    }
    a.active {
        font-weight: bolder;
    }
    @media (min-width: 510px) {
        nav {
            
        }
        ul li {
            
        }
    }
</style>
