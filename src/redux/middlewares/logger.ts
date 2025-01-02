
const logger = (state) => (next) => (action) => {
    console.log(state.getState());

  return  next(action)
}

export default logger