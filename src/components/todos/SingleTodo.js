import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TodoContext from "../context/todos/TodoContext";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  // cardWidth: {
  //   width: 200,
  //   height: 140,
  // },
  cardButtons: {
    display: "flex",
    displayDirection: "row",
    justifyContent: "flex-end",
  },
});

const SingleTodo = ({ todo }) => {
  const classes = useStyles();

  const { _id, complete } = todo;

  const todoContext = React.useContext(TodoContext);

  const handleCheck = (checkTodo) => {
    todoContext.completeTodo(checkTodo);
  };

  const onDelete = () => {
    todoContext.deleteTodo(_id);
  };

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title}>{_id}</Typography>
        <Typography
          style={{ textDecoration: complete ? "line-through" : "none" }}
        >
          {todo.todo}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardButtons}>
        <Checkbox
          checked={todo.complete}
          onChange={handleCheck.bind(this, todo)}
        />
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SingleTodo;
