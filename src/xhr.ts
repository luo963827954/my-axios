import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {

  return new Promise((reslove, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config

    const request = new XMLHttpRequest();

    if (responseType) {
      request.responseType = responseType;
    }

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return;
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType && responseType !== 'text' ?
        request.response : request.responseText;

      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }

      reslove(response)
    }

    Object.keys(headers).forEach((v) => {
      if (data === null && v.toLowerCase() === 'content-type') {
        delete headers[v]
      } else {
        request.setRequestHeader(v, headers[v])
      }
    });
    request.send(data);

  })
}