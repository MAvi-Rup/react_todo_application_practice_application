/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AttachmentModal = ({ isOpen, onClose, task }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Attachment Modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-4 rounded-md w-full max-w-md">
        <button className="float-right" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="text-lg font-bold mb-4">Upload Attachments</h2>
        <input type="file" multiple onChange={handleFileChange} />
        <ul className="mt-4 space-y-2">
          {files.map((file, index) => (
            <li key={index} className="flex justify-between">
              <span>{file.name}</span>
              <span>{file.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default AttachmentModal;
