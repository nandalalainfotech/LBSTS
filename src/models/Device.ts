import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DeviceGroup, DeviceGroupId } from './DeviceGroup';
import type { DeviceReading, DeviceReadingId } from './DeviceReading';
import type { Lookup, LookupId } from './Lookup';
import type { Sensor, SensorId } from './Sensor';
import type { User, UserId } from './User';
import type { UserFollowers, UserFollowersId } from './UserFollowers';

export interface DeviceAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  IMEI: string;
  SimNumber?: string;
  StatusId: number;
  DeviceGroupId: number;
  Icon?: string;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type DevicePk = "Id";
export type DeviceId = Device[DevicePk];
export type DeviceCreationAttributes = Optional<DeviceAttributes, DevicePk>;

export class Device extends Model<DeviceAttributes, DeviceCreationAttributes> implements DeviceAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  IMEI!: string;
  SimNumber?: string;
  StatusId!: number;
  DeviceGroupId!: number;
  Icon?: string;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Device hasMany DeviceReading via DeviceId
  DeviceReadings!: DeviceReading[];
  getDeviceReadings!: Sequelize.HasManyGetAssociationsMixin<DeviceReading>;
  setDeviceReadings!: Sequelize.HasManySetAssociationsMixin<DeviceReading, DeviceReadingId>;
  addDeviceReading!: Sequelize.HasManyAddAssociationMixin<DeviceReading, DeviceReadingId>;
  addDeviceReadings!: Sequelize.HasManyAddAssociationsMixin<DeviceReading, DeviceReadingId>;
  createDeviceReading!: Sequelize.HasManyCreateAssociationMixin<DeviceReading>;
  removeDeviceReading!: Sequelize.HasManyRemoveAssociationMixin<DeviceReading, DeviceReadingId>;
  removeDeviceReadings!: Sequelize.HasManyRemoveAssociationsMixin<DeviceReading, DeviceReadingId>;
  hasDeviceReading!: Sequelize.HasManyHasAssociationMixin<DeviceReading, DeviceReadingId>;
  hasDeviceReadings!: Sequelize.HasManyHasAssociationsMixin<DeviceReading, DeviceReadingId>;
  countDeviceReadings!: Sequelize.HasManyCountAssociationsMixin;
  // Device hasMany Sensor via DeviceId
  Sensors!: Sensor[];
  getSensors!: Sequelize.HasManyGetAssociationsMixin<Sensor>;
  setSensors!: Sequelize.HasManySetAssociationsMixin<Sensor, SensorId>;
  addSensor!: Sequelize.HasManyAddAssociationMixin<Sensor, SensorId>;
  addSensors!: Sequelize.HasManyAddAssociationsMixin<Sensor, SensorId>;
  createSensor!: Sequelize.HasManyCreateAssociationMixin<Sensor>;
  removeSensor!: Sequelize.HasManyRemoveAssociationMixin<Sensor, SensorId>;
  removeSensors!: Sequelize.HasManyRemoveAssociationsMixin<Sensor, SensorId>;
  hasSensor!: Sequelize.HasManyHasAssociationMixin<Sensor, SensorId>;
  hasSensors!: Sequelize.HasManyHasAssociationsMixin<Sensor, SensorId>;
  countSensors!: Sequelize.HasManyCountAssociationsMixin;
  // Device hasMany UserFollowers via DeviceId
  UserFollowers!: UserFollowers[];
  getUserFollowers!: Sequelize.HasManyGetAssociationsMixin<UserFollowers>;
  setUserFollowers!: Sequelize.HasManySetAssociationsMixin<UserFollowers, UserFollowersId>;
  addUserFollower!: Sequelize.HasManyAddAssociationMixin<UserFollowers, UserFollowersId>;
  addUserFollowers!: Sequelize.HasManyAddAssociationsMixin<UserFollowers, UserFollowersId>;
  createUserFollower!: Sequelize.HasManyCreateAssociationMixin<UserFollowers>;
  removeUserFollower!: Sequelize.HasManyRemoveAssociationMixin<UserFollowers, UserFollowersId>;
  removeUserFollowers!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowers, UserFollowersId>;
  hasUserFollower!: Sequelize.HasManyHasAssociationMixin<UserFollowers, UserFollowersId>;
  hasUserFollowers!: Sequelize.HasManyHasAssociationsMixin<UserFollowers, UserFollowersId>;
  countUserFollowers!: Sequelize.HasManyCountAssociationsMixin;
  // Device belongsTo DeviceGroup via DeviceGroupId
  DeviceGroup!: DeviceGroup;
  getDeviceGroup!: Sequelize.BelongsToGetAssociationMixin<DeviceGroup>;
  setDeviceGroup!: Sequelize.BelongsToSetAssociationMixin<DeviceGroup, DeviceGroupId>;
  createDeviceGroup!: Sequelize.BelongsToCreateAssociationMixin<DeviceGroup>;
  // Device belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Device belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Device belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Device belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Device {
    Device.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NameEn: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    NameAr: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    IMEI: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SimNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    DeviceGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DeviceGroup',
        key: 'Id'
      }
    },
    Icon: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'Device',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Device",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Device;
  }
}
