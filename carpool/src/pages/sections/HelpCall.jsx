import HelpData from "../apis/help.json";
import { HelpCenter } from "./HelpCenter";
const HelpCall = () => {
  return (
    <div className="container py-4 mb-5">
      <h1 className="text-center mb-5">Daily Drive Help Center</h1>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {HelpData.map((curElem) => (
          <HelpCenter key={curElem.id} curElem={curElem} />
        ))}
      </div>
    </div>
  );
};

export default HelpCall;
