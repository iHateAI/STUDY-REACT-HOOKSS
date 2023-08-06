import { useEffect, useRef, useState } from "react";

const RefCount = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount.current);
  });

  // 이렇게 짜면 무한으로 재랜더링 되어서 무한 루프에 빠짐
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   console.log("렌더링");
  //   setRenderCount(renderCount + 1);
  // });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};

export default RefCount;
