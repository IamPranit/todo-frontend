import React from "react";
import AppBarComponent from "./components/layout/AppBarComponent";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AddTodo from "./components/todos/AddTodo";
import MultipleTodos from "./components/todos/MultipleTodos";
import { Paper } from "@material-ui/core";
import TodoState from "./components/context/todos/TodoState";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#f44336",
    },
    type: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <div className="App">
          <TodoState>
            <AppBarComponent />
            <AddTodo />
            <MultipleTodos />
          </TodoState>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
