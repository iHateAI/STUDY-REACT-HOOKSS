const { useState, useEffect } = require("react");

function CountEffect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("렌더링 됨");
  },);

  return (
    <div>
      <div>
        <button onClick={handleCountUpdate}>Update</button>
        <span>count: {count}</span>
      </div>
      <div>
        <input type="text" value={name} onChange={handleChangeName} />
        <span>name: {name}</span>
      </div>
    </div>
  );
}

export default CountEffect;
