"use client";

import { useState } from "react";
import DefaultModal from "@/components/Modal";

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
    <>
      <button onClick={handleClick}>モーダルオープン</button>
      <DefaultModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalMessage={modalMessage} />
    </>
  );
};

export default Page;
