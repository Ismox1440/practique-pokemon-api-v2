import { setFilter, setPage } from "./index";

export const setFilterAction = (filter, filterNumber) => (dispatch) => {
  dispatch(setFilter({ filter, filterNumber }));
};

export const setPageAction = (page) => (dispatch) => {
    dispatch(setPage(page))
}