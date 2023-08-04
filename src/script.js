import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    //set time and quantity of virtual users
    // { duration: '30s', target: 20 },
    // { duration: '1m30s', target: 10 },
    { duration: '20s', target: 10 },
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  //checks the 30 requests response with status 200
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
