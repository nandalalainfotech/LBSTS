import * as jwt from 'jsonwebtoken';

export class JwtUtility {
  expiry: Date;
  public static readonly defaultSplitChar = '#';

  public static async checkTokenValidity(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, '@LBSTS#123@', (err: Error, authUser: any) => {
        if (err) {
          console.log(`Invalid token Trying to access.`);
        }
        resolve(authUser);
      });
    });
  }

  public static checkPermissions(userPermissions: string[], permissions: string | string[]) {
    let hasPermission: boolean = false;

    if (!permissions || permissions == '') {
      hasPermission = true;
    } else {
      if (Array.isArray(permissions)) {
        hasPermission = userPermissions.some((up) => permissions.some((p) => p.toLocaleLowerCase() == up.toLocaleLowerCase()));
      } else {
        hasPermission = userPermissions.some((up) => up.toLocaleLowerCase() == permissions.toLocaleLowerCase());
      }
    }
    return hasPermission;
  }
}
