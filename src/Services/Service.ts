import { Identity } from "../dto/Identity";

export class Service {

    private _identity: Identity;
    public get identity(): Identity {
        return this._identity;
    }
    public set identity(v: Identity) {
        this._identity = v;
    }
}