import * as api from "../lib/api";
export const signUp = async (formData) => {
  try {
    const { data } = await api.signUp(formData);
    return data;
  } catch (error) {
    return { error };
  }
};
export const signIn = async (formData) => {
  try {
    const { data } = await api.signIn(formData);
    return data;
  } catch (error) {
    return { error };
  }
};
