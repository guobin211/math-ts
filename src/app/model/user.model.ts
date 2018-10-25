export class UserModel {
  username: string;
  uuid: number;
  avatar: string;
  level: number;
  login: boolean;
  phone: number;
  email: string;
  address: string;
  work: string;

  constructor (name: string, uid: number, phone: number, email?: string, address?: string, work?: string, log?: boolean, ava?: string, lev?: number) {
    this.username = name;
    this.uuid = uid;
    this.avatar = ava;
    this.level = lev;
    this.login = log;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.work = work;
  }
}
