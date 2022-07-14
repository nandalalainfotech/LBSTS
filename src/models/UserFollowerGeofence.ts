import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { User, UserId } from './User';
import type { UserFollowers, UserFollowersId } from './UserFollowers';

export interface UserFollowerGeofenceAttributes {
  Id: number;
  UserFollowerId: number;
  GeoData: any;
  TimeFrom: Date;
  TimeTo: Date;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type UserFollowerGeofencePk = "Id";
export type UserFollowerGeofenceId = UserFollowerGeofence[UserFollowerGeofencePk];
export type UserFollowerGeofenceCreationAttributes = Optional<UserFollowerGeofenceAttributes, UserFollowerGeofencePk>;

export class UserFollowerGeofence extends Model<UserFollowerGeofenceAttributes, UserFollowerGeofenceCreationAttributes> implements UserFollowerGeofenceAttributes {
  Id!: number;
  UserFollowerId!: number;
  GeoData!: any;
  TimeFrom!: Date;
  TimeTo!: Date;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // UserFollowerGeofence belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // UserFollowerGeofence belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowerGeofence belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowerGeofence belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // UserFollowerGeofence belongsTo UserFollowers via UserFollowerId
  UserFollower!: UserFollowers;
  getUserFollower!: Sequelize.BelongsToGetAssociationMixin<UserFollowers>;
  setUserFollower!: Sequelize.BelongsToSetAssociationMixin<UserFollowers, UserFollowersId>;
  createUserFollower!: Sequelize.BelongsToCreateAssociationMixin<UserFollowers>;

  static initModel(sequelize: Sequelize.Sequelize): typeof UserFollowerGeofence {
    UserFollowerGeofence.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserFollowerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserFollowers',
        key: 'Id'
      }
    },
    GeoData: {
      type: DataTypes.GEOGRAPHY,
      allowNull: false
    },
    TimeFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TimeTo: {
      type: DataTypes.DATE,
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
    tableName: 'UserFollowerGeofence',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UserFollowerGeofence",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return UserFollowerGeofence;
  }
}
