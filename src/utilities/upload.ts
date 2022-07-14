import * as cloudinary from 'cloudinary';

export class CloudinaryUpload {
  constructor() {
    cloudinary.v2.config({
      cloud_name: 'dcr3oyb57',
      api_key: '682997768926599',
      api_secret: 'fdwolNOQ8lhxY_LfK7IbibUB4cY',
    });
  }

  private GetResorceType = (file: any): string => (file.mimetype.split('/')[0] === 'video' ? 'video' : 'raw');

  public Upload(file: any): Promise<any> {
    let resource_type = this.GetResorceType(file);
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream({ resource_type, timeout: 300000 }, (error, result) => {
          if (error) {
            let code;
            if (error.http_code === 499) code = 'UPLOADING_TIMEOUT';
            if (error.http_code === 400) code = 'FILE_SIZE_TOO_LARGE';
            return reject({ code });
          }
          console.log('resultresult ', result);
          return resolve(result.url);
        })
        .end(file.buffer);
    });
  }
}
