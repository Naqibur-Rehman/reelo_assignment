const Question = ({ question, subject, topic, snumber }) => {
  return (
    <div className="question-container">
      <div>
        <h3>
          Ques {snumber + 1}: {question}
        </h3>
        <ul>
          <li>Subject: {subject}</li>
          <li>Topic: {topic}</li>
        </ul>
      </div>
    </div>
  );
};

export default Question;
