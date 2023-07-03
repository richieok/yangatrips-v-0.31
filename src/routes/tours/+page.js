export const load = async ({fetch})=>{
    const destinations = await fetch('/api/destinations')
    const j = await destinations.json()
    // console.log(j);
    return {
        destinations: j
    }
}