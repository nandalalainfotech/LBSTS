import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Device, DeviceId } from './Device';
import type { Function, FunctionId } from './Function';
import type { Lookup, LookupId } from './Lookup';
import type { SensorGroup, SensorGroupId } from './SensorGroup';
import type { User, UserId } from './User';

export interface SensorAttributes {
  Id: number;
  Value?: string;
  SensorGroupId: number;
  StatusId: number;
  DeviceId: number;
  FunctionId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type SensorPk = "Id";
export type SensorId = Sensor[SensorPk];
export type SensorCreationAttributes = Optional<SensorAttributes, SensorPk>;

export class Sensor extends Model<SensorAttributes, SensorCreationAttributes> implements SensorAttributes {
  Id!: number;
  Value?: string;
  SensorGroupId!: number;
  StatusId!: number;
  DeviceId!: number;
  FunctionId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Sensor belongsTo Device via DeviceId
  Device!: Device;
  getDevice!: Sequelize.BelongsToGetAssociationMixin<Device>;
  setDevice!: Sequelize.BelongsToSetAssociationMixin<Device, DeviceId>;
  createDevice!: Sequelize.BelongsToCreateAssociationMixin<Device>;
  // Sensor belongsTo Function via FunctionId
  Function!: Function;
  getFunction!: Sequelize.BelongsToGetAssociationMixin<Function>;
  setFunction!: Sequelize.BelongsToSetAssociationMixin<Function, FunctionId>;
  createFunction!: Sequelize.BelongsToCreateAssociationMixin<Function>;
  // Sensor belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Sensor belongsTo SensorGroup via SensorGroupId
  SensorGroup!: SensorGroup;
  getSensorGroup!: Sequelize.BelongsToGetAssociationMixin<SensorGroup>;
  setSensorGroup!: Sequelize.BelongsToSetAssociationMixin<SensorGroup, SensorGroupId>;
  createSensorGroup!: Sequelize.BelongsToCreateAssociationMixin<SensorGroup>;
  // Sensor belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Sensor belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Sensor belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Sensor {
    Sensor.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SensorGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SensorGroup',
        key: 'Id'
      }
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    DeviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Device',
        key: 'Id'
      }
    },
    FunctionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Function',
        key: 'Id'
      }
    },
    CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    DeletedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Sensor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Sensor",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Sensor;
  }
}
