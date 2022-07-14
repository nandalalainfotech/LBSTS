import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Invoice, InvoiceId } from './Invoice';
import type { Lookup, LookupId } from './Lookup';
import type { Promotion, PromotionId } from './Promotion';
import type { User, UserId } from './User';

export interface TransactionAttributes {
  Id: number;
  InvoiceId: number;
  PromotionId?: number;
  Amount: number;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type TransactionPk = "Id";
export type TransactionId = Transaction[TransactionPk];
export type TransactionCreationAttributes = Optional<TransactionAttributes, TransactionPk>;

export class Transaction extends Model<TransactionAttributes, TransactionCreationAttributes> implements TransactionAttributes {
  Id!: number;
  InvoiceId!: number;
  PromotionId?: number;
  Amount!: number;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Transaction belongsTo Invoice via InvoiceId
  Invoice!: Invoice;
  getInvoice!: Sequelize.BelongsToGetAssociationMixin<Invoice>;
  setInvoice!: Sequelize.BelongsToSetAssociationMixin<Invoice, InvoiceId>;
  createInvoice!: Sequelize.BelongsToCreateAssociationMixin<Invoice>;
  // Transaction belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Transaction belongsTo Promotion via PromotionId
  Promotion!: Promotion;
  getPromotion!: Sequelize.BelongsToGetAssociationMixin<Promotion>;
  setPromotion!: Sequelize.BelongsToSetAssociationMixin<Promotion, PromotionId>;
  createPromotion!: Sequelize.BelongsToCreateAssociationMixin<Promotion>;
  // Transaction belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Transaction belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Transaction belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Transaction {
    Transaction.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Invoice',
        key: 'Id'
      }
    },
    PromotionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Promotion',
        key: 'Id'
      }
    },
    Amount: {
      type: DataTypes.DECIMAL(18,0),
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
    tableName: 'Transaction',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Transaction",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Transaction;
  }
}
