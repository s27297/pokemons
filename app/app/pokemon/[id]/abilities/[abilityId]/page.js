import Image from 'next/image'
import {generate} from '../../../../generate/generate';
export async function generateMetadata({params}){
    const {id,abilityId}=params
    return {
        title:`ability numer ${abilityId} pokemona pod id ${id}`,
        description:`ability numer ${abilityId} pokemona pod id ${id}`
    }
}
export default async function getPokemon({params}){
    const id=params.id
    const Abilityid=params.abilityId
  //  await generate(`ability numer ${Abilityid} pokema pod id ${id}`)

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