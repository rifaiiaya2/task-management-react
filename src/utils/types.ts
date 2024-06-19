export interface Result {
  id: number;
  title: string;
  image: string;
  date: string;
}

export interface ApiResponse {
  data: {
    server_date: string;
    message: string;
    result: Result;
  };
}
