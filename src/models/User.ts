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
import type { Lookup, LookupId } from './Lookup';
import type { Notification, NotificationId } from './Notification';
import type { Plan, PlanId } from './Plan';
import type { Promotion, PromotionId } from './Promotion';
import type { RedeemedDiscountCodes, RedeemedDiscountCodesId } from './RedeemedDiscountCodes';
import type { Sensor, SensorId } from './Sensor';
import type { SensorGroup, SensorGroupId } from './SensorGroup';
import type { SpacialData, SpacialDataId } from './SpacialData';
import type { Subscription, SubscriptionId } from './Subscription';
import type { Ticket, TicketId } from './Ticket';
import type { Transaction, TransactionId } from './Transaction';
import type { UserFollowerGeofence, UserFollowerGeofenceId } from './UserFollowerGeofence';
import type { UserFollowers, UserFollowersId } from './UserFollowers';

export interface UserAttributes {
  Id: number;
  UserTypeId: number;
  CountryId: number;
  CityId: number;
  DistrictId: number;
  NameEn: string;
  NameAr: string;
  StatusId: number;
  Username: string;
  Password: string;
  Email: string;
  Phone: string;
  EmergencyNumber?: string;
  Avatar?: string;
  IsAdmin?: boolean;
  DeviceToken?: string;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type UserPk = "Id";
export type UserId = User[UserPk];
export type UserCreationAttributes = Optional<UserAttributes, UserPk>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  Id!: number;
  UserTypeId!: number;
  CountryId!: number;
  CityId!: number;
  DistrictId!: number;
  NameEn!: string;
  NameAr!: string;
  StatusId!: number;
  Username!: string;
  Password!: string;
  Email!: string;
  Phone!: string;
  EmergencyNumber?: string;
  Avatar?: string;
  IsAdmin?: boolean;
  DeviceToken?: string;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // User belongsTo Lookup via CityId
  City!: Lookup;
  getCity!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setCity!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createCity!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // User belongsTo Lookup via CountryId
  Country!: Lookup;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // User belongsTo Lookup via DistrictId
  District!: Lookup;
  getDistrict!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setDistrict!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createDistrict!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // User belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // User belongsTo Lookup via UserTypeId
  UserType!: Lookup;
  getUserType!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setUserType!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createUserType!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // User hasMany Company via CreatedBy
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
  // User hasMany Company via DeletedBy
  DeletedBy_Companies!: Company[];
  getDeletedBy_Companies!: Sequelize.HasManyGetAssociationsMixin<Company>;
  setDeletedBy_Companies!: Sequelize.HasManySetAssociationsMixin<Company, CompanyId>;
  addDeletedBy_Company!: Sequelize.HasManyAddAssociationMixin<Company, CompanyId>;
  addDeletedBy_Companies!: Sequelize.HasManyAddAssociationsMixin<Company, CompanyId>;
  createDeletedBy_Company!: Sequelize.HasManyCreateAssociationMixin<Company>;
  removeDeletedBy_Company!: Sequelize.HasManyRemoveAssociationMixin<Company, CompanyId>;
  removeDeletedBy_Companies!: Sequelize.HasManyRemoveAssociationsMixin<Company, CompanyId>;
  hasDeletedBy_Company!: Sequelize.HasManyHasAssociationMixin<Company, CompanyId>;
  hasDeletedBy_Companies!: Sequelize.HasManyHasAssociationsMixin<Company, CompanyId>;
  countDeletedBy_Companies!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Company via ModifiedBy
  ModifiedBy_Companies!: Company[];
  getModifiedBy_Companies!: Sequelize.HasManyGetAssociationsMixin<Company>;
  setModifiedBy_Companies!: Sequelize.HasManySetAssociationsMixin<Company, CompanyId>;
  addModifiedBy_Company!: Sequelize.HasManyAddAssociationMixin<Company, CompanyId>;
  addModifiedBy_Companies!: Sequelize.HasManyAddAssociationsMixin<Company, CompanyId>;
  createModifiedBy_Company!: Sequelize.HasManyCreateAssociationMixin<Company>;
  removeModifiedBy_Company!: Sequelize.HasManyRemoveAssociationMixin<Company, CompanyId>;
  removeModifiedBy_Companies!: Sequelize.HasManyRemoveAssociationsMixin<Company, CompanyId>;
  hasModifiedBy_Company!: Sequelize.HasManyHasAssociationMixin<Company, CompanyId>;
  hasModifiedBy_Companies!: Sequelize.HasManyHasAssociationsMixin<Company, CompanyId>;
  countModifiedBy_Companies!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Company via UserId
  User_Companies!: Company[];
  getUser_Companies!: Sequelize.HasManyGetAssociationsMixin<Company>;
  setUser_Companies!: Sequelize.HasManySetAssociationsMixin<Company, CompanyId>;
  addUser_Company!: Sequelize.HasManyAddAssociationMixin<Company, CompanyId>;
  addUser_Companies!: Sequelize.HasManyAddAssociationsMixin<Company, CompanyId>;
  createUser_Company!: Sequelize.HasManyCreateAssociationMixin<Company>;
  removeUser_Company!: Sequelize.HasManyRemoveAssociationMixin<Company, CompanyId>;
  removeUser_Companies!: Sequelize.HasManyRemoveAssociationsMixin<Company, CompanyId>;
  hasUser_Company!: Sequelize.HasManyHasAssociationMixin<Company, CompanyId>;
  hasUser_Companies!: Sequelize.HasManyHasAssociationsMixin<Company, CompanyId>;
  countUser_Companies!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Device via CreatedBy
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
  // User hasMany Device via DeletedBy
  DeletedBy_Devices!: Device[];
  getDeletedBy_Devices!: Sequelize.HasManyGetAssociationsMixin<Device>;
  setDeletedBy_Devices!: Sequelize.HasManySetAssociationsMixin<Device, DeviceId>;
  addDeletedBy_Device!: Sequelize.HasManyAddAssociationMixin<Device, DeviceId>;
  addDeletedBy_Devices!: Sequelize.HasManyAddAssociationsMixin<Device, DeviceId>;
  createDeletedBy_Device!: Sequelize.HasManyCreateAssociationMixin<Device>;
  removeDeletedBy_Device!: Sequelize.HasManyRemoveAssociationMixin<Device, DeviceId>;
  removeDeletedBy_Devices!: Sequelize.HasManyRemoveAssociationsMixin<Device, DeviceId>;
  hasDeletedBy_Device!: Sequelize.HasManyHasAssociationMixin<Device, DeviceId>;
  hasDeletedBy_Devices!: Sequelize.HasManyHasAssociationsMixin<Device, DeviceId>;
  countDeletedBy_Devices!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Device via ModifiedBy
  ModifiedBy_Devices!: Device[];
  getModifiedBy_Devices!: Sequelize.HasManyGetAssociationsMixin<Device>;
  setModifiedBy_Devices!: Sequelize.HasManySetAssociationsMixin<Device, DeviceId>;
  addModifiedBy_Device!: Sequelize.HasManyAddAssociationMixin<Device, DeviceId>;
  addModifiedBy_Devices!: Sequelize.HasManyAddAssociationsMixin<Device, DeviceId>;
  createModifiedBy_Device!: Sequelize.HasManyCreateAssociationMixin<Device>;
  removeModifiedBy_Device!: Sequelize.HasManyRemoveAssociationMixin<Device, DeviceId>;
  removeModifiedBy_Devices!: Sequelize.HasManyRemoveAssociationsMixin<Device, DeviceId>;
  hasModifiedBy_Device!: Sequelize.HasManyHasAssociationMixin<Device, DeviceId>;
  hasModifiedBy_Devices!: Sequelize.HasManyHasAssociationsMixin<Device, DeviceId>;
  countModifiedBy_Devices!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany DeviceGroup via CreatedBy
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
  // User hasMany DeviceGroup via DeletedBy
  DeletedBy_DeviceGroups!: DeviceGroup[];
  getDeletedBy_DeviceGroups!: Sequelize.HasManyGetAssociationsMixin<DeviceGroup>;
  setDeletedBy_DeviceGroups!: Sequelize.HasManySetAssociationsMixin<DeviceGroup, DeviceGroupId>;
  addDeletedBy_DeviceGroup!: Sequelize.HasManyAddAssociationMixin<DeviceGroup, DeviceGroupId>;
  addDeletedBy_DeviceGroups!: Sequelize.HasManyAddAssociationsMixin<DeviceGroup, DeviceGroupId>;
  createDeletedBy_DeviceGroup!: Sequelize.HasManyCreateAssociationMixin<DeviceGroup>;
  removeDeletedBy_DeviceGroup!: Sequelize.HasManyRemoveAssociationMixin<DeviceGroup, DeviceGroupId>;
  removeDeletedBy_DeviceGroups!: Sequelize.HasManyRemoveAssociationsMixin<DeviceGroup, DeviceGroupId>;
  hasDeletedBy_DeviceGroup!: Sequelize.HasManyHasAssociationMixin<DeviceGroup, DeviceGroupId>;
  hasDeletedBy_DeviceGroups!: Sequelize.HasManyHasAssociationsMixin<DeviceGroup, DeviceGroupId>;
  countDeletedBy_DeviceGroups!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany DeviceGroup via ModifiedBy
  ModifiedBy_DeviceGroups!: DeviceGroup[];
  getModifiedBy_DeviceGroups!: Sequelize.HasManyGetAssociationsMixin<DeviceGroup>;
  setModifiedBy_DeviceGroups!: Sequelize.HasManySetAssociationsMixin<DeviceGroup, DeviceGroupId>;
  addModifiedBy_DeviceGroup!: Sequelize.HasManyAddAssociationMixin<DeviceGroup, DeviceGroupId>;
  addModifiedBy_DeviceGroups!: Sequelize.HasManyAddAssociationsMixin<DeviceGroup, DeviceGroupId>;
  createModifiedBy_DeviceGroup!: Sequelize.HasManyCreateAssociationMixin<DeviceGroup>;
  removeModifiedBy_DeviceGroup!: Sequelize.HasManyRemoveAssociationMixin<DeviceGroup, DeviceGroupId>;
  removeModifiedBy_DeviceGroups!: Sequelize.HasManyRemoveAssociationsMixin<DeviceGroup, DeviceGroupId>;
  hasModifiedBy_DeviceGroup!: Sequelize.HasManyHasAssociationMixin<DeviceGroup, DeviceGroupId>;
  hasModifiedBy_DeviceGroups!: Sequelize.HasManyHasAssociationsMixin<DeviceGroup, DeviceGroupId>;
  countModifiedBy_DeviceGroups!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany DiscountCode via CreatedBy
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
  // User hasMany DiscountCode via DeletedBy
  DeletedBy_DiscountCodes!: DiscountCode[];
  getDeletedBy_DiscountCodes!: Sequelize.HasManyGetAssociationsMixin<DiscountCode>;
  setDeletedBy_DiscountCodes!: Sequelize.HasManySetAssociationsMixin<DiscountCode, DiscountCodeId>;
  addDeletedBy_DiscountCode!: Sequelize.HasManyAddAssociationMixin<DiscountCode, DiscountCodeId>;
  addDeletedBy_DiscountCodes!: Sequelize.HasManyAddAssociationsMixin<DiscountCode, DiscountCodeId>;
  createDeletedBy_DiscountCode!: Sequelize.HasManyCreateAssociationMixin<DiscountCode>;
  removeDeletedBy_DiscountCode!: Sequelize.HasManyRemoveAssociationMixin<DiscountCode, DiscountCodeId>;
  removeDeletedBy_DiscountCodes!: Sequelize.HasManyRemoveAssociationsMixin<DiscountCode, DiscountCodeId>;
  hasDeletedBy_DiscountCode!: Sequelize.HasManyHasAssociationMixin<DiscountCode, DiscountCodeId>;
  hasDeletedBy_DiscountCodes!: Sequelize.HasManyHasAssociationsMixin<DiscountCode, DiscountCodeId>;
  countDeletedBy_DiscountCodes!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany DiscountCode via ModifiedBy
  ModifiedBy_DiscountCodes!: DiscountCode[];
  getModifiedBy_DiscountCodes!: Sequelize.HasManyGetAssociationsMixin<DiscountCode>;
  setModifiedBy_DiscountCodes!: Sequelize.HasManySetAssociationsMixin<DiscountCode, DiscountCodeId>;
  addModifiedBy_DiscountCode!: Sequelize.HasManyAddAssociationMixin<DiscountCode, DiscountCodeId>;
  addModifiedBy_DiscountCodes!: Sequelize.HasManyAddAssociationsMixin<DiscountCode, DiscountCodeId>;
  createModifiedBy_DiscountCode!: Sequelize.HasManyCreateAssociationMixin<DiscountCode>;
  removeModifiedBy_DiscountCode!: Sequelize.HasManyRemoveAssociationMixin<DiscountCode, DiscountCodeId>;
  removeModifiedBy_DiscountCodes!: Sequelize.HasManyRemoveAssociationsMixin<DiscountCode, DiscountCodeId>;
  hasModifiedBy_DiscountCode!: Sequelize.HasManyHasAssociationMixin<DiscountCode, DiscountCodeId>;
  hasModifiedBy_DiscountCodes!: Sequelize.HasManyHasAssociationsMixin<DiscountCode, DiscountCodeId>;
  countModifiedBy_DiscountCodes!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Function via CreatedBy
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
  // User hasMany Function via DeletedBy
  DeletedBy_Functions!: Function[];
  getDeletedBy_Functions!: Sequelize.HasManyGetAssociationsMixin<Function>;
  setDeletedBy_Functions!: Sequelize.HasManySetAssociationsMixin<Function, FunctionId>;
  addDeletedBy_Function!: Sequelize.HasManyAddAssociationMixin<Function, FunctionId>;
  addDeletedBy_Functions!: Sequelize.HasManyAddAssociationsMixin<Function, FunctionId>;
  createDeletedBy_Function!: Sequelize.HasManyCreateAssociationMixin<Function>;
  removeDeletedBy_Function!: Sequelize.HasManyRemoveAssociationMixin<Function, FunctionId>;
  removeDeletedBy_Functions!: Sequelize.HasManyRemoveAssociationsMixin<Function, FunctionId>;
  hasDeletedBy_Function!: Sequelize.HasManyHasAssociationMixin<Function, FunctionId>;
  hasDeletedBy_Functions!: Sequelize.HasManyHasAssociationsMixin<Function, FunctionId>;
  countDeletedBy_Functions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Function via ModifiedBy
  ModifiedBy_Functions!: Function[];
  getModifiedBy_Functions!: Sequelize.HasManyGetAssociationsMixin<Function>;
  setModifiedBy_Functions!: Sequelize.HasManySetAssociationsMixin<Function, FunctionId>;
  addModifiedBy_Function!: Sequelize.HasManyAddAssociationMixin<Function, FunctionId>;
  addModifiedBy_Functions!: Sequelize.HasManyAddAssociationsMixin<Function, FunctionId>;
  createModifiedBy_Function!: Sequelize.HasManyCreateAssociationMixin<Function>;
  removeModifiedBy_Function!: Sequelize.HasManyRemoveAssociationMixin<Function, FunctionId>;
  removeModifiedBy_Functions!: Sequelize.HasManyRemoveAssociationsMixin<Function, FunctionId>;
  hasModifiedBy_Function!: Sequelize.HasManyHasAssociationMixin<Function, FunctionId>;
  hasModifiedBy_Functions!: Sequelize.HasManyHasAssociationsMixin<Function, FunctionId>;
  countModifiedBy_Functions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Group via CreatedBy
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
  // User hasMany Group via DeletedBy
  DeletedBy_Groups!: Group[];
  getDeletedBy_Groups!: Sequelize.HasManyGetAssociationsMixin<Group>;
  setDeletedBy_Groups!: Sequelize.HasManySetAssociationsMixin<Group, GroupId>;
  addDeletedBy_Group!: Sequelize.HasManyAddAssociationMixin<Group, GroupId>;
  addDeletedBy_Groups!: Sequelize.HasManyAddAssociationsMixin<Group, GroupId>;
  createDeletedBy_Group!: Sequelize.HasManyCreateAssociationMixin<Group>;
  removeDeletedBy_Group!: Sequelize.HasManyRemoveAssociationMixin<Group, GroupId>;
  removeDeletedBy_Groups!: Sequelize.HasManyRemoveAssociationsMixin<Group, GroupId>;
  hasDeletedBy_Group!: Sequelize.HasManyHasAssociationMixin<Group, GroupId>;
  hasDeletedBy_Groups!: Sequelize.HasManyHasAssociationsMixin<Group, GroupId>;
  countDeletedBy_Groups!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Group via ModifiedBy
  ModifiedBy_Groups!: Group[];
  getModifiedBy_Groups!: Sequelize.HasManyGetAssociationsMixin<Group>;
  setModifiedBy_Groups!: Sequelize.HasManySetAssociationsMixin<Group, GroupId>;
  addModifiedBy_Group!: Sequelize.HasManyAddAssociationMixin<Group, GroupId>;
  addModifiedBy_Groups!: Sequelize.HasManyAddAssociationsMixin<Group, GroupId>;
  createModifiedBy_Group!: Sequelize.HasManyCreateAssociationMixin<Group>;
  removeModifiedBy_Group!: Sequelize.HasManyRemoveAssociationMixin<Group, GroupId>;
  removeModifiedBy_Groups!: Sequelize.HasManyRemoveAssociationsMixin<Group, GroupId>;
  hasModifiedBy_Group!: Sequelize.HasManyHasAssociationMixin<Group, GroupId>;
  hasModifiedBy_Groups!: Sequelize.HasManyHasAssociationsMixin<Group, GroupId>;
  countModifiedBy_Groups!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany GroupMembers via CreatedBy
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
  // User hasMany GroupMembers via DeletedBy
  DeletedBy_GroupMembers!: GroupMembers[];
  getDeletedBy_GroupMembers!: Sequelize.HasManyGetAssociationsMixin<GroupMembers>;
  setDeletedBy_GroupMembers!: Sequelize.HasManySetAssociationsMixin<GroupMembers, GroupMembersId>;
  addDeletedBy_GroupMember!: Sequelize.HasManyAddAssociationMixin<GroupMembers, GroupMembersId>;
  addDeletedBy_GroupMembers!: Sequelize.HasManyAddAssociationsMixin<GroupMembers, GroupMembersId>;
  createDeletedBy_GroupMember!: Sequelize.HasManyCreateAssociationMixin<GroupMembers>;
  removeDeletedBy_GroupMember!: Sequelize.HasManyRemoveAssociationMixin<GroupMembers, GroupMembersId>;
  removeDeletedBy_GroupMembers!: Sequelize.HasManyRemoveAssociationsMixin<GroupMembers, GroupMembersId>;
  hasDeletedBy_GroupMember!: Sequelize.HasManyHasAssociationMixin<GroupMembers, GroupMembersId>;
  hasDeletedBy_GroupMembers!: Sequelize.HasManyHasAssociationsMixin<GroupMembers, GroupMembersId>;
  countDeletedBy_GroupMembers!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany GroupMembers via ModifiedBy
  ModifiedBy_GroupMembers!: GroupMembers[];
  getModifiedBy_GroupMembers!: Sequelize.HasManyGetAssociationsMixin<GroupMembers>;
  setModifiedBy_GroupMembers!: Sequelize.HasManySetAssociationsMixin<GroupMembers, GroupMembersId>;
  addModifiedBy_GroupMember!: Sequelize.HasManyAddAssociationMixin<GroupMembers, GroupMembersId>;
  addModifiedBy_GroupMembers!: Sequelize.HasManyAddAssociationsMixin<GroupMembers, GroupMembersId>;
  createModifiedBy_GroupMember!: Sequelize.HasManyCreateAssociationMixin<GroupMembers>;
  removeModifiedBy_GroupMember!: Sequelize.HasManyRemoveAssociationMixin<GroupMembers, GroupMembersId>;
  removeModifiedBy_GroupMembers!: Sequelize.HasManyRemoveAssociationsMixin<GroupMembers, GroupMembersId>;
  hasModifiedBy_GroupMember!: Sequelize.HasManyHasAssociationMixin<GroupMembers, GroupMembersId>;
  hasModifiedBy_GroupMembers!: Sequelize.HasManyHasAssociationsMixin<GroupMembers, GroupMembersId>;
  countModifiedBy_GroupMembers!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany GroupMembers via UserId
  User_GroupMembers!: GroupMembers[];
  getUser_GroupMembers!: Sequelize.HasManyGetAssociationsMixin<GroupMembers>;
  setUser_GroupMembers!: Sequelize.HasManySetAssociationsMixin<GroupMembers, GroupMembersId>;
  addUser_GroupMember!: Sequelize.HasManyAddAssociationMixin<GroupMembers, GroupMembersId>;
  addUser_GroupMembers!: Sequelize.HasManyAddAssociationsMixin<GroupMembers, GroupMembersId>;
  createUser_GroupMember!: Sequelize.HasManyCreateAssociationMixin<GroupMembers>;
  removeUser_GroupMember!: Sequelize.HasManyRemoveAssociationMixin<GroupMembers, GroupMembersId>;
  removeUser_GroupMembers!: Sequelize.HasManyRemoveAssociationsMixin<GroupMembers, GroupMembersId>;
  hasUser_GroupMember!: Sequelize.HasManyHasAssociationMixin<GroupMembers, GroupMembersId>;
  hasUser_GroupMembers!: Sequelize.HasManyHasAssociationsMixin<GroupMembers, GroupMembersId>;
  countUser_GroupMembers!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Invitation via CreatedBy
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
  // User hasMany Invitation via DeletedBy
  DeletedBy_Invitations!: Invitation[];
  getDeletedBy_Invitations!: Sequelize.HasManyGetAssociationsMixin<Invitation>;
  setDeletedBy_Invitations!: Sequelize.HasManySetAssociationsMixin<Invitation, InvitationId>;
  addDeletedBy_Invitation!: Sequelize.HasManyAddAssociationMixin<Invitation, InvitationId>;
  addDeletedBy_Invitations!: Sequelize.HasManyAddAssociationsMixin<Invitation, InvitationId>;
  createDeletedBy_Invitation!: Sequelize.HasManyCreateAssociationMixin<Invitation>;
  removeDeletedBy_Invitation!: Sequelize.HasManyRemoveAssociationMixin<Invitation, InvitationId>;
  removeDeletedBy_Invitations!: Sequelize.HasManyRemoveAssociationsMixin<Invitation, InvitationId>;
  hasDeletedBy_Invitation!: Sequelize.HasManyHasAssociationMixin<Invitation, InvitationId>;
  hasDeletedBy_Invitations!: Sequelize.HasManyHasAssociationsMixin<Invitation, InvitationId>;
  countDeletedBy_Invitations!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Invitation via FromUserId
  FromUser_Invitations!: Invitation[];
  getFromUser_Invitations!: Sequelize.HasManyGetAssociationsMixin<Invitation>;
  setFromUser_Invitations!: Sequelize.HasManySetAssociationsMixin<Invitation, InvitationId>;
  addFromUser_Invitation!: Sequelize.HasManyAddAssociationMixin<Invitation, InvitationId>;
  addFromUser_Invitations!: Sequelize.HasManyAddAssociationsMixin<Invitation, InvitationId>;
  createFromUser_Invitation!: Sequelize.HasManyCreateAssociationMixin<Invitation>;
  removeFromUser_Invitation!: Sequelize.HasManyRemoveAssociationMixin<Invitation, InvitationId>;
  removeFromUser_Invitations!: Sequelize.HasManyRemoveAssociationsMixin<Invitation, InvitationId>;
  hasFromUser_Invitation!: Sequelize.HasManyHasAssociationMixin<Invitation, InvitationId>;
  hasFromUser_Invitations!: Sequelize.HasManyHasAssociationsMixin<Invitation, InvitationId>;
  countFromUser_Invitations!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Invitation via ModifiedBy
  ModifiedBy_Invitations!: Invitation[];
  getModifiedBy_Invitations!: Sequelize.HasManyGetAssociationsMixin<Invitation>;
  setModifiedBy_Invitations!: Sequelize.HasManySetAssociationsMixin<Invitation, InvitationId>;
  addModifiedBy_Invitation!: Sequelize.HasManyAddAssociationMixin<Invitation, InvitationId>;
  addModifiedBy_Invitations!: Sequelize.HasManyAddAssociationsMixin<Invitation, InvitationId>;
  createModifiedBy_Invitation!: Sequelize.HasManyCreateAssociationMixin<Invitation>;
  removeModifiedBy_Invitation!: Sequelize.HasManyRemoveAssociationMixin<Invitation, InvitationId>;
  removeModifiedBy_Invitations!: Sequelize.HasManyRemoveAssociationsMixin<Invitation, InvitationId>;
  hasModifiedBy_Invitation!: Sequelize.HasManyHasAssociationMixin<Invitation, InvitationId>;
  hasModifiedBy_Invitations!: Sequelize.HasManyHasAssociationsMixin<Invitation, InvitationId>;
  countModifiedBy_Invitations!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Invitation via ToUserId
  ToUser_Invitations!: Invitation[];
  getToUser_Invitations!: Sequelize.HasManyGetAssociationsMixin<Invitation>;
  setToUser_Invitations!: Sequelize.HasManySetAssociationsMixin<Invitation, InvitationId>;
  addToUser_Invitation!: Sequelize.HasManyAddAssociationMixin<Invitation, InvitationId>;
  addToUser_Invitations!: Sequelize.HasManyAddAssociationsMixin<Invitation, InvitationId>;
  createToUser_Invitation!: Sequelize.HasManyCreateAssociationMixin<Invitation>;
  removeToUser_Invitation!: Sequelize.HasManyRemoveAssociationMixin<Invitation, InvitationId>;
  removeToUser_Invitations!: Sequelize.HasManyRemoveAssociationsMixin<Invitation, InvitationId>;
  hasToUser_Invitation!: Sequelize.HasManyHasAssociationMixin<Invitation, InvitationId>;
  hasToUser_Invitations!: Sequelize.HasManyHasAssociationsMixin<Invitation, InvitationId>;
  countToUser_Invitations!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Invoice via CreatedBy
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
  // User hasMany Invoice via DeletedBy
  DeletedBy_Invoices!: Invoice[];
  getDeletedBy_Invoices!: Sequelize.HasManyGetAssociationsMixin<Invoice>;
  setDeletedBy_Invoices!: Sequelize.HasManySetAssociationsMixin<Invoice, InvoiceId>;
  addDeletedBy_Invoice!: Sequelize.HasManyAddAssociationMixin<Invoice, InvoiceId>;
  addDeletedBy_Invoices!: Sequelize.HasManyAddAssociationsMixin<Invoice, InvoiceId>;
  createDeletedBy_Invoice!: Sequelize.HasManyCreateAssociationMixin<Invoice>;
  removeDeletedBy_Invoice!: Sequelize.HasManyRemoveAssociationMixin<Invoice, InvoiceId>;
  removeDeletedBy_Invoices!: Sequelize.HasManyRemoveAssociationsMixin<Invoice, InvoiceId>;
  hasDeletedBy_Invoice!: Sequelize.HasManyHasAssociationMixin<Invoice, InvoiceId>;
  hasDeletedBy_Invoices!: Sequelize.HasManyHasAssociationsMixin<Invoice, InvoiceId>;
  countDeletedBy_Invoices!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Invoice via ModifiedBy
  ModifiedBy_Invoices!: Invoice[];
  getModifiedBy_Invoices!: Sequelize.HasManyGetAssociationsMixin<Invoice>;
  setModifiedBy_Invoices!: Sequelize.HasManySetAssociationsMixin<Invoice, InvoiceId>;
  addModifiedBy_Invoice!: Sequelize.HasManyAddAssociationMixin<Invoice, InvoiceId>;
  addModifiedBy_Invoices!: Sequelize.HasManyAddAssociationsMixin<Invoice, InvoiceId>;
  createModifiedBy_Invoice!: Sequelize.HasManyCreateAssociationMixin<Invoice>;
  removeModifiedBy_Invoice!: Sequelize.HasManyRemoveAssociationMixin<Invoice, InvoiceId>;
  removeModifiedBy_Invoices!: Sequelize.HasManyRemoveAssociationsMixin<Invoice, InvoiceId>;
  hasModifiedBy_Invoice!: Sequelize.HasManyHasAssociationMixin<Invoice, InvoiceId>;
  hasModifiedBy_Invoices!: Sequelize.HasManyHasAssociationsMixin<Invoice, InvoiceId>;
  countModifiedBy_Invoices!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Invoice via PaidBy
  PaidBy_Invoices!: Invoice[];
  getPaidBy_Invoices!: Sequelize.HasManyGetAssociationsMixin<Invoice>;
  setPaidBy_Invoices!: Sequelize.HasManySetAssociationsMixin<Invoice, InvoiceId>;
  addPaidBy_Invoice!: Sequelize.HasManyAddAssociationMixin<Invoice, InvoiceId>;
  addPaidBy_Invoices!: Sequelize.HasManyAddAssociationsMixin<Invoice, InvoiceId>;
  createPaidBy_Invoice!: Sequelize.HasManyCreateAssociationMixin<Invoice>;
  removePaidBy_Invoice!: Sequelize.HasManyRemoveAssociationMixin<Invoice, InvoiceId>;
  removePaidBy_Invoices!: Sequelize.HasManyRemoveAssociationsMixin<Invoice, InvoiceId>;
  hasPaidBy_Invoice!: Sequelize.HasManyHasAssociationMixin<Invoice, InvoiceId>;
  hasPaidBy_Invoices!: Sequelize.HasManyHasAssociationsMixin<Invoice, InvoiceId>;
  countPaidBy_Invoices!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Notification via CreatedBy
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
  // User hasMany Notification via DeletedBy
  DeletedBy_Notifications!: Notification[];
  getDeletedBy_Notifications!: Sequelize.HasManyGetAssociationsMixin<Notification>;
  setDeletedBy_Notifications!: Sequelize.HasManySetAssociationsMixin<Notification, NotificationId>;
  addDeletedBy_Notification!: Sequelize.HasManyAddAssociationMixin<Notification, NotificationId>;
  addDeletedBy_Notifications!: Sequelize.HasManyAddAssociationsMixin<Notification, NotificationId>;
  createDeletedBy_Notification!: Sequelize.HasManyCreateAssociationMixin<Notification>;
  removeDeletedBy_Notification!: Sequelize.HasManyRemoveAssociationMixin<Notification, NotificationId>;
  removeDeletedBy_Notifications!: Sequelize.HasManyRemoveAssociationsMixin<Notification, NotificationId>;
  hasDeletedBy_Notification!: Sequelize.HasManyHasAssociationMixin<Notification, NotificationId>;
  hasDeletedBy_Notifications!: Sequelize.HasManyHasAssociationsMixin<Notification, NotificationId>;
  countDeletedBy_Notifications!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Notification via FromUserId
  FromUser_Notifications!: Notification[];
  getFromUser_Notifications!: Sequelize.HasManyGetAssociationsMixin<Notification>;
  setFromUser_Notifications!: Sequelize.HasManySetAssociationsMixin<Notification, NotificationId>;
  addFromUser_Notification!: Sequelize.HasManyAddAssociationMixin<Notification, NotificationId>;
  addFromUser_Notifications!: Sequelize.HasManyAddAssociationsMixin<Notification, NotificationId>;
  createFromUser_Notification!: Sequelize.HasManyCreateAssociationMixin<Notification>;
  removeFromUser_Notification!: Sequelize.HasManyRemoveAssociationMixin<Notification, NotificationId>;
  removeFromUser_Notifications!: Sequelize.HasManyRemoveAssociationsMixin<Notification, NotificationId>;
  hasFromUser_Notification!: Sequelize.HasManyHasAssociationMixin<Notification, NotificationId>;
  hasFromUser_Notifications!: Sequelize.HasManyHasAssociationsMixin<Notification, NotificationId>;
  countFromUser_Notifications!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Notification via ModifiedBy
  ModifiedBy_Notifications!: Notification[];
  getModifiedBy_Notifications!: Sequelize.HasManyGetAssociationsMixin<Notification>;
  setModifiedBy_Notifications!: Sequelize.HasManySetAssociationsMixin<Notification, NotificationId>;
  addModifiedBy_Notification!: Sequelize.HasManyAddAssociationMixin<Notification, NotificationId>;
  addModifiedBy_Notifications!: Sequelize.HasManyAddAssociationsMixin<Notification, NotificationId>;
  createModifiedBy_Notification!: Sequelize.HasManyCreateAssociationMixin<Notification>;
  removeModifiedBy_Notification!: Sequelize.HasManyRemoveAssociationMixin<Notification, NotificationId>;
  removeModifiedBy_Notifications!: Sequelize.HasManyRemoveAssociationsMixin<Notification, NotificationId>;
  hasModifiedBy_Notification!: Sequelize.HasManyHasAssociationMixin<Notification, NotificationId>;
  hasModifiedBy_Notifications!: Sequelize.HasManyHasAssociationsMixin<Notification, NotificationId>;
  countModifiedBy_Notifications!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Notification via ToUserId
  ToUser_Notifications!: Notification[];
  getToUser_Notifications!: Sequelize.HasManyGetAssociationsMixin<Notification>;
  setToUser_Notifications!: Sequelize.HasManySetAssociationsMixin<Notification, NotificationId>;
  addToUser_Notification!: Sequelize.HasManyAddAssociationMixin<Notification, NotificationId>;
  addToUser_Notifications!: Sequelize.HasManyAddAssociationsMixin<Notification, NotificationId>;
  createToUser_Notification!: Sequelize.HasManyCreateAssociationMixin<Notification>;
  removeToUser_Notification!: Sequelize.HasManyRemoveAssociationMixin<Notification, NotificationId>;
  removeToUser_Notifications!: Sequelize.HasManyRemoveAssociationsMixin<Notification, NotificationId>;
  hasToUser_Notification!: Sequelize.HasManyHasAssociationMixin<Notification, NotificationId>;
  hasToUser_Notifications!: Sequelize.HasManyHasAssociationsMixin<Notification, NotificationId>;
  countToUser_Notifications!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Plan via CreatedBy
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
  // User hasMany Plan via DeletedBy
  DeletedBy_Plans!: Plan[];
  getDeletedBy_Plans!: Sequelize.HasManyGetAssociationsMixin<Plan>;
  setDeletedBy_Plans!: Sequelize.HasManySetAssociationsMixin<Plan, PlanId>;
  addDeletedBy_Plan!: Sequelize.HasManyAddAssociationMixin<Plan, PlanId>;
  addDeletedBy_Plans!: Sequelize.HasManyAddAssociationsMixin<Plan, PlanId>;
  createDeletedBy_Plan!: Sequelize.HasManyCreateAssociationMixin<Plan>;
  removeDeletedBy_Plan!: Sequelize.HasManyRemoveAssociationMixin<Plan, PlanId>;
  removeDeletedBy_Plans!: Sequelize.HasManyRemoveAssociationsMixin<Plan, PlanId>;
  hasDeletedBy_Plan!: Sequelize.HasManyHasAssociationMixin<Plan, PlanId>;
  hasDeletedBy_Plans!: Sequelize.HasManyHasAssociationsMixin<Plan, PlanId>;
  countDeletedBy_Plans!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Plan via ModifiedBy
  ModifiedBy_Plans!: Plan[];
  getModifiedBy_Plans!: Sequelize.HasManyGetAssociationsMixin<Plan>;
  setModifiedBy_Plans!: Sequelize.HasManySetAssociationsMixin<Plan, PlanId>;
  addModifiedBy_Plan!: Sequelize.HasManyAddAssociationMixin<Plan, PlanId>;
  addModifiedBy_Plans!: Sequelize.HasManyAddAssociationsMixin<Plan, PlanId>;
  createModifiedBy_Plan!: Sequelize.HasManyCreateAssociationMixin<Plan>;
  removeModifiedBy_Plan!: Sequelize.HasManyRemoveAssociationMixin<Plan, PlanId>;
  removeModifiedBy_Plans!: Sequelize.HasManyRemoveAssociationsMixin<Plan, PlanId>;
  hasModifiedBy_Plan!: Sequelize.HasManyHasAssociationMixin<Plan, PlanId>;
  hasModifiedBy_Plans!: Sequelize.HasManyHasAssociationsMixin<Plan, PlanId>;
  countModifiedBy_Plans!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Promotion via CreatedBy
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
  // User hasMany Promotion via DeletedBy
  DeletedBy_Promotions!: Promotion[];
  getDeletedBy_Promotions!: Sequelize.HasManyGetAssociationsMixin<Promotion>;
  setDeletedBy_Promotions!: Sequelize.HasManySetAssociationsMixin<Promotion, PromotionId>;
  addDeletedBy_Promotion!: Sequelize.HasManyAddAssociationMixin<Promotion, PromotionId>;
  addDeletedBy_Promotions!: Sequelize.HasManyAddAssociationsMixin<Promotion, PromotionId>;
  createDeletedBy_Promotion!: Sequelize.HasManyCreateAssociationMixin<Promotion>;
  removeDeletedBy_Promotion!: Sequelize.HasManyRemoveAssociationMixin<Promotion, PromotionId>;
  removeDeletedBy_Promotions!: Sequelize.HasManyRemoveAssociationsMixin<Promotion, PromotionId>;
  hasDeletedBy_Promotion!: Sequelize.HasManyHasAssociationMixin<Promotion, PromotionId>;
  hasDeletedBy_Promotions!: Sequelize.HasManyHasAssociationsMixin<Promotion, PromotionId>;
  countDeletedBy_Promotions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Promotion via ModifiedBy
  ModifiedBy_Promotions!: Promotion[];
  getModifiedBy_Promotions!: Sequelize.HasManyGetAssociationsMixin<Promotion>;
  setModifiedBy_Promotions!: Sequelize.HasManySetAssociationsMixin<Promotion, PromotionId>;
  addModifiedBy_Promotion!: Sequelize.HasManyAddAssociationMixin<Promotion, PromotionId>;
  addModifiedBy_Promotions!: Sequelize.HasManyAddAssociationsMixin<Promotion, PromotionId>;
  createModifiedBy_Promotion!: Sequelize.HasManyCreateAssociationMixin<Promotion>;
  removeModifiedBy_Promotion!: Sequelize.HasManyRemoveAssociationMixin<Promotion, PromotionId>;
  removeModifiedBy_Promotions!: Sequelize.HasManyRemoveAssociationsMixin<Promotion, PromotionId>;
  hasModifiedBy_Promotion!: Sequelize.HasManyHasAssociationMixin<Promotion, PromotionId>;
  hasModifiedBy_Promotions!: Sequelize.HasManyHasAssociationsMixin<Promotion, PromotionId>;
  countModifiedBy_Promotions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany RedeemedDiscountCodes via CreatedBy
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
  // User hasMany RedeemedDiscountCodes via DeletedBy
  DeletedBy_RedeemedDiscountCodes!: RedeemedDiscountCodes[];
  getDeletedBy_RedeemedDiscountCodes!: Sequelize.HasManyGetAssociationsMixin<RedeemedDiscountCodes>;
  setDeletedBy_RedeemedDiscountCodes!: Sequelize.HasManySetAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addDeletedBy_RedeemedDiscountCode!: Sequelize.HasManyAddAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addDeletedBy_RedeemedDiscountCodes!: Sequelize.HasManyAddAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  createDeletedBy_RedeemedDiscountCode!: Sequelize.HasManyCreateAssociationMixin<RedeemedDiscountCodes>;
  removeDeletedBy_RedeemedDiscountCode!: Sequelize.HasManyRemoveAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  removeDeletedBy_RedeemedDiscountCodes!: Sequelize.HasManyRemoveAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasDeletedBy_RedeemedDiscountCode!: Sequelize.HasManyHasAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasDeletedBy_RedeemedDiscountCodes!: Sequelize.HasManyHasAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  countDeletedBy_RedeemedDiscountCodes!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany RedeemedDiscountCodes via ModifiedBy
  ModifiedBy_RedeemedDiscountCodes!: RedeemedDiscountCodes[];
  getModifiedBy_RedeemedDiscountCodes!: Sequelize.HasManyGetAssociationsMixin<RedeemedDiscountCodes>;
  setModifiedBy_RedeemedDiscountCodes!: Sequelize.HasManySetAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addModifiedBy_RedeemedDiscountCode!: Sequelize.HasManyAddAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addModifiedBy_RedeemedDiscountCodes!: Sequelize.HasManyAddAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  createModifiedBy_RedeemedDiscountCode!: Sequelize.HasManyCreateAssociationMixin<RedeemedDiscountCodes>;
  removeModifiedBy_RedeemedDiscountCode!: Sequelize.HasManyRemoveAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  removeModifiedBy_RedeemedDiscountCodes!: Sequelize.HasManyRemoveAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasModifiedBy_RedeemedDiscountCode!: Sequelize.HasManyHasAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasModifiedBy_RedeemedDiscountCodes!: Sequelize.HasManyHasAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  countModifiedBy_RedeemedDiscountCodes!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany RedeemedDiscountCodes via UserId
  User_RedeemedDiscountCodes!: RedeemedDiscountCodes[];
  getUser_RedeemedDiscountCodes!: Sequelize.HasManyGetAssociationsMixin<RedeemedDiscountCodes>;
  setUser_RedeemedDiscountCodes!: Sequelize.HasManySetAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addUser_RedeemedDiscountCode!: Sequelize.HasManyAddAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  addUser_RedeemedDiscountCodes!: Sequelize.HasManyAddAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  createUser_RedeemedDiscountCode!: Sequelize.HasManyCreateAssociationMixin<RedeemedDiscountCodes>;
  removeUser_RedeemedDiscountCode!: Sequelize.HasManyRemoveAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  removeUser_RedeemedDiscountCodes!: Sequelize.HasManyRemoveAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasUser_RedeemedDiscountCode!: Sequelize.HasManyHasAssociationMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  hasUser_RedeemedDiscountCodes!: Sequelize.HasManyHasAssociationsMixin<RedeemedDiscountCodes, RedeemedDiscountCodesId>;
  countUser_RedeemedDiscountCodes!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Sensor via CreatedBy
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
  // User hasMany Sensor via DeletedBy
  DeletedBy_Sensors!: Sensor[];
  getDeletedBy_Sensors!: Sequelize.HasManyGetAssociationsMixin<Sensor>;
  setDeletedBy_Sensors!: Sequelize.HasManySetAssociationsMixin<Sensor, SensorId>;
  addDeletedBy_Sensor!: Sequelize.HasManyAddAssociationMixin<Sensor, SensorId>;
  addDeletedBy_Sensors!: Sequelize.HasManyAddAssociationsMixin<Sensor, SensorId>;
  createDeletedBy_Sensor!: Sequelize.HasManyCreateAssociationMixin<Sensor>;
  removeDeletedBy_Sensor!: Sequelize.HasManyRemoveAssociationMixin<Sensor, SensorId>;
  removeDeletedBy_Sensors!: Sequelize.HasManyRemoveAssociationsMixin<Sensor, SensorId>;
  hasDeletedBy_Sensor!: Sequelize.HasManyHasAssociationMixin<Sensor, SensorId>;
  hasDeletedBy_Sensors!: Sequelize.HasManyHasAssociationsMixin<Sensor, SensorId>;
  countDeletedBy_Sensors!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Sensor via ModifiedBy
  ModifiedBy_Sensors!: Sensor[];
  getModifiedBy_Sensors!: Sequelize.HasManyGetAssociationsMixin<Sensor>;
  setModifiedBy_Sensors!: Sequelize.HasManySetAssociationsMixin<Sensor, SensorId>;
  addModifiedBy_Sensor!: Sequelize.HasManyAddAssociationMixin<Sensor, SensorId>;
  addModifiedBy_Sensors!: Sequelize.HasManyAddAssociationsMixin<Sensor, SensorId>;
  createModifiedBy_Sensor!: Sequelize.HasManyCreateAssociationMixin<Sensor>;
  removeModifiedBy_Sensor!: Sequelize.HasManyRemoveAssociationMixin<Sensor, SensorId>;
  removeModifiedBy_Sensors!: Sequelize.HasManyRemoveAssociationsMixin<Sensor, SensorId>;
  hasModifiedBy_Sensor!: Sequelize.HasManyHasAssociationMixin<Sensor, SensorId>;
  hasModifiedBy_Sensors!: Sequelize.HasManyHasAssociationsMixin<Sensor, SensorId>;
  countModifiedBy_Sensors!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany SensorGroup via CreatedBy
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
  // User hasMany SensorGroup via DeletedBy
  DeletedBy_SensorGroups!: SensorGroup[];
  getDeletedBy_SensorGroups!: Sequelize.HasManyGetAssociationsMixin<SensorGroup>;
  setDeletedBy_SensorGroups!: Sequelize.HasManySetAssociationsMixin<SensorGroup, SensorGroupId>;
  addDeletedBy_SensorGroup!: Sequelize.HasManyAddAssociationMixin<SensorGroup, SensorGroupId>;
  addDeletedBy_SensorGroups!: Sequelize.HasManyAddAssociationsMixin<SensorGroup, SensorGroupId>;
  createDeletedBy_SensorGroup!: Sequelize.HasManyCreateAssociationMixin<SensorGroup>;
  removeDeletedBy_SensorGroup!: Sequelize.HasManyRemoveAssociationMixin<SensorGroup, SensorGroupId>;
  removeDeletedBy_SensorGroups!: Sequelize.HasManyRemoveAssociationsMixin<SensorGroup, SensorGroupId>;
  hasDeletedBy_SensorGroup!: Sequelize.HasManyHasAssociationMixin<SensorGroup, SensorGroupId>;
  hasDeletedBy_SensorGroups!: Sequelize.HasManyHasAssociationsMixin<SensorGroup, SensorGroupId>;
  countDeletedBy_SensorGroups!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany SensorGroup via ModifiedBy
  ModifiedBy_SensorGroups!: SensorGroup[];
  getModifiedBy_SensorGroups!: Sequelize.HasManyGetAssociationsMixin<SensorGroup>;
  setModifiedBy_SensorGroups!: Sequelize.HasManySetAssociationsMixin<SensorGroup, SensorGroupId>;
  addModifiedBy_SensorGroup!: Sequelize.HasManyAddAssociationMixin<SensorGroup, SensorGroupId>;
  addModifiedBy_SensorGroups!: Sequelize.HasManyAddAssociationsMixin<SensorGroup, SensorGroupId>;
  createModifiedBy_SensorGroup!: Sequelize.HasManyCreateAssociationMixin<SensorGroup>;
  removeModifiedBy_SensorGroup!: Sequelize.HasManyRemoveAssociationMixin<SensorGroup, SensorGroupId>;
  removeModifiedBy_SensorGroups!: Sequelize.HasManyRemoveAssociationsMixin<SensorGroup, SensorGroupId>;
  hasModifiedBy_SensorGroup!: Sequelize.HasManyHasAssociationMixin<SensorGroup, SensorGroupId>;
  hasModifiedBy_SensorGroups!: Sequelize.HasManyHasAssociationsMixin<SensorGroup, SensorGroupId>;
  countModifiedBy_SensorGroups!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany SpacialData via CreatedBy
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
  // User hasMany SpacialData via DeletedBy
  DeletedBy_SpacialData!: SpacialData[];
  getDeletedBy_SpacialData!: Sequelize.HasManyGetAssociationsMixin<SpacialData>;
  setDeletedBy_SpacialData!: Sequelize.HasManySetAssociationsMixin<SpacialData, SpacialDataId>;
  addDeletedBy_SpacialDatum!: Sequelize.HasManyAddAssociationMixin<SpacialData, SpacialDataId>;
  addDeletedBy_SpacialData!: Sequelize.HasManyAddAssociationsMixin<SpacialData, SpacialDataId>;
  createDeletedBy_SpacialDatum!: Sequelize.HasManyCreateAssociationMixin<SpacialData>;
  removeDeletedBy_SpacialDatum!: Sequelize.HasManyRemoveAssociationMixin<SpacialData, SpacialDataId>;
  removeDeletedBy_SpacialData!: Sequelize.HasManyRemoveAssociationsMixin<SpacialData, SpacialDataId>;
  hasDeletedBy_SpacialDatum!: Sequelize.HasManyHasAssociationMixin<SpacialData, SpacialDataId>;
  hasDeletedBy_SpacialData!: Sequelize.HasManyHasAssociationsMixin<SpacialData, SpacialDataId>;
  countDeletedBy_SpacialData!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany SpacialData via ModifiedBy
  ModifiedBy_SpacialData!: SpacialData[];
  getModifiedBy_SpacialData!: Sequelize.HasManyGetAssociationsMixin<SpacialData>;
  setModifiedBy_SpacialData!: Sequelize.HasManySetAssociationsMixin<SpacialData, SpacialDataId>;
  addModifiedBy_SpacialDatum!: Sequelize.HasManyAddAssociationMixin<SpacialData, SpacialDataId>;
  addModifiedBy_SpacialData!: Sequelize.HasManyAddAssociationsMixin<SpacialData, SpacialDataId>;
  createModifiedBy_SpacialDatum!: Sequelize.HasManyCreateAssociationMixin<SpacialData>;
  removeModifiedBy_SpacialDatum!: Sequelize.HasManyRemoveAssociationMixin<SpacialData, SpacialDataId>;
  removeModifiedBy_SpacialData!: Sequelize.HasManyRemoveAssociationsMixin<SpacialData, SpacialDataId>;
  hasModifiedBy_SpacialDatum!: Sequelize.HasManyHasAssociationMixin<SpacialData, SpacialDataId>;
  hasModifiedBy_SpacialData!: Sequelize.HasManyHasAssociationsMixin<SpacialData, SpacialDataId>;
  countModifiedBy_SpacialData!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany SpacialData via UserId
  User_SpacialData!: SpacialData[];
  getUser_SpacialData!: Sequelize.HasManyGetAssociationsMixin<SpacialData>;
  setUser_SpacialData!: Sequelize.HasManySetAssociationsMixin<SpacialData, SpacialDataId>;
  addUser_SpacialDatum!: Sequelize.HasManyAddAssociationMixin<SpacialData, SpacialDataId>;
  addUser_SpacialData!: Sequelize.HasManyAddAssociationsMixin<SpacialData, SpacialDataId>;
  createUser_SpacialDatum!: Sequelize.HasManyCreateAssociationMixin<SpacialData>;
  removeUser_SpacialDatum!: Sequelize.HasManyRemoveAssociationMixin<SpacialData, SpacialDataId>;
  removeUser_SpacialData!: Sequelize.HasManyRemoveAssociationsMixin<SpacialData, SpacialDataId>;
  hasUser_SpacialDatum!: Sequelize.HasManyHasAssociationMixin<SpacialData, SpacialDataId>;
  hasUser_SpacialData!: Sequelize.HasManyHasAssociationsMixin<SpacialData, SpacialDataId>;
  countUser_SpacialData!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Subscription via CreatedBy
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
  // User hasMany Subscription via DeletedBy
  DeletedBy_Subscriptions!: Subscription[];
  getDeletedBy_Subscriptions!: Sequelize.HasManyGetAssociationsMixin<Subscription>;
  setDeletedBy_Subscriptions!: Sequelize.HasManySetAssociationsMixin<Subscription, SubscriptionId>;
  addDeletedBy_Subscription!: Sequelize.HasManyAddAssociationMixin<Subscription, SubscriptionId>;
  addDeletedBy_Subscriptions!: Sequelize.HasManyAddAssociationsMixin<Subscription, SubscriptionId>;
  createDeletedBy_Subscription!: Sequelize.HasManyCreateAssociationMixin<Subscription>;
  removeDeletedBy_Subscription!: Sequelize.HasManyRemoveAssociationMixin<Subscription, SubscriptionId>;
  removeDeletedBy_Subscriptions!: Sequelize.HasManyRemoveAssociationsMixin<Subscription, SubscriptionId>;
  hasDeletedBy_Subscription!: Sequelize.HasManyHasAssociationMixin<Subscription, SubscriptionId>;
  hasDeletedBy_Subscriptions!: Sequelize.HasManyHasAssociationsMixin<Subscription, SubscriptionId>;
  countDeletedBy_Subscriptions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Subscription via ModifiedBy
  ModifiedBy_Subscriptions!: Subscription[];
  getModifiedBy_Subscriptions!: Sequelize.HasManyGetAssociationsMixin<Subscription>;
  setModifiedBy_Subscriptions!: Sequelize.HasManySetAssociationsMixin<Subscription, SubscriptionId>;
  addModifiedBy_Subscription!: Sequelize.HasManyAddAssociationMixin<Subscription, SubscriptionId>;
  addModifiedBy_Subscriptions!: Sequelize.HasManyAddAssociationsMixin<Subscription, SubscriptionId>;
  createModifiedBy_Subscription!: Sequelize.HasManyCreateAssociationMixin<Subscription>;
  removeModifiedBy_Subscription!: Sequelize.HasManyRemoveAssociationMixin<Subscription, SubscriptionId>;
  removeModifiedBy_Subscriptions!: Sequelize.HasManyRemoveAssociationsMixin<Subscription, SubscriptionId>;
  hasModifiedBy_Subscription!: Sequelize.HasManyHasAssociationMixin<Subscription, SubscriptionId>;
  hasModifiedBy_Subscriptions!: Sequelize.HasManyHasAssociationsMixin<Subscription, SubscriptionId>;
  countModifiedBy_Subscriptions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Subscription via UserId
  User_Subscriptions!: Subscription[];
  getUser_Subscriptions!: Sequelize.HasManyGetAssociationsMixin<Subscription>;
  setUser_Subscriptions!: Sequelize.HasManySetAssociationsMixin<Subscription, SubscriptionId>;
  addUser_Subscription!: Sequelize.HasManyAddAssociationMixin<Subscription, SubscriptionId>;
  addUser_Subscriptions!: Sequelize.HasManyAddAssociationsMixin<Subscription, SubscriptionId>;
  createUser_Subscription!: Sequelize.HasManyCreateAssociationMixin<Subscription>;
  removeUser_Subscription!: Sequelize.HasManyRemoveAssociationMixin<Subscription, SubscriptionId>;
  removeUser_Subscriptions!: Sequelize.HasManyRemoveAssociationsMixin<Subscription, SubscriptionId>;
  hasUser_Subscription!: Sequelize.HasManyHasAssociationMixin<Subscription, SubscriptionId>;
  hasUser_Subscriptions!: Sequelize.HasManyHasAssociationsMixin<Subscription, SubscriptionId>;
  countUser_Subscriptions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Ticket via CreatedBy
  Tickets!: Ticket[];
  getTickets!: Sequelize.HasManyGetAssociationsMixin<Ticket>;
  setTickets!: Sequelize.HasManySetAssociationsMixin<Ticket, TicketId>;
  addTicket!: Sequelize.HasManyAddAssociationMixin<Ticket, TicketId>;
  addTickets!: Sequelize.HasManyAddAssociationsMixin<Ticket, TicketId>;
  createTicket!: Sequelize.HasManyCreateAssociationMixin<Ticket>;
  removeTicket!: Sequelize.HasManyRemoveAssociationMixin<Ticket, TicketId>;
  removeTickets!: Sequelize.HasManyRemoveAssociationsMixin<Ticket, TicketId>;
  hasTicket!: Sequelize.HasManyHasAssociationMixin<Ticket, TicketId>;
  hasTickets!: Sequelize.HasManyHasAssociationsMixin<Ticket, TicketId>;
  countTickets!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Ticket via DeletedBy
  DeletedBy_Tickets!: Ticket[];
  getDeletedBy_Tickets!: Sequelize.HasManyGetAssociationsMixin<Ticket>;
  setDeletedBy_Tickets!: Sequelize.HasManySetAssociationsMixin<Ticket, TicketId>;
  addDeletedBy_Ticket!: Sequelize.HasManyAddAssociationMixin<Ticket, TicketId>;
  addDeletedBy_Tickets!: Sequelize.HasManyAddAssociationsMixin<Ticket, TicketId>;
  createDeletedBy_Ticket!: Sequelize.HasManyCreateAssociationMixin<Ticket>;
  removeDeletedBy_Ticket!: Sequelize.HasManyRemoveAssociationMixin<Ticket, TicketId>;
  removeDeletedBy_Tickets!: Sequelize.HasManyRemoveAssociationsMixin<Ticket, TicketId>;
  hasDeletedBy_Ticket!: Sequelize.HasManyHasAssociationMixin<Ticket, TicketId>;
  hasDeletedBy_Tickets!: Sequelize.HasManyHasAssociationsMixin<Ticket, TicketId>;
  countDeletedBy_Tickets!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Ticket via ModifiedBy
  ModifiedBy_Tickets!: Ticket[];
  getModifiedBy_Tickets!: Sequelize.HasManyGetAssociationsMixin<Ticket>;
  setModifiedBy_Tickets!: Sequelize.HasManySetAssociationsMixin<Ticket, TicketId>;
  addModifiedBy_Ticket!: Sequelize.HasManyAddAssociationMixin<Ticket, TicketId>;
  addModifiedBy_Tickets!: Sequelize.HasManyAddAssociationsMixin<Ticket, TicketId>;
  createModifiedBy_Ticket!: Sequelize.HasManyCreateAssociationMixin<Ticket>;
  removeModifiedBy_Ticket!: Sequelize.HasManyRemoveAssociationMixin<Ticket, TicketId>;
  removeModifiedBy_Tickets!: Sequelize.HasManyRemoveAssociationsMixin<Ticket, TicketId>;
  hasModifiedBy_Ticket!: Sequelize.HasManyHasAssociationMixin<Ticket, TicketId>;
  hasModifiedBy_Tickets!: Sequelize.HasManyHasAssociationsMixin<Ticket, TicketId>;
  countModifiedBy_Tickets!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Transaction via CreatedBy
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
  // User hasMany Transaction via DeletedBy
  DeletedBy_Transactions!: Transaction[];
  getDeletedBy_Transactions!: Sequelize.HasManyGetAssociationsMixin<Transaction>;
  setDeletedBy_Transactions!: Sequelize.HasManySetAssociationsMixin<Transaction, TransactionId>;
  addDeletedBy_Transaction!: Sequelize.HasManyAddAssociationMixin<Transaction, TransactionId>;
  addDeletedBy_Transactions!: Sequelize.HasManyAddAssociationsMixin<Transaction, TransactionId>;
  createDeletedBy_Transaction!: Sequelize.HasManyCreateAssociationMixin<Transaction>;
  removeDeletedBy_Transaction!: Sequelize.HasManyRemoveAssociationMixin<Transaction, TransactionId>;
  removeDeletedBy_Transactions!: Sequelize.HasManyRemoveAssociationsMixin<Transaction, TransactionId>;
  hasDeletedBy_Transaction!: Sequelize.HasManyHasAssociationMixin<Transaction, TransactionId>;
  hasDeletedBy_Transactions!: Sequelize.HasManyHasAssociationsMixin<Transaction, TransactionId>;
  countDeletedBy_Transactions!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Transaction via ModifiedBy
  ModifiedBy_Transactions!: Transaction[];
  getModifiedBy_Transactions!: Sequelize.HasManyGetAssociationsMixin<Transaction>;
  setModifiedBy_Transactions!: Sequelize.HasManySetAssociationsMixin<Transaction, TransactionId>;
  addModifiedBy_Transaction!: Sequelize.HasManyAddAssociationMixin<Transaction, TransactionId>;
  addModifiedBy_Transactions!: Sequelize.HasManyAddAssociationsMixin<Transaction, TransactionId>;
  createModifiedBy_Transaction!: Sequelize.HasManyCreateAssociationMixin<Transaction>;
  removeModifiedBy_Transaction!: Sequelize.HasManyRemoveAssociationMixin<Transaction, TransactionId>;
  removeModifiedBy_Transactions!: Sequelize.HasManyRemoveAssociationsMixin<Transaction, TransactionId>;
  hasModifiedBy_Transaction!: Sequelize.HasManyHasAssociationMixin<Transaction, TransactionId>;
  hasModifiedBy_Transactions!: Sequelize.HasManyHasAssociationsMixin<Transaction, TransactionId>;
  countModifiedBy_Transactions!: Sequelize.HasManyCountAssociationsMixin;
  // User belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // User belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // User belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // User hasMany UserFollowerGeofence via CreatedBy
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
  // User hasMany UserFollowerGeofence via DeletedBy
  DeletedBy_UserFollowerGeofences!: UserFollowerGeofence[];
  getDeletedBy_UserFollowerGeofences!: Sequelize.HasManyGetAssociationsMixin<UserFollowerGeofence>;
  setDeletedBy_UserFollowerGeofences!: Sequelize.HasManySetAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addDeletedBy_UserFollowerGeofence!: Sequelize.HasManyAddAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addDeletedBy_UserFollowerGeofences!: Sequelize.HasManyAddAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  createDeletedBy_UserFollowerGeofence!: Sequelize.HasManyCreateAssociationMixin<UserFollowerGeofence>;
  removeDeletedBy_UserFollowerGeofence!: Sequelize.HasManyRemoveAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  removeDeletedBy_UserFollowerGeofences!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasDeletedBy_UserFollowerGeofence!: Sequelize.HasManyHasAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasDeletedBy_UserFollowerGeofences!: Sequelize.HasManyHasAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  countDeletedBy_UserFollowerGeofences!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany UserFollowerGeofence via ModifiedBy
  ModifiedBy_UserFollowerGeofences!: UserFollowerGeofence[];
  getModifiedBy_UserFollowerGeofences!: Sequelize.HasManyGetAssociationsMixin<UserFollowerGeofence>;
  setModifiedBy_UserFollowerGeofences!: Sequelize.HasManySetAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addModifiedBy_UserFollowerGeofence!: Sequelize.HasManyAddAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  addModifiedBy_UserFollowerGeofences!: Sequelize.HasManyAddAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  createModifiedBy_UserFollowerGeofence!: Sequelize.HasManyCreateAssociationMixin<UserFollowerGeofence>;
  removeModifiedBy_UserFollowerGeofence!: Sequelize.HasManyRemoveAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  removeModifiedBy_UserFollowerGeofences!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasModifiedBy_UserFollowerGeofence!: Sequelize.HasManyHasAssociationMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  hasModifiedBy_UserFollowerGeofences!: Sequelize.HasManyHasAssociationsMixin<UserFollowerGeofence, UserFollowerGeofenceId>;
  countModifiedBy_UserFollowerGeofences!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany UserFollowers via CreatedBy
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
  // User hasMany UserFollowers via DeletedBy
  DeletedBy_UserFollowers!: UserFollowers[];
  getDeletedBy_UserFollowers!: Sequelize.HasManyGetAssociationsMixin<UserFollowers>;
  setDeletedBy_UserFollowers!: Sequelize.HasManySetAssociationsMixin<UserFollowers, UserFollowersId>;
  addDeletedBy_UserFollower!: Sequelize.HasManyAddAssociationMixin<UserFollowers, UserFollowersId>;
  addDeletedBy_UserFollowers!: Sequelize.HasManyAddAssociationsMixin<UserFollowers, UserFollowersId>;
  createDeletedBy_UserFollower!: Sequelize.HasManyCreateAssociationMixin<UserFollowers>;
  removeDeletedBy_UserFollower!: Sequelize.HasManyRemoveAssociationMixin<UserFollowers, UserFollowersId>;
  removeDeletedBy_UserFollowers!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowers, UserFollowersId>;
  hasDeletedBy_UserFollower!: Sequelize.HasManyHasAssociationMixin<UserFollowers, UserFollowersId>;
  hasDeletedBy_UserFollowers!: Sequelize.HasManyHasAssociationsMixin<UserFollowers, UserFollowersId>;
  countDeletedBy_UserFollowers!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany UserFollowers via FollowerUserId
  FollowerUser_UserFollowers!: UserFollowers[];
  getFollowerUser_UserFollowers!: Sequelize.HasManyGetAssociationsMixin<UserFollowers>;
  setFollowerUser_UserFollowers!: Sequelize.HasManySetAssociationsMixin<UserFollowers, UserFollowersId>;
  addFollowerUser_UserFollower!: Sequelize.HasManyAddAssociationMixin<UserFollowers, UserFollowersId>;
  addFollowerUser_UserFollowers!: Sequelize.HasManyAddAssociationsMixin<UserFollowers, UserFollowersId>;
  createFollowerUser_UserFollower!: Sequelize.HasManyCreateAssociationMixin<UserFollowers>;
  removeFollowerUser_UserFollower!: Sequelize.HasManyRemoveAssociationMixin<UserFollowers, UserFollowersId>;
  removeFollowerUser_UserFollowers!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowers, UserFollowersId>;
  hasFollowerUser_UserFollower!: Sequelize.HasManyHasAssociationMixin<UserFollowers, UserFollowersId>;
  hasFollowerUser_UserFollowers!: Sequelize.HasManyHasAssociationsMixin<UserFollowers, UserFollowersId>;
  countFollowerUser_UserFollowers!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany UserFollowers via ModifiedBy
  ModifiedBy_UserFollowers!: UserFollowers[];
  getModifiedBy_UserFollowers!: Sequelize.HasManyGetAssociationsMixin<UserFollowers>;
  setModifiedBy_UserFollowers!: Sequelize.HasManySetAssociationsMixin<UserFollowers, UserFollowersId>;
  addModifiedBy_UserFollower!: Sequelize.HasManyAddAssociationMixin<UserFollowers, UserFollowersId>;
  addModifiedBy_UserFollowers!: Sequelize.HasManyAddAssociationsMixin<UserFollowers, UserFollowersId>;
  createModifiedBy_UserFollower!: Sequelize.HasManyCreateAssociationMixin<UserFollowers>;
  removeModifiedBy_UserFollower!: Sequelize.HasManyRemoveAssociationMixin<UserFollowers, UserFollowersId>;
  removeModifiedBy_UserFollowers!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowers, UserFollowersId>;
  hasModifiedBy_UserFollower!: Sequelize.HasManyHasAssociationMixin<UserFollowers, UserFollowersId>;
  hasModifiedBy_UserFollowers!: Sequelize.HasManyHasAssociationsMixin<UserFollowers, UserFollowersId>;
  countModifiedBy_UserFollowers!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany UserFollowers via UserId
  User_UserFollowers!: UserFollowers[];
  getUser_UserFollowers!: Sequelize.HasManyGetAssociationsMixin<UserFollowers>;
  setUser_UserFollowers!: Sequelize.HasManySetAssociationsMixin<UserFollowers, UserFollowersId>;
  addUser_UserFollower!: Sequelize.HasManyAddAssociationMixin<UserFollowers, UserFollowersId>;
  addUser_UserFollowers!: Sequelize.HasManyAddAssociationsMixin<UserFollowers, UserFollowersId>;
  createUser_UserFollower!: Sequelize.HasManyCreateAssociationMixin<UserFollowers>;
  removeUser_UserFollower!: Sequelize.HasManyRemoveAssociationMixin<UserFollowers, UserFollowersId>;
  removeUser_UserFollowers!: Sequelize.HasManyRemoveAssociationsMixin<UserFollowers, UserFollowersId>;
  hasUser_UserFollower!: Sequelize.HasManyHasAssociationMixin<UserFollowers, UserFollowersId>;
  hasUser_UserFollowers!: Sequelize.HasManyHasAssociationsMixin<UserFollowers, UserFollowersId>;
  countUser_UserFollowers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    User.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    CityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    DistrictId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    NameEn: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    NameAr: {
      type: DataTypes.STRING(100),
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
    Username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "UK_User_Username"
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "UK_User_Email"
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EmergencyNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Avatar: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    DeviceToken: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "UK_User_Email",
        unique: true,
        fields: [
          { name: "Email" },
        ]
      },
      {
        name: "UK_User_Username",
        unique: true,
        fields: [
          { name: "Username" },
        ]
      },
    ]
  });
  return User;
  }
}
