import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useGetAllPokemonQuery } from "../../store/api/pokeapi";

import Card from "../Card";
import Pagination from "../Pagination";

const PokemonCards = () => {
  const navigation = useSelector(s => s.navigation)
  const { data, isLoading } = useGetAllPokemonQuery({ navigation });

  return (
    <>
    <Pagination />
    <SimpleGrid columns={5} minChildWidth={270} width="80%" mx="auto"  >
      {data?.results &&
        data.results.map((p) => {
          return <Card key={p.name} url={p.url} />;
        })}
      {data?.pokemon && data.pokemon.slice(navigation.page * 20, navigation.page * 20 + 20 ).map(p => <Card key={p.pokemon.name} url={p.pokemon.url} />)}
    </SimpleGrid >
    <Pagination />
    </>
  );
};

export default PokemonCards;
