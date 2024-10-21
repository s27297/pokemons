import Image from 'next/image'
export default async function getPokemon({params}){
    const id=params.id
    const Abilityid=params.abilityId
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon=await fetch(url).then(r=>r.json())

    // console.log(pokemon.abilities[Abilityid].ability.name)
    return(
        <section>
            <p>name: {pokemon.name}</p>
            <ul>
                    <li >abilty: {pokemon.abilities[Abilityid].ability.name}</li>
            </ul>

        </section>
    )
}