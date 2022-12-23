import React from 'react'
import { useSelector } from 'react-redux';
import { useGetAllPokemonQuery } from '../../store/api/pokeapi';
import PokemonCards from '../PokemonCards'

const Home = () => {
    const navigation = useSelector(s => s.navigation)
    const { data, isLoading } = useGetAllPokemonQuery({ navigation });
  return (
    <PokemonCards data={data}/>
  )
}

export default Home