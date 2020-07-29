export const getData = async () => {
  const response = await fetch(
    'https://rn-overview.firebaseio.com/todoItems.json',
    {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    },
  );
  const data = await response.json();
  const todoItems = Object.keys(data).map((key) => ({
    // title: data[key].title,
    ...data[key],
    id: key,
  }));
  return todoItems;
};

export const addItemData = async (title: string) => {
  const response = await fetch(
    'https://rn-overview.firebaseio.com/todoItems.json',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title}),
    },
  );
  const data = await response.json();
  return data;
};

export const editItemData = async (id: string, title: string | undefined) => {
  const response = await fetch(
    `https://rn-overview.firebaseio.com/todoItems/${id}.json`,
    {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title}),
    },
  );
  const data = await response.json();
  return data;
};
