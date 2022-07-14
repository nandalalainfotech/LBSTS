import { BaseRepository } from "./BaseRepository";
import { Lookup } from "../models/Lookup";
import { LookupFilter } from "../dto/FilterDTOs/LookupFilter";

export class LookupRepository extends BaseRepository {
    constructor() {
        super();
    }

    public async GetAl(): Promise<Lookup[]> {
        return await Lookup.findAll();
    }

    public async Create(record: Lookup): Promise<Lookup> {
        return await Lookup.create(record);
    }

    public async Update(record: Lookup): Promise<void> {
        await Lookup.update(record, { where: { Id: record.Id } });
    }

}