import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Brand, BrandId } from './Brand';
import type { Device, DeviceId } from './Device';
import type { Lookup, LookupId } from './Lookup';
import type { User, UserId } from './User';

export interface DeviceGroupAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  StatusId: number;
  DeviceTypeId: number;
  BrandId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type DeviceGroupPk = "Id";
export type DeviceGroupId = DeviceGroup[DeviceGroupPk];
export type DeviceGroupCreationAttributes = Optional<DeviceGroupAttributes, DeviceGroupPk>;

export class DeviceGroup extends Model<DeviceGroupAttributes, DeviceGroupCreationAttributes> implements DeviceGroupAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  StatusId!: number;
  DeviceTypeId!: number;
  BrandId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // DeviceGroup belongsTo Brand via BrandId
  Brand!: Brand;
  getBrand!: Sequelize.BelongsToGetAssociationMixin<Brand>;
  setBrand!: Sequelize.BelongsToSetAssociationMixin<Brand, BrandId>;
  createBrand!: Sequelize.BelongsToCreateAssociationMixin<Brand>;
  // DeviceGroup hasMany Device via DeviceGroupId
  Devices!: Device[];
  getDevices!: Sequelize.HasManyGetAssociationsMixin<Device>;
  setDevices!: Sequelize.HasManySetAssociationsMixin<Device, DeviceId>;
  addDevice!: Sequelize.HasManyAddAssociationMixin<Device, DeviceId>;
  addDevices!: Sequelize.HasManyAddAssociationsMixin<Device, DeviceId>;
  createDevice!: Sequelize.HasManyCreateAssociationMixin<Device>;
  removeDevice!: Sequelize.HasManyRemoveAssociationMixin<Device, DeviceId>;
  removeDevices!: Sequelize.HasManyRemoveAssociationsMixin<Device, DeviceId>;
  hasDevice!: Sequelize.HasManyHasAssociationMixin<Device, DeviceId>;
  hasDevices!: Sequelize.HasManyHasAssociationsMixin<Device, DeviceId>;
  countDevices!: Sequelize.HasManyCountAssociationsMixin;
  // DeviceGroup belongsTo Lookup via DeviceTypeId
  DeviceType!: Lookup;
  getDeviceType!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setDeviceType!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createDeviceType!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // DeviceGroup belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // DeviceGroup belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // DeviceGroup belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // DeviceGroup belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof DeviceGroup {
    DeviceGroup.init({
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
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    DeviceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    BrandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Brand',
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
    tableName: 'DeviceGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DeviceGroup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return DeviceGroup;
  }
}
