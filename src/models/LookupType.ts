import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';

export interface LookupTypeAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
}

export type LookupTypePk = "Id";
export type LookupTypeId = LookupType[LookupTypePk];
export type LookupTypeCreationAttributes = Optional<LookupTypeAttributes, LookupTypePk>;

export class LookupType extends Model<LookupTypeAttributes, LookupTypeCreationAttributes> implements LookupTypeAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;

  // LookupType hasMany Lookup via LookupTypeId
  Lookups!: Lookup[];
  getLookups!: Sequelize.HasManyGetAssociationsMixin<Lookup>;
  setLookups!: Sequelize.HasManySetAssociationsMixin<Lookup, LookupId>;
  addLookup!: Sequelize.HasManyAddAssociationMixin<Lookup, LookupId>;
  addLookups!: Sequelize.HasManyAddAssociationsMixin<Lookup, LookupId>;
  createLookup!: Sequelize.HasManyCreateAssociationMixin<Lookup>;
  removeLookup!: Sequelize.HasManyRemoveAssociationMixin<Lookup, LookupId>;
  removeLookups!: Sequelize.HasManyRemoveAssociationsMixin<Lookup, LookupId>;
  hasLookup!: Sequelize.HasManyHasAssociationMixin<Lookup, LookupId>;
  hasLookups!: Sequelize.HasManyHasAssociationsMixin<Lookup, LookupId>;
  countLookups!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof LookupType {
    LookupType.init({
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
    }
  }, {
    sequelize,
    tableName: 'LookupType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LookupType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return LookupType;
  }
}
