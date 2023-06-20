
export async function load({fetch}) {

    const response = await fetch('/api/get-agents')
    let agents = await response.json()

    // console.log(agents);
    return {
        agents
    }
}