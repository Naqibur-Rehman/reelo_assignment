import { useRef, useState } from "react";

import Input from "./components/Input";
import Section from "./components/Section";

function App() {
  let numberOfEasyQues;
  let numberOfMediumQues;
  let numberOfHardQues;

  const [isGeneratePaper, setIsGeneratePaper] = useState(false);

  const easyPaperQuestionNumbers = useRef([]);
  const medPaperQuestionNumbers = useRef([]);
  const hardPaperQuestionNumbers = useRef([]);

  const genereteQuestionNumbers = () => {
    while (numberOfEasyQues > 0) {
      const index = Math.floor(Math.random() * 50);
      if (!easyPaperQuestionNumbers.current.includes(index)) {
        easyPaperQuestionNumbers.current.push(index);
        numberOfEasyQues--;
      }
    }

    while (numberOfMediumQues > 0) {
      const index = Math.floor(Math.random() * 30);
      if (!medPaperQuestionNumbers.current.includes(index)) {
        medPaperQuestionNumbers.current.push(index);
        numberOfMediumQues--;
      }
    }

    while (numberOfHardQues > 0) {
      const index = Math.floor(Math.random() * 20);
      if (!hardPaperQuestionNumbers.current.includes(index)) {
        hardPaperQuestionNumbers.current.push(index);
        numberOfHardQues--;
      }
    }
  };

  const inputFeedback = (level, value) => {
    if (level === "Easy") {
      numberOfEasyQues = value;
    } else if (level === "Medium") {
      numberOfMediumQues = value;
    } else if (level === "Hard") {
      numberOfHardQues = value;
    }
  };

  const inputValidator = () => {
    const total =
      numberOfEasyQues * 5 + numberOfMediumQues * 10 + numberOfHardQues * 15;
    if (total > 100) {
      window.alert("Total Percentage can not exceed 100.");
      return false;
    } else if (total < 100) {
      window.alert("Total Percentage must be equal to 100.");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValidator()) {
      genereteQuestionNumbers();
      setIsGeneratePaper(true);
    }
  };

  const resetPaper = () => {
    setIsGeneratePaper(false);
    easyPaperQuestionNumbers.current = [];
    medPaperQuestionNumbers.current = [];
    hardPaperQuestionNumbers.current = [];
  };

  return (
    <>
      <div className="instruction-container">
        <h1>Instructions</h1>
        <p>
          Input must follow the given rules as we have assumed paper of 100
          marks. Easy question are of 5 marks, medium 10 marks, hard 15 marks.
          If you provide any random value we can not calculate number of
          questions. For Example: 20% hard questions means 20 marks for hard
          questions which is not possible because 1 hard question is of 15
          marks.
        </p>
        <ul>
          <li>Give percentage of easy level in multiple of 5.</li>
          <li>Give percentage of medium level in multiple of 10.</li>
          <li>Give percentage of hard level in multiple of 15.</li>
        </ul>
      </div>

      <div className="form-container">
        <form className="input-container" onSubmit={submitHandler}>
          <Input level="Easy" setNumberOfQues={inputFeedback} />
          <Input level="Medium" setNumberOfQues={inputFeedback} />
          <Input level="Hard" setNumberOfQues={inputFeedback} />
          {!isGeneratePaper && <button type="submit">Generate Paper</button>}
          {isGeneratePaper && (
            <button type="button" onClick={resetPaper}>
              Reset Paper
            </button>
          )}
        </form>
      </div>

      <div>
        {isGeneratePaper && easyPaperQuestionNumbers.current.length > 0 && (
          <Section
            level="easy"
            marks={5}
            questionNumbers={easyPaperQuestionNumbers.current}
          />
        )}
        {isGeneratePaper && medPaperQuestionNumbers.current.length > 0 && (
          <Section
            level="medium"
            marks={10}
            questionNumbers={medPaperQuestionNumbers.current}
          />
        )}
        {isGeneratePaper && hardPaperQuestionNumbers.current.length > 0 && (
          <Section
            level="hard"
            marks={15}
            questionNumbers={hardPaperQuestionNumbers.current}
          />
        )}
      </div>
    </>
  );
}

export default App;
