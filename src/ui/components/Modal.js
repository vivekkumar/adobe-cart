import React, { useState } from "react";

export default ({ children, show, id, onHide }) => {
  const [isShow, setIsShow] = useState(show);

  const handleClose = e => {
    if (e.target.id == id) {
      setIsShow(false);
      onHide();
    }
  };

  return (
    <div
      id={id}
      className={`modal ${isShow ? "show fade d-block" : "d-none"}`}
      onClick={handleClose}
    >
      <div className="content mx-a w-40">{children}</div>
    </div>
  );
};
