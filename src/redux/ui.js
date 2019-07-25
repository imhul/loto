import { typesUI as type } from './types';

const initState = {

    isInit: false,
    isDataLoaded: true,
    winData: [],
    totalValid: false,
    points: 0,
    errors: "",
    gameOver: false,
    blocks: [
        {
            id: 1,
            isValid: true,
            cells: [
                {id: 101, checked: false, value: 1, win: false},
                {id: 102, checked: false, value: 2, win: false},
                {id: 103, checked: false, value: 3, win: false},
                {id: 104, checked: false, value: 4, win: false},
                {id: 105, checked: false, value: 5, win: false},
                {id: 106, checked: false, value: 6, win: false},
                {id: 107, checked: false, value: 7, win: false},
                {id: 108, checked: false, value: 8, win: false},
                {id: 109, checked: false, value: 9, win: false},
                {id: 110, checked: false, value: 10, win: false},
                {id: 111, checked: false, value: 11, win: false},
                {id: 112, checked: false, value: 12, win: false},
                {id: 113, checked: false, value: 13, win: false},
                {id: 114, checked: false, value: 14, win: false},
                {id: 115, checked: false, value: 15, win: false},
                {id: 116, checked: false, value: 16, win: false},
                {id: 117, checked: false, value: 17, win: false},
                {id: 118, checked: false, value: 18, win: false},
                {id: 119, checked: false, value: 19, win: false},
                {id: 120, checked: false, value: 20, win: false},
            ]
        },
        {
            id: 2,
            isValid: true,
            cells: [
                {id: 201, checked: false, value: 1, win: false},
                {id: 202, checked: false, value: 2, win: false},
                {id: 203, checked: false, value: 3, win: false},
                {id: 204, checked: false, value: 4, win: false},
                {id: 205, checked: false, value: 5, win: false},
                {id: 206, checked: false, value: 6, win: false},
                {id: 207, checked: false, value: 7, win: false},
                {id: 208, checked: false, value: 8, win: false},
                {id: 209, checked: false, value: 9, win: false},
                {id: 210, checked: false, value: 10, win: false},
                {id: 211, checked: false, value: 11, win: false},
                {id: 212, checked: false, value: 12, win: false},
                {id: 213, checked: false, value: 13, win: false},
                {id: 214, checked: false, value: 14, win: false},
                {id: 215, checked: false, value: 15, win: false},
                {id: 216, checked: false, value: 16, win: false},
                {id: 217, checked: false, value: 17, win: false},
                {id: 218, checked: false, value: 18, win: false},
                {id: 219, checked: false, value: 19, win: false},
                {id: 220, checked: false, value: 20, win: false},
            ]
        },
        {
            id: 3,
            isValid: true,
            cells: [
                {id: 301, checked: false, value: 1, win: false},
                {id: 302, checked: false, value: 2, win: false},
                {id: 303, checked: false, value: 3, win: false},
                {id: 304, checked: false, value: 4, win: false},
                {id: 305, checked: false, value: 5, win: false},
                {id: 306, checked: false, value: 6, win: false},
                {id: 307, checked: false, value: 7, win: false},
                {id: 308, checked: false, value: 8, win: false},
                {id: 309, checked: false, value: 9, win: false},
                {id: 310, checked: false, value: 10, win: false},
                {id: 311, checked: false, value: 11, win: false},
                {id: 312, checked: false, value: 12, win: false},
                {id: 313, checked: false, value: 13, win: false},
                {id: 314, checked: false, value: 14, win: false},
                {id: 315, checked: false, value: 15, win: false},
                {id: 316, checked: false, value: 16, win: false},
                {id: 317, checked: false, value: 17, win: false},
                {id: 318, checked: false, value: 18, win: false},
                {id: 319, checked: false, value: 19, win: false},
                {id: 320, checked: false, value: 20, win: false},
            ]
        },
        {
            id: 4,
            isValid: true,
            cells: [
                {id: 401, checked: false, value: 1, win: false},
                {id: 402, checked: false, value: 2, win: false},
                {id: 403, checked: false, value: 3, win: false},
                {id: 404, checked: false, value: 4, win: false},
                {id: 405, checked: false, value: 5, win: false},
                {id: 406, checked: false, value: 6, win: false},
                {id: 407, checked: false, value: 7, win: false},
                {id: 408, checked: false, value: 8, win: false},
                {id: 409, checked: false, value: 9, win: false},
                {id: 410, checked: false, value: 10, win: false},
                {id: 411, checked: false, value: 11, win: false},
                {id: 412, checked: false, value: 12, win: false},
                {id: 413, checked: false, value: 13, win: false},
                {id: 414, checked: false, value: 14, win: false},
                {id: 415, checked: false, value: 15, win: false},
                {id: 416, checked: false, value: 16, win: false},
                {id: 417, checked: false, value: 17, win: false},
                {id: 418, checked: false, value: 18, win: false},
                {id: 419, checked: false, value: 19, win: false},
                {id: 420, checked: false, value: 20, win: false},
            ]
        },
        {
            id: 5,
            isValid: true,
            cells: [
                {id: 501, checked: false, value: 1, win: false},
                {id: 502, checked: false, value: 2, win: false},
                {id: 503, checked: false, value: 3, win: false},
                {id: 504, checked: false, value: 4, win: false},
                {id: 505, checked: false, value: 5, win: false},
                {id: 506, checked: false, value: 6, win: false},
                {id: 507, checked: false, value: 7, win: false},
                {id: 508, checked: false, value: 8, win: false},
                {id: 509, checked: false, value: 9, win: false},
                {id: 510, checked: false, value: 10, win: false},
                {id: 511, checked: false, value: 11, win: false},
                {id: 512, checked: false, value: 12, win: false},
                {id: 513, checked: false, value: 13, win: false},
                {id: 514, checked: false, value: 14, win: false},
                {id: 515, checked: false, value: 15, win: false},
                {id: 516, checked: false, value: 16, win: false},
                {id: 517, checked: false, value: 17, win: false},
                {id: 518, checked: false, value: 18, win: false},
                {id: 519, checked: false, value: 19, win: false},
                {id: 520, checked: false, value: 20, win: false},
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
                gameOver: true,
                blocks: [...state.blocks].map(block => {
                    const checkedArr = block.cells.filter(item => item.checked === true);
                    console.info("checkedArr: ", checkedArr);
                    // checkedArr.map(cell => {
                    //     if(block.id === state.winData.id) {
                    //         cell.win = true;
                    //         return cell
                    //     } else return cell
                        
                    // })
                    // [...block.cells].map(cell => {
                    //     if (cell.id === current.id && ((block.isValid) || (!block.isValid && cell.checked))) {
                    //         cell.checked = !cell.checked;
                    //         return cell
                    //     } else return cell
                    // });
                    return block
                })
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