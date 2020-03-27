import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const Form = () => {
  const classes = useStyles();
  return (
    <div>
      <form
        onSubmit={console.log("helpme")}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField required id="standard-required" label="email" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
