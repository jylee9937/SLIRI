import "./App.css";
import ImageClassifier from "./ImageClassifier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import assistant from "./Google_Assistant_logo.png";

function App() {
  return (
    <div>
      <div>
        <div className="background">
          <div className="section__webcam">
            <div className="title">
              <h2>SLIRI</h2>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <ImageClassifier />
            <div className="desc">(수어에 대한 자막)</div>
          </div>
          <div className="section__assistant">
            <ul>
              <li>
                <img src={assistant} className="assistant" />
                <p>안녕하세요? 무엇을 도와드릴까요?</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
