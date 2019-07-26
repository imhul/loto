import axios from 'axios';
import { typesUI as type } from './types';
import testData from "./testData";

const apiUri = ""; 

export function loadCells() {
  return (dispatch) => {
    dispatch({
      type: type.INIT_CELLS,
    })
  }
};

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
    //     console.warn(data);
    //     console.warn('success');
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

export function getPoints() {
  return (dispatch) => {
    dispatch({
      type: type.GET_TOTAL_POINTS,
    })
  }
};

export function openEndGameModal() {
  return (dispatch) => {
    dispatch({
      type: type.OPEN_END_GAME_MODAL,
    })
  }
};

export function closeEndGameModal() {
  return (dispatch) => {
    dispatch({
      type: type.CLOSE_END_GAME_MODAL,
    })
  }
};

export function startNewGame() {
  return (dispatch) => {
    
    dispatch({
      type: type.START_NEW_GAME,
    });
    dispatch(loadCells())
  }
};

export function clickMenu(menuItemKey) {
  return (dispatch) => {
    dispatch({
      type: type.MENU_ITEM_TOGGLE,
      payload: menuItemKey,
    })
  }
};
