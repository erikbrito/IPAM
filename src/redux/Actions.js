export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (index) => ({
  type: "REMOVE_ITEM",
  payload: index,
});

export const setItems = (items) => ({
  type: "SET_ITEMS",
  payload: items,
});
