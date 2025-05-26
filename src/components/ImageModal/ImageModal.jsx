import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

export default function ImageModal({ modalOpen, closeModal, selectedPhoto }) {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image Modal"
    >
      {selectedPhoto && (
        <div>
          <img
            src={selectedPhoto.urls.regular}
            alt={selectedPhoto.alt_description}
            className={css.image}
          />
          <div className={css.info}>
            <p>
              <span>Description: </span> {selectedPhoto.alt_description}
            </p>
            <p>
              <span>Author: </span>
              {selectedPhoto.user.username}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
}

ImageModal.PropTypes = {
  modalOpen: PropTypes.func,
  closeModal: PropTypes.func,
  selectedPhoto: PropTypes.object,
};
