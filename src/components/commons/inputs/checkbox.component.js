import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  checkList: {
    fontSize: 12,
    lineHeight: 1,
    display: "flex",
  },
}));

const CheckboxItem = ({ status, title, handleChange }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      className={classes.checkList}
      control={
        <Checkbox
          checked={status}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        />
      }
      label={<span className={classes.checkList}>{title}</span>}
    />
  );
};

export default CheckboxItem;
