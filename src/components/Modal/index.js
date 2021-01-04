import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

ReactModal.setAppElement('#root');

const Modal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  contentLabel,
  children,
}) => (
  <ReactModal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel={contentLabel}
  >
    {children}
  </ReactModal>
);

export default Modal;

Modal.propTypes = {
  modalIsOpen: PropTypes.bool,
  afterOpenModal: PropTypes.func,
  closeModal: PropTypes.func,
  customStyles: PropTypes.shape({
    content: PropTypes.objectOf(PropTypes.string),
    overlay: PropTypes.objectOf(PropTypes.string),
  }),
  contentLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  modalIsOpen: false,
  customStyles: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '500px',
      height: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      overflow: 'hidden',
    },
  },
  contentLabel: 'label',
  afterOpenModal: () => {},
  closeModal: () => {},
};
