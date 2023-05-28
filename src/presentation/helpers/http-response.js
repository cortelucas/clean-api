import { MissingParamError } from './missing-param-error.js'

export class HTTPResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return { statusCode: 500 }
  }
}
