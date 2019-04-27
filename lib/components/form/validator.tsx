import {FormValue} from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
}

type FormRules = Array<FormRule>

interface FormErrors {
    [K: string]: string[]
}

const isEmpty = (value: any) => {
    return value === '' || value === undefined || value === null;
};

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    let errors: any = {};
    const addError = (key: string, message: string) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    rules.map(rule => {
        const value = formValue[rule.key];
        if (rule.required && isEmpty(value)) {
            addError(rule.key, '必填')
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key, '太短')
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, '太长')
        }
        if(rule.pattern && !(rule.pattern.test(value))){
            addError(rule.key,'格式不合法')
        }
    });
    return errors;
};
export default Validator;