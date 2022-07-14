import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { Sensor, SensorId } from './Sensor';
import type { SensorGroup, SensorGroupId } from './SensorGroup';
import type { User, UserId } from './User';

export interface FunctionAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  Description?: string;
  StatusId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type FunctionPk = "Id";
export type FunctionId = Function[FunctionPk];
export type FunctionCreationAttributes = Optional<FunctionAttributes, FunctionPk>;

export class Function extends Model<FunctionAttributes, FunctionCreationAttributes> implements FunctionAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  Description?: string;
  StatusId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Function hasMany Sensor via FunctionId
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
  // Function hasMany SensorGroup via FunctionId
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
  // Function belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Function belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Function belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Function belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Function {
    Function.init({
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
    tableName: 'Function',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Function",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Function;
  }
}
