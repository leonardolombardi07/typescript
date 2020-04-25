import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
  other?: boolean;
}

const App: FunctionComponent<AppProps> = (props) => {
  const [counter, setCounter] = useState(0);
  console.log(props.other);

  const onIncrement = () => setCounter(counter + 1);
  const onDecrement = () => setCounter(counter - 1);

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
};

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
