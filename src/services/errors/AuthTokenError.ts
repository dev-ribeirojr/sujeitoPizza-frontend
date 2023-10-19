export class AuthTokenError extends Error {
  constructor() {
    super("Erro de Authenticação de token");
  }
}
