export class MoFormValidatorController {
    messages: MoFormValidatorMessage;
    validateInput: (
        input: HTMLInputElement | MoFormElements,
        form: HTMLFormElement
    ) => {
        error: boolean;
        errmsg: string;
        rule: MoFormValidatorRules;
    };
}

declare type MoFormElements =
    | import("../mo-form-elements/mo-input/mo-input").MoInput
    | import("../mo-form-elements/mo-select/mo-select").MoSelect;

export const MoFormValidatorRules:
    | "isemail"
    | "isurl"
    | "required"
    | "nospaces"
    | "maxlength"
    | "minlength"
    | "rangelength"
    | "isnumber"
    | "min"
    | "max"
    | "range"
    | "domains"
    | "isdate"
    | "dateprevious"
    | "minage"
    | "maxage"
    | "security"
    | "equalto"
    | "phonenumber"
    | "phonecountry"
    | "pattern"
    | "allowed"
    | "mincheck"
    | "maxcheck";

export declare interface MoFormValidatorMessage {
    [index: string]: {
        isemail: string;
        isurl: string;
        required: string;
        nospaces: string;
        maxlength: string;
        minlength: string;
        rangelength: string;
        isnumber: string;
        min: string;
        max: string;
        range: string;
        domains: string;
        isdate: string;
        dateprevious: string;
        minage: string;
        maxage: string;
        security: string;
        equalto: string;
        phonenumber: string;
        phonecountry: string;
        pattern: string;
        allowed: string;
        mincheck: string;
        maxcheck: string;
    };
}
