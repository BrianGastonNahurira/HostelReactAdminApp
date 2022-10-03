import axios from "axios";

const url = "http://localhost:5051/api/v6";

export default class FormsApi {
  //get method
  async get(i) {
    try {
      const res = await axios.get(`${url}${i}`);
      return res.data;
    } catch (error) {
      return "Error";
    }
  }
}
