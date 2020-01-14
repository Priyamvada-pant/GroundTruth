import axios from "axios";
export const GET_QUESTIONS = 'GET_QUESTIONS' // action type;

const rootURL = "https://opentdb.com/api.php";

// axios configuration
const axiosConfig = {
    headers: {
        "Content-Type": "application/JSON"
    }
};

export default function addUser(level, number) {
    let request = axios.get(`${rootURL}?amount=${number}&difficulty=${level}&type=boolean`, axiosConfig);
    return dispatch => {
        request
            .then(({ data }) => {

                dispatch({ type: GET_QUESTIONS, payload: data });
            })
            .catch(error => {
                dispatch({
                    type: GET_QUESTIONS, payload: error
                });
            });
    };
};