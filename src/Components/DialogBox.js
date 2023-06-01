import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import SignUp from "../Pages/Auth/SignUp";

export default function DialogBox() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="dialogButton">
      <button onClick={openDialog}>Open Dialog</button>
      <div>
        <Modal className="modelDialog" isOpen={isOpen} onRequestClose={closeDialog} >
          <div className="model">
            <span className="closeButton">
              <AiOutlineClose onClick={closeDialog} />
            </span>
            <SignUp/>
          </div>
        </Modal>
      </div>
    </div>
  );
}
