import React from 'react';

const CustomInput = ({ isIcon = false, icon, isButton = false, buttonText, placeholder, inputType, id, noOfCols, value, onChange }) => {
    return (
        <div className={`col-md-${noOfCols}`}>
            <div className="form-group mt-5">
                <div className="input-group">
                    <div className="input-group-prepend">
                        {isIcon && (
                            <span>
                                <img src={icon} alt="" />
                            </span>
                        )}
                        {isButton && (
                            <button
                                className="dropdown-toggle p-2"
                                style={{ backgroundColor: '#149644', color: 'white', border: 'none' }}
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {buttonText}
                            </button>
                        )}
                    </div>
                    <input
                        type={inputType}
                        className="form-control text-center"
                        id={id}
                        placeholder={placeholder}
                        value={value} // Add value prop
                        onChange={onChange} // Add onChange prop
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomInput;
