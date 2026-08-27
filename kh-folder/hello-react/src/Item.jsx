import { Icon, IconButton, ListItem, ListItemText } from "@mui/material";
import {
  Delete as DeleteIcon,
  CheckBox as DoneIcon,
  SquareOutlined as ToDoIcon,
} from "@mui/icons-material";
export default function Item({ item, toggle, del }) {
  return (
    <ListItem>
        
      <IconButton onClick={() => toggle(item.id)}>
        {item.done ? <DoneIcon /> : <ToDoIcon />}
      </IconButton>

      <ListItemText primary={item.name}></ListItemText>

      <IconButton onClick={() => del(item.id)}>
        <DeleteIcon color="error" />
      </IconButton>

    </ListItem>
  );
}
