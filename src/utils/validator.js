export const validate = (value, marks) => {
    let valid = true;
    let message = "";
    if (value % marks !== 0) {
      valid = false;
      message = `Not a multiple of ${marks}`;
    } else if (value < 0) {
      valid = false;
      message = "Value must be greater than or equal to 0";
    } else if (value > 100) {
        valid = false;
        message = "Value must be less than or equal to 100";
    } else {
      valid = true;
    }

    return {valid, message};
}