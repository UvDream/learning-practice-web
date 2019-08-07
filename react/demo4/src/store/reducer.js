const defaultState = {
  inputValue: "请输入增加内容",
  list: ["早上八点上班", "晚上八点下班"]
};

export default (state = defaultState, action) => {
  //   Reducer里只能接受state,不能改变state
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};
