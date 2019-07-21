import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { buildURL } from './helpers/url'
import { tranformRequest, tranformResponse } from './helpers/data'
import xhr from './xhr'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => {
    return tranformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = tranformURL(config)
  config.headers = tranformHeaders(config)
  config.data = tranformRequestData(config)
}

function tranformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function tranformRequestData(config: AxiosRequestConfig): any {
  return tranformRequest(config.data)
}

function tranformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data)
}

function tranformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = tranformResponse(res.data)
  return res;
}

export default axios;