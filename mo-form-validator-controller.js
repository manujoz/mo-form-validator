export class MoFormValidatorController {
    constructor() {
        /** @type {import("./mo-form-validator-controller").MoFormValidatorMessage} */
        this.messages = {};
    }

    /**
     * Validate a rule
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @param {HTMLFormElement} form
     * @returns {{error: boolean, errmsg: string, rule: import("./mo-form-validator-controller").MoFormValidatorRules|null}}
     */
    validateInput(input, form) {
        /** @type {{error: boolean, errmsg: string, rule: import("./mo-form-validator-controller").MoFormValidatorRules}} */
        const response = {
            error: false,
            errmsg: "",
            rule: null
        };

        if (input.hasAttribute("required")) {
            response.error = !this.#validateIsRequired(input, form);
            response.errmsg = response.error ? this.#getErrorMessage(input, "required") : "";
            response.rule = "required";
            if (response.error) {
                return response;
            }
        }

        if (input.getAttribute("type") === "email" || input.hasAttribute("isemail")) {
            response.error = !this.#validateIsEmail(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "isemail") : "";
            response.rule = "isemail";
            if (response.error) {
                return response;
            }
        }

        if (input.getAttribute("type") === "url" || input.hasAttribute("isurl")) {
            response.error = !this.#validateIsUrl(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "isurl") : "";
            response.rule = "isurl";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("nospaces")) {
            response.error = !this.#validateNoSpaces(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "nospaces") : "";
            response.rule = "nospaces";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("minlength")) {
            response.error = !this.#validateIsMinLength(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "minlength") : "";
            response.rule = "minlength";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("maxlength")) {
            response.error = !this.#validateIsMaxLength(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "maxlength") : "";
            response.rule = "maxlength";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("rangelength")) {
            response.error = !this.#validateIsRangeLength(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "rangelength") : "";
            response.rule = "rangelength";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("isnumber")) {
            response.error = !this.#validateIsNumber(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "isnumber") : "";
            response.rule = "isnumber";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("min")) {
            response.error = !this.#validateIsMin(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "min") : "";
            response.rule = "min";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("max")) {
            response.error = !this.#validateIsMax(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "max") : "";
            response.rule = "max";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("range")) {
            response.error = !this.#validateIsRange(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "range") : "";
            response.rule = "range";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("domains")) {
            response.error = !this.#validateDomains(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "domains") : "";
            response.rule = "domains";
            if (response.error) {
                return response;
            }
        }

        if (input.getAttribute("type") === "date" || input.hasAttribute("isdate")) {
            response.error = !this.#validateIsDate(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "isdate") : "";
            response.rule = "isdate";
            if (response.error) {
                return response;
            }
        }

        if ((input.getAttribute("type") === "date" || input.hasAttribute("isdate")) && input.hasAttribute("dateprevious")) {
            response.error = !this.#validateIsDateprevius(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "dateprevious") : "";
            response.rule = "dateprevious";
            if (response.error) {
                return response;
            }
        }

        if ((input.getAttribute("type") === "date" || input.hasAttribute("isdate")) && input.hasAttribute("minage")) {
            response.error = !this.#validateIsMinage(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "minage") : "";
            response.rule = "minage";
            if (response.error) {
                return response;
            }
        }

        if ((input.getAttribute("type") === "date" || input.hasAttribute("isdate")) && input.hasAttribute("maxage")) {
            response.error = !this.#validateIsMaxage(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "maxage") : "";
            response.rule = "maxage";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("security")) {
            response.error = !this.#validateSecurity(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "security") : "";
            response.rule = "security";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("equalto")) {
            response.error = !this.#validateEqualTo(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "equalto") : "";
            response.rule = "equalto";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("phonenumber")) {
            response.error = !this.#validatePhonenumber(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "phonenumber") : "";
            response.rule = "phonenumber";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("phonenumber") && input.hasAttribute("phonecountry")) {
            response.error = !this.#validatePhonecountry(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "phonecountry") : "";
            response.rule = "phonecountry";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("pattern")) {
            response.error = !this.#validatePattern(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "pattern") : "";
            response.rule = "pattern";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("allowed")) {
            response.error = !this.#validateAllowed(input);
            response.errmsg = response.error ? this.#getErrorMessage(input, "allowed") : "";
            response.rule = "allowed";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("mincheck")) {
            response.error = !this.#validateMincheck(input, form);
            response.errmsg = response.error ? this.#getErrorMessage(input, "mincheck") : "";
            response.rule = "mincheck";
            if (response.error) {
                return response;
            }
        }

        if (input.hasAttribute("mincheck")) {
            response.error = !this.#validateMaxcheck(input, form);
            response.errmsg = response.error ? this.#getErrorMessage(input, "maxcheck") : "";
            response.rule = "maxcheck";
            if (response.error) {
                return response;
            }
        }

        return response;
    }

    /**
     * Age calculate validator
     *
     * @param {string} date
     * @param {string} format
     */
    #ageCalculator(date, format) {
        let year = null;
        let month = null;
        let day = null;

        date = date.toString();
        date = date.replace(/\//g, "-");

        const arrDate = date.split("-");
        if (format === "aaaa-mm-dd") {
            year = parseInt(arrDate[0]);
            month = parseInt(arrDate[1]);
            day = parseInt(arrDate[2]);
        } else if (format === "dd-mm-aaaa") {
            year = parseInt(arrDate[2]);
            month = parseInt(arrDate[1]);
            day = parseInt(arrDate[0]);
        } else if (format === "mm-dd-aaaa") {
            year = parseInt(arrDate[2]);
            month = parseInt(arrDate[0]);
            day = parseInt(arrDate[1]);
        }

        const dateAct = new Date();
        const actualyear = dateAct.getYear();
        const actualMonth = dateAct.getMonth() + 1;
        const actualDay = dateAct.getDate();

        let age = actualyear + 1900 - year;

        if (actualMonth < month) {
            age--;
        }

        if (month === actualMonth && day > actualDay) {
            age--;
        }

        if (age > 1900) {
            age -= 1900;
        }

        return age;
    }

    /**
     * Default messages
     * @param {"es" | "en"} lang
     */
    #defaultMessages(lang = "es") {
        /** @type {import("./mo-form-validator-controller").MoFormValidatorMessage} */
        const messages = {
            es: {
                allowed: "Archivos permitidos {data0}",
                dateprevius: "La fecha tiene que ser inferior al día de hoy",
                domains: "No hay ninguno de los dominios permitidos",
                equalto: "Las contraseñas no coinciden",
                isdate: "No es una fecha válida",
                isemail: "No es un email válido",
                isnumber: "El valor introducido debe ser un número",
                isurl: "No es una url válida",
                max: "Valor númerico obligatorio, máximo {data0}",
                maxage: "Debes tener menos de {data0} años",
                maxcheck: "Tienes que marcar como mucho {data0} casillas",
                maxlength: "El texto introducido no puede tener más de {data0} caracteres",
                min: "Valor númerico obligatorio, mínimo {data0}",
                minage: "Debes tener más de {data0} años",
                mincheck: "Tienes que marcar al menos {data0} casillas",
                minlength: "El texto introducido debe tener al menos {data0} caracteres",
                nospaces: "El valor introducido no puede tener espacios",
                pattern: "Patrón no válido",
                phonecountry: "El teléfono introducido no es correcto",
                phonenumber: "El teléfono introducido no es correcto",
                range: "El valor debe estar entre {data0} y {data1}",
                rangelength: "La longitud debe estar entre {data0} y {data1} caracteres",
                required: "Este campo es obligatorio",
                security: "{data0}"
            },
            en: {
                allowed: "Allowed files {data0}",
                dateprevius: "Date must be earlier than today",
                domains: "None of the domains are allowed",
                equalto: "Passwords do not match",
                isdate: "Not valid date",
                isemail: "Not valid email address",
                isnumber: "The value entered must be a number",
                isurl: "Not valid url",
                max: "Required numerical value, maximum {data0}",
                maxage: "You must be less than {data0} years of age",
                maxcheck: "You have to check at most {data0} boxes",
                maxlength: "The text entered cannot be longer than {data0} characters",
                min: "Required numerical value, minimum {data0}",
                minage: "You must be older than {data0} years old",
                mincheck: "You have to check at least {data0} boxes",
                minlength: "The text entered must be at least {data0} characters long",
                nospaces: "The entered value cannot contain spaces",
                pattern: "Invalid pattern",
                phonecountry: "The phone number entered is not correct",
                phonenumber: "The phone number entered is not correct",
                range: "The value must be between {data0} and {data1}",
                rangelength: "The length must be between {data0} and {data1} characters.",
                required: "This field is required",
                security: "{data0}"
            }
        };

        return messages[lang];
    }

    /**
     * Get error message
     * @param {HTMLInputElement|MoFormElements} input
     * @param {import("./mo-form-validator-controller").MoFormValidatorRules} rule
     * @param {string[]} data
     * @returns {string}
     */
    #getErrorMessage(input, rule, data) {
        const name = input.name ?? input.getAttribute("name");

        // Search in custom messages
        if (name && this.messages[name] && this.messages[name][rule]) {
            let message = this.messages[name][rule];

            if (Array.isArray(data)) {
                data.forEach((d, k) => {
                    message = message.replace(`{data${k}}`, d);
                });
            }

            return message;
        }

        // Return default message
        let lang = document.querySelector("html").getAttribute("lang");
        if (lang !== "es" && lang !== "en") {
            lang = "en";
        }

        const defaultMessages = this.#defaultMessages(lang);
        let message = defaultMessages[rule];

        if (Array.isArray(data)) {
            data.forEach((d, k) => {
                message = message.replace(`{data${k}}`, d);
            });
        }

        return message;
    }

    /**
     * Get input value
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {string}
     */
    #getInputValue(input) {
        if (input.shadowRoot) {
            return input.getValue();
        }

        return input.value;
    }

    /**
     * Format phone number
     *
     * @param {string} phone
     * @param {string} country
     * @returns {string}
     */
    #phoneNumberFormat(phone, country) {
        if (country === "es") {
            phone = phone.toString();
            phone = phone.replace(/\s/g, "");

            if (phone.length === "13") {
                if (phone[4] === 9) {
                    phone = `${phone[0]}${phone[1]}${phone[2]}${phone[3]} ${phone[4]} ${phone[5]} ${phone[6]}${phone[7]}${phone[8]} ${phone[9]}${phone[10]} ${phone[11]}${phone[12]}`;
                } else {
                    phone = `${phone[0]}${phone[1]}${phone[2]}${phone[3]} ${phone[4]} ${phone[5]}${phone[6]} ${phone[7]}${phone[8]}${phone[9]} ${phone[10]}${phone[11]}${phone[12]}`;
                }
            } else if (phone.length === "12") {
                if (phone[3] === 9) {
                    phone = `${phone[0]}${phone[1]}${phone[2]} ${phone[3]}${phone[4]} ${phone[5]}${phone[6]}${phone[7]} ${phone[8]}${phone[9]} ${phone[10]}${phone[11]}`;
                } else {
                    phone = `${phone[0]}${phone[1]}${phone[2]} ${phone[3]}${phone[4]}${phone[5]} ${phone[6]}${phone[7]}${phone[8]} ${phone[9]}${phone[10]}${phone[11]}`;
                }
            } else {
                if (phone[0] === "9") {
                    phone = `${phone[0]}${phone[1]} ${phone[2]}${phone[3]}${phone[4]} ${phone[5]}${phone[6]} ${phone[7]}${phone[8]}`;
                } else {
                    phone = `${phone[0]}${phone[1]}${phone[2]} ${phone[3]}${phone[4]}${phone[5]} ${phone[6]}${phone[7]}${phone[8]}`;
                }
            }
        }

        return phone;
    }

    /**
     * Get input value
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @param {string} value
     * @returns {string}
     */
    #setInputValue(input, value) {
        if (input.shadowRoot) {
            input.setValue(value);
            return;
        }

        input.value = value;
    }

    /**
     * Validate email
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsEmail(input) {
        const email = this.#getInputValue(input);

        const se = email.split("@");
        if (!se[1]) {
            return false;
        }

        if (email.indexOf("@", 0) === -1 || se[1].indexOf(".", 0) === -1) {
            return false;
        }

        return true;
    }

    /**
     * Validate a URL
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsUrl(input) {
        let url = this.#getInputValue(input);
        if (!/^(http|https|ftp):\/\//.test(url) && url) {
            url = "http://" + url;
        }

        const regexp = /^(http|https|ftp):\/\/[a-z0-9.-]+\.[a-z]{2,4}/gi;

        if (!regexp.test(url) && url) {
            return false;
        }
        return true;
    }

    /**
     * Validate if is required
     *
     * TODO: Do this rule with checkbox and radius
     * @param {HTMLInputElement|MoFormElements} input
     * @param {*} form
     * @returns {boolean}
     */
    #validateIsRequired(input, form) {
        let { value } = input;

        if (input.type === "checkbox" || input.type === "radio") {
            value = false;

            if (input.hasAttribute("checked")) {
                value = true;
            }
        }

        if (input.type === "radio") {
            let checked = false;
            for (let i = 0; i < form.length; i++) {
                if (form[i].checked) {
                    checked = true;
                }
            }

            if (checked) {
                value = true;
            }
        }

        return value;
    }

    /**
     * Validate not spaces
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns
     */
    #validateNoSpaces(input) {
        const attr = input.getAttribute("nospaces");
        let value = this.#getInputValue(input);

        const regexp = /\s/;
        if (attr !== "autodel" && regexp.test(value)) {
            return false;
        }

        value = value.split(" ").join("");
        this.#setInputValue(input, value);
        return true;
    }

    /**
     * Validate is min length
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsMinLength(input) {
        const minlength = parseInt(input.getAttribute("minlength") ?? 0);
        const value = this.#getInputValue(input);

        if (value.length < minlength) {
            return false;
        }

        return true;
    }

    /**
     * Validate is max length
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsMaxLength(input) {
        const maxlength = parseInt(input.getAttribute("maxlength") ?? 0);
        const value = this.#getInputValue(input);

        if (value.length > maxlength) {
            return false;
        }

        return true;
    }

    /**
     * Validate is range length
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsRangeLength(input) {
        let rangelength = input.getAttribute("rangelength");
        if (typeof rangelength !== "string") {
            return false;
        }

        rangelength = rangelength.split("|");

        // Validamos la regla
        const value = this.#getInputValue(input);
        if (value.length < parseInt(rangelength[0]) || value.length > parseInt(rangelength[1])) {
            return false;
        }

        return true;
    }

    /**
     * Validate is number
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsNumber(input) {
        const value = this.#getInputValue(input);

        if (isNaN(value)) {
            return false;
        }

        return true;
    }

    /**
     * Validate is min
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsMin(input) {
        const min = parseInt(input.min);
        const valor = parseFloat(this.#getInputValue(input));

        if (isNaN(valor)) {
            return false;
        }

        if (valor < min) {
            return false;
        }

        return true;
    }

    /**
     * Validate is min
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsMax(input) {
        const max = parseInt(input.max);
        const valor = parseFloat(this.#getInputValue(input));

        if (isNaN(valor)) {
            return false;
        }

        if (valor > max) {
            return false;
        }

        return true;
    }

    /**
     * Validate is range
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsRange(input) {
        if (!input.hasAttribute("range")) {
            return true;
        }

        const value = parseInt(this.#getInputValue(input));
        let range = input.getAttribute("range");
        if (typeof range !== "string") {
            return false;
        }

        range = range.split("|");

        if (isNaN(value)) {
            return false;
        } else if (value < parseInt(range[0]) || value > parseInt(range[1])) {
            return false;
        }

        return true;
    }

    /**
     * Validate is valid domain
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateDomains(input) {
        if (!input.hasAttribute("domains")) {
            return true;
        }

        let domains = input.getAttribute("domains");
        if (typeof domains !== "string") {
            return false;
        }

        domains = domains.split("|");
        const value = this.#getInputValue(input);

        let find = false;
        for (let i = 0; i < domains.length; i++) {
            const regexp = new RegExp(domains[i], "g");

            if (regexp.test(value)) {
                find = true;
                break;
            }
        }

        if (!find) {
            return false;
        }

        return true;
    }

    /**
     * Validate is date
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsDate(input) {
        const value = this.#getInputValue(input);

        if (!value) {
            return true;
        }

        let date = value;
        date = date.toString();
        date = date.replace(/\//g, "-");

        let format = "aaaa-mm-dd";
        if (input.hasAttribute("isdate")) {
            format = input.getAttribute("isdate") ?? "aaaa-mm-dd";
        }

        const splittedDate = date.split(" ");
        const arrDate = splittedDate[0].split("-");
        const arrHour = splittedDate[1] ? splittedDate[1].split(":") : null;

        let year = null;
        let month = null;
        let day = null;
        if (format === "aaaa-mm-dd") {
            [year, month, day] = arrDate;
        } else if (format === "dd-mm-aaaa") {
            [day, month, year] = arrDate;
        } else if (format === "mm-dd-aaaa") {
            [month, day, year] = arrDate;
        }

        // Comprobamos la fecha

        const template = new Date(year, month - 1, day); // mes empieza de cero Enero = 0
        if (!template || (template.getFullYear() !== year && template.getMonth() !== month - 1 && template.getDate() !== day)) {
            return false;
        }

        // Comprobamos la hora

        if (arrHour) {
            const hour = parseInt(arrHour[0]);
            const minute = parseInt(arrHour[1]);

            if (hour > 24 || minute > 60) {
                return false;
            }
        }

        return true;
    }

    /**
     * Validate is previous date
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsDateprevius(input) {
        let date = this.#getInputValue(input);
        date = date.toString();
        date = date.replace(/\//g, "-");

        const format = input.getAttribute("isdate") ?? "aaaa-mm-dd";

        const dateSplitted = date.split(" ");
        const arrDate = dateSplitted[0].split("-");

        let year = null;
        let month = null;
        let day = null;
        if (format === "aaaa-mm-dd") {
            [year, month, day] = arrDate;
        } else if (format === "dd-mm-aaaa") {
            [day, month, year] = arrDate;
        } else if (format === "mm-dd-aaaa") {
            [month, day, year] = arrDate;
        }

        const x = new Date();
        x.setFullYear(year, month - 1, day);
        const today = new Date();

        if (x >= today) {
            return false;
        }

        return true;
    }

    /**
     * Validate is min age
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsMinage(input) {
        const minage = parseInt(input.getAttribute("minage") ?? 0);
        const format = input.getAttribute("isdate") ?? "aaaa-mm-dd";

        let date = this.#getInputValue(input);
        date = date.toString();
        date = date.replace(/\//g, "-");

        if (minage > this.#ageCalculator(date, format)) {
            return false;
        }

        return true;
    }

    /**
     * Validate is max age
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateIsMaxage(input) {
        const maxage = parseInt(input.getAttribute("maxage"));
        const format = input.getAttribute("isdate") ?? "aaaa-mm-dd";

        let date = this.#getInputValue(input);
        date = date.toString();
        date = date.replace(/\//g, "-");

        if (maxage < this.#ageCalculator(date, format)) {
            return false;
        }

        return true;
    }

    /**
     * Validate security
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateSecurity(input) {
        const pass = this.#getInputValue(input);
        let security = input.getAttribute("security");

        // Ponemos medium como valor por defecto

        if (security !== "low" && security !== "medium" && security !== "hight" && security !== "veryhigh") {
            security = "medium";
        }

        let regexp = null;

        // Comprobamos longitud

        if ((security === "veryhigh" || security === "hight") && pass.length < 8) {
            return false;
        } else if (pass.length < 6) {
            return false;
        }

        // Seguridad veryhigh

        if (security === "veryhigh") {
            regexp = /[@$*&#\-_+./;()[\]{}\\ºª%!¿?¡^~·¬]+/;

            if (!regexp.test(pass)) {
                return false;
            }
        }

        // Seguridad alta

        if (security === "veryhigh" || security === "hight") {
            regexp = /[0-9]+/;

            if (!regexp.test(pass)) {
                return false;
            }
        }

        // Seguridad media

        if (security === "veryhigh" || security === "hight" || security === "medium") {
            regexp = /[a-z]+/;

            if (!regexp.test(pass)) {
                return false;
            }

            regexp = /[A-Z]+/;

            if (!regexp.test(pass)) {
                return false;
            }
        }

        // Seguridad pasada

        return true;
    }

    /**
     * Validate euqal to
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateEqualTo(input, form) {
        const equalto = input.getAttribute("equalto");
        const inputEq = form.querySelector(`[name=${equalto}]`);
        const value = this.#getInputValue(input);

        if (!inputEq) {
            return false;
        }

        if (value !== this.#getInputValue(inputEq)) {
            return false;
        }

        return true;
    }

    /**
     * Validate phone number
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validatePhonenumber(input) {
        let phoneNumber = this.#getInputValue(input);

        phoneNumber = phoneNumber.toString();
        phoneNumber = phoneNumber.replace(/\s/g, "");
        phoneNumber = phoneNumber.replace(/-/g, "");
        phoneNumber = phoneNumber.replace(/\./g, "");
        phoneNumber = phoneNumber.replace(/\//g, "");

        const regexp = /^((\+\d{1,3})|(00\d{1,3}))?(\(\d{1,3}\))?([\d]){7,11}$/;

        if (phoneNumber && (!regexp.test(phoneNumber) || phoneNumber.length < 8)) {
            return false;
        }

        return true;
    }

    /**
     * Validate phone country
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validatePhonecountry(input) {
        let phoneNumber = this.#getInputValue(input);
        let valid = false;

        if (!phoneNumber) {
            return true;
        }

        let countries = input.getAttribute("phonecountry");
        if (typeof countries !== "string") {
            return false;
        }
        countries = countries.split("|");

        let regexp = null;
        let regexp2 = null;
        let regexp3 = null;

        // Recorremos el array con los paises

        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];

            if (country === "es") {
                phoneNumber = phoneNumber.toString();
                phoneNumber = phoneNumber.replace(/\s/g, "");

                regexp = /^((\+34)|(0034))?(6|7|8|9)(\d){8}$/;

                if (regexp.test(phoneNumber)) {
                    valid = country;
                    break;
                }
            }

            if (country === "uk") {
                phoneNumber = phoneNumber.toString();
                phoneNumber = phoneNumber.replace(/\s/g, "");
                phoneNumber = phoneNumber.replace(/-/g, "");

                regexp = /^((\+44(\(0\))?(1|2|3|7|8))|(0044(\(0\))?(1|2|7))|(0(1|2|7)))\d{9}$/;

                if (regexp.test(phoneNumber)) {
                    valid = country;
                    break;
                }
            }

            if (country === "it") {
                phoneNumber = phoneNumber.toString();
                phoneNumber = phoneNumber.replace(/\s/g, "");
                phoneNumber = phoneNumber.replace(/-/g, "");

                regexp = /^((\+39)|(0039))?(0)(\d){5,9}$/;
                regexp2 = /^((\+39)|(0039))?(3)(\d){9}$/;
                regexp3 = /^((\+39)|(0039))?(80)(\d){7}$/;

                if (regexp.test(phoneNumber) || regexp2.test(phoneNumber) || regexp3.test(phoneNumber)) {
                    valid = country;
                    break;
                }
            }

            if (country === "pt") {
                phoneNumber = phoneNumber.toString();
                phoneNumber = phoneNumber.replace(/\s/g, "");
                phoneNumber = phoneNumber.replace(/-/g, "");

                regexp = /^((\+351)|(00351))?(2|7|8|9)(\d){8}$/;

                if (regexp.test(phoneNumber)) {
                    valid = country;
                    break;
                }
            }

            if (country === "fr") {
                phoneNumber = phoneNumber.toString();
                phoneNumber = phoneNumber.replace(/\s/g, "");
                phoneNumber = phoneNumber.replace(/-/g, "");

                regexp = /^((\+33)|(0033))?(0)?(1|2|3|4|5|6|8)\d{8}$/;

                if (regexp.test(phoneNumber)) {
                    valid = country;
                    break;
                }
            }

            if (country === "us") {
                phoneNumber = phoneNumber.toString();
                phoneNumber = phoneNumber.replace(/\s/g, "");
                phoneNumber = phoneNumber.replace(/-/g, "");
                phoneNumber = phoneNumber.replace(/\./g, "");
                phoneNumber = phoneNumber.replace(/\//g, "");

                regexp = /^((\+1)|(001))?(1?((\(\d{3}\))|(\d{3})))?\d{7}$/;

                if (regexp.test(phoneNumber)) {
                    valid = country;
                    break;
                }
            }
        }

        // Comprobamos si es válido

        if (!valid) {
            return false;
        }

        this.#setInputValue(input, this.#phoneNumberFormat(phoneNumber, valid));
        return true;
    }

    /**
     * Validate pattern
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validatePattern(input) {
        const pattern = input.getAttribute("pattern");
        const regExp = new RegExp(pattern);
        const value = this.#getInputValue(input);

        if (value && !regExp.test(value)) {
            return false;
        }

        return true;
    }

    /**
     * Validate pattern
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @returns {boolean}
     */
    #validateAllowed(input) {
        let allowed = input.getAttribute("allowed");
        if (!allowed) {
            return false;
        }

        allowed = allowed.split("|");
        let files = [];
        if (input.shadowRoot) {
            files = input.getFiles();
        } else {
            // eslint-disable-next-line prefer-destructuring
            files = input.files;
        }

        let valid = true;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let ext = file.name.split(".");
            ext = ext[ext.length - 1];

            let find = false;
            for (let o = 0; o < allowed.length; o++) {
                if (allowed[o] === ext) {
                    find = true;
                    break;
                }
            }

            if (!find) {
                valid = false;
                break;
            }
        }

        return valid;
    }

    /**
     * Validate min checks
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @param {HTMLFormElement} form
     * @returns {boolean}
     */
    #validateMincheck(input, form) {
        const mincheck = parseInt(input.getAttribute("mincheck") ?? 0);
        const checkgroup = input.getAttribute("checkgroup");
        const checkboxs = [...form.querySelectorAll("input[type=checkbox]"), ...form.querySelectorAll("mo-checkbox")];

        let checkeds = 0;
        for (let i = 0; i < checkboxs.length; i++) {
            if (checkboxs[i].getAttribute("checkgroup") === checkgroup && checkboxs[i].hasAttribute("checked")) {
                checkeds++;
            }
        }

        if (mincheck > checkeds) {
            return false;
        }

        return true;
    }

    /**
     * Validate max checks
     *
     * @param {HTMLInputElement|MoFormElements} input
     * @param {HTMLFormElement} form
     * @returns {boolean}
     */
    #validateMaxcheck(input, form) {
        const maxcheck = parseInt(input.getAttribute("maxcheck") ?? 0);
        const checkgroup = input.getAttribute("checkgroup");
        const checkboxs = [...form.querySelectorAll("input[type=checkbox]"), ...form.querySelectorAll("mo-checkbox")];

        let checkeds = 0;
        for (let i = 0; i < checkboxs.length; i++) {
            if (checkboxs[i].getAttribute("checkgroup") === checkgroup && checkboxs[i].hasAttribute("checked")) {
                checkeds++;
            }
        }

        if (maxcheck < checkeds) {
            return false;
        }

        return true;
    }
}

/**
 * @typedef {import("../mo-form-elements/mo-input/mo-input").MoInput|import("../mo-form-elements/mo-select/mo-select").MoSelect} MoFormElements
 */
