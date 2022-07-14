import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';
import type { Device, DeviceId } from './Device';
import type { DeviceGroup, DeviceGroupId } from './DeviceGroup';
import type { DiscountCode, DiscountCodeId } from './DiscountCode';
import type { Function, FunctionId } from './Function';
import type { Group, GroupId } from './Group';
import type { GroupMembers, GroupMembersId } from './GroupMembers';
import type { Invitation, InvitationId } from './Invitation';
import type { Invoice, InvoiceId } from './Invoice';
import type { LookupType, LookupTypeId } from './LookupType';
import type { Notification, NotificationId } from './Notification';
import type { Plan, PlanId } from './Plan';
import type { Promotion, PromotionId } from './Promotion';
import type { RedeemedDiscountCodes, RedeemedDiscountCodesId } from './RedeemedDiscountCodes';
import type { Sensor, SensorId } from './Sensor';
import type { SensorGroup, SensorGroupId } from './SensorGroup';
import type { SpacialData, SpacialDataId } from './SpacialData';
import type { Subscription, SubscriptionId } from './Subscription';
import type { Transaction, TransactionId } from './Transaction';
import type { User, UserId } from './User';
import type { UserFollowerGeofence, UserFollowerGeofenceId } from './UserFollowerGeofence';
import type { UserFollowers, UserFollowersId } from './UserFollowers';

export interface LookupAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  LookupTypeId: number;
  ParentId?: number;
}

export type LookupPk = "Id";
export type LookupId = Lookup[LookupPk];
export type LookupCreationAttributes = Optional<LookupAttributes, LookupPk>;

