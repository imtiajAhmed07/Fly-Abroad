import React, { useState } from 'react';
import './HeaderModal.css'
import Modal from 'react-modal';
import ModalContent from './ModalContent';

const HeaderModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <button className="main-btn" onClick={() => setModalIsOpen(true)}>Book now</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() =>
                setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                    content: {
                        marginTop: '50px',
                        border: 'none',
                    }
                }}
            >
                <ModalContent modalClose={() =>setModalIsOpen(false)}></ModalContent>
            </Modal>
        </div>
    );
};

export default HeaderModal;