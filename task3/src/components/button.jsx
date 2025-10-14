import React from 'react';

const MyButton = ({ label, onClick, type = 'button', style = {} }) => {
  return (
    <div className="float-left m-2 ">
          <button type={type} onClick={onClick} style={style} className="size-15  ">
            {label}
          </button>
    </div>

  );
};

export default MyButton;
