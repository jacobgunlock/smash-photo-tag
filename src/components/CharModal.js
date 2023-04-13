import React from 'react'

export const CharModal = (props) => {
  const { displayModal, modalPosition } = props;
  return displayModal ? (
    <div
    className="modal-container"
    style={{position: 'fixed', top: modalPosition.y, left: modalPosition.x, backgroundColor: 'red' }}
  >
    <div className="modal-content">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
  </div>
) : null;  
}
