import * as api from "../lib/api";
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
