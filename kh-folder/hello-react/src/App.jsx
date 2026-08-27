import { useRef, useState } from "react";

import Item from "./Item";
import Header from "./Header";

import {
  Container,
  Divider,
  IconButton,
  List,
  OutlinedInput,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export default function App() {
  const inputRef = useRef();
  const [data, setData] = useState([
    { id: 3, name: "Apple", done: false },
    { id: 2, name: "Orange", done: true },
    { id: 1, name: "Egg", done: true },
  ]);

  const add = () => {
    const name = inputRef.current.value;
    const id = data[0] ? data.id + 1 : 1;
    setData([{ id, name }, ...data]);
  };

  const toggle = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) item.done = !item.done;
        return item;
      }),
    );
  };

  // const del = (id) => {
  //   setData(data.filter(item => (item.id = !id)));
  // };
  const del = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <div>
      <Header count={data.filter((item) => !item.done).length} />
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add();
            e.currentTarget.reset();
          }}
        >
          <OutlinedInput
            fullWidth
            type="text"
            inputRef={inputRef}
            endAdornment={
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            }
          />
        </form>
        <List>
          {data
            .filter((item) => !item.done)
            .map((item) => {
              return (
                <Item item={item} toggle={toggle} del={del} key={item.id} />
              );
            })}
        </List>
        <Divider />
        <List>
          {data
            .filter((item) => item.done)
            .map((item) => {
              return (
                <Item item={item} toggle={toggle} del={del} key={item.id} />
              );
            })}
        </List>
      </Container>
    </div>
  );
}
