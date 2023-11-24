import { QuestionBank } from "../utils/QuestionBank";
import Question from "./Question";

const Section = ({ level, marks, questionNumbers }) => {
  return (
    <div className="section-container">
      <div className="section-detail">
        <h2>{level}</h2>
        <h5>Marks: {marks}</h5>
      </div>
      {questionNumbers?.map((number, index) => {
        let question;
        let subject;
        let topic;
        if (level === "easy") {
          question = QuestionBank.easy[number].question;
          subject = QuestionBank.easy[number].subject;
          topic = QuestionBank.easy[number].topic;
        } else if (level === "medium") {
          question = QuestionBank.medium[number].question;
          subject = QuestionBank.medium[number].subject;
          topic = QuestionBank.medium[number].topic;
        } else if (level === "hard") {
          question = QuestionBank.hard[number].question;
          subject = QuestionBank.hard[number].subject;
          topic = QuestionBank.hard[number].topic;
        }
        return (
          <Question
            key={`${level} ${number}`}
            snumber={index}
            question={question}
            subject={subject}
            topic={topic}
          />
        );
      })}
    </div>
  );
};

export default Section;
