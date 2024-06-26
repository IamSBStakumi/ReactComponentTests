import Modal from "react-modal";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 25%;
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
  margin-bottom: 2vw;
`;

const ErrorMessage = styled.h3`
  bottom: 0;
  font-size: 2vw;
`;

const ModalMessage = styled.h4`
  text-align: center;
  opacity: 0.5;
  font-size: 1.3vw;
  margin-bottom: 1.5vw;
`;

const OKButton = styled(Button)`
  width: 10%;
  height: 20%;
  align-self: flex-end;
`;

const OK = styled.text`
  font-size: 1vw;
`;

interface AlertProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  modalMessage: string;
}

const ErrorIcon = <ErrorRoundedIcon style={{ fontSize: "3.5vw" }} color="error" />;

const DefaultModal: React.FC<AlertProps> = ({ closeModal, modalIsOpen, modalMessage }) => {
  return (
    <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="AlertModal">
      <Title>
        {ErrorIcon}
        <ErrorMessage id="modal-title">警告</ErrorMessage>
      </Title>
      <ModalMessage>{modalMessage}</ModalMessage>
      <OKButton id="okButton" variant="contained" color="primary" onClick={closeModal}>
        <OK>OK</OK>
      </OKButton>
    </StyledModal>
  );
};

export default DefaultModal;
