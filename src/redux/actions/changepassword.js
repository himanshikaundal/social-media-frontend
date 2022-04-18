import { CHANGE_PASSWORD } from "../types";
import api from "../../api";

export const changepassword = (values, token) => (dispatch) => {
  api({
    method: "post",
    url: "/change-password",
    data: {
      oldPassword: values.old_Password,
      newPassword: values.new_Password,
      confirmPassword: values.confirm_Password,
    },
    headers: { authorization: `Bearer ${token} ` },
  })
    .then((res) => {
      const result = res.data;
      console.log(result);
      dispatch({ type: CHANGE_PASSWORD });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
