module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing params: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
