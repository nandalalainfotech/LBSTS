import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import { BaseRepository } from './Repos/BaseRepository';
import { BaseRoute } from './routes/BaseRoute';
import LookupRoute from './routes/LookupRoute';
import UserRoute from './routes/UserRoute';

export default class App {
  public app: Application;
  constructor() {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
    dotenv.config({ path: `${__dirname}/../env/.env.${process.env.NODE_ENV.trim()}` });
    this.app = express();
    this.middlewares();
    this.app.get('/', (req, res) => {
      res.sendFile('index.html', { root: `${__dirname}/public/dist/omega` });
    });
    // this.routes([new UserRoute(), new LookupRoute()]);
  }

  public listen() {
    this.connectTOSQLDB();
    this.app.listen(process.env.PORT || 4000, () => {
      console.log('server is running on port: ' + process.env.PORT);
    });
  }

  // ***************************************** Private Methods *****************************************

  private middlewares() {
    this.app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
    this.app.use(cors());
    this.app.enable('view cache');
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      );
      next();
    });
    this.app.use(express.json({ limit: '100mb' }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(`${__dirname}/public/dist/omega`));
    this.app.on('uncaughtException', (err) => {
      console.error('There was an uncaught error', err);
    });
  }

  // private routes(routes: BaseRoute[]) {
  //   routes.forEach((route) => {
  //     this.app.use(`/${route.baseUrl}`, route.router);
  //   });
  // }

  private async connectTOSQLDB(): Promise<void> {
    // await BaseRepository.initDB();
  }
}
