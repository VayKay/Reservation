import http from "k6/http";
import { sleep } from "k6";

export let options = {
    stages: [
      { duration: "20s", target: 200 },
      { duration: "20s", target: 250 },
      { duration: "10s", target: 350 },
      { duration: "2m", target:  500 },
      { duration: "10s", target: 400 },
      { duration: "10s", target: 350 },
      { duration: "10s", target: 300 },
      { duration: "10s", target: 250 },
    ],
  }

export default function() {
  
  http.get(`http://3.84.249.38:3006/listing/${Math.floor((Math.random() * 9999999) + 1)}`);
  sleep(1);
}
// http.post(`http://localhost:3006/listing/post`);
// http.get(`http://localhost:8000/listing/${Math.floor((Math.random() * 10000000) + 1)}`);