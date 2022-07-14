import type { Sequelize, Model } from "sequelize";
import { Brand } from "./Brand";
import type { BrandAttributes, BrandCreationAttributes } from "./Brand";
import { Company } from "./Company";
import type { CompanyAttributes, CompanyCreationAttributes } from "./Company";
import { Device } from "./Device";
import type { DeviceAttributes, DeviceCreationAttributes } from "./Device";
import { DeviceGroup } from "./DeviceGroup";
import type { DeviceGroupAttributes, DeviceGroupCreationAttributes } from "./DeviceGroup";
import { DeviceReading } from "./DeviceReading";
import type { DeviceReadingAttributes, DeviceReadingCreationAttributes } from "./DeviceReading";
import { DiscountCode } from "./DiscountCode";
import type { DiscountCodeAttributes, DiscountCodeCreationAttributes } from "./DiscountCode";
import { Function } from "./Function";
import type { FunctionAttributes, FunctionCreationAttributes } from "./Function";
import { Group } from "./Group";
import type { GroupAttributes, GroupCreationAttributes } from "./Group";
import { GroupMembers } from "./GroupMembers";
import type { GroupMembersAttributes, GroupMembersCreationAttributes } from "./GroupMembers";
import { Invitation } from "./Invitation";
import type { InvitationAttributes, InvitationCreationAttributes } from "./Invitation";
import { Invoice } from "./Invoice";
import type { InvoiceAttributes, InvoiceCreationAttributes } from "./Invoice";
import { Lookup } from "./Lookup";
import type { LookupAttributes, LookupCreationAttributes } from "./Lookup";
import { LookupType } from "./LookupType";
import type { LookupTypeAttributes, LookupTypeCreationAttributes } from "./LookupType";
import { Notification } from "./Notification";
import type { NotificationAttributes, NotificationCreationAttributes } from "./Notification";
import { Plan } from "./Plan";
import type { PlanAttributes, PlanCreationAttributes } from "./Plan";
import { Promotion } from "./Promotion";
import type { PromotionAttributes, PromotionCreationAttributes } from "./Promotion";
import { RedeemedDiscountCodes } from "./RedeemedDiscountCodes";
import type { RedeemedDiscountCodesAttributes, RedeemedDiscountCodesCreationAttributes } from "./RedeemedDiscountCodes";
import { Sensor } from "./Sensor";
import type { SensorAttributes, SensorCreationAttributes } from "./Sensor";
import { SensorGroup } from "./SensorGroup";
import type { SensorGroupAttributes, SensorGroupCreationAttributes } from "./SensorGroup";
import { SpacialData } from "./SpacialData";
import type { SpacialDataAttributes, SpacialDataCreationAttributes } from "./SpacialData";
import { Subscription } from "./Subscription";
import type { SubscriptionAttributes, SubscriptionCreationAttributes } from "./Subscription";
import { Ticket } from "./Ticket";
import type { TicketAttributes, TicketCreationAttributes } from "./Ticket";
import { Transaction } from "./Transaction";
import type { TransactionAttributes, TransactionCreationAttributes } from "./Transaction";
import { User } from "./User";
import type { UserAttributes, UserCreationAttributes } from "./User";
import { UserDevices } from "./UserDevices";
import type { UserDevicesAttributes, UserDevicesCreationAttributes } from "./UserDevices";
import { UserFollowerGeofence } from "./UserFollowerGeofence";
import type { UserFollowerGeofenceAttributes, UserFollowerGeofenceCreationAttributes } from "./UserFollowerGeofence";
import { UserFollowers } from "./UserFollowers";
import type { UserFollowersAttributes, UserFollowersCreationAttributes } from "./UserFollowers";

export {
  Brand,
  Company,
  Device,
  DeviceGroup,
  DeviceReading,
  DiscountCode,
  Function,
  Group,
  GroupMembers,
  Invitation,
  Invoice,
  Lookup,
  LookupType,
  Notification,
  Plan,
  Promotion,
  RedeemedDiscountCodes,
  Sensor,
  SensorGroup,
  SpacialData,
  Subscription,
  Ticket,
  Transaction,
  User,
  UserDevices,
  UserFollowerGeofence,
  UserFollowers,
};

