import { NAV_PRIVATE, NAV_TODAY, NAV_ALL, MODAL_STATE } from "../actions/constants"
export const SetNav_All = () => {
    return { type: NAV_PRIVATE};
};
export const SetNav_Private = ()=>{
    return { type: NAV_TODAY};
}
export const SetNav_Today = () => {
    return { type: NAV_ALL};
};
  
export const ModalState = (set : string)=>{
    return { type: MODAL_STATE, modal_state: set }
}
export type NavAction =
| ReturnType<typeof SetNav_All>
| ReturnType<typeof SetNav_Private>
| ReturnType<typeof SetNav_Today>

export type ModalAction = 
| ReturnType<typeof ModalState>