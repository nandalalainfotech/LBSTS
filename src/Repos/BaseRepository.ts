import { createNamespace } from 'cls-hooked';
import { QueryTypes, Sequelize, DataTypes } from 'sequelize';
import { PageSearchResultDTO } from '../dto/PageSearchResultDTO';
import { initModels } from '../models/init-models';

export abstract class BaseRepository {
  private static dbConnection: Sequelize;

  constructor() {}

  public static get GetDBConnection() {
    return this.dbConnection;
  }

  static async initDB() {
    DataTypes.DATE.prototype._stringify = function (date, options) {
      date = this._applyTimezone(date, options);
      return date.format('YYYY-MM-DD HH:mm:ss.SSS');
    }.bind(DataTypes.DATE.prototype);

    const namespace = createNamespace('sequelize-cls-namespace');
    Sequelize.useCLS(namespace);
    this.dbConnection = new Sequelize('DB_A5575C_LBSTS', 'DB_A5575C_LBSTS_admin', 'Lbsts0000@!', {
      host: 'sql6010.site4now.net',
      port: 1433,
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
      dialectOptions: {
        options: { encrypt: true },
      },
    });

    try {
      await this.dbConnection.authenticate().then((a) => {
        initModels(this.dbConnection);
        console.log('Connected To SQL DB');
      });
    } catch (error) {
      console.error('Unable to connect to SQL DB, error:', error);
    }
  }
}
