
import { GET_QUESTIONS } from "./actions";

const INIT_STATE = { questions: [], isSuccess: false };

const quizDataReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload.results,
                isSuccess: !action.payload.response_code
            };
        default:
            return state;
    }
}

export default quizDataReducer;