import { FormValue } from "./form";
import {flatArray} from '../utils/transformObject';

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (username: string) => Promise<any>
}

type FormRules = Array<FormRule>

interface FormErrors {
    [K: string]: string[]
}

const isEmpty = (value: any) => {
    return value === '' || value === undefined || value === null;
};

export function noError(errors: any) {
    return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, rules: FormRules): Promise<FormErrors> => {
    let errors: any = {};
    const addError = (key: string, message: string | Promise<any>) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    rules.map(rule => {
        const value = formValue[rule.key];
        if(rule.validate){
           const promise = rule.validate(value);
           addError(rule.key, promise)
        }
        if (rule.required && isEmpty(value)) {
            addError(rule.key, 'required')
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key, 'too short')
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, 'too long')
        }
        if (rule.pattern && !(rule.pattern.test(value))) {
            addError(rule.key, 'pattern invalid')
        }
    });
    const getErrors = (res: Array<[string, string | undefined]>) => {
      const result:{[K: string]: Array<string>} = {};
      res.forEach( ([key, error])=> {
          result[key] = result[key] || [];
          error && result[key].push(error);
          if(result[key].length === 0){
              delete result[key]
          }
      })
      return result;
    }
    const transformFlatArray = (errors: FormErrors): Array<Array<any>> => {
       const keys = Object.keys(errors);
       return keys.map(key => {
          return errors[key].map(item => {
              return [key,item]
          })
       })
    };
    const promiseList = flatArray(transformFlatArray(errors)).map(([key, promiseOrString]) => {
        const generatePromise = promiseOrString instanceof Promise ? promiseOrString : Promise.resolve(promiseOrString);
        return generatePromise.then(
            () => {
                return [key, promiseOrString instanceof Promise ? undefined: promiseOrString]
            },
            (reason: string) => {
                return [key, reason]
            }
        )
    })
    return Promise.all(promiseList).then(getErrors,getErrors) 
};
export default Validator;