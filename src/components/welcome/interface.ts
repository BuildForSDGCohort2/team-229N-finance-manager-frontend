export interface Response {
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
