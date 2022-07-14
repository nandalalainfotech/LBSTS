import { LookupType } from "./lookup-type";

export class Lookup {
    Id: number;
    NameEn: string;
    NameAr: string;
    LookupTypeId: number;
    ParentId?: number;
    Lookuptype?: LookupType;
    Image?: string;
    Status: boolean;
    Phonecode?: number;
    Timezone?: string;
    description?: string;

    selected: boolean;
}