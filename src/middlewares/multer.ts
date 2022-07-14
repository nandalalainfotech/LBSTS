import { Response, NextFunction, Request } from 'express';
import { SystemErrors } from '../Constants/SystemErrors';
import { HttpStatusCode } from '../enums/HttpStatusCodes';
import { LanguageEnum } from '../enums/Language';

import multer from 'multer';

// export class MulterUploader {
//   private storage = multer.memoryStorage();

//   private multerUploads = multer({ storage: this.storage });

//   public single(req: Request, res: Response, next: NextFunction) {
//     console.log('ddddddddddddd');
//     multer({ storage: this.storage }).single('file');
//     return multer({ storage: this.storage }).single('file');
//   }
// }

export default (type: string) => {
  let storage = multer.memoryStorage();
  let multerUploads = multer({ storage });
  return async (req: Request, res: Response, next: NextFunction) => {
    if (type === 'single') {
      let test = await multerUploads.single('file')();
      console.log('ttttttttttttttt ', test);

      return next();
    }
  };
};
