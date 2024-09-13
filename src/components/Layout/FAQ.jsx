/* eslint-disable react/prop-types */
export const FAQ = ({ curData, isActive, onToggle }) => {
  const { question, answer } = curData;

  return (
    <li>
      <div className=" accordion-grid  ">
        <p className="accordion-question">{question}</p>
        <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
          {isActive ? "close" : "show"}{" "}
        </button>
      </div>
      {isActive && <p> {answer} </p>}
    </li>
  );
};
