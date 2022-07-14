export class User {
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