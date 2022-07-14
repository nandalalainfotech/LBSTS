import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DiscountCode, DiscountCodeId } from './DiscountCode';
import type { Lookup, LookupId } from './Lookup';
import type { Plan, PlanId } from './Plan';
import type { User, UserId } from './User';

export interface RedeemedDiscountCodesAttributes {
  Id: number;
  DiscountCodeId: number;
  UserId: number;
  PlanId: number;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type RedeemedDiscountCodesPk = "Id";
export type RedeemedDiscountCodesId = RedeemedDiscountCodes[RedeemedDiscountCodesPk];
export type RedeemedDiscountCodesCreationAttributes = Optional<RedeemedDiscountCodesAttributes, RedeemedDiscountCodesPk>;

export class RedeemedDiscountCodes extends Model<RedeemedDiscountCodesAttributes, RedeemedDiscountCodesCreationAttributes> implements RedeemedDiscountCodesAttributes {
  Id!: number;
  DiscountCodeId!: number;
  UserId!: number;
  PlanId!: number;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // RedeemedDiscountCodes belongsTo DiscountCode via DiscountCodeId
  DiscountCode!: DiscountCode;
  getDiscountCode!: Sequelize.BelongsToGetAssociationMixin<DiscountCode>;
  setDiscountCode!: Sequelize.BelongsToSetAssociationMixin<DiscountCode, DiscountCodeId>;
  createDiscountCode!: Sequelize.BelongsToCreateAssociationMixin<DiscountCode>;
  // RedeemedDiscountCodes belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // RedeemedDiscountCodes belongsTo Plan via PlanId
  Plan!: Plan;
  getPlan!: Sequelize.BelongsToGetAssociationMixin<Plan>;
  setPlan!: Sequelize.BelongsToSetAssociationMixin<Plan, PlanId>;
  createPlan!: Sequelize.BelongsToCreateAssociationMixin<Plan>;
  // RedeemedDiscountCodes belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // RedeemedDiscountCodes belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // RedeemedDiscountCodes belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // RedeemedDiscountCodes belongsTo User via UserId
  User!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RedeemedDiscountCodes {
    RedeemedDiscountCodes.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DiscountCodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DiscountCode',
        key: 'Id'
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    PlanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Plan',
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
    tableName: 'RedeemedDiscountCodes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_RedeemedDiscountCodes",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return RedeemedDiscountCodes;
  }
}
