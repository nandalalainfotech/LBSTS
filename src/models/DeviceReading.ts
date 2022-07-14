import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Device, DeviceId } from './Device';

export interface DeviceReadingAttributes {
  Id: number;
  DeviceId: number;
  Location?: any;
  Data?: string;
  CreatedDate: Date;
}

export type DeviceReadingPk = "Id";
export type DeviceReadingId = DeviceReading[DeviceReadingPk];
export type DeviceReadingCreationAttributes = Optional<DeviceReadingAttributes, DeviceReadingPk>;

export class DeviceReading extends Model<DeviceReadingAttributes, DeviceReadingCreationAttributes> implements DeviceReadingAttributes {
  Id!: number;
  DeviceId!: number;
  Location?: any;
  Data?: string;
  CreatedDate!: Date;

  // DeviceReading belongsTo Device via DeviceId
  Device!: Device;
  getDevice!: Sequelize.BelongsToGetAssociationMixin<Device>;
  setDevice!: Sequelize.BelongsToSetAssociationMixin<Device, DeviceId>;
  createDevice!: Sequelize.BelongsToCreateAssociationMixin<Device>;

  static initModel(sequelize: Sequelize.Sequelize): typeof DeviceReading {
    DeviceReading.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Device',
        key: 'Id'
      }
    },
    Location: {
      type: DataTypes.GEOGRAPHY,
      allowNull: true
    },
    Data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DeviceReading',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DeviceReading",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return DeviceReading;
  }
}
