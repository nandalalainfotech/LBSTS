import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { Subscription, SubscriptionId } from './Subscription';
import type { Transaction, TransactionId } from './Transaction';
import type { User, UserId } from './User';

export interface InvoiceAttributes {
  Id: number;
  InvoiceNo: string;
  TotalAmount: number;
  SubscriptionId: number;
  TransactionRef?: string;
  PaidBy?: number;
  PaymentDate?: Date;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type InvoicePk = "Id";
export type InvoiceId = Invoice[InvoicePk];
export type InvoiceCreationAttributes = Optional<InvoiceAttributes, InvoicePk>;

export class Invoice extends Model<InvoiceAttributes, InvoiceCreationAttributes> implements InvoiceAttributes {
  Id!: number;
  InvoiceNo!: string;
  TotalAmount!: number;
  SubscriptionId!: number;
  TransactionRef?: string;
  PaidBy?: number;
  PaymentDate?: Date;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Invoice hasMany Transaction via InvoiceId
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
  // Invoice belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Invoice belongsTo Subscription via SubscriptionId
  Subscription!: Subscription;
  getSubscription!: Sequelize.BelongsToGetAssociationMixin<Subscription>;
  setSubscription!: Sequelize.BelongsToSetAssociationMixin<Subscription, SubscriptionId>;
  createSubscription!: Sequelize.BelongsToCreateAssociationMixin<Subscription>;
  // Invoice belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Invoice belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Invoice belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Invoice belongsTo User via PaidBy
  PaidBy_User!: User;
  getPaidBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setPaidBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createPaidBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Invoice {
    Invoice.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InvoiceNo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    SubscriptionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subscription',
        key: 'Id'
      }
    },
    TransactionRef: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PaidBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    PaymentDate: {
      type: DataTypes.DATE,
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
    tableName: 'Invoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Invoice",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Invoice;
  }
}
