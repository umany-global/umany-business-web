export const handleErrors = (error) => {
  let msg = "An error occurred try again later";
  if (error && error.response) {
    const { data } = error.response;
    if (data && data.error) {
      msg = data.error.message;
    }
  }
  return { msg };
};