export class Lookup extends Model<LookupAttributes, LookupCreationAttributes> implements LookupAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  LookupTypeId!: number;
  ParentId?: number;

  // Lookup hasMany Company via CityId
  Companies!: Company[];
  getCompanies!: Sequelize.HasManyGetAssociationsMixin<Company>;
  setCompanies!: Sequelize.HasManySetAssociationsMixin<Company, CompanyId>;
  addCompany!: Sequelize.HasManyAddAssociationMixin<Company, CompanyId>;
  addCompanies!: Sequelize.HasManyAddAssociationsMixin<Company, CompanyId>;
  createCompany!: Sequelize.HasManyCreateAssociationMixin<Company>;
  removeCompany!: Sequelize.HasManyRemoveAssociationMixin<Company, CompanyId>;
  removeCompanies!: Sequelize.HasManyRemoveAssociationsMixin<Company, CompanyId>;
  hasCompany!: Sequelize.HasManyHasAssociationMixin<Company, CompanyId>;
  hasCompanies!: Sequelize.HasManyHasAssociationsMixin<Company, CompanyId>;
  countCompanies!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Company via CountryId
  Country_Companies!: Company[];
  getCountry_Companies!: Sequelize.HasManyGetAssociationsMixin<Company>;
  setCountry_Companies!: Sequelize.HasManySetAssociationsMixin<Company, CompanyId>;
  addCountry_Company!: Sequelize.HasManyAddAssociationMixin<Company, CompanyId>;
  addCountry_Companies!: Sequelize.HasManyAddAssociationsMixin<Company, CompanyId>;
  createCountry_Company!: Sequelize.HasManyCreateAssociationMixin<Company>;
  removeCountry_Company!: Sequelize.HasManyRemoveAssociationMixin<Company, CompanyId>;
  removeCountry_Companies!: Sequelize.HasManyRemoveAssociationsMixin<Company, CompanyId>;
  hasCountry_Company!: Sequelize.HasManyHasAssociationMixin<Company, CompanyId>;
  hasCountry_Companies!: Sequelize.HasManyHasAssociationsMixin<Company, CompanyId>;
  countCountry_Companies!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Company via StatusId
  Status_Companies!: Company[];
  getStatus_Companies!: Sequelize.HasManyGetAssociationsMixin<Company>;
  setStatus_Companies!: Sequelize.HasManySetAssociationsMixin<Company, CompanyId>;
  addStatus_Company!: Sequelize.HasManyAddAssociationMixin<Company, CompanyId>;
  addStatus_Companies!: Sequelize.HasManyAddAssociationsMixin<Company, CompanyId>;
  createStatus_Company!: Sequelize.HasManyCreateAssociationMixin<Company>;
  removeStatus_Company!: Sequelize.HasManyRemoveAssociationMixin<Company, CompanyId>;
  removeStatus_Companies!: Sequelize.HasManyRemoveAssociationsMixin<Company, CompanyId>;
  hasStatus_Company!: Sequelize.HasManyHasAssociationMixin<Company, CompanyId>;
  hasStatus_Companies!: Sequelize.HasManyHasAssociationsMixin<Company, CompanyId>;
  countStatus_Companies!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Device via StatusId
  Devices!: Device[];
  getDevices!: Sequelize.HasManyGetAssociationsMixin<Device>;
  setDevices!: Sequelize.HasManySetAssociationsMixin<Device, DeviceId>;
  addDevice!: Sequelize.HasManyAddAssociationMixin<Device, DeviceId>;
  addDevices!: Sequelize.HasManyAddAssociationsMixin<Device, DeviceId>;
  createDevice!: Sequelize.HasManyCreateAssociationMixin<Device>;
  removeDevice!: Sequelize.HasManyRemoveAssociationMixin<Device, DeviceId>;
  removeDevices!: Sequelize.HasManyRemoveAssociationsMixin<Device, DeviceId>;
  hasDevice!: Sequelize.HasManyHasAssociationMixin<Device, DeviceId>;
  hasDevices!: Sequelize.HasManyHasAssociationsMixin<Device, DeviceId>;
  countDevices!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany DeviceGroup via DeviceTypeId
  DeviceGroups!: DeviceGroup[];
  getDeviceGroups!: Sequelize.HasManyGetAssociationsMixin<DeviceGroup>;
  setDeviceGroups!: Sequelize.HasManySetAssociationsMixin<DeviceGroup, DeviceGroupId>;
  addDeviceGroup!: Sequelize.HasManyAddAssociationMixin<DeviceGroup, DeviceGroupId>;
  addDeviceGroups!: Sequelize.HasManyAddAssociationsMixin<DeviceGroup, DeviceGroupId>;
  createDeviceGroup!: Sequelize.HasManyCreateAssociationMixin<DeviceGroup>;
  removeDeviceGroup!: Sequelize.HasManyRemoveAssociationMixin<DeviceGroup, DeviceGroupId>;
  removeDeviceGroups!: Sequelize.HasManyRemoveAssociationsMixin<DeviceGroup, DeviceGroupId>;
  hasDeviceGroup!: Sequelize.HasManyHasAssociationMixin<DeviceGroup, DeviceGroupId>;
  hasDeviceGroups!: Sequelize.HasManyHasAssociationsMixin<DeviceGroup, DeviceGroupId>;
  countDeviceGroups!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany DeviceGroup via StatusId
  Status_DeviceGroups!: DeviceGroup[];
  getStatus_DeviceGroups!: Sequelize.HasManyGetAssociationsMixin<DeviceGroup>;
  setStatus_DeviceGroups!: Sequelize.HasManySetAssociationsMixin<DeviceGroup, DeviceGroupId>;
  addStatus_DeviceGroup!: Sequelize.HasManyAddAssociationMixin<DeviceGroup, DeviceGroupId>;
  addStatus_DeviceGroups!: Sequelize.HasManyAddAssociationsMixin<DeviceGroup, DeviceGroupId>;
  createStatus_DeviceGroup!: Sequelize.HasManyCreateAssociationMixin<DeviceGroup>;
  removeStatus_DeviceGroup!: Sequelize.HasManyRemoveAssociationMixin<DeviceGroup, DeviceGroupId>;
  removeStatus_DeviceGroups!: Sequelize.HasManyRemoveAssociationsMixin<DeviceGroup, DeviceGroupId>;
  hasStatus_DeviceGroup!: Sequelize.HasManyHasAssociationMixin<DeviceGroup, DeviceGroupId>;
  hasStatus_DeviceGroups!: Sequelize.HasManyHasAssociationsMixin<DeviceGroup, DeviceGroupId>;
  countStatus_DeviceGroups!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany DiscountCode via StatusId
  DiscountCodes!: DiscountCode[];
  getDiscountCodes!: Sequelize.HasManyGetAssociationsMixin<DiscountCode>;
  setDiscountCodes!: Sequelize.HasManySetAssociationsMixin<DiscountCode, DiscountCodeId>;
  addDiscountCode!: Sequelize.HasManyAddAssociationMixin<DiscountCode, DiscountCodeId>;
  addDiscountCodes!: Sequelize.HasManyAddAssociationsMixin<DiscountCode, DiscountCodeId>;
  createDiscountCode!: Sequelize.HasManyCreateAssociationMixin<DiscountCode>;
  removeDiscountCode!: Sequelize.HasManyRemoveAssociationMixin<DiscountCode, DiscountCodeId>;
  removeDiscountCodes!: Sequelize.HasManyRemoveAssociationsMixin<DiscountCode, DiscountCodeId>;
  hasDiscountCode!: Sequelize.HasManyHasAssociationMixin<DiscountCode, DiscountCodeId>;
  hasDiscountCodes!: Sequelize.HasManyHasAssociationsMixin<DiscountCode, DiscountCodeId>;
  countDiscountCodes!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Function via StatusId
  Functions!: Function[];
  getFunctions!: Sequelize.HasManyGetAssociationsMixin<Function>;
  setFunctions!: Sequelize.HasManySetAssociationsMixin<Function, FunctionId>;
  addFunction!: Sequelize.HasManyAddAssociationMixin<Function, FunctionId>;
  addFunctions!: Sequelize.HasManyAddAssociationsMixin<Function, FunctionId>;
  createFunction!: Sequelize.HasManyCreateAssociationMixin<Function>;
  removeFunction!: Sequelize.HasManyRemoveAssociationMixin<Function, FunctionId>;
  removeFunctions!: Sequelize.HasManyRemoveAssociationsMixin<Function, FunctionId>;
  hasFunction!: Sequelize.HasManyHasAssociationMixin<Function, FunctionId>;
  hasFunctions!: Sequelize.HasManyHasAssociationsMixin<Function, FunctionId>;
  countFunctions!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Group via StatusId
  Groups!: Group[];
  getGroups!: Sequelize.HasManyGetAssociationsMixin<Group>;
  setGroups!: Sequelize.HasManySetAssociationsMixin<Group, GroupId>;
  addGroup!: Sequelize.HasManyAddAssociationMixin<Group, GroupId>;
  addGroups!: Sequelize.HasManyAddAssociationsMixin<Group, GroupId>;
  createGroup!: Sequelize.HasManyCreateAssociationMixin<Group>;
  removeGroup!: Sequelize.HasManyRemoveAssociationMixin<Group, GroupId>;
  removeGroups!: Sequelize.HasManyRemoveAssociationsMixin<Group, GroupId>;
  hasGroup!: Sequelize.HasManyHasAssociationMixin<Group, GroupId>;
  hasGroups!: Sequelize.HasManyHasAssociationsMixin<Group, GroupId>;
  countGroups!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany GroupMembers via StatusId
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
  // Lookup hasMany Invitation via InvitationTypeId
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
  // Lookup hasMany Invitation via StatusId
  Status_Invitations!: Invitation[];
  getStatus_Invitations!: Sequelize.HasManyGetAssociationsMixin<Invitation>;
  setStatus_Invitations!: Sequelize.HasManySetAssociationsMixin<Invitation, InvitationId>;
  addStatus_Invitation!: Sequelize.HasManyAddAssociationMixin<Invitation, InvitationId>;
  addStatus_Invitations!: Sequelize.HasManyAddAssociationsMixin<Invitation, InvitationId>;
  createStatus_Invitation!: Sequelize.HasManyCreateAssociationMixin<Invitation>;
  removeStatus_Invitation!: Sequelize.HasManyRemoveAssociationMixin<Invitation, InvitationId>;
  removeStatus_Invitations!: Sequelize.HasManyRemoveAssociationsMixin<Invitation, InvitationId>;
  hasStatus_Invitation!: Sequelize.HasManyHasAssociationMixin<Invitation, InvitationId>;
  hasStatus_Invitations!: Sequelize.HasManyHasAssociationsMixin<Invitation, InvitationId>;
  countStatus_Invitations!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Invoice via StatusId
  Invoices!: Invoice[];
  getInvoices!: Sequelize.HasManyGetAssociationsMixin<Invoice>;
  setInvoices!: Sequelize.HasManySetAssociationsMixin<Invoice, InvoiceId>;
  addInvoice!: Sequelize.HasManyAddAssociationMixin<Invoice, InvoiceId>;
  addInvoices!: Sequelize.HasManyAddAssociationsMixin<Invoice, InvoiceId>;
  createInvoice!: Sequelize.HasManyCreateAssociationMixin<Invoice>;
  removeInvoice!: Sequelize.HasManyRemoveAssociationMixin<Invoice, InvoiceId>;
  removeInvoices!: Sequelize.HasManyRemoveAssociationsMixin<Invoice, InvoiceId>;
  hasInvoice!: Sequelize.HasManyHasAssociationMixin<Invoice, InvoiceId>;
  hasInvoices!: Sequelize.HasManyHasAssociationsMixin<Invoice, InvoiceId>;
  countInvoices!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup belongsTo Lookup via ParentId
  Parent!: Lookup;
  getParent!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Lookup hasMany Notification via StatusId
  Notifications!: Notification[];
  getNotifications!: Sequelize.HasManyGetAssociationsMixin<Notification>;
  setNotifications!: Sequelize.HasManySetAssociationsMixin<Notification, NotificationId>;
  addNotification!: Sequelize.HasManyAddAssociationMixin<Notification, NotificationId>;
  addNotifications!: Sequelize.HasManyAddAssociationsMixin<Notification, NotificationId>;
  createNotification!: Sequelize.HasManyCreateAssociationMixin<Notification>;
  removeNotification!: Sequelize.HasManyRemoveAssociationMixin<Notification, NotificationId>;
  removeNotifications!: Sequelize.HasManyRemoveAssociationsMixin<Notification, NotificationId>;
  hasNotification!: Sequelize.HasManyHasAssociationMixin<Notification, NotificationId>;
  hasNotifications!: Sequelize.HasManyHasAssociationsMixin<Notification, NotificationId>;
  countNotifications!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Plan via DurationTypeId
  Plans!: Plan[];
  getPlans!: Sequelize.HasManyGetAssociationsMixin<Plan>;
  setPlans!: Sequelize.HasManySetAssociationsMixin<Plan, PlanId>;
  addPlan!: Sequelize.HasManyAddAssociationMixin<Plan, PlanId>;
  addPlans!: Sequelize.HasManyAddAssociationsMixin<Plan, PlanId>;
  createPlan!: Sequelize.HasManyCreateAssociationMixin<Plan>;
  removePlan!: Sequelize.HasManyRemoveAssociationMixin<Plan, PlanId>;
  removePlans!: Sequelize.HasManyRemoveAssociationsMixin<Plan, PlanId>;
  hasPlan!: Sequelize.HasManyHasAssociationMixin<Plan, PlanId>;
  hasPlans!: Sequelize.HasManyHasAssociationsMixin<Plan, PlanId>;
  countPlans!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Plan via StatusId
  Status_Plans!: Plan[];
  getStatus_Plans!: Sequelize.HasManyGetAssociationsMixin<Plan>;
  setStatus_Plans!: Sequelize.HasManySetAssociationsMixin<Plan, PlanId>;
  addStatus_Plan!: Sequelize.HasManyAddAssociationMixin<Plan, PlanId>;
  addStatus_Plans!: Sequelize.HasManyAddAssociationsMixin<Plan, PlanId>;
  createStatus_Plan!: Sequelize.HasManyCreateAssociationMixin<Plan>;
  removeStatus_Plan!: Sequelize.HasManyRemoveAssociationMixin<Plan, PlanId>;
  removeStatus_Plans!: Sequelize.HasManyRemoveAssociationsMixin<Plan, PlanId>;
  hasStatus_Plan!: Sequelize.HasManyHasAssociationMixin<Plan, PlanId>;
  hasStatus_Plans!: Sequelize.HasManyHasAssociationsMixin<Plan, PlanId>;
  countStatus_Plans!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Plan via SubscriptionTypeId
  SubscriptionType_Plans!: Plan[];
  getSubscriptionType_Plans!: Sequelize.HasManyGetAssociationsMixin<Plan>;
  setSubscriptionType_Plans!: Sequelize.HasManySetAssociationsMixin<Plan, PlanId>;
  addSubscriptionType_Plan!: Sequelize.HasManyAddAssociationMixin<Plan, PlanId>;
  addSubscriptionType_Plans!: Sequelize.HasManyAddAssociationsMixin<Plan, PlanId>;
  createSubscriptionType_Plan!: Sequelize.HasManyCreateAssociationMixin<Plan>;
  removeSubscriptionType_Plan!: Sequelize.HasManyRemoveAssociationMixin<Plan, PlanId>;
  removeSubscriptionType_Plans!: Sequelize.HasManyRemoveAssociationsMixin<Plan, PlanId>;
  hasSubscriptionType_Plan!: Sequelize.HasManyHasAssociationMixin<Plan, PlanId>;
  hasSubscriptionType_Plans!: Sequelize.HasManyHasAssociationsMixin<Plan, PlanId>;
  countSubscriptionType_Plans!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Promotion via StatusId
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
  // Lookup hasMany RedeemedDiscountCodes via StatusId
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
  // Lookup hasMany Sensor via StatusId
  Sensors!: Sensor[];
  getSensors!: Sequelize.HasManyGetAssociationsMixin<Sensor>;
  setSensors!: Sequelize.HasManySetAssociationsMixin<Sensor, SensorId>;
  addSensor!: Sequelize.HasManyAddAssociationMixin<Sensor, SensorId>;
  addSensors!: Sequelize.HasManyAddAssociationsMixin<Sensor, SensorId>;
  createSensor!: Sequelize.HasManyCreateAssociationMixin<Sensor>;
  removeSensor!: Sequelize.HasManyRemoveAssociationMixin<Sensor, SensorId>;
  removeSensors!: Sequelize.HasManyRemoveAssociationsMixin<Sensor, SensorId>;
  hasSensor!: Sequelize.HasManyHasAssociationMixin<Sensor, SensorId>;
  hasSensors!: Sequelize.HasManyHasAssociationsMixin<Sensor, SensorId>;
  countSensors!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany SensorGroup via MeasurementUnitId
  SensorGroups!: SensorGroup[];
  getSensorGroups!: Sequelize.HasManyGetAssociationsMixin<SensorGroup>;
  setSensorGroups!: Sequelize.HasManySetAssociationsMixin<SensorGroup, SensorGroupId>;
  addSensorGroup!: Sequelize.HasManyAddAssociationMixin<SensorGroup, SensorGroupId>;
  addSensorGroups!: Sequelize.HasManyAddAssociationsMixin<SensorGroup, SensorGroupId>;
  createSensorGroup!: Sequelize.HasManyCreateAssociationMixin<SensorGroup>;
  removeSensorGroup!: Sequelize.HasManyRemoveAssociationMixin<SensorGroup, SensorGroupId>;
  removeSensorGroups!: Sequelize.HasManyRemoveAssociationsMixin<SensorGroup, SensorGroupId>;
  hasSensorGroup!: Sequelize.HasManyHasAssociationMixin<SensorGroup, SensorGroupId>;
  hasSensorGroups!: Sequelize.HasManyHasAssociationsMixin<SensorGroup, SensorGroupId>;
  countSensorGroups!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany SensorGroup via StatusId
  Status_SensorGroups!: SensorGroup[];
  getStatus_SensorGroups!: Sequelize.HasManyGetAssociationsMixin<SensorGroup>;
  setStatus_SensorGroups!: Sequelize.HasManySetAssociationsMixin<SensorGroup, SensorGroupId>;
  addStatus_SensorGroup!: Sequelize.HasManyAddAssociationMixin<SensorGroup, SensorGroupId>;
  addStatus_SensorGroups!: Sequelize.HasManyAddAssociationsMixin<SensorGroup, SensorGroupId>;
  createStatus_SensorGroup!: Sequelize.HasManyCreateAssociationMixin<SensorGroup>;
  removeStatus_SensorGroup!: Sequelize.HasManyRemoveAssociationMixin<SensorGroup, SensorGroupId>;
  removeStatus_SensorGroups!: Sequelize.HasManyRemoveAssociationsMixin<SensorGroup, SensorGroupId>;
  hasStatus_SensorGroup!: Sequelize.HasManyHasAssociationMixin<SensorGroup, SensorGroupId>;
  hasStatus_SensorGroups!: Sequelize.HasManyHasAssociationsMixin<SensorGroup, SensorGroupId>;
  countStatus_SensorGroups!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany SpacialData via SpacialDataTypeId
  SpacialData!: SpacialData[];
  getSpacialData!: Sequelize.HasManyGetAssociationsMixin<SpacialData>;
  setSpacialData!: Sequelize.HasManySetAssociationsMixin<SpacialData, SpacialDataId>;
  addSpacialDatum!: Sequelize.HasManyAddAssociationMixin<SpacialData, SpacialDataId>;
  addSpacialData!: Sequelize.HasManyAddAssociationsMixin<SpacialData, SpacialDataId>;
  createSpacialDatum!: Sequelize.HasManyCreateAssociationMixin<SpacialData>;
  removeSpacialDatum!: Sequelize.HasManyRemoveAssociationMixin<SpacialData, SpacialDataId>;
  removeSpacialData!: Sequelize.HasManyRemoveAssociationsMixin<SpacialData, SpacialDataId>;
  hasSpacialDatum!: Sequelize.HasManyHasAssociationMixin<SpacialData, SpacialDataId>;
  hasSpacialData!: Sequelize.HasManyHasAssociationsMixin<SpacialData, SpacialDataId>;
  countSpacialData!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany SpacialData via StatusId
  Status_SpacialData!: SpacialData[];
  getStatus_SpacialData!: Sequelize.HasManyGetAssociationsMixin<SpacialData>;
  setStatus_SpacialData!: Sequelize.HasManySetAssociationsMixin<SpacialData, SpacialDataId>;
  addStatus_SpacialDatum!: Sequelize.HasManyAddAssociationMixin<SpacialData, SpacialDataId>;
  addStatus_SpacialData!: Sequelize.HasManyAddAssociationsMixin<SpacialData, SpacialDataId>;
  createStatus_SpacialDatum!: Sequelize.HasManyCreateAssociationMixin<SpacialData>;
  removeStatus_SpacialDatum!: Sequelize.HasManyRemoveAssociationMixin<SpacialData, SpacialDataId>;
  removeStatus_SpacialData!: Sequelize.HasManyRemoveAssociationsMixin<SpacialData, SpacialDataId>;
  hasStatus_SpacialDatum!: Sequelize.HasManyHasAssociationMixin<SpacialData, SpacialDataId>;
  hasStatus_SpacialData!: Sequelize.HasManyHasAssociationsMixin<SpacialData, SpacialDataId>;
  countStatus_SpacialData!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany Subscription via StatusId
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
  // Lookup hasMany Transaction via StatusId
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
  // Lookup hasMany User via CityId
  Users!: User[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<User>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<User, UserId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<User, UserId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<User, UserId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<User>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<User, UserId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<User, UserId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<User, UserId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<User, UserId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany User via CountryId
  Country_Users!: User[];
  getCountry_Users!: Sequelize.HasManyGetAssociationsMixin<User>;
  setCountry_Users!: Sequelize.HasManySetAssociationsMixin<User, UserId>;
  addCountry_User!: Sequelize.HasManyAddAssociationMixin<User, UserId>;
  addCountry_Users!: Sequelize.HasManyAddAssociationsMixin<User, UserId>;
  createCountry_User!: Sequelize.HasManyCreateAssociationMixin<User>;
  removeCountry_User!: Sequelize.HasManyRemoveAssociationMixin<User, UserId>;
  removeCountry_Users!: Sequelize.HasManyRemoveAssociationsMixin<User, UserId>;
  hasCountry_User!: Sequelize.HasManyHasAssociationMixin<User, UserId>;
  hasCountry_Users!: Sequelize.HasManyHasAssociationsMixin<User, UserId>;
  countCountry_Users!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany User via DistrictId
  District_Users!: User[];
  getDistrict_Users!: Sequelize.HasManyGetAssociationsMixin<User>;
  setDistrict_Users!: Sequelize.HasManySetAssociationsMixin<User, UserId>;
  addDistrict_User!: Sequelize.HasManyAddAssociationMixin<User, UserId>;
  addDistrict_Users!: Sequelize.HasManyAddAssociationsMixin<User, UserId>;
  createDistrict_User!: Sequelize.HasManyCreateAssociationMixin<User>;
  removeDistrict_User!: Sequelize.HasManyRemoveAssociationMixin<User, UserId>;
  removeDistrict_Users!: Sequelize.HasManyRemoveAssociationsMixin<User, UserId>;
  hasDistrict_User!: Sequelize.HasManyHasAssociationMixin<User, UserId>;
  hasDistrict_Users!: Sequelize.HasManyHasAssociationsMixin<User, UserId>;
  countDistrict_Users!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany User via StatusId
  Status_Users!: User[];
  getStatus_Users!: Sequelize.HasManyGetAssociationsMixin<User>;
  setStatus_Users!: Sequelize.HasManySetAssociationsMixin<User, UserId>;
  addStatus_User!: Sequelize.HasManyAddAssociationMixin<User, UserId>;
  addStatus_Users!: Sequelize.HasManyAddAssociationsMixin<User, UserId>;
  createStatus_User!: Sequelize.HasManyCreateAssociationMixin<User>;
  removeStatus_User!: Sequelize.HasManyRemoveAssociationMixin<User, UserId>;
  removeStatus_Users!: Sequelize.HasManyRemoveAssociationsMixin<User, UserId>;
  hasStatus_User!: Sequelize.HasManyHasAssociationMixin<User, UserId>;
  hasStatus_Users!: Sequelize.HasManyHasAssociationsMixin<User, UserId>;
  countStatus_Users!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany User via UserTypeId
  UserType_Users!: User[];
  getUserType_Users!: Sequelize.HasManyGetAssociationsMixin<User>;
  setUserType_Users!: Sequelize.HasManySetAssociationsMixin<User, UserId>;
  addUserType_User!: Sequelize.HasManyAddAssociationMixin<User, UserId>;
  addUserType_Users!: Sequelize.HasManyAddAssociationsMixin<User, UserId>;
  createUserType_User!: Sequelize.HasManyCreateAssociationMixin<User>;
  removeUserType_User!: Sequelize.HasManyRemoveAssociationMixin<User, UserId>;
  removeUserType_Users!: Sequelize.HasManyRemoveAssociationsMixin<User, UserId>;
  hasUserType_User!: Sequelize.HasManyHasAssociationMixin<User, UserId>;
  hasUserType_Users!: Sequelize.HasManyHasAssociationsMixin<User, UserId>;
  countUserType_Users!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany UserFollowerGeofence via StatusId
  UserFollowerGeofences!: UserFollowerGeofence[];
  getUserFollowerGeofences!: Sequelize.HasManyGetAssociationsMixin<UserFollowerGeofence>;
  setUserFollowerGeofences!: Sequelize.HasManySetAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addUserFollowerGeofence!: Sequelize.HasManyAddAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addUserFollowerGeofences!: Sequelize.HasManyAddAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  createUserFollowerGeofence!: Sequelize.HasManyCreateAssociationMixin<UserFollowerGeofence>;
  removeUserFollowerGeofence!: Sequelize.HasManyRemoveAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  removeUserFollowerGeofences!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasUserFollowerGeofence!: Sequelize.HasManyHasAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasUserFollowerGeofences!: Sequelize.HasManyHasAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  countUserFollowerGeofences!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup hasMany UserFollowers via StatusId
  UserFollowers!: UserFollowers[];
  getUserFollowers!: Sequelize.HasManyGetAssociationsMixin<UserFollowers>;
  setUserFollowers!: Sequelize.HasManySetAssociationsMixin<UserFollowers, UserFollowersId>;
  addUserFollower!: Sequelize.HasManyAddAssociationMixin<UserFollowers, UserFollowersId>;
  addUserFollowers!: Sequelize.HasManyAddAssociationsMixin<UserFollowers, UserFollowersId>;
  createUserFollower!: Sequelize.HasManyCreateAssociationMixin<UserFollowers>;
  removeUserFollower!: Sequelize.HasManyRemoveAssociationMixin<UserFollowers, UserFollowersId>;
  removeUserFollowers!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowers, UserFollowersId>;
  hasUserFollower!: Sequelize.HasManyHasAssociationMixin<UserFollowers, UserFollowersId>;
  hasUserFollowers!: Sequelize.HasManyHasAssociationsMixin<UserFollowers, UserFollowersId>;
  countUserFollowers!: Sequelize.HasManyCountAssociationsMixin;
  // Lookup belongsTo LookupType via LookupTypeId
  LookupType!: LookupType;
  getLookupType!: Sequelize.BelongsToGetAssociationMixin<LookupType>;
  setLookupType!: Sequelize.BelongsToSetAssociationMixin<LookupType, LookupTypeId>;
  createLookupType!: Sequelize.BelongsToCreateAssociationMixin<LookupType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Lookup {
    Lookup.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NameEn: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    NameAr: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    LookupTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'LookupType',
        key: 'Id'
      }
    },
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Lookup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Lookup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Lookup;
  }
}
