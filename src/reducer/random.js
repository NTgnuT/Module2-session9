import { ACT_RANDOM } from "../constrains";

const innitialState = [];
export const random = (state = innitialState, action) => {
  switch (action.type) {
    case ACT_RANDOM:
      // clone mảng mới
      const newArray = [...state];
      // push giá trị vào mảng
      newArray.push(action.payload);
      // return ra mảng mới
      return newArray;

    default:
      return state;
  }
};