export type {
  BrandAttributes,
  BrandCreationAttributes,
  CompanyAttributes,
  CompanyCreationAttributes,
  DeviceAttributes,
  DeviceCreationAttributes,
  DeviceGroupAttributes,
  DeviceGroupCreationAttributes,
  DeviceReadingAttributes,
  DeviceReadingCreationAttributes,
  DiscountCodeAttributes,
  DiscountCodeCreationAttributes,
  FunctionAttributes,
  FunctionCreationAttributes,
  GroupAttributes,
  GroupCreationAttributes,
  GroupMembersAttributes,
  GroupMembersCreationAttributes,
  InvitationAttributes,
  InvitationCreationAttributes,
  InvoiceAttributes,
  InvoiceCreationAttributes,
  LookupAttributes,
  LookupCreationAttributes,
  LookupTypeAttributes,
  LookupTypeCreationAttributes,
  NotificationAttributes,
  NotificationCreationAttributes,
  PlanAttributes,
  PlanCreationAttributes,
  PromotionAttributes,
  PromotionCreationAttributes,
  RedeemedDiscountCodesAttributes,
  RedeemedDiscountCodesCreationAttributes,
  SensorAttributes,
  SensorCreationAttributes,
  SensorGroupAttributes,
  SensorGroupCreationAttributes,
  SpacialDataAttributes,
  SpacialDataCreationAttributes,
  SubscriptionAttributes,
  SubscriptionCreationAttributes,
  TicketAttributes,
  TicketCreationAttributes,
  TransactionAttributes,
  TransactionCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
  UserDevicesAttributes,
  UserDevicesCreationAttributes,
  UserFollowerGeofenceAttributes,
  UserFollowerGeofenceCreationAttributes,
  UserFollowersAttributes,
  UserFollowersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  Brand.initModel(sequelize);
  Company.initModel(sequelize);
  Device.initModel(sequelize);
  DeviceGroup.initModel(sequelize);
  DeviceReading.initModel(sequelize);
  DiscountCode.initModel(sequelize);
  Function.initModel(sequelize);
  Group.initModel(sequelize);
  GroupMembers.initModel(sequelize);
  Invitation.initModel(sequelize);
  Invoice.initModel(sequelize);
  Lookup.initModel(sequelize);
  LookupType.initModel(sequelize);
  Notification.initModel(sequelize);
  Plan.initModel(sequelize);
  Promotion.initModel(sequelize);
  RedeemedDiscountCodes.initModel(sequelize);
  Sensor.initModel(sequelize);
  SensorGroup.initModel(sequelize);
  SpacialData.initModel(sequelize);
  Subscription.initModel(sequelize);
  Ticket.initModel(sequelize);
  Transaction.initModel(sequelize);
  User.initModel(sequelize);
  UserDevices.initModel(sequelize);
  UserFollowerGeofence.initModel(sequelize);
  UserFollowers.initModel(sequelize);

  DeviceGroup.belongsTo(Brand, { as: "Brand", foreignKey: "BrandId"});
  Brand.hasMany(DeviceGroup, { as: "DeviceGroups", foreignKey: "BrandId"});
  DeviceReading.belongsTo(Device, { as: "Device", foreignKey: "DeviceId"});
  Device.hasMany(DeviceReading, { as: "DeviceReadings", foreignKey: "DeviceId"});
  Sensor.belongsTo(Device, { as: "Device", foreignKey: "DeviceId"});
  Device.hasMany(Sensor, { as: "Sensors", foreignKey: "DeviceId"});
  UserFollowers.belongsTo(Device, { as: "Device", foreignKey: "DeviceId"});
  Device.hasMany(UserFollowers, { as: "UserFollowers", foreignKey: "DeviceId"});
  Device.belongsTo(DeviceGroup, { as: "DeviceGroup", foreignKey: "DeviceGroupId"});
  DeviceGroup.hasMany(Device, { as: "Devices", foreignKey: "DeviceGroupId"});
  RedeemedDiscountCodes.belongsTo(DiscountCode, { as: "DiscountCode", foreignKey: "DiscountCodeId"});
  DiscountCode.hasMany(RedeemedDiscountCodes, { as: "RedeemedDiscountCodes", foreignKey: "DiscountCodeId"});
  Sensor.belongsTo(Function, { as: "Function", foreignKey: "FunctionId"});
  Function.hasMany(Sensor, { as: "Sensors", foreignKey: "FunctionId"});
  SensorGroup.belongsTo(Function, { as: "Function", foreignKey: "FunctionId"});
  Function.hasMany(SensorGroup, { as: "SensorGroups", foreignKey: "FunctionId"});
  GroupMembers.belongsTo(Group, { as: "Group", foreignKey: "GroupId"});
  Group.hasMany(GroupMembers, { as: "GroupMembers", foreignKey: "GroupId"});
  Invitation.belongsTo(Group, { as: "ToGroup", foreignKey: "ToGroupId"});
  Group.hasMany(Invitation, { as: "Invitations", foreignKey: "ToGroupId"});
  Transaction.belongsTo(Invoice, { as: "Invoice", foreignKey: "InvoiceId"});
  Invoice.hasMany(Transaction, { as: "Transactions", foreignKey: "InvoiceId"});
  Company.belongsTo(Lookup, { as: "City", foreignKey: "CityId"});
  Lookup.hasMany(Company, { as: "Companies", foreignKey: "CityId"});
  Company.belongsTo(Lookup, { as: "Country", foreignKey: "CountryId"});
  Lookup.hasMany(Company, { as: "Country_Companies", foreignKey: "CountryId"});
  Company.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Company, { as: "Status_Companies", foreignKey: "StatusId"});
  Device.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Device, { as: "Devices", foreignKey: "StatusId"});
  DeviceGroup.belongsTo(Lookup, { as: "DeviceType", foreignKey: "DeviceTypeId"});
  Lookup.hasMany(DeviceGroup, { as: "DeviceGroups", foreignKey: "DeviceTypeId"});
  DeviceGroup.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(DeviceGroup, { as: "Status_DeviceGroups", foreignKey: "StatusId"});
  DiscountCode.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(DiscountCode, { as: "DiscountCodes", foreignKey: "StatusId"});
  Function.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Function, { as: "Functions", foreignKey: "StatusId"});
  Group.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Group, { as: "Groups", foreignKey: "StatusId"});
  GroupMembers.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(GroupMembers, { as: "GroupMembers", foreignKey: "StatusId"});
  Invitation.belongsTo(Lookup, { as: "InvitationType", foreignKey: "InvitationTypeId"});
  Lookup.hasMany(Invitation, { as: "Invitations", foreignKey: "InvitationTypeId"});
  Invitation.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Invitation, { as: "Status_Invitations", foreignKey: "StatusId"});
  Invoice.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Invoice, { as: "Invoices", foreignKey: "StatusId"});
  Lookup.belongsTo(Lookup, { as: "Parent", foreignKey: "ParentId"});
  Lookup.hasMany(Lookup, { as: "Lookups", foreignKey: "ParentId"});
  Notification.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Notification, { as: "Notifications", foreignKey: "StatusId"});
  Plan.belongsTo(Lookup, { as: "DurationType", foreignKey: "DurationTypeId"});
  Lookup.hasMany(Plan, { as: "Plans", foreignKey: "DurationTypeId"});
  Plan.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Plan, { as: "Status_Plans", foreignKey: "StatusId"});
  Plan.belongsTo(Lookup, { as: "SubscriptionType", foreignKey: "SubscriptionTypeId"});
  Lookup.hasMany(Plan, { as: "SubscriptionType_Plans", foreignKey: "SubscriptionTypeId"});
  Promotion.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Promotion, { as: "Promotions", foreignKey: "StatusId"});
  RedeemedDiscountCodes.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(RedeemedDiscountCodes, { as: "RedeemedDiscountCodes", foreignKey: "StatusId"});
  Sensor.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Sensor, { as: "Sensors", foreignKey: "StatusId"});
  SensorGroup.belongsTo(Lookup, { as: "MeasurementUnit", foreignKey: "MeasurementUnitId"});
  Lookup.hasMany(SensorGroup, { as: "SensorGroups", foreignKey: "MeasurementUnitId"});
  SensorGroup.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(SensorGroup, { as: "Status_SensorGroups", foreignKey: "StatusId"});
  SpacialData.belongsTo(Lookup, { as: "SpacialDataType", foreignKey: "SpacialDataTypeId"});
  Lookup.hasMany(SpacialData, { as: "SpacialData", foreignKey: "SpacialDataTypeId"});
  SpacialData.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(SpacialData, { as: "Status_SpacialData", foreignKey: "StatusId"});
  Subscription.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Subscription, { as: "Subscriptions", foreignKey: "StatusId"});
  Transaction.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(Transaction, { as: "Transactions", foreignKey: "StatusId"});
  User.belongsTo(Lookup, { as: "City", foreignKey: "CityId"});
  Lookup.hasMany(User, { as: "Users", foreignKey: "CityId"});
  User.belongsTo(Lookup, { as: "Country", foreignKey: "CountryId"});
  Lookup.hasMany(User, { as: "Country_Users", foreignKey: "CountryId"});
  User.belongsTo(Lookup, { as: "District", foreignKey: "DistrictId"});
  Lookup.hasMany(User, { as: "District_Users", foreignKey: "DistrictId"});
  User.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(User, { as: "Status_Users", foreignKey: "StatusId"});
  User.belongsTo(Lookup, { as: "UserType", foreignKey: "UserTypeId"});
  Lookup.hasMany(User, { as: "UserType_Users", foreignKey: "UserTypeId"});
  UserFollowerGeofence.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(UserFollowerGeofence, { as: "UserFollowerGeofences", foreignKey: "StatusId"});
  UserFollowers.belongsTo(Lookup, { as: "Status", foreignKey: "StatusId"});
  Lookup.hasMany(UserFollowers, { as: "UserFollowers", foreignKey: "StatusId"});
  Lookup.belongsTo(LookupType, { as: "LookupType", foreignKey: "LookupTypeId"});
  LookupType.hasMany(Lookup, { as: "Lookups", foreignKey: "LookupTypeId"});
  Notification.belongsTo(Notification, { as: "NotificationType", foreignKey: "NotificationTypeId"});
  Notification.hasMany(Notification, { as: "Notifications", foreignKey: "NotificationTypeId"});
  Promotion.belongsTo(Plan, { as: "Plan", foreignKey: "PlanId"});
  Plan.hasMany(Promotion, { as: "Promotions", foreignKey: "PlanId"});
  RedeemedDiscountCodes.belongsTo(Plan, { as: "Plan", foreignKey: "PlanId"});
  Plan.hasMany(RedeemedDiscountCodes, { as: "RedeemedDiscountCodes", foreignKey: "PlanId"});
  Subscription.belongsTo(Plan, { as: "Plan", foreignKey: "PlanId"});
  Plan.hasMany(Subscription, { as: "Subscriptions", foreignKey: "PlanId"});
  Transaction.belongsTo(Promotion, { as: "Promotion", foreignKey: "PromotionId"});
  Promotion.hasMany(Transaction, { as: "Transactions", foreignKey: "PromotionId"});
  Sensor.belongsTo(SensorGroup, { as: "SensorGroup", foreignKey: "SensorGroupId"});
  SensorGroup.hasMany(Sensor, { as: "Sensors", foreignKey: "SensorGroupId"});
  Invoice.belongsTo(Subscription, { as: "Subscription", foreignKey: "SubscriptionId"});
  Subscription.hasMany(Invoice, { as: "Invoices", foreignKey: "SubscriptionId"});
  Company.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Company, { as: "Companies", foreignKey: "CreatedBy"});
  Company.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Company, { as: "DeletedBy_Companies", foreignKey: "DeletedBy"});
  Company.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Company, { as: "ModifiedBy_Companies", foreignKey: "ModifiedBy"});
  Company.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Company, { as: "User_Companies", foreignKey: "UserId"});
  Device.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Device, { as: "Devices", foreignKey: "CreatedBy"});
  Device.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Device, { as: "DeletedBy_Devices", foreignKey: "DeletedBy"});
  Device.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Device, { as: "ModifiedBy_Devices", foreignKey: "ModifiedBy"});
  DeviceGroup.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(DeviceGroup, { as: "DeviceGroups", foreignKey: "CreatedBy"});
  DeviceGroup.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(DeviceGroup, { as: "DeletedBy_DeviceGroups", foreignKey: "DeletedBy"});
  DeviceGroup.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(DeviceGroup, { as: "ModifiedBy_DeviceGroups", foreignKey: "ModifiedBy"});
  DiscountCode.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(DiscountCode, { as: "DiscountCodes", foreignKey: "CreatedBy"});
  DiscountCode.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(DiscountCode, { as: "DeletedBy_DiscountCodes", foreignKey: "DeletedBy"});
  DiscountCode.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(DiscountCode, { as: "ModifiedBy_DiscountCodes", foreignKey: "ModifiedBy"});
  Function.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Function, { as: "Functions", foreignKey: "CreatedBy"});
  Function.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Function, { as: "DeletedBy_Functions", foreignKey: "DeletedBy"});
  Function.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Function, { as: "ModifiedBy_Functions", foreignKey: "ModifiedBy"});
  Group.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Group, { as: "Groups", foreignKey: "CreatedBy"});
  Group.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Group, { as: "DeletedBy_Groups", foreignKey: "DeletedBy"});
  Group.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Group, { as: "ModifiedBy_Groups", foreignKey: "ModifiedBy"});
  GroupMembers.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(GroupMembers, { as: "GroupMembers", foreignKey: "CreatedBy"});
  GroupMembers.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(GroupMembers, { as: "DeletedBy_GroupMembers", foreignKey: "DeletedBy"});
  GroupMembers.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(GroupMembers, { as: "ModifiedBy_GroupMembers", foreignKey: "ModifiedBy"});
  GroupMembers.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(GroupMembers, { as: "User_GroupMembers", foreignKey: "UserId"});
  Invitation.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Invitation, { as: "Invitations", foreignKey: "CreatedBy"});
  Invitation.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Invitation, { as: "DeletedBy_Invitations", foreignKey: "DeletedBy"});
  Invitation.belongsTo(User, { as: "FromUser", foreignKey: "FromUserId"});
  User.hasMany(Invitation, { as: "FromUser_Invitations", foreignKey: "FromUserId"});
  Invitation.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Invitation, { as: "ModifiedBy_Invitations", foreignKey: "ModifiedBy"});
  Invitation.belongsTo(User, { as: "ToUser", foreignKey: "ToUserId"});
  User.hasMany(Invitation, { as: "ToUser_Invitations", foreignKey: "ToUserId"});
  Invoice.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Invoice, { as: "Invoices", foreignKey: "CreatedBy"});
  Invoice.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Invoice, { as: "DeletedBy_Invoices", foreignKey: "DeletedBy"});
  Invoice.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Invoice, { as: "ModifiedBy_Invoices", foreignKey: "ModifiedBy"});
  Invoice.belongsTo(User, { as: "PaidBy_User", foreignKey: "PaidBy"});
  User.hasMany(Invoice, { as: "PaidBy_Invoices", foreignKey: "PaidBy"});
  Notification.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Notification, { as: "Notifications", foreignKey: "CreatedBy"});
  Notification.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Notification, { as: "DeletedBy_Notifications", foreignKey: "DeletedBy"});
  Notification.belongsTo(User, { as: "FromUser", foreignKey: "FromUserId"});
  User.hasMany(Notification, { as: "FromUser_Notifications", foreignKey: "FromUserId"});
  Notification.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Notification, { as: "ModifiedBy_Notifications", foreignKey: "ModifiedBy"});
  Notification.belongsTo(User, { as: "ToUser", foreignKey: "ToUserId"});
  User.hasMany(Notification, { as: "ToUser_Notifications", foreignKey: "ToUserId"});
  Plan.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Plan, { as: "Plans", foreignKey: "CreatedBy"});
  Plan.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Plan, { as: "DeletedBy_Plans", foreignKey: "DeletedBy"});
  Plan.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Plan, { as: "ModifiedBy_Plans", foreignKey: "ModifiedBy"});
  Promotion.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Promotion, { as: "Promotions", foreignKey: "CreatedBy"});
  Promotion.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Promotion, { as: "DeletedBy_Promotions", foreignKey: "DeletedBy"});
  Promotion.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Promotion, { as: "ModifiedBy_Promotions", foreignKey: "ModifiedBy"});
  RedeemedDiscountCodes.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(RedeemedDiscountCodes, { as: "RedeemedDiscountCodes", foreignKey: "CreatedBy"});
  RedeemedDiscountCodes.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(RedeemedDiscountCodes, { as: "DeletedBy_RedeemedDiscountCodes", foreignKey: "DeletedBy"});
  RedeemedDiscountCodes.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(RedeemedDiscountCodes, { as: "ModifiedBy_RedeemedDiscountCodes", foreignKey: "ModifiedBy"});
  RedeemedDiscountCodes.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(RedeemedDiscountCodes, { as: "User_RedeemedDiscountCodes", foreignKey: "UserId"});
  Sensor.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Sensor, { as: "Sensors", foreignKey: "CreatedBy"});
  Sensor.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Sensor, { as: "DeletedBy_Sensors", foreignKey: "DeletedBy"});
  Sensor.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Sensor, { as: "ModifiedBy_Sensors", foreignKey: "ModifiedBy"});
  SensorGroup.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(SensorGroup, { as: "SensorGroups", foreignKey: "CreatedBy"});
  SensorGroup.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(SensorGroup, { as: "DeletedBy_SensorGroups", foreignKey: "DeletedBy"});
  SensorGroup.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(SensorGroup, { as: "ModifiedBy_SensorGroups", foreignKey: "ModifiedBy"});
  SpacialData.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(SpacialData, { as: "SpacialData", foreignKey: "CreatedBy"});
  SpacialData.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(SpacialData, { as: "DeletedBy_SpacialData", foreignKey: "DeletedBy"});
  SpacialData.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(SpacialData, { as: "ModifiedBy_SpacialData", foreignKey: "ModifiedBy"});
  SpacialData.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(SpacialData, { as: "User_SpacialData", foreignKey: "UserId"});
  Subscription.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Subscription, { as: "Subscriptions", foreignKey: "CreatedBy"});
  Subscription.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Subscription, { as: "DeletedBy_Subscriptions", foreignKey: "DeletedBy"});
  Subscription.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Subscription, { as: "ModifiedBy_Subscriptions", foreignKey: "ModifiedBy"});
  Subscription.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Subscription, { as: "User_Subscriptions", foreignKey: "UserId"});
  Ticket.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Ticket, { as: "Tickets", foreignKey: "CreatedBy"});
  Ticket.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Ticket, { as: "DeletedBy_Tickets", foreignKey: "DeletedBy"});
  Ticket.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Ticket, { as: "ModifiedBy_Tickets", foreignKey: "ModifiedBy"});
  Transaction.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(Transaction, { as: "Transactions", foreignKey: "CreatedBy"});
  Transaction.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(Transaction, { as: "DeletedBy_Transactions", foreignKey: "DeletedBy"});
  Transaction.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(Transaction, { as: "ModifiedBy_Transactions", foreignKey: "ModifiedBy"});
  User.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(User, { as: "Users", foreignKey: "CreatedBy"});
  User.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(User, { as: "DeletedBy_Users", foreignKey: "DeletedBy"});
  User.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(User, { as: "ModifiedBy_Users", foreignKey: "ModifiedBy"});
  UserFollowerGeofence.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(UserFollowerGeofence, { as: "UserFollowerGeofences", foreignKey: "CreatedBy"});
  UserFollowerGeofence.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(UserFollowerGeofence, { as: "DeletedBy_UserFollowerGeofences", foreignKey: "DeletedBy"});
  UserFollowerGeofence.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(UserFollowerGeofence, { as: "ModifiedBy_UserFollowerGeofences", foreignKey: "ModifiedBy"});
  UserFollowers.belongsTo(User, { as: "CreatedBy_User", foreignKey: "CreatedBy"});
  User.hasMany(UserFollowers, { as: "UserFollowers", foreignKey: "CreatedBy"});
  UserFollowers.belongsTo(User, { as: "DeletedBy_User", foreignKey: "DeletedBy"});
  User.hasMany(UserFollowers, { as: "DeletedBy_UserFollowers", foreignKey: "DeletedBy"});
  UserFollowers.belongsTo(User, { as: "FollowerUser", foreignKey: "FollowerUserId"});
  User.hasMany(UserFollowers, { as: "FollowerUser_UserFollowers", foreignKey: "FollowerUserId"});
  UserFollowers.belongsTo(User, { as: "ModifiedBy_User", foreignKey: "ModifiedBy"});
  User.hasMany(UserFollowers, { as: "ModifiedBy_UserFollowers", foreignKey: "ModifiedBy"});
  UserFollowers.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(UserFollowers, { as: "User_UserFollowers", foreignKey: "UserId"});
  UserFollowerGeofence.belongsTo(UserFollowers, { as: "UserFollower", foreignKey: "UserFollowerId"});
  UserFollowers.hasMany(UserFollowerGeofence, { as: "UserFollowerGeofences", foreignKey: "UserFollowerId"});

  return {
    Brand: Brand,
    Company: Company,
    Device: Device,
    DeviceGroup: DeviceGroup,
    DeviceReading: DeviceReading,
    DiscountCode: DiscountCode,
    Function: Function,
    Group: Group,
    GroupMembers: GroupMembers,
    Invitation: Invitation,
    Invoice: Invoice,
    Lookup: Lookup,
    LookupType: LookupType,
    Notification: Notification,
    Plan: Plan,
    Promotion: Promotion,
    RedeemedDiscountCodes: RedeemedDiscountCodes,
    Sensor: Sensor,
    SensorGroup: SensorGroup,
    SpacialData: SpacialData,
    Subscription: Subscription,
    Ticket: Ticket,
    Transaction: Transaction,
    User: User,
    UserDevices: UserDevices,
    UserFollowerGeofence: UserFollowerGeofence,
    UserFollowers: UserFollowers,
  };
}
