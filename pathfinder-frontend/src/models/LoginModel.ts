export class LoginModel {
  public loginName: string;
  public password: string;
  public rememberMe: boolean;
  /**
   *
   */
  constructor() {
    this.loginName = "";
    this.password = "";
    this.rememberMe = false;
  }
}
