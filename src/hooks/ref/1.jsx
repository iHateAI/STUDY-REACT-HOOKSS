// useRef는 컴포넌트의 전 생애주기 동안 유지됨
// 즉 재랜더링 되어도 초기화 되지 않음
// 재랜더링이 필요 없거나 재랜더링 되어도 초기화되지 않고 값을 유지할 때 사용

// 또는 DOM 요소에 접근할 떄 사용

import { useRef, useState } from "react";

const RefCount = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default RefCount;
