import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color : ${props => props.invalid ? 'red' : 'black'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     background: ${props => props.invalid ? '#ffd7d7' : 'transparent'}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={`${isValidInput ? "" : "invalid"} `}> Normal Way of using Styled Component  */}
      {/* Using props */}
      {/* <FormControl invalid={!isValidInput}> */}
      {/* <div className={`form-control ${isValidInput ? "" : "invalid"} `}> */}

      {/* Using CSS Component */}
      <div
        className={`${styles["form-control"]}  ${
          !isValidInput && styles.invalid
        }`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
