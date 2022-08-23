export interface LoginUser {
  email: string;
  password: string;
}

export interface UserType extends LoginUser {
  id?: number;
  firstName: string;
  lastName: string;
  image?: string;
  message?: string[];
}

export interface TokenType {
  token: string;
}

export interface UsersType {
  users: UserType[];
}
