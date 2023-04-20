export class MoFormValidatorController {
    messages: MoFormValidatorMessage;
    validateInput: (
        input: HTMLInputElement | MoFormElements,
        form: HTMLFormElement
    ) => {
        error: boolean;
        errmsg: string;
        rule: typeof MoFormValidatorRules;
    };
}

declare type MoFormElements = import("../mo-form-elements/mo-input/mo-input").MoInput | import("../mo-form-elements/mo-select/mo-select").MoSelect;

export const MoFormValidatorRules: "isemail" | "isurl" | "required" | "nospaces" | "maxlength" | "minlength" | "rangelength" | "isnumber" | "min" | "max" | "range" | "domains" | "isdate" | "dateprevious" | "minage" | "maxage" | "security" | "equalto" | "phonenumber" | "phonecountry" | "pattern" | "allowed" | "mincheck" | "maxcheck";

export declare interface MoFormValidatorMessage {
    [index: string]: {
        isemail: boolean;
        isurl: boolean;
        required: boolean;
        nospaces: boolean;
        maxlength: number;
        minlength: number;
        rangelength: number;
        isnumber: boolean;
        min: number;
        max: number;
        range: string;
        domains: string;
        isdate: boolean;
        dateprevious: boolean;
        minage: string;
        maxage: string;
        security: "low" | "medium" | "high" | "veryhigh";
        equalto: string;
        phonenumber: boolean;
        phonecountry: string;
        pattern: string;
        allowed: string;
        mincheck: number;
        maxcheck: number;
    };
}
