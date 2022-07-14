import { SystemErrors } from '../Constants/SystemErrors';
import { GeneralResponse } from '../dto/GeneralResponse';
import { TokenClaims } from '../dto/tokenClaims';
import { User } from '../models/User';
import { UserRepository } from '../Repos/UserRepository';
import { Service } from './Service';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { LookupEnum } from '../enums/LookupEnum';
import { ResultCode } from '../enums/ResultCode';
import dotenv from 'dotenv';

export class UserService extends Service {
  private readonly _userRepository: UserRepository;

  constructor() {
    super();
    this._userRepository = new UserRepository();
  }

  public async Login(identity: string, password: string): Promise<GeneralResponse> {
    let response: GeneralResponse = new GeneralResponse(ResultCode.BadRequest);
    response.isSuccess = false;
    let user: User = await this._userRepository.GetByIdenetity(identity);
    let token: string = null;
    if (user && user.StatusId == LookupEnum.Status_Active) {
      let isMatched = await bcrypt.compare(password, user.Password);
      if (isMatched) {
        token = await this.GenerateToken(user);
        response.status = ResultCode.Ok;
        response.isSuccess = true;
        let { Id, Avatar, Email, IsAdmin, NameAr, NameEn, Phone, Username } = user;
        response.data = { Id, Username, Avatar, Email, IsAdmin, NameAr, NameEn, Phone, token };
      } else response.addError(SystemErrors.Generic_UnauthorizedLogin);
    } else response.addError(SystemErrors.Generic_UnauthorizedLogin);

    return response;
  }

  public async UpdateUserData(id: string, data: string): Promise<GeneralResponse> {
    console.log("UpdateUserData", data);
    let response: GeneralResponse = new GeneralResponse(ResultCode.BadRequest);
    response.isSuccess = false;
    let user: User = await this._userRepository.UpdateUser(id, data);
    let token: string = null;
    if (user) {
      let { Id, Avatar, Email, IsAdmin, NameAr, NameEn, Phone, Username } = user;
      token = await this.GenerateToken(user);
      response.status = ResultCode.Ok;
      response.isSuccess = true;
      response.data = { Id, Username, Avatar, Email, IsAdmin, NameAr, NameEn, Phone, token };
    } else {
      response = new GeneralResponse(ResultCode.NotFound);
      response.addError(SystemErrors.Generic_RecordDoesNotExist);
    }

    return response;
  }

  public async ChangeUserPassword(id: string, password: string, newPassword): Promise<GeneralResponse> {
    let response: GeneralResponse = new GeneralResponse(ResultCode.BadRequest);
    response.isSuccess = false;
    let user: User = await this._userRepository.GetUserById(id);
    if (user) {
      let isMatched = await bcrypt.compare(password, user.Password);
      console.log('is match ', isMatched);
      if (isMatched) {
        newPassword = await this._userRepository.HashPassword(newPassword);
        await this._userRepository.UpdateUser(id, { Password: newPassword });
        response.status = ResultCode.Ok;
        response.isSuccess = true;
      } else response.addError(SystemErrors.Generic_UnauthorizedLogin);
    } else {
      response = new GeneralResponse(ResultCode.NotFound);
      response.addError(SystemErrors.Generic_RecordDoesNotExist);
    }

    return response;
  }

  // ***************************************** Private Methods *****************************************

  private async GenerateToken(user: User): Promise<string> {
    let tokenClaims: TokenClaims = new TokenClaims();
    tokenClaims.UserName = user.Username;
    tokenClaims.UserId = user.Id.toString();
    tokenClaims.IsSystemAdmin = user.IsAdmin ? 'True' : 'False';
    tokenClaims.CountryId = user.CountryId.toString();
    let token = jwt.sign(JSON.parse(JSON.stringify(tokenClaims)), '@LBSTS#123@', {
      expiresIn: '24h',
      issuer: 'LBSTS',
      audience: 'LBSTS',
    });
    return token;
  }
}
