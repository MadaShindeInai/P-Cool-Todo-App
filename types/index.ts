export type RenderItemType = {
  item: TodoItemsType;
  index: number;
};

export type TodoItemsType = {
  id: string;
  title: string | undefined;
};
