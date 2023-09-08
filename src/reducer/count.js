import { ACT_DECREASE, ACT_INCREASE } from "../constrains";

const initialState = 0;

export const count = (state = initialState, action) => {
  switch (action.type) {
    case ACT_INCREASE:
      return state + 1; // Nếu như action gửi lên có type là increase thì cập nhật lại state + 1
    case ACT_DECREASE:
      return state - 1;
    default:
      return state; // Nếu như khác action thì thì return state hiện tại
  }
};
