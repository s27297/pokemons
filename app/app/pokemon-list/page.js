import {console} from "next/dist/compiled/@edge-runtime/primitives";


var qwertry=[]

export  default  async function sort({searchParams}) {
    let i=0
    const type =searchParams.type || 'any'
    const sort = searchParams.sort || 'start'
    console.log(type)
    // qwertry=['cat']
    console.log(sort)
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

   handle(pokemon.results,type)
  //   let array
  //   array=[]
  //  await cat.then(q=>array.push(q))
  // await  console.log(array)
  //  console.log(qwertry)
    return(<ul>
        pokemons
        {/*{cat.then(q=><li key={q}>{q}</li>)}*/}
        {qwertry.map(q=><li key={++i}>{q}</li>)}
    </ul>)
     // return (<ul><Handle cat={pokemon.results} search={type} /></ul>)
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
     qwertry.push("type: \t "+search+"                  ")
   let array=[]

         cat.map(async q => {
        const url = q.url
        const pokemon = await fetch(url).then(r => r.json()).catch(e=>console.log("nie udalo"))
      await pokemon.types.map(async ty => {
          if (ty.type.name === search) {
             // await console.log(pokemon.name)
              qwertry.push(pokemon.name)



          }
      })})


        // console.log(search)
        // pokemon.types.map(async q => {
        //     await console.log(q)
      /*      if(search === q.type.name)
            console.log(pokemon.name)*/
            // return(<li key={pokemon.name}>pokemon.name</li>)
        //s// })
    //


}