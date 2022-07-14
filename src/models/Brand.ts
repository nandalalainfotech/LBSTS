import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DeviceGroup, DeviceGroupId } from './DeviceGroup';

export interface BrandAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
}

export type BrandPk = "Id";
export type BrandId = Brand[BrandPk];
export type BrandCreationAttributes = Optional<BrandAttributes, BrandPk>;

export class Brand extends Model<BrandAttributes, BrandCreationAttributes> implements BrandAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;

  // Brand hasMany DeviceGroup via BrandId
  DeviceGroups!: DeviceGroup[];
  getDeviceGroups!: Sequelize.HasManyGetAssociationsMixin<DeviceGroup>;
  setDeviceGroups!: Sequelize.HasManySetAssociationsMixin<DeviceGroup, DeviceGroupId>;
  addDeviceGroup!: Sequelize.HasManyAddAssociationMixin<DeviceGroup, DeviceGroupId>;
  addDeviceGroups!: Sequelize.HasManyAddAssociationsMixin<DeviceGroup, DeviceGroupId>;
  createDeviceGroup!: Sequelize.HasManyCreateAssociationMixin<DeviceGroup>;
  removeDeviceGroup!: Sequelize.HasManyRemoveAssociationMixin<DeviceGroup, DeviceGroupId>;
  removeDeviceGroups!: Sequelize.HasManyRemoveAssociationsMixin<DeviceGroup, DeviceGroupId>;
  hasDeviceGroup!: Sequelize.HasManyHasAssociationMixin<DeviceGroup, DeviceGroupId>;
  hasDeviceGroups!: Sequelize.HasManyHasAssociationsMixin<DeviceGroup, DeviceGroupId>;
  countDeviceGroups!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Brand {
    Brand.init({
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
    }
  }, {
    sequelize,
    tableName: 'Brand',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Brand",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Brand;
  }
}
