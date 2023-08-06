// 오토 포커스도 useRef로 처리할 수 있음
// DOM에 효율적으로 접근할 수 있다.

import { useEffect, useRef } from "react";

const RefDOM = () => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const handleButton = () => {
    alert(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={handleButton}>로그인</button>
    </div>
  );
};

export default RefDOM;
