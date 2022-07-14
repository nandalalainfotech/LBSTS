import { ApiOptions } from '../dto/ApiOptions';
import { Identity } from '../dto/Identity';
import { LanguageEnum } from '../enums/Language';
import express, { Response, Request, Router, NextFunction } from 'express';
import auth from '../middlewares/auth';
import { GeneralResponse } from '../dto/GeneralResponse';

export abstract class BaseRoute {
  public baseUrl: string;
  public router: Router = express.Router();
  private currentUser: any;
  private language: number = 0;

  protected GetUserId(): number {
    if (this.currentUser && this.currentUser.UserId) return Number(this.currentUser.UserId);
    return null;
  }

  protected GetUserName(): string {
    if (this.currentUser) return this.currentUser.UserName;
    return null;
  }

  protected GetLanguage(): LanguageEnum {
    if (this.language == LanguageEnum.Arabic) return LanguageEnum.Arabic;
    return LanguageEnum.English;
  }

  protected IsSystemAdmin(): boolean {
    if (this.currentUser.IsSystemAdmin && this.currentUser.IsSystemAdmin.toLocaleLowerCase() == 'true') return true;
    return false;
  }

  protected getClaimValue(req: any, claim: string): string {
    return req.user[claim];
  }

  protected handleRequest(options: ApiOptions, middlewares: ((req: Request, res: Response, next: NextFunction) => void)[]): any[] {
    if (!options.allowAnonymous) {
      middlewares = [auth(options.permissions), ...middlewares];
    }
    middlewares.push(this.next);
    return middlewares;
  }

  public get(
    route: string,
    func: (req: Request, res: Response, next: NextFunction, identity: Identity) => Promise<any>,
    options: ApiOptions = {},
    middlewares: ((req: Request, res: Response, next: NextFunction) => void)[] = []
  ) {
    console.log("Update called..!get");
    return this.router.get(route, this.handleRequest(options, middlewares), this.runAsync(func));
  }

  protected post(
    route: string,
    func: (req: Request, res: Response, next: NextFunction, identity: Identity) => Promise<any>,
    options: ApiOptions = {},
    middlewares: ((req: Request, res: Response, next: NextFunction) => void)[] = []
  ) {
    return this.router.post(route, this.handleRequest(options, middlewares), this.runAsync(func));
  }

  protected put(
    route: string,
    func: (req: Request, res: Response, next: NextFunction, identity: Identity) => Promise<any>,
    options: ApiOptions = {},
    middlewares: ((req: Request, res: Response, next: NextFunction) => void)[] = []
  ) {
    console.log("Update called..!put");
    return this.router.put(route, this.handleRequest(options, middlewares), this.runAsync(func));
  }

  protected delete(
    route: string,
    func: (req: Request, res: Response, next: NextFunction, identity: Identity) => Promise<any>,
    options: ApiOptions = {},
    middlewares: ((req: Request, res: Response, next: NextFunction) => void)[] = []
  ) {
    return this.router.delete(route, this.handleRequest(options, middlewares), this.runAsync(func));
  }

  protected patch(
    route: string,
    func: (req: Request, res: Response, next: NextFunction, identity: Identity) => Promise<any>,
    options: ApiOptions = {},
    middlewares: ((req: Request, res: Response, next: NextFunction) => void)[] = []
  ) {
    return this.router.patch(route, this.handleRequest(options, middlewares), this.runAsync(func));
  }

  protected runAsync(func: (req: Request, res: Response, next: NextFunction, identity?: Identity) => Promise<any>) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const identity = this.createIdentity(req);
      this.language = identity.language;
      if ((req as any).user) {
        this.currentUser = (req as any).user;
      }
      try {
        await func(req, res, next, identity);
      } catch (err) {
        next(err);
      }
    };
  }

  protected sendResult(res: Response, result: GeneralResponse) {
    res.status(result.status).json(result);
  }

  protected next(req: Request, res: Response, next: NextFunction) {
    return next();
  }

  protected createIdentity(req: Request): Identity {
    const identity = new Identity();
    identity.language = req.headers['languageid'] == LanguageEnum.Arabic.toString() ? LanguageEnum.Arabic : LanguageEnum.English;
    identity.user = (<any>req)['user'];
    return identity;
  }
}
