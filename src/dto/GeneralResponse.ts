import { ResultCode } from "../enums/ResultCode";
import CError from "./CError";

export class GeneralResponse<T = any> {
    isSuccess: boolean = false;
    status: ResultCode;
    data: T;
    error: CError;
    constructor(status: ResultCode) {
        this.data = null;
        this.error = null;
        this.status = status;
    }

    public hasErrors() {
        return this.error && this.error != null;
    }

    public addError(codes: string) {
        this.error = new CError(codes);
    }
}