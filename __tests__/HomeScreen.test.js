import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import HomeScreen from "../src/screens/HomeScreen";
import { addItem, removeItem } from "../src/redux/Actions";

const mockStore = configureStore([]);

describe("HomeScreen", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      items: ["Item 1", "Item 2"],
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  });

  test("render IPAM TESTE text", () => {
    const { getByText } = component;

    expect(getByText("IPAM TESTE")).toBeTruthy();
  });

  test("render items from the screen", () => {
    const { getByText } = component;

    expect(getByText("Item 1")).toBeTruthy();
    expect(getByText("Item 2")).toBeTruthy();
  });

  test("add a new item", () => {
    const { getByPlaceholderText, getByText } = component;

    const input = getByPlaceholderText("Escreva aqui o nome do Item");
    const addButton = getByText("Adicionar Item");

    fireEvent.changeText(input, "Item 3");
    fireEvent.press(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addItem("Item 3"));
  });

  test("removes an item", () => {
    const { getAllByText } = component;

    const removeButtons = getAllByText("Remover", { exact: false });
    const removeButton = removeButtons[0];

    fireEvent.press(removeButton);

    expect(store.dispatch).toHaveBeenCalledWith(removeItem(0));
  });
});
