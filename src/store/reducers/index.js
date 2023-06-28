export default function reducer(state, action) {
    switch (action.type) {
        case "numberAdd2":
        return { ...state, number: parseInt(state.number) + 2 };
        case "login":
        return { ...state, user: { name: action.payload } };
        case "numberMult7":
            return { ...state, number: state.number * 7 }
        case "numberSplit25":
            return { ...state, number: state.number / 25 }
        case "convertNumber":
            return { ...state, number: parseInt(state.number) }
        case "addNumber":
            return { ...state, number: action.number };
        default:
        return state;
    }
}