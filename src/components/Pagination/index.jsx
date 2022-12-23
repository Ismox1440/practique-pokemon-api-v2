import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllPokemonQuery } from "../../store/api/pokeapi";
import { setPageAction } from "../../store/slices/navigation/actions";

export default function Pagination() {
  const navigation = useSelector((s) => s.navigation);
  const { data } = useGetAllPokemonQuery({ navigation });
  const pageCount = data?.results
    ? Math.ceil(data.count / 20)
    : data?.pokemon
    ? Math.ceil(data.pokemon.length / 20)
    : 0;
  const dispatch = useDispatch();
 
  const handlepage = (event) => {
    dispatch(setPageAction(event.selected));
  };



  return (
    <>
   

      <ReactPaginate
        breakLabel={null}
        nextLabel="next"
        onPageChange={handlepage}
        pageRangeDisplayed={4}
    
        pageCount={pageCount}
        previousLabel="prev"
        renderOnZeroPageCount={null}
        className="button"
        nextLinkClassName="page-num-next"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num-next"
        activeLinkClassName="page-num-active"
        marginPagesDisplayed={1}
      />
   
    </>
  );
}
