import logo from "./logo.svg";
import InputName from "./hooks/state/1";
import CountEffect from "./hooks/effect/1";
import ShowTimer from "./hooks/effect/2";
import RefCount from "./hooks/ref/1";
import RefDOM from "./hooks/ref/4";
import IntroPage from "./hooks/context/1";
import Calc from "./hooks/memo/1";
import Memo2 from "./hooks/memo/2";
import Callback1 from "./hooks/callback/1";
import BoxIncrease from "./hooks/callback/2/2";
import Bank from "./hooks/reducer/1";
import AttendanceBook from "./hooks/reducer/2/2";

function App() {
  return (
    <div className="App">
      <AttendanceBook />
    </div>
  );
}

export default App;
