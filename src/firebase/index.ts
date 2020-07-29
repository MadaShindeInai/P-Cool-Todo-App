/* eslint-disable no-console */
export const getData = async () => {
  try {
    const response = await fetch(
      'https://rn-overview.firebaseio.com/todoItems.json',
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await response.json();
    const todoItems = Object.keys(data).map((key) => ({
      ...data[key],
      id: key,
    }));
    return todoItems;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const addItemData = async (title: string) => {
  try {
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
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const editItemData = async (id: string, title: string | undefined) => {
  try {
    await fetch(`https://rn-overview.firebaseio.com/todoItems/${id}.json`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title}),
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const deleteItemData = async (id: string) => {
  try {
    await fetch(`https://rn-overview.firebaseio.com/todoItems/${id}.json`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
