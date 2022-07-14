import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Lookup, LookupId } from './Lookup';
import type { User, UserId } from './User';

export interface CompanyAttributes {
  Id: number;
  NameEn: string;
  NameAr: string;
  StatusId: number;
  Logo?: string;
  Address: string;
  Email: string;
  POBox: string;
  Fax: string;
  Phone: string;
  Website: string;
  Location?: any;
  UserId?: number;
  CountryId: number;
  CityId: number;
  CreatedBy: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;
}

export type CompanyPk = "Id";
export type CompanyId = Company[CompanyPk];
export type CompanyCreationAttributes = Optional<CompanyAttributes, CompanyPk>;

export class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
  Id!: number;
  NameEn!: string;
  NameAr!: string;
  StatusId!: number;
  Logo?: string;
  Address!: string;
  Email!: string;
  POBox!: string;
  Fax!: string;
  Phone!: string;
  Website!: string;
  Location?: any;
  UserId?: number;
  CountryId!: number;
  CityId!: number;
  CreatedBy!: number;
  CreatedDate!: Date;
  ModifiedBy?: number;
  ModifiedDate?: Date;
  DeletedBy?: number;
  DeletedDate?: Date;

  // Company belongsTo Lookup via CityId
  City!: Lookup;
  getCity!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setCity!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createCity!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Company belongsTo Lookup via CountryId
  Country!: Lookup;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Company belongsTo Lookup via StatusId
  Status!: Lookup;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<Lookup>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<Lookup, LookupId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<Lookup>;
  // Company belongsTo User via CreatedBy
  CreatedBy_User!: User;
  getCreatedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setCreatedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createCreatedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Company belongsTo User via DeletedBy
  DeletedBy_User!: User;
  getDeletedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setDeletedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createDeletedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Company belongsTo User via ModifiedBy
  ModifiedBy_User!: User;
  getModifiedBy_User!: Sequelize.BelongsToGetAssociationMixin<User>;
  setModifiedBy_User!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createModifiedBy_User!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Company belongsTo User via UserId
  User!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Company {
    Company.init({
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
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lookup',
        key: 'Id'
      }
    },
    Logo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "UK_Company_Email"
    },
    POBox: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Fax: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "UK_Company_Phone"
    },
    Website: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Location: {
      type: DataTypes.GEOGRAPHY,
      allowNull: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
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
    tableName: 'Company',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Company",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "UK_Company_Email",
        unique: true,
        fields: [
          { name: "Email" },
        ]
      },
      {
        name: "UK_Company_Phone",
        unique: true,
        fields: [
          { name: "Phone" },
        ]
      },
    ]
  });
  return Company;
  }
}
