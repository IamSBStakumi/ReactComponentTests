"use client";

import Modal from "react-modal";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

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

const ErrorIcon = <ErrorRoundedIcon style={{ fontSize: "3.5rem" }} color="error" />;

export { StyledModal, Title, ModalMessage, ErrorMessage, OKButton, ErrorIcon };
