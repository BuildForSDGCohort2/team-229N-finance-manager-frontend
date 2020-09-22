export interface CompanyResponse {
  success: Boolean;
  error: string;
  data: {
    name: string;
    email: string;
    location: string;
    desc: string;
    fb: string;
    yt: string;
    twt: string;
    tel: string;
    bank: string;
  };
}

export interface CompanyProps {
  _id: string;
  name: string;
  email: string;
  location: string;
  desc: string;
  fb: string;
  yt: string;
  twt: string;
  tel: string;
  bank: string;
}
