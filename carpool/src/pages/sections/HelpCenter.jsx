import { useState } from "react";

export const HelpCenter = ({ curElem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => setIsExpanded(!isExpanded);

  return (
    
    <div className="container col">
      <div className="p-3 border-bottom h-100">
        <h6 className="fw-bold">{curElem.quest}</h6>

        <p className="text-muted">
          {isExpanded ? curElem.ans : `${curElem.ans.substring(0, 150)}...`}
        </p>

        <button
          onClick={toggleAnswer}
          className="btn btn-link p-0 text-primary text-decoration-none"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};
