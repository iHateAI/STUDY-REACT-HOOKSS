const { useState } = require("react");

function InputName() {
  const [names, setNames] = useState(() => ["홍길동", "김민수"]);
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const submitHandler = (event) => {
    setNames((prevState) => {
      return [...prevState, input];
    });
    setInput("");
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} value={input} />
      <button onClick={submitHandler}>upload</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}

export default InputName;
