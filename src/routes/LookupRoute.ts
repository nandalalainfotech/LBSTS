import { LookupFilter } from "../dto/FilterDTOs/LookupFilter";
import { LookupService } from "../Services/LookupService";
import { BaseRoute } from "./BaseRoute";
import { Request, Response, NextFunction } from 'express';
import { Identity } from "../dto/Identity";

export default class LookupRoute extends BaseRoute {
    private readonly _lookupService: LookupService;
    constructor() {
        super();
        this.baseUrl = 'Lookup';
        this._lookupService = new LookupService();
    }

    GetAll = this.get('/GetAll', async (req: Request, res: Response, next: NextFunction, identity: Identity) => {
        console.log("req", req);
        this._lookupService.identity = identity;
        const result = await this._lookupService.GetAll();
        this.sendResult(res, result);
    });

    // Create = this.post('', async (req: Request, res: Response, next: NextFunction, identity: Identity) => {
    //     this._lookupService.identity = identity;
    //     const result = await this._lookupService.Create(req.body);
    //     this.sendResult(res, result);
    // });

    // Update = this.put('', async (req: Request, res: Response, next: NextFunction, identity: Identity) => {
    //     this._lookupService.identity = identity;
    //     const result = await this._lookupService.Update(req.body);
    //     this.sendResult(res, result);
    // }, { allowAnonymous: true });
}