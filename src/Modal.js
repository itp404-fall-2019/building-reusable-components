import React from 'react';

export default function Modal(props) {
  const { isOpen } = props;

  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="modal">
        <span className="close-button" onClick={props.onClose}>close</span>
        {props.children}
      </div>
    </>
  );
}