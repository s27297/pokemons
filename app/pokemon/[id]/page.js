import Image from 'next/image'
export default async function getPokemon({params}){
    const id=params.id
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
   const pokemon=await fetch(url).then(r=>r.json())

    return(
        <section>
            <p>name: {pokemon.name}</p>
            <ul>
                <li>stats</li>
                {pokemon.stats.map(r=><li key={r.stat.name}>{r.stat.name} : {r.base_stat}</li>)}
            </ul>
            <ul>
                <li>abilities</li>

                {pokemon.abilities.map(abilit=>
                <li key={abilit.ability.name}>abilty: {abilit.ability.name }</li>)}

            </ul>
            {/*<Image*/}
            {/*    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}*/}

            {/*    objectFit='cover'*/}
            {/*    alt='pokemon'*/}
            {/*    width={500}*/}
            {/*    height={500}*/}

            {/*></Image>*/}
        </section>
    )
}