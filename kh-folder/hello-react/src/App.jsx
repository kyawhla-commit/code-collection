import { useRef, useState } from "react";

function Item({ item }) {
  return (
    <ul>
      <li>{item.name}</li>
    </ul>
  );
}
export default function App() {
  const inputRef = useRef();
  const [data, setData] = useState([
    { id: 3, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 1, name: "Egg" },
  ]);

  const add = () => {
    const name = inputRef.current.value;
    const id = data[0].id + 1;
    setData([{ id, name }, ...data]);
  };
  return (
    <div>
      <h1>Hello React </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
          e.currentTarget.reset();
        }}
      >
        <input type="text" ref={inputRef} />
        <button type="onSubmit">add</button>
      </form>
      {data.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
}
