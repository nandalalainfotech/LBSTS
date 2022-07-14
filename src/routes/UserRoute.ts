import { NextFunction, Request, Response } from 'express';
import { Identity } from '../dto/Identity';
import { UserService } from '../Services/UserService';
import { BaseRoute } from './BaseRoute';

export default class UserRoute extends BaseRoute {
  private readonly _userService: UserService;
  constructor() {
    super();
    this.baseUrl = 'User';
    this._userService = new UserService();
  }

  Create = this.post(
    '',
    async (req: Request, res: Response, next: NextFunction, identity: Identity) => {
      console.log("Update called..!", req);
      const result = await this._userService.Login(req.body.identity, req.body.password);
      this.sendResult(res, result);
    },
    { allowAnonymous: true }
  );

  ChangePassword = this.put(
    '/:id/change-password',
    async (req: Request, res: Response, next: NextFunction, identity: Identity) => {
      console.log("Update called..!", req);
      const result = await this._userService.ChangeUserPassword(req.body.id, req.body.password, req.body.newPassword);
      this.sendResult(res, result);
    },
    { allowAnonymous: true }
  );

  Update = this.put(
    '/:id',
    async (req: Request, res: Response, next: NextFunction, identity: Identity) => {
      console.log("Update called..!", req);
      const result = await this._userService.UpdateUserData(req.params.id, req.body);
      this.sendResult(res, result);
    },
    { allowAnonymous: true }
  );
}
