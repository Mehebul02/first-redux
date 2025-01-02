
const logger = (state) => (next) => (action) => {
    console.log(state.getState());
}

export default logger