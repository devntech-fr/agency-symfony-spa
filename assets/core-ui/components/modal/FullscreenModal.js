import React, {useState} from "react";
import {CButton, CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/react";

const FullscreenModal = ({ title, children }) => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <CButton onClick={() => setVisible(!visible)}>{title}</CButton>
            <CModal alignment={"center"} fullscreen visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                    <CModalTitle>{title}</CModalTitle>
                </CModalHeader>
                <CModalBody>{children}</CModalBody>
            </CModal>
        </>
    )
}

export default FullscreenModal;
