import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { User, UserId } from './User';

export interface NotificationAttributes {
  Id: number;
  FromUserId: number;
  ToUserId: number;
  Title: string;
  Message?: string;
  StatusId: number;
  NotificationTypeId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type NotificationPk = "Id";
export type NotificationId = Notification[NotificationPk];
export type NotificationCreationAttributes = Optional<NotificationAttributes, NotificationPk>;

export class Notification extends Model<NotificationAttributes, NotificationCreationAttributes> implements NotificationAttributes {
  Id!: number;
  FromUserId!: number;
  ToUserId!: number;
  Title!: string;
  Message?: string;
  StatusId!: number;
  NotificationTypeId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Notification belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Notification belongsTo Notification via NotificationTypeId
  NotificationType!: Notification;
  getNotificationType!: Sequelize.BelongsToGetAssociationMixin<Notification>;
  setNotificationType!: Sequelize.BelongsToSetAssociationMixin<Notification, NotificationId>;
  createNotificationType!: Sequelize.BelongsToCreateAssociationMixin<Notification>;
  // Notification belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Notification belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Notification belongsTo User via FromUserId
  FromUser!: User;
  getFromUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setFromUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createFromUser!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Notification belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Notification belongsTo User via ToUserId
  ToUser!: User;
  getToUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setToUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createToUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Notification {
    Notification.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FromUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    ToUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    Title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Message: {
      type: DataTypes.STRING(100),
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
    NotificationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Notification',
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
    tableName: 'Notification',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Notification",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Notification;
  }
}
