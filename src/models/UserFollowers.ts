import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Device, DeviceId } from './Device';
import type { Lookup, LookupId } from './Lookup';
import type { User, UserId } from './User';
import type { UserFollowerGeofence, UserFollowerGeofenceId } from './UserFollowerGeofence';

export interface UserFollowersAttributes {
  Id: number;
  UserId: number;
  FollowerUserId: number;
  DeviceId: number;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type UserFollowersPk = "Id";
export type UserFollowersId = UserFollowers[UserFollowersPk];
export type UserFollowersCreationAttributes = Optional<UserFollowersAttributes, UserFollowersPk>;

export class UserFollowers extends Model<UserFollowersAttributes, UserFollowersCreationAttributes> implements UserFollowersAttributes {
  Id!: number;
  UserId!: number;
  FollowerUserId!: number;
  DeviceId!: number;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // UserFollowers belongsTo Device via DeviceId
  Device!: Device;
  getDevice!: Sequelize.BelongsToGetAssociationMixin<Device>;
  setDevice!: Sequelize.BelongsToSetAssociationMixin<Device, DeviceId>;
  createDevice!: Sequelize.BelongsToCreateAssociationMixin<Device>;
  // UserFollowers belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // UserFollowers belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowers belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowers belongsTo User via FollowerUserId
  FollowerUser!: User;
  getFollowerUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setFollowerUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createFollowerUser!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowers belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowers belongsTo User via UserId
  User!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowers hasMany UserFollowerGeofence via UserFollowerId
  UserFollowerGeofences!: UserFollowerGeofence[];
  getUserFollowerGeofences!: Sequelize.HasManyGetAssociationsMixin<UserFollowerGeofence>;
  setUserFollowerGeofences!: Sequelize.HasManySetAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addUserFollowerGeofence!: Sequelize.HasManyAddAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addUserFollowerGeofences!: Sequelize.HasManyAddAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  createUserFollowerGeofence!: Sequelize.HasManyCreateAssociationMixin<UserFollowerGeofence>;
  removeUserFollowerGeofence!: Sequelize.HasManyRemoveAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  removeUserFollowerGeofences!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasUserFollowerGeofence!: Sequelize.HasManyHasAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasUserFollowerGeofences!: Sequelize.HasManyHasAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  countUserFollowerGeofences!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof UserFollowers {
    UserFollowers.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    FollowerUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
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
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
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
    tableName: 'UserFollowers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UserFollowers",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return UserFollowers;
  }
}
