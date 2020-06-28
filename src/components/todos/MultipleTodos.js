import React from "react";
import SingleTodo from "./SingleTodo";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoContext from "../context/todos/TodoContext";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(2),
  },
  containerSpacing: {
    flexGrow: 1,
  },
}));

const MultipleTodos = () => {
  const classes = useStyles();

  const todoContext = React.useContext(TodoContext);

  const { getTodos, todos } = todoContext;

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <React.Fragment>
      <Grid container className={classes.containerSpacing}>
        {todos !== null &&
          todos.map((todo) => (
            <Grid
              item
              className={classes.control}
              xs={12}
              md={3}
              xl={2}
              key={todo._id}
            >
              <SingleTodo todo={todo} />
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
};

export default MultipleTodos;
