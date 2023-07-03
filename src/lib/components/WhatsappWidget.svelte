<script>
    export let agents = [];
    let waIcon, xmarkIcon, waTogglePane;
    const togglePopup = () => {
        waIcon.classList.toggle("tilt");
        xmarkIcon.classList.toggle("xmark");
        waTogglePane.classList.toggle("pop-up");
    };
</script>

<div class="widget">
    <button on:click={togglePopup}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g id="g1">
                <path
                    bind:this={waIcon}
                    class:tilt={false}
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
            </g>
            <g bind:this={xmarkIcon} class:xmark={false}>
                <path
                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                />
            </g>
        </svg>
    </button>
    <div class="wa-toggle-pane" bind:this={waTogglePane} class:pop-up={false}>
        <h3>Start a conversation</h3>
        {#each agents as agent}
            <a target="_blank" href="https://wa.me/{agent.phone}">
                <div class="agent-card"><p>Chat with {agent.name}</p></div>
            </a>
        {/each}
    </div>
</div>

<style>
    .widget {
        --popup-width: 250px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 70px;
        height: 70px;
    }
    button {
        width: 100%;
        height: 100%;
        border: none;
        background-color: rgba(255, 255, 255, 0.891);
        border-radius: 50%;
        padding: 10px;
        box-shadow: 10px 15px 10px rgba(59, 57, 57, 0.569);
    }

    svg {
        width: 100%;
        height: 100%;
        fill: green;
        stroke: green;
        stroke-width: 10;
    }
    path,
    g {
        transition: all 0.5s;
        transform-origin: center;
    }
    .tilt {
        rotate: 90deg;
        opacity: 0;
    }
    g {
        opacity: 0;
    }
    g > path {
        rotate: -90deg;
    }
    #g1 {
        opacity: 1;
        rotate: 90deg;
    }
    .xmark {
        opacity: 1;
    }
    .xmark path {
        rotate: 0deg;
    }
    .wa-toggle-pane {
        position: absolute;
        overflow: hidden;
        z-index: -1;
        width: var(--popup-width);
        right: 0;
        top: 50px;
        background-color: hsl(204, 53%, 75%);
        transition: all 0.5s;
        border-radius: 1em;
        opacity: 0;
    }
    .pop-up {
        translate: 0 calc(-100% - 50px);
        opacity: 1;
    }
    .wa-toggle-pane h3 {
        background-color: rgba(22, 135, 22, 0.956);
        font-weight: lighter;
        padding: 0.7em;
        margin-bottom: 0.5em;
        text-align: center;
    }
    .wa-toggle-pane a {
        text-decoration: none;
    }
    .wa-toggle-pane a,
    a:link,
    a:visited {
        color: black;
    }

    .agent-card {
        padding: 1em;
        border-radius: 0.5em;
        border-left: 3px green solid;
        background-color: whitesmoke;
        margin: 0 0.5em 0.5em;
    }

    @media (min-width: 510px) {
        .wa-toggle-pane {
            top: 70px;
        }
        .pop-up {
            translate: 0 calc(-100% - 70px);
        }
    }
</style>
