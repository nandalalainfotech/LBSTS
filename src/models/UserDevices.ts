import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserDevicesAttributes {
  DeviceId: number;
  UserId: number;
}

export type UserDevicesPk = "DeviceId" | "UserId";
export type UserDevicesId = UserDevices[UserDevicesPk];
export type UserDevicesCreationAttributes = Optional<UserDevicesAttributes, UserDevicesPk>;

export class UserDevices extends Model<UserDevicesAttributes, UserDevicesCreationAttributes> implements UserDevicesAttributes {
  DeviceId!: number;
  UserId!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof UserDevices {
    UserDevices.init({
    DeviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'UserDevices',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UserDevices_1",
        unique: true,
        fields: [
          { name: "DeviceId" },
          { name: "UserId" },
        ]
      },
    ]
  });
  return UserDevices;
  }
}
