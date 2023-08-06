// useEffect 의존성 배열에 객체가 들어가면 의존성 배열에 없는 다른 상태를 변경해도
// useEffect가 실행됨
// useMemo로 location가 재랜더링되어도 새로 만들어지지 않도록 메모이제이션 해야됨

import { useEffect, useMemo, useState } from "react";

function Memo2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // {
  //   contry: isKorea ? "한국" : "외국",
  // };

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.contry}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default Memo2;
