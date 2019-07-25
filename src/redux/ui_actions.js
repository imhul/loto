import axios from 'axios';
import { typesUI as type } from './types';
import testData from "./testData";

const apiUri = ""; 

export const fetchWinsBegin = () => ({
  type: type.FETCH_WINS_BEGIN
});

export const fetchWinsSuccess = wins => ({
  type: type.FETCH_WINS_SUCESS,
  payload: wins
});

export const fetchWinsFailure = errors => ({
  type: type.FETCH_WINS_FAILURE,
  payload: { errors }
});

export function submitSelectedCells(cells) {
  return (dispatch) => {
    dispatch({
      type: type.SUBMIT_BLOCKS,
      payload: cells,
    })
  }
};

export function loadWinData() {
  return (dispatch) => {
    dispatch(fetchWinsSuccess(testData)); // for test only!

    // !!! for real api request: !!! 
    //
    // dispatch(fetchWinsBegin());
    // return axios.get(apiUri)
    //   .then(({data}) => {
    //     console.log(data);
    //     console.log('success');
    //     dispatch(fetchWinsSuccess(data));
    //   })
    //   .catch(error => dispatch(fetchWinsFailure(error)));
  }
};

export function toggleCell(cell) {
  return (dispatch) => {
    dispatch({
      type: type.CELL_TOGGLE,
      payload: cell,
    })
  }
};

export function alertClose(blockId) {
  return (dispatch) => {
    dispatch({
      type: type.ALERT_CLOSE,
      payload: blockId,
    })
  }
};
