import { isPlaninObject } from './util'

function nomalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) return;

  Object.keys(headers).forEach((v) => {
    if (v !== normalizedName && v.toUpperCase() === normalizedName.toLowerCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {

  nomalizeHeaderName(headers, 'Content-Type');

  if (isPlaninObject(data)) {
    if (headers && !headers['Conteng-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers;
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) return parsed;

  headers.split('\r\n').forEach((v) => {
    let [key, val] = v.split(':')
    key = key.trim().toLowerCase()

    if (!key) return;

    if (val) {
      val = val.trim()
    }
    parsed[key] = val;
  })

  return parsed;
}
