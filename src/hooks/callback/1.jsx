// 메모이제이션인데 함수 자체를 메모이제이션 하는 것
// 재랜더링될 때 함수가 다시 생성되어 저장되지 않게

import { useCallback, useEffect, useState } from "react";

function Callback1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`somFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("somFunction 변경");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call somFunc</button>
    </div>
  );
}

export default Callback1;
