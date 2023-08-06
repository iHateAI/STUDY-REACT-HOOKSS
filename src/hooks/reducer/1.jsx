// useState처럼 상태를 생성하고 관리하는 훅
// 여러 개의 하위 값을 포함하는 복잡한 상태를 다뤄야할 때 사용
// Dispatch: Reducer에게 상태 업데이트 요청
// Action: Dispatch의 내용
// Reducer: 스테이트를 업데이트 해줌 (은행)

// reducer 내부에는 switch나 if 같은 분기문을 많이 사용함

const { useState, useReducer } = require("react");

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다.", state, action);

  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state === 0 ? state : state - action.payload;
    default:
      return state;
  }
};

function Bank() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default Bank;
