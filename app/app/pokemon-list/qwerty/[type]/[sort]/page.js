


var qwertry=[]

export  default  async function sort({params}) {
    const type =params.type || 'any'
    const sort = params.sort || 'start'
    const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
    const pokemon = await fetch(url).then(r => r.json())
    // console.log(type);
    if (type === 'any' && sort === "start") {
        return (<div>
            <ul>
                <li>pokemons:</li>
                {pokemon.results.map(q => <li key={q.name}>{q.name}</li>)}
            </ul>
        </div>)
    }

    if (type === 'any' && sort === "end") {
        return (<div>
            <ul>
                <li>pokemons:</li>
                {pokemon.results.reverse().map(q => <li key={q.name}>{q.name}</li>)}
            </ul>
        </div>)
    }
    return (<p>cat</p>)
    // return <ul>Handle(pokemon,type,qwertry)</ul>
    // console.log(qwertry)
    // const cat=pokemon.results.filter(q=>(q.name===type))
    // // console.log(pokemon.results.types)
    // console.log(qwertry.length)
    // return (<div>
    //     <ul>
    //         <li>pokemons:</li>
    //         {qwertry.map(q=><li key={q}>{q}</li>)}
    //     </ul>
    // </div>)
}

async function  handle(cat,search){
    cat.results.map(async q => {
        const url = q.url
        const pokemon = await fetch(url).then(r => r.json())
        // console.log(search)
        pokemon.types.map(q => {if(
            search === q.type.name)
            return(<li key={pokemon.name}>pokemon.name</li>)
        })

    })
}