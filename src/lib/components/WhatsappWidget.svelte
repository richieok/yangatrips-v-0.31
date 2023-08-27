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
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100" height="100" viewBox="0 0 384 512">
            <g id="g1">
                <path bind:this={waIcon} class:tilt={false} d="M300.87 142.447c-29.943-30.014-69.819-46.522-112.196-46.522-87.47 0-158.645 71.176-158.645 158.646 0 27.941 7.289 55.24 21.152 79.323l-22.51 82.181 84.11-22.082c23.154 12.649 49.238 19.295 75.822 19.295h.071c87.398 0 160.147-71.176 160.147-158.646 0-42.377-18.009-82.181-47.951-112.195zM188.674 386.56c-23.725 0-46.95-6.36-67.174-18.366l-4.788-2.858-49.88 13.078 13.291-48.666-3.144-5.002c-13.22-21.01-20.152-45.236-20.152-70.176 0-72.677 59.17-131.848 131.919-131.848 35.23 0 68.317 13.721 93.186 38.661 24.87 24.94 40.162 58.027 40.09 93.258 0 72.749-60.67 131.92-133.348 131.92zm72.32-98.76c-3.93-2.001-23.44-11.577-27.084-12.864-3.645-1.357-6.289-2-8.933 2.001-2.644 4.002-10.219 12.864-12.577 15.58-2.287 2.643-4.645 3-8.576 1-23.296-11.649-38.59-20.796-53.954-47.165-4.073-7.004 4.074-6.503 11.649-21.653 1.286-2.644.643-4.931-.358-6.932-1-2.001-8.932-21.51-12.22-29.443-3.215-7.717-6.503-6.646-8.932-6.788-2.287-.143-4.931-.143-7.575-.143s-6.932 1-10.577 4.93c-3.644 4.002-13.863 13.578-13.863 33.087 0 19.51 14.22 38.376 16.15 41.02 2.001 2.644 27.942 42.662 67.746 59.885 25.155 10.862 35.017 11.791 47.594 9.933 7.646-1.143 23.44-9.576 26.727-18.866 3.287-9.29 3.287-17.222 2.286-18.866-.929-1.786-3.573-2.787-7.503-4.716z"/>
            </g>
            <g bind:this={xmarkIcon} class:xmark={false}>
                <path d="M313.832 168.456c10.383-10.382 10.383-27.243 0-37.626-10.382-10.382-27.243-10.382-37.625 0l-87.461 87.544-87.544-87.46c-10.383-10.383-27.243-10.383-37.626 0-10.382 10.382-10.382 27.243 0 37.625L151.12 256l-87.46 87.544c-10.383 10.382-10.383 27.243 0 37.626 10.382 10.382 27.243 10.382 37.625 0l87.46-87.544 87.545 87.46c10.382 10.383 27.243 10.383 37.625 0 10.383-10.382 10.383-27.243 0-37.625L226.371 256Z"/>
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
        /* background-color: rgba(255, 255, 255, 0.891); */
        background-color: green;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 10px 15px 10px rgba(59, 57, 57, 0.569);
        cursor: pointer;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: rgba(255, 255, 255, 0.891);
        stroke: rgba(255, 255, 255, 0.891);
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
