// LIBS
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

// COMPONENTS
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const InputSelect = ({
  value,
  onChange,
  id,
  label,
  items = [],
  margin = "none",
}) => {
  const classes = useStyles();
  return (
    <FormControl margin={margin} variant="outlined" className={classes.root}>
      <InputLabel id={`label-${id}`}>{label}</InputLabel>
      <Select
        labelId={`label-${id}`}
        className={classes.margins}
        native
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        label={label}
        inputProps={{
          name: id,
          id,
        }}
      >
        {items.map((item, ind) => (
          <option key={`${id}-${ind}`} value={item.value}>
            {item.text}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
