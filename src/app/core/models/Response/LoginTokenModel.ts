export interface LoginTokenModel{
    username: string;
    accessToken: string;
    refreshToken: string;
    isLoggedIn: boolean;
}