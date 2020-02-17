// reducer是纯函数 固定输入就会有固定输出，完全可预知，不对任何函数外的东西造成影响，包括传入的参数
// 和vuex不同的是：vuex是对输出的值直接更改的，所以vuex的mutation不是纯函数，
export const counterReducer = function(state = 100, action) {
    const num = action.payload || 1;
    switch (action.type) {
      case "add":
        return state + num;
      case "minus":
        return state - num;
      default:
        return state;
    }
  };