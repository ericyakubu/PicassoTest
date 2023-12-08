export const getPosts = async () => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts?`).then(
    (res) => res.json()
  );
};

export const getPost = async (id: string) => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (res) => res.json()
  );
};
