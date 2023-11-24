import { useEffect, useState } from "react";
import { validate } from "../utils/validator";


const Input = (props) => {
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  let marks = 0;
  if (props.level === "Easy") marks = 5;
  else if (props.level === "Medium") marks = 10;
  else if (props.level === "Hard") marks = 15;

  useEffect(() => {
    if(isValid)
      props.setNumberOfQues(props.level, value / marks);
  }, [value, marks, props, isValid])

  const handleInput = (e) => {
    setValue(e.target.value);
    const { valid, message } = validate(e.target.value, marks)
    setIsValid(valid)
    setErrorMessage(message)
  };

  return (
    <div className="custom-input">
      <label>
        {props.level}:{" "}
        <input
          id={props.level}
          type="number"
          name="myInput"
          value={value}
          placeholder={props.level}
          onChange={(e) => handleInput(e)}
        />
      </label>
      {!isValid && <p className="error-text">* {errorMessage}</p>}
    </div>
  );
};

export default Input;
