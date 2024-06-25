"use client";

import Modal from "react-modal";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

Modal.setAppElement("App");

const StyledModal = styled(Modal)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ErrorMessage = styled.h3`
  bottom: 0;
  font-size: 2rem;
`;

const ModalMessage = styled.h4`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const OKButton = styled(Button)`
  width: 10%;
  font-size: 1.5rem;
`;

interface AlertProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  modalMessage: string;
}

const ErrorIcon = <ErrorRoundedIcon style={{ fontSize: "3.5rem" }} color="error" />;

const DefaultModal: React.FC<AlertProps> = ({ closeModal, modalIsOpen, modalMessage }) => {
  return (
    <div id="App">
      <StyledModal
        //   appElement={document.getElementById("root") as HTMLElement}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        //   ariaHideApp={false}
        contentLabel="AlertModal"
      >
        <Title>
          {ErrorIcon}
          <ErrorMessage id="modal-title">警告</ErrorMessage>
        </Title>
        <ModalMessage>{modalMessage}</ModalMessage>
        <OKButton id="okButton" variant="contained" color="primary" onClick={closeModal}>
          OK
        </OKButton>
      </StyledModal>
    </div>
  );
};

export default DefaultModal;
