import { combineReducers } from "redux";
import { ModalAction, NavAction } from "../actions/actions";
import { NAV_ALL, NAV_TODAY, NAV_PRIVATE, MODAL_STATE } from "../actions/constants"
const initialState = {
    state: "today",
    modal_state: ""
};

const navreducer = (state = initialState, action: NavAction) => {
    switch (action.type) {
        case NAV_ALL:
            return { state : "today"}
        case NAV_TODAY:
            return { state : "all"}
        case NAV_PRIVATE:
            return { state : "private"}
        default:
            return state;
  }
};
const modalreducer = (state  = initialState, action: ModalAction) => {
    switch (action.type) {
        case MODAL_STATE:
            return { ...state, modal_state: action.modal_state}
        default:
            return state;
  }
};

export type RootState = ReturnType<typeof navreducer>;
const RootReducer=combineReducers({
    nav : navreducer,
    modal : modalreducer,
})
export default RootReducer;