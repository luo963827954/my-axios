import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'
import { tranformRequest } from './helpers/data'
import xhr from './xhr'

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = tranformURL(config)
  config.data = tranformRequestData(config)
}

function tranformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function tranformRequestData(config: AxiosRequestConfig): any {
  return tranformRequest(config.data)
}

export default axios;