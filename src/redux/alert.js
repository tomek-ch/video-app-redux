function alert(state = { error: false, message: "" }, { type, payload }) {
  switch (type) {
    case "VIDEO_ADD_ERROR":
      return {
        error: true,
        message: payload,
      };
    case "VIDEO_ADD_SUCCESS":
      return {
        error: false,
        message: "Video added successfully",
      };
    default:
      return state;
  }
}

export default alert;
