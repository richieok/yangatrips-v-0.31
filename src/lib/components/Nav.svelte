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
    let regTours = /^\/tours(?:\/[0-9a-zA-Z]+)?$/
    
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
        let b = a2.parentNode.getBoundingClientRect()
        // console.log(b);
        // console.log(`offsetLeft: ${x}. width: ${width}`);
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
    <div class="logo">
        <a href="/">
            <img src="/yanga-img.JPG" alt="logo" />
        </a>
    </div>
    <ul on:resize={ulResize}>
        <li>
            <!-- <div class="sweeper" style="left: {x - 150}px;width: {width}px"></div> -->
            <!-- <div class="sweeper"></div> -->
            <a class:active={$page.url.pathname ==='/'} href="/">Home</a>
        </li>
        <li><a class:active={regTours.test($page.url.pathname)} href="/tours">Tours</a></li>
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
        flex-direction: column;
        position: fixed;
        z-index: 3;
        padding: 5px;
        height: var(--nav-height-mobile);
        background-color: white;
        width: 100%;
    }
    .logo {
        width: 150px;
        height: 100%;
        margin: 0 auto;
        /* overflow: hidden; */
    }
    .logo img {
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
    }
    .logo a {
        display: grid;
        height: 100%;
        place-items: center;
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
        padding: .5em;
    }
    ul a, a:link, a:visited {
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
        font-weight: bold;
        background-color: goldenrod;
    }
    @media (min-width: 510px) {
        nav {
            flex-direction: row;
            height: var(--navBarHeight);
        }
        .logo {
            margin: 0;
        }
        ul li {
            
        }
    }
</style>
