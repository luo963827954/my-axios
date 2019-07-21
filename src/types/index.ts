export type Method =
  'get' | 'GET' |
  'post' | 'POST' |
  'options' | 'OPTIONS' |
  'delete' | 'DELETE' |
  'put' | 'PUT' |
  'head' | 'HEAD' |
  'put' | 'PUT' |
  'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string,
  method?: Method,
  data?: any,
  params?: any,
}

export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any,
}

// export interface AxiosPromise extends Promise<AxiosResponse> {

// }