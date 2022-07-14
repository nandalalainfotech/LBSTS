import { Service } from "./Service";
import { LookupFilter } from "../dto/FilterDTOs/LookupFilter";
import { Lookup } from "../models/Lookup";
import { LookupRepository } from "../Repos/LookupRepository";
import { GeneralResponse } from "../dto/GeneralResponse";
import { ResultCode } from "../enums/ResultCode";

export class LookupService extends Service {
    private readonly _lookupRepository: LookupRepository;
    constructor() {
        super();
        this._lookupRepository = new LookupRepository();
    }

    public async GetAll(): Promise<GeneralResponse<Lookup[]>> {
        let response: GeneralResponse = new GeneralResponse(ResultCode.BadRequest);
        let result = await this._lookupRepository.GetAl();
        response.isSuccess = true;
        response.status = ResultCode.Ok;
        response.data = result;
        return response;
    }

    public async Create(record: Lookup): Promise<GeneralResponse<number>> {
        let response: GeneralResponse = new GeneralResponse(ResultCode.BadRequest);
        let id = 0;
        id = await (await this._lookupRepository.Create(record)).Id;
        if (id > 0) {
            response.isSuccess = true;
            response.status = ResultCode.Ok;
            response.data = id;
        }
        return response;
    }

    public async Update(record: Lookup): Promise<GeneralResponse<any>> {
        let response: GeneralResponse = new GeneralResponse(ResultCode.BadRequest);
        await this._lookupRepository.Update(record);
        response.isSuccess = true;
        response.status = ResultCode.Ok;
        return response;
    }
}