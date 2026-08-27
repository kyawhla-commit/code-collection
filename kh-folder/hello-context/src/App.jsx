import { useState, createContext, useContext } from "react";

const AppContext = createContext();

function Title() {
  const count = useContext(AppContext);
  return (
    <div>
      <h1>Hello Context ({count})</h1>
    </div>
  );
}

function Header() {
  return <Title />;
}
function Toolbar() {
  return <Header />;
}
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={count}>
      <Toolbar />
      <button
        onClick={()=> {
          setCount(count + 1);
        }}
      >Increase</button>
    </AppContext.Provider>
  );
}
