import { FormValue } from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: {validate: (username: string) => Promise<any>, name: string}
}

type FormRules = Array<FormRule>

interface FormErrors {
    [K: string]: string[]
}

const isEmpty = (value: any) => {
    return value === '' || value === undefined || value === null;
};

const flatArray = (array: Array<any>) => {
    let result: Array<any> = [];
    array.forEach(a => {
        if(a instanceof Array){
            result.push(...a)
        }else{
            result.push(a)
        }
    });
    return result;
};

const getAllErrorPromise = (errors: FormErrors): Array<Promise<any>> => {
    return flatArray(Object.values(errors)).
        filter(item => item.promise).
        map(item => item.promise);
};

export function noError(errors: any) {
    return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    let errors: any = {};
    const addError = (key: string, message: {message: string, promise?: Promise<any>}) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    rules.map(rule => {
        const value = formValue[rule.key];
        if(rule.validator && rule.validator.name === 'unique'){
           const promise = rule.validator.validate(value);
            addError(rule.key,{message: `${rule.key} is exist`, promise})
        }
        if (rule.required && isEmpty(value)) {
            addError(rule.key, {message: '必填'})
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key, {message: '太短'})
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, {message: '太长'})
        }
        if (rule.pattern && !(rule.pattern.test(value))) {
            addError(rule.key, {message: '格式不合法'})
        }
    });
    Promise.all(getAllErrorPromise(errors)).finally(() => {
        return true
    }).then((value) => {
        console.log(value);
    });
    return errors;
};
export default Validator;