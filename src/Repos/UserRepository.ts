import { User } from '../models/User';
import { BaseRepository } from './BaseRepository';
import { Op } from 'sequelize';
import * as bcrypt from 'bcryptjs';

export class UserRepository extends BaseRepository {
  constructor() {
    super();
  }

  //   public async GetByUserName(userName: string): Promise<User> {
  //     return await User.findOne({ where: { Username: userName, DeletedDate: null } });
  //   }

  public async GetUserById(identity: string): Promise<User> {
    return await User.findOne({ where: { Id: identity } });
  }

  public async GetByIdenetity(identity?: string): Promise<User> {
    return await User.findOne({
      where: { [Op.or]: [{ Email: identity }, { Username: identity }, { Phone: identity }], DeletedDate: null },
    });
  }

  public async UpdateUser(identity: string, arg: any): Promise<User> {
    console.log("UpdateUser-called");
    await User.update(arg, { where: { Id: identity } });
    return await this.GetUserById(identity);
  }

  public async HashPassword(password: string): Promise<User> {
    let salt = bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
  }
}
