import * as api from "../lib/api";
export const createPost = async (post) => {
  try {
    post["creatorName"] = JSON.parse(localStorage.getItem("profile")).firstName;
    const { data } = await api.createPost(post);
    return data;
    console.log(data);
  } catch (error) {
    return { error };
  }
};

export const likePost = async (id) => {
  try {
    console.log(localStorage.getItem("profile"));
    const { data } = await api.likePost(id);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    await await api.deletePost(id);
  } catch (error) {
    console.log(error);
  }
};
