
const logger = (state) => (next) => (action) => {
    console.group(action.type);
    console.info(state.getState());
    const result = next(action)
    console.info('Next state:', state.getState());
    console.groupEnd()
    return result
}

export default logger