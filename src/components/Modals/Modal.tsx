import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { ModalState } from "../../actions/actions";
import SayingModal from "./SayingModal";
import * as S from "./styles"
function Modal(){
    const modalstate = useSelector((state: RootState) => (state.modal.modal_state));
    const dispatch = useDispatch();
    return(
        <>
        {
            modalstate!=="" ? 
                <S.Modal_Container>
                    {
                        modalstate=="saying" ?
                            <SayingModal></SayingModal>
                        : null
                    }
                    <S.Modal_overlay onClick={()=>dispatch(ModalState(""))}></S.Modal_overlay>
                </S.Modal_Container>
            :null
        }
        </>
    )
}
export default Modal;