export const initialState = {
  basket: [],
  user: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_CART":
      let newBasket = [...state.basket];
      const index = state.basket
        .map((cartItem) => {
          return cartItem.id;
        })
        .indexOf(action.id);
      if (index !== -1) newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
}
