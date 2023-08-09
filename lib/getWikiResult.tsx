export default async function getWikiResult(searchTerm:string) {
    const searchParam = new URLSearchParams({
        action:'query',
        generator:'search',
        gsrsearch:searchTerm,
        gsrLimit:'20',
        prop:'pageimage | extracts',
        exchars:'100',
        exintro:'true',
        explaintext:'text',
        exlimit:'max',
        format:'json',
        origin:'*'
    })

    const rep = await fetch('https://en.wikipedia.org/w/api.php?' + searchParam)
    return rep.json()

}
