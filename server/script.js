import http from "k6/http";
import { sleep } from "k6";

export let options = {
    stages: [
      { duration: "20s", target: 500 },
      { duration: "20s", target: 1000 },
      { duration: "10s", target: 2000 },
      { duration: "2m", target: 3000 },
      { duration: "10s", target: 2000 },
      { duration: "10s", target: 1000 },
      { duration: "10s", target: 500 },
      { duration: "10s", target: 400 },
    ],
  }

export default function() {
  http.get(`http://localhost:3006/listing/${Math.floor((Math.random() * 10000000) + 1)}`);
  // http.post(`http://localhost:3006/listing/post`);
  // http.get(`http://localhost:8000/listing/${Math.floor((Math.random() * 10000000) + 1)}`);
  sleep(1);
}