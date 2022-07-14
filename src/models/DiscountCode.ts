import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { RedeemedDiscountCodes, RedeemedDiscountCodesId } from './RedeemedDiscountCodes';
import type { User, UserId } from './User';

export interface DiscountCodeAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  Code: string;
  Discount: number;
  StartDate: Date;
  EndDate: Date;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type DiscountCodePk = "Id";
export type DiscountCodeId = DiscountCode[DiscountCodePk];
export type DiscountCodeCreationAttributes = Optional<DiscountCodeAttributes, DiscountCodePk>;

export class DiscountCode extends Model<DiscountCodeAttributes, DiscountCodeCreationAttributes> implements DiscountCodeAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  Code!: string;
  Discount!: number;
  StartDate!: Date;
  EndDate!: Date;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // DiscountCode hasMany RedeemedDiscountCodes via DiscountCodeId
  RedeemedDiscountCodes!: RedeemedDiscountCodes[];
  getRedeemedDiscountCodes!: Sequelize.HasManyGetAssociationsMixin<RedeemedDiscountCodes>;
  setRedeemedDiscountCodes!: Sequelize.HasManySetAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addRedeemedDiscountCode!: Sequelize.HasManyAddAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addRedeemedDiscountCodes!: Sequelize.HasManyAddAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  createRedeemedDiscountCode!: Sequelize.HasManyCreateAssociationMixin<RedeemedDiscountCodes>;
  removeRedeemedDiscountCode!: Sequelize.HasManyRemoveAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  removeRedeemedDiscountCodes!: Sequelize.HasManyRemoveAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasRedeemedDiscountCode!: Sequelize.HasManyHasAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasRedeemedDiscountCodes!: Sequelize.HasManyHasAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  countRedeemedDiscountCodes!: Sequelize.HasManyCountAssociationsMixin;
  // DiscountCode belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // DiscountCode belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // DiscountCode belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // DiscountCode belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof DiscountCode {
    DiscountCode.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NameEn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NameAr: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Discount: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndDate: {
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
    tableName: 'DiscountCode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DiscountCode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return DiscountCode;
  }
}
