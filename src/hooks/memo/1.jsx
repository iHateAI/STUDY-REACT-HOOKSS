// easyNumber 상태가 변하면 컴포넌트가 업데이트 되고
// 컴포넌트 내부에 있는 hardSum도 계속해서 반복 호출됨
// 그렇기 때문에 easyNumber를 증가시켜도 똑같이 시간이 걸림
// easyNumber를 증가시킬 때 hardCalculate는 실행되지 않도록
// useMemo를 사용할 수 있음

import { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

function Calc() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  //const hardSum = hardCalculate(hardNumber);
  // hardNumber가 바뀔 때만 hardCalculate가 호출됨
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+ 1000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+ 1000 = {easySum}</span>
    </div>
  );
}

export default Calc;
