import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Function, FunctionId } from './Function';
import type { Lookup, LookupId } from './Lookup';
import type { Sensor, SensorId } from './Sensor';
import type { User, UserId } from './User';

export interface SensorGroupAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  Description?: string;
  StatusId: number;
  FunctionId: number;
  MeasurementUnitId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type SensorGroupPk = "Id";
export type SensorGroupId = SensorGroup[SensorGroupPk];
export type SensorGroupCreationAttributes = Optional<SensorGroupAttributes, SensorGroupPk>;

export class SensorGroup extends Model<SensorGroupAttributes, SensorGroupCreationAttributes> implements SensorGroupAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  Description?: string;
  StatusId!: number;
  FunctionId!: number;
  MeasurementUnitId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // SensorGroup belongsTo Function via FunctionId
  Function!: Function;
  getFunction!: Sequelize.BelongsToGetAssociationMixin<Function>;
  setFunction!: Sequelize.BelongsToSetAssociationMixin<Function, FunctionId>;
  createFunction!: Sequelize.BelongsToCreateAssociationMixin<Function>;
  // SensorGroup belongsTo Lookup via MeasurementUnitId
  MeasurementUnit!: Lookup;
  getMeasurementUnit!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setMeasurementUnit!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createMeasurementUnit!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // SensorGroup belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // SensorGroup hasMany Sensor via SensorGroupId
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
  // SensorGroup belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // SensorGroup belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // SensorGroup belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SensorGroup {
    SensorGroup.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NameEn: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    NameAr: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(250),
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
    FunctionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Function',
        key: 'Id'
      }
    },
    MeasurementUnitId: {
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
    tableName: 'SensorGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SensorGroup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return SensorGroup;
  }
}
