import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import { RiBarcodeBoxLine } from "react-icons/ri";
const icons = {
  username: <FaUserAlt color="grey" />,
  password: <GoKey color="grey" />,
  schoolCode: <RiBarcodeBoxLine color="grey" />,
};

const InputField = (props) => {
  let { placeholder, name, handleChange, value } = props;
  let icon = icons[name];
  return (
    <InputGroup size="lg" style={{ width: "75%" }} className="mb-3">
      <i style={{ position: "absolute", padding: "10px", zIndex: 1 }}>
        {icon}
      </i>
      <FormControl
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
        type={name}
        required
        style={{
          paddingLeft: "40px",
          boxShadow: "0px 3px 6px #00000029",
          borderRadius: "10px",
        }}
      />
    </InputGroup>
  );
};

export default InputField;
