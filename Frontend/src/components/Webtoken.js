import jwt_decode from "jwt-decode";

export const webTokenjs = () => {
  console.log(
        jwt_decode(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI0NjhlNTMyM2Y5ZDAxMDcwOGUxOSIsIm5hbWUiOiJBYmhpc2hlayIsImVtYWlsIjoiYWJoaUAxMjMiLCJyb2xlIjoidXNlciIsIm51bWJlciI6OTc1ODIwNzUzMiwiaWF0IjoxNjY3OTc1MTIyLCJleHAiOjE2NzA1NjcxMjJ9.n45FYc4QonhQloXq6MYTjTX3cth_adNAHh9Q0d0dk4A"
    )
  );
};
