export interface axiosResponse {
  success: Boolean;
  error: string;
  data: {
    name: string;
    _id: string;
    email: string;
  };
  token: string;
  info: string;
}
