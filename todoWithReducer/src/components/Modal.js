import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="modal fade show" id="exampleModalLive" tabIndex="-1" aria-labelledby="exampleModalLiveLabel"
             style={{display: 'block'}} aria-modal="true" role="dialog" onClick={props.onDismiss}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLiveLabel">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={props.onDismiss}></button>
                    </div>
                    <div className="modal-body">
                        <p>{props.content}</p>
                    </div>
                    <div className="modal-footer">
                        {props.actions}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;