import { typesUI as type } from './types';

const initState = {

    isInit: false,
    isDataLoaded: true,
    winData: [],
    totalValid: false,
    points: 0,
    errors: "",
    blocks: [
        {
            id: 1,
            isValid: true,
            cells: [
                {id: 101, checked: false, value: 1},
                {id: 102, checked: false, value: 2},
                {id: 103, checked: false, value: 3},
                {id: 104, checked: false, value: 4},
                {id: 105, checked: false, value: 5},
                {id: 106, checked: false, value: 6},
                {id: 107, checked: false, value: 7},
                {id: 108, checked: false, value: 8},
                {id: 109, checked: false, value: 9},
                {id: 110, checked: false, value: 10},
                {id: 111, checked: false, value: 11},
                {id: 112, checked: false, value: 12},
                {id: 113, checked: false, value: 13},
                {id: 114, checked: false, value: 14},
                {id: 115, checked: false, value: 15},
                {id: 116, checked: false, value: 16},
                {id: 117, checked: false, value: 17},
                {id: 118, checked: false, value: 18},
                {id: 119, checked: false, value: 19},
                {id: 120, checked: false, value: 20},
            ]
        },
        {
            id: 2,
            isValid: true,
            cells: [
                {id: 201, checked: false, value: 1},
                {id: 202, checked: false, value: 2},
                {id: 203, checked: false, value: 3},
                {id: 204, checked: false, value: 4},
                {id: 205, checked: false, value: 5},
                {id: 206, checked: false, value: 6},
                {id: 207, checked: false, value: 7},
                {id: 208, checked: false, value: 8},
                {id: 209, checked: false, value: 9},
                {id: 210, checked: false, value: 10},
                {id: 211, checked: false, value: 11},
                {id: 212, checked: false, value: 12},
                {id: 213, checked: false, value: 13},
                {id: 214, checked: false, value: 14},
                {id: 215, checked: false, value: 15},
                {id: 216, checked: false, value: 16},
                {id: 217, checked: false, value: 17},
                {id: 218, checked: false, value: 18},
                {id: 219, checked: false, value: 19},
                {id: 220, checked: false, value: 20},
            ]
        },
        {
            id: 3,
            isValid: true,
            cells: [
                {id: 301, checked: false, value: 1},
                {id: 302, checked: false, value: 2},
                {id: 303, checked: false, value: 3},
                {id: 304, checked: false, value: 4},
                {id: 305, checked: false, value: 5},
                {id: 306, checked: false, value: 6},
                {id: 307, checked: false, value: 7},
                {id: 308, checked: false, value: 8},
                {id: 309, checked: false, value: 9},
                {id: 310, checked: false, value: 10},
                {id: 311, checked: false, value: 11},
                {id: 312, checked: false, value: 12},
                {id: 313, checked: false, value: 13},
                {id: 314, checked: false, value: 14},
                {id: 315, checked: false, value: 15},
                {id: 316, checked: false, value: 16},
                {id: 317, checked: false, value: 17},
                {id: 318, checked: false, value: 18},
                {id: 319, checked: false, value: 19},
                {id: 320, checked: false, value: 20},
            ]
        },
        {
            id: 4,
            isValid: true,
            cells: [
                {id: 401, checked: false, value: 1},
                {id: 402, checked: false, value: 2},
                {id: 403, checked: false, value: 3},
                {id: 404, checked: false, value: 4},
                {id: 405, checked: false, value: 5},
                {id: 406, checked: false, value: 6},
                {id: 407, checked: false, value: 7},
                {id: 408, checked: false, value: 8},
                {id: 409, checked: false, value: 9},
                {id: 410, checked: false, value: 10},
                {id: 411, checked: false, value: 11},
                {id: 412, checked: false, value: 12},
                {id: 413, checked: false, value: 13},
                {id: 414, checked: false, value: 14},
                {id: 415, checked: false, value: 15},
                {id: 416, checked: false, value: 16},
                {id: 417, checked: false, value: 17},
                {id: 418, checked: false, value: 18},
                {id: 419, checked: false, value: 19},
                {id: 420, checked: false, value: 20},
            ]
        },
        {
            id: 5,
            isValid: true,
            cells: [
                {id: 501, checked: false, value: 1},
                {id: 502, checked: false, value: 2},
                {id: 503, checked: false, value: 3},
                {id: 504, checked: false, value: 4},
                {id: 505, checked: false, value: 5},
                {id: 506, checked: false, value: 6},
                {id: 507, checked: false, value: 7},
                {id: 508, checked: false, value: 8},
                {id: 509, checked: false, value: 9},
                {id: 510, checked: false, value: 10},
                {id: 511, checked: false, value: 11},
                {id: 512, checked: false, value: 12},
                {id: 513, checked: false, value: 13},
                {id: 514, checked: false, value: 14},
                {id: 515, checked: false, value: 15},
                {id: 516, checked: false, value: 16},
                {id: 517, checked: false, value: 17},
                {id: 518, checked: false, value: 18},
                {id: 519, checked: false, value: 19},
                {id: 520, checked: false, value: 20},
            ]
        },
    ],
};

export default (state = initState, action) => {

    const current = { ...action.payload };
    const blockId = `${current.id}`.slice(0,1);
    const isTotalValidArr = [...state.blocks].map(block => {
        const checked = block.cells.filter(item => item.checked === true).length + 1;
        if((`${block.id}` === blockId) && (checked > 5)) {
            return 1
        } else return 0
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const isTotalValid = isTotalValidArr.reduce(reducer);
    
    switch (action.type) {

        case type.FETCH_WINS_BEGIN:
            return {
                ...state,
                isInit: true,
            };

        case type.FETCH_WINS_SUCESS:
            return {
                ...state,
                isDataLoaded: true,
                winData: action.payload,
            };

        case type.FETCH_WINS_FAILURE:
            return {
                ...state,
                isDataLoaded: false,
                errors: action.payload,
            };

        case type.SUBMIT_BLOCKS:
            return {
                ...state,
                points: 10,
            };

        case type.CELL_TOGGLE:
            return {
                ...state,
                totalValid: isTotalValid === 0, 
                blocks: [...state.blocks].map(block => {
                    const checkedCells = block.cells.filter(item => item.checked === true).length + 1;
                    if(`${block.id}` === blockId) {
                        block.isValid = checkedCells <= 5;
                    };
                    [...block.cells].map(cell => {
                        if (cell.id === current.id && ((block.isValid) || (!block.isValid && cell.checked))) {
                            cell.checked = !cell.checked;
                            return cell
                        } else return cell
                    });
                    return block
                })
            };

        case type.ALERT_CLOSE:
            return {
                ...state,
                totalValid: isTotalValid === 0, 
                blocks: [...state.blocks].map(block => {
                    if(block.id === action.payload) {
                        block.isValid = true;
                        return block
                    } else return block
                })
            };

        default:
            return state;
    }
};