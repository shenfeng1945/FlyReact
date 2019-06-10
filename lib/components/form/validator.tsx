import { FormValue } from "./form";

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

// const getAllErrorPromise = (errors: FormErrors): Array<Promise<any>> => {
//     return flatArray(Object.values(errors)).
//         filter(item => item.promise).
//         map(item => item.promise);
// };

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
            addError(rule.key, '必填')
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key, '太短')
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, '太长')
        }
        if (rule.pattern && !(rule.pattern.test(value))) {
            addError(rule.key, '格式不合法')
        }
    });
    const x = (res: any) => {
      const result:any = {};
      res.forEach((item:any) => {
          if(!result[item[0]]){
              result[item[0]] = [];
          }
          item[1] && result[item[0]].push(item[1]);
          if(result[item[0]].length === 0){
              delete result[item[0]]
          }
      })
      return result;
    }
    const transformFlatArray = (errors: FormErrors) => {
       const keys = Object.keys(errors);
       return keys.map(key => {
          return errors[key].map(item => {
              return [key,item]
          })
       })
    };
    const c = flatArray(transformFlatArray(errors)).map(array => {
        const  a = array[1] instanceof Promise ? array[1] : Promise.resolve(array[1])
        return a.then(
            () => {
                return [[array[0]], array[1] instanceof Promise ? undefined: array[1]]
            },
            () => {
                return [[array[0]], 'error']
            }
        )
    })
    return Promise.all(c).then(x,x)  
};
export default Validator;