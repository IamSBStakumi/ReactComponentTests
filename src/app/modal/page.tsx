"use client";

import { useState } from "react";
import { StyledModal, Title, ModalMessage, ErrorMessage, OKButton, ErrorIcon } from "@/components/Modal";

const Page = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); //アラートに表示するエラーメッセージ

  const handleClick = () => {
    setModalMessage("モーダルオープン"); //エラーメッセージを設定
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="ModalPage">
      <button onClick={handleClick}>モーダルオープン</button>
      <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
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

export default Page;
