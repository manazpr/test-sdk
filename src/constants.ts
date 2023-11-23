import axios, { AxiosResponse } from "axios";

export const API_URL = "https://api.rpslabs.io";
export const fetcher: (endpoint: string) => Promise<any> = async (endpoint) => {
  let responseData = null;
  try {
    const response: AxiosResponse<any> = await axios.get(endpoint);
    if (response.data.code != 200) {
      throw new Error(response.data.message);
    }
  } catch (error: any) {
    return error.message || { message: "An error occurred", code: 500 };
  }
  return responseData;
};
