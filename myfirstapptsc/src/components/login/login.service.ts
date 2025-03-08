function checkLogin(login: string, password: string): boolean {
    if (login == "John" && password == "123")
        return true;
    else
        return false;
}
export const LoginService = { 'checkLogin': checkLogin };