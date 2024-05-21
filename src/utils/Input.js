import React, { useState, useEffect, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const {
    id,
    name,
    label,
    type,
    placeholder,
    required,
    errorMessage,
    options,
    ...rest
  } = props;
  const [error, setError] = useState(false);

  const onBlurHandler = () => {
    if (ref.current.value == "") {
      setError(!ref.current.value);
    }
  };

  if (type === "radio" && options) {
    // Make sure to use a ref object to hold multiple refs for radio buttons
    return (
      <div className="form-group mb-4">
        <label className="block font-medium mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex space-x-4">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={option.value}
                name={name}
                value={option.value}
                ref={(el) => (ref.current[option.value] = el)}
                {...rest}
              />
              <label htmlFor={option.value} className="ml-2">
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {error && (
          <p className="font-bold text-red-600">
            {errorMessage || `${label} cannot be empty`}
          </p>
        )}
      </div>
    );
  }

  if (type === "select" && options) {
    return (
      <div className="form-group mb-4">
        <label htmlFor={id} className="block font-medium mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <select
          id={id}
          name={name}
          ref={ref}
          {...rest}
          className="border border-gray-300 rounded p-2 w-full"
        >
          {<option value="" disabled>{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="font-bold text-red-600">
            {errorMessage || `${label} cannot be empty`}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="form-group mb-4">
      <label htmlFor={id} className="block font-medium mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type || "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        onBlur={onBlurHandler}
        className="border border-gray-300 rounded p-2 w-full"
      />
      {error && (
        <p className="font-bold text-red-600">
          {errorMessage || `${label} cannot be empty`}
        </p>
      )}
    </div>
  );
});

export default Input;
