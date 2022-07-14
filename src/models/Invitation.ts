import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Group, GroupId } from './Group';
import type { Lookup, LookupId } from './Lookup';
import type { User, UserId } from './User';

export interface InvitationAttributes {
  Id: number;
  FromUserId: number;
  ToUserId?: number;
  ToGroupId?: number;
  ToPhone?: string;
  Message: string;
  InvitationTypeId: number;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type InvitationPk = "Id";
export type InvitationId = Invitation[InvitationPk];
export type InvitationCreationAttributes = Optional<InvitationAttributes, InvitationPk>;

export class Invitation extends Model<InvitationAttributes, InvitationCreationAttributes> implements InvitationAttributes {
  Id!: number;
  FromUserId!: number;
  ToUserId?: number;
  ToGroupId?: number;
  ToPhone?: string;
  Message!: string;
  InvitationTypeId!: number;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Invitation belongsTo Group via ToGroupId
  ToGroup!: Group;
  getToGroup!: Sequelize.BelongsToGetAssociationMixin<Group>;
  setToGroup!: Sequelize.BelongsToSetAssociationMixin<Group, GroupId>;
  createToGroup!: Sequelize.BelongsToCreateAssociationMixin<Group>;
  // Invitation belongsTo Lookup via InvitationTypeId
  InvitationType!: Lookup;
  getInvitationType!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setInvitationType!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createInvitationType!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Invitation belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Invitation belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Invitation belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Invitation belongsTo User via FromUserId
  FromUser!: User;
  getFromUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setFromUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createFromUser!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Invitation belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Invitation belongsTo User via ToUserId
  ToUser!: User;
  getToUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setToUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createToUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Invitation {
    Invitation.init({
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
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    ToGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Group',
        key: 'Id'
      }
    },
    ToPhone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Message: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    InvitationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
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
    tableName: 'Invitation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Invitation",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Invitation;
  }
}
