import { Response, NextFunction, Request } from "express";
import { SystemErrors } from "../Constants/SystemErrors";
import { HttpStatusCode } from "../enums/HttpStatusCodes";
import { LanguageEnum } from "../enums/Language";
import { JwtUtility } from "../utilities/jwtUtility";

export default (permission: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const request: any = req;
        let isAuthenticated: boolean = false;

        let token = '';
        const language = Number(req.headers['languageid']) == LanguageEnum.Arabic ? LanguageEnum.Arabic : LanguageEnum.English;

        const authorization = req.headers['authorization'];
        if (authorization) {
            if (authorization.toLocaleLowerCase().includes("bearer")) {
                const bearer = authorization.split(' ');
                if (bearer && bearer[0].toLowerCase() == 'bearer')
                    token = bearer[1];
            }
            else
                token = authorization;

            const user: any = await JwtUtility.checkTokenValidity(token);
            if (user) {
                if (permission != null) {
                    const hasPermission = JwtUtility.checkPermissions(user.Resources, permission);
                    if (hasPermission) {
                        request['user'] = user;
                        isAuthenticated = true;
                    } else {
                        res.status(HttpStatusCode.Forbidden).json(SystemErrors.Generic_UnauthorizedLogin);
                    }
                }
                else {
                    request['user'] = user;
                    isAuthenticated = true;
                }
            }
        }

        if (isAuthenticated) {
            next();
        } else {
            res.status(HttpStatusCode.Unauthorized).json(SystemErrors.Generic_UnauthorizedLogin);
        }
    }
};