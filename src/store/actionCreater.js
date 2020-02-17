export const add = num => ({ type: "add", payload: num }); // action creator
export const minus = () => ({ type: "minus" });            // action creator
export const asyncAdd = (dispatch, getState) => dispatch => {  // 返回的是函数
  setTimeout(() => {  // 异步调用在这里
    dispatch({ type: "add" });
  }, 1000);
};
