import axios from 'axios';
import { SERVER_URL } from '../utils/constants';
const Api = axios.create({
  baseURL: `${SERVER_URL}`,
  //   timeout: 10000,
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
});
// Api.defaults.headers
// singleton instance
export default Api;
