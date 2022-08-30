import { ApiRequest } from "../../../api/api-service";
import { loginType } from "./type";


export const loginApi = ({ requestData }: loginType) => {
  ApiRequest(requestData, "/auth/login", "POST")
    .then((res) => {
      window.location.replace("/home")
    })
    .catch((error) => {
      console.log(error);
    });
}