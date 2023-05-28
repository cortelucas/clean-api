import { MissingParamError } from './missing-param-error.js'
import { UnauthorizedError } from './unauthorized-error.js'

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

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }
}