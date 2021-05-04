// LIBS
import React from "react";

// COMPONENTS
// import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

// STYLES
import BoxStyle from "@utilities/styles/components/boxImage.style";

// Private Functions
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, onChangeFile, id }) => {
  const classes = BoxStyle();
  const [imageC, setImageC] = React.useState(false);

  const handleChange = async (event) => {
    let file = null;
    if (event.target && event.target.files.length) {
      file = event.target.files[0];
      const response = await toBase64(file);
      setImageC(response);
    } else {
      setImageC(false);
    }
    onChangeFile(file);
  };
  return (
    <div>
      <Paper className={classes.paperContainer} elevation={3}>
        <input
          id={id}
          type="file"
          name={id}
          accept="image/*"
          onChange={(e) => {
            handleChange(e);
          }}
          style={{ display: "none" }}
        />
        <Box display="flex" flexDirection="row">
          <label
            htmlFor={id}
            style={{ backgroundImage: `url(${imageC})` }}
            className={classes.circle}
          >
            {imageC ? null : "Brand Logo"}
          </label>

          <div className={classes.content}>{children}</div>
        </Box>
      </Paper>
    </div>
  );
};
