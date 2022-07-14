import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { Plan, PlanId } from './Plan';
import type { Transaction, TransactionId } from './Transaction';
import type { User, UserId } from './User';

export interface PromotionAttributes {
  Id: number;
  Code: string;
  PlanId: number;
  Price: number;
  ExpiresAt: Date;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type PromotionPk = "Id";
export type PromotionId = Promotion[PromotionPk];
export type PromotionCreationAttributes = Optional<PromotionAttributes, PromotionPk>;

export class Promotion extends Model<PromotionAttributes, PromotionCreationAttributes> implements PromotionAttributes {
  Id!: number;
  Code!: string;
  PlanId!: number;
  Price!: number;
  ExpiresAt!: Date;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Promotion belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Promotion belongsTo Plan via PlanId
  Plan!: Plan;
  getPlan!: Sequelize.BelongsToGetAssociationMixin<Plan>;
  setPlan!: Sequelize.BelongsToSetAssociationMixin<Plan, PlanId>;
  createPlan!: Sequelize.BelongsToCreateAssociationMixin<Plan>;
  // Promotion hasMany Transaction via PromotionId
  Transactions!: Transaction[];
  getTransactions!: Sequelize.HasManyGetAssociationsMixin<Transaction>;
  setTransactions!: Sequelize.HasManySetAssociationsMixin<Transaction, TransactionId>;
  addTransaction!: Sequelize.HasManyAddAssociationMixin<Transaction, TransactionId>;
  addTransactions!: Sequelize.HasManyAddAssociationsMixin<Transaction, TransactionId>;
  createTransaction!: Sequelize.HasManyCreateAssociationMixin<Transaction>;
  removeTransaction!: Sequelize.HasManyRemoveAssociationMixin<Transaction, TransactionId>;
  removeTransactions!: Sequelize.HasManyRemoveAssociationsMixin<Transaction, TransactionId>;
  hasTransaction!: Sequelize.HasManyHasAssociationMixin<Transaction, TransactionId>;
  hasTransactions!: Sequelize.HasManyHasAssociationsMixin<Transaction, TransactionId>;
  countTransactions!: Sequelize.HasManyCountAssociationsMixin;
  // Promotion belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Promotion belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Promotion belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Promotion {
    Promotion.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PlanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Plan',
        key: 'Id'
      }
    },
    Price: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    ExpiresAt: {
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
    tableName: 'Promotion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Promotion",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Promotion;
  }
}
