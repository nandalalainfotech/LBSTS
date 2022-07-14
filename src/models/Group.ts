import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GroupMembers, GroupMembersId } from './GroupMembers';
import type { Invitation, InvitationId } from './Invitation';
import type { Lookup, LookupId } from './Lookup';
import type { User, UserId } from './User';

export interface GroupAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  GeoData?: any;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type GroupPk = "Id";
export type GroupId = Group[GroupPk];
export type GroupCreationAttributes = Optional<GroupAttributes, GroupPk>;

export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  GeoData?: any;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Group hasMany GroupMembers via GroupId
  GroupMembers!: GroupMembers[];
  getGroupMembers!: Sequelize.HasManyGetAssociationsMixin<GroupMembers>;
  setGroupMembers!: Sequelize.HasManySetAssociationsMixin<GroupMembers, GroupMembersId>;
  addGroupMember!: Sequelize.HasManyAddAssociationMixin<GroupMembers, GroupMembersId>;
  addGroupMembers!: Sequelize.HasManyAddAssociationsMixin<GroupMembers, GroupMembersId>;
  createGroupMember!: Sequelize.HasManyCreateAssociationMixin<GroupMembers>;
  removeGroupMember!: Sequelize.HasManyRemoveAssociationMixin<GroupMembers, GroupMembersId>;
  removeGroupMembers!: Sequelize.HasManyRemoveAssociationsMixin<GroupMembers, GroupMembersId>;
  hasGroupMember!: Sequelize.HasManyHasAssociationMixin<GroupMembers, GroupMembersId>;
  hasGroupMembers!: Sequelize.HasManyHasAssociationsMixin<GroupMembers, GroupMembersId>;
  countGroupMembers!: Sequelize.HasManyCountAssociationsMixin;
  // Group hasMany Invitation via ToGroupId
  Invitations!: Invitation[];
  getInvitations!: Sequelize.HasManyGetAssociationsMixin<Invitation>;
  setInvitations!: Sequelize.HasManySetAssociationsMixin<Invitation, InvitationId>;
  addInvitation!: Sequelize.HasManyAddAssociationMixin<Invitation, InvitationId>;
  addInvitations!: Sequelize.HasManyAddAssociationsMixin<Invitation, InvitationId>;
  createInvitation!: Sequelize.HasManyCreateAssociationMixin<Invitation>;
  removeInvitation!: Sequelize.HasManyRemoveAssociationMixin<Invitation, InvitationId>;
  removeInvitations!: Sequelize.HasManyRemoveAssociationsMixin<Invitation, InvitationId>;
  hasInvitation!: Sequelize.HasManyHasAssociationMixin<Invitation, InvitationId>;
  hasInvitations!: Sequelize.HasManyHasAssociationsMixin<Invitation, InvitationId>;
  countInvitations!: Sequelize.HasManyCountAssociationsMixin;
  // Group belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Group belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Group belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Group belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Group {
    Group.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NameEn: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    NameAr: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    GeoData: {
      type: DataTypes.GEOGRAPHY,
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
    tableName: 'Group',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Group",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Group;
  }
}
