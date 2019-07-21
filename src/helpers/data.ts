import { isPlaninObject } from './util'

export function tranformRequest(data: any): any {
  if (isPlaninObject(data)) {
    return JSON.stringify(data)
  }
  return data;
}