import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TodoContext from "../context/todos/TodoContext";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#2196f3",
    "&:hover": {
      backgroundColor: "#42a5f5",
    },
  },
  marginForm: {
    margin: theme.spacing(2),
    display: "flex",
    flexGrow: 1,
  },
}));

const AddTodo = () => {
  const classes = useStyles();

  const todoContext = React.useContext(TodoContext);

  const [newTodo, setTodoInput] = React.useState({
    todo: "",
    complete: false,
  });

  const handleChange = (e) => {
    setTodoInput({ ...newTodo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    todoContext.addTodo(newTodo);
    setTodoInput({
      todo: "",
    });
  };

  return (
    <div>
      <form className={classes.marginForm} onSubmit={onSubmit}>
        <TextField
          fullWidth
          name="todo"
          variant="outlined"
          placeholder="Add Todo"
          xs={12}
          md={8}
          xl={10}
          value={newTodo.todo}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          size="large"
          startIcon={<Icon>add</Icon>}
          className={classes.button}
          xs={12}
          md={4}
          xl={2}
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
