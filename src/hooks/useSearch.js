export const getUsers = async (text) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?username=${text}`
  );
  const data = await res.json();
  return data;
};
