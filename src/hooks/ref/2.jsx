// 일반 변수는 재렌더링 되면 함수 자체가 재호출 되기 때문에 이것도 초기화됨
// 반면 useRef는 재렌더링 되어도 초기화 되지 않음 (마운트 ~ 언마운트 까지 유지)

import { useRef, useState } from "react";

const RefCount = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  const increaseCountVar = () => {
    countVar = countVar + 1;
  };

  const printResults = () => {
    console.log();
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
      <button onClick={increaseCountVar}>Var 올려</button>
    </div>
  );
};

export default RefCount;
