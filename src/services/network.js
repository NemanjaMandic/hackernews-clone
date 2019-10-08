// @flow

import axios from "axios";
import { getQueryString } from "./util";

const defaultHeaders = {
  "content-type": "application/json",
  accept: "application/json"
};

class Network {
  service: Object;

  constructor() {
    const service = axios.create();
    service.defaults.headers = defaultHeaders;
    this.service = service;
  }

  get(path: string, query?: Object) {
    const fullPath = query ? `${path}?${getQueryString(query)}` : path;
    return this.service
      .get(fullPath)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  // other http methods here
}

export default new Network();
