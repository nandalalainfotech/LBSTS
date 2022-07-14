import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { Promotion, PromotionId } from './Promotion';
import type { RedeemedDiscountCodes, RedeemedDiscountCodesId } from './RedeemedDiscountCodes';
import type { Subscription, SubscriptionId } from './Subscription';
import type { User, UserId } from './User';

export interface PlanAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  DescriptionEn?: string;
  DescriptionAr?: string;
  SubscriptionTypeId: number;
  DurationTypeId: number;
  Price: number;
  NumberOfDevices: number;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type PlanPk = "Id";
export type PlanId = Plan[PlanPk];
export type PlanCreationAttributes = Optional<PlanAttributes, PlanPk>;

export class Plan extends Model<PlanAttributes, PlanCreationAttributes> implements PlanAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  DescriptionEn?: string;
  DescriptionAr?: string;
  SubscriptionTypeId!: number;
  DurationTypeId!: number;
  Price!: number;
  NumberOfDevices!: number;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Plan belongsTo Lookup via DurationTypeId
  DurationType!: Lookup;
  getDurationType!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setDurationType!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createDurationType!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Plan belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Plan belongsTo Lookup via SubscriptionTypeId
  SubscriptionType!: Lookup;
  getSubscriptionType!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setSubscriptionType!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createSubscriptionType!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Plan hasMany Promotion via PlanId
  Promotions!: Promotion[];
  getPromotions!: Sequelize.HasManyGetAssociationsMixin<Promotion>;
  setPromotions!: Sequelize.HasManySetAssociationsMixin<Promotion, PromotionId>;
  addPromotion!: Sequelize.HasManyAddAssociationMixin<Promotion, PromotionId>;
  addPromotions!: Sequelize.HasManyAddAssociationsMixin<Promotion, PromotionId>;
  createPromotion!: Sequelize.HasManyCreateAssociationMixin<Promotion>;
  removePromotion!: Sequelize.HasManyRemoveAssociationMixin<Promotion, PromotionId>;
  removePromotions!: Sequelize.HasManyRemoveAssociationsMixin<Promotion, PromotionId>;
  hasPromotion!: Sequelize.HasManyHasAssociationMixin<Promotion, PromotionId>;
  hasPromotions!: Sequelize.HasManyHasAssociationsMixin<Promotion, PromotionId>;
  countPromotions!: Sequelize.HasManyCountAssociationsMixin;
  // Plan hasMany RedeemedDiscountCodes via PlanId
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
  // Plan hasMany Subscription via PlanId
  Subscriptions!: Subscription[];
  getSubscriptions!: Sequelize.HasManyGetAssociationsMixin<Subscription>;
  setSubscriptions!: Sequelize.HasManySetAssociationsMixin<Subscription, SubscriptionId>;
  addSubscription!: Sequelize.HasManyAddAssociationMixin<Subscription, SubscriptionId>;
  addSubscriptions!: Sequelize.HasManyAddAssociationsMixin<Subscription, SubscriptionId>;
  createSubscription!: Sequelize.HasManyCreateAssociationMixin<Subscription>;
  removeSubscription!: Sequelize.HasManyRemoveAssociationMixin<Subscription, SubscriptionId>;
  removeSubscriptions!: Sequelize.HasManyRemoveAssociationsMixin<Subscription, SubscriptionId>;
  hasSubscription!: Sequelize.HasManyHasAssociationMixin<Subscription, SubscriptionId>;
  hasSubscriptions!: Sequelize.HasManyHasAssociationsMixin<Subscription, SubscriptionId>;
  countSubscriptions!: Sequelize.HasManyCountAssociationsMixin;
  // Plan belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Plan belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Plan belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Plan {
    Plan.init({
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
    DescriptionEn: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    DescriptionAr: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SubscriptionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    DurationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    Price: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    NumberOfDevices: {
      type: DataTypes.INTEGER,
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
    tableName: 'Plan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Plan",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Plan;
  }
}
