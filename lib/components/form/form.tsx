import React, { ReactFragment } from 'react'
import Input from '../input/input';
import classnames from '../utils/classnames';
import './form.scss';

export interface FormValue {
    [K: string]: any
}
interface ErrorValue {
    [K: string]: Array<String>
}
interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue) => void;
    errors: ErrorValue
}

const Form: React.FunctionComponent<Props> = (props) => {
    const { fields, value: formData } = props;
    const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...formData, [name]: e.target.value })
    };
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    return (
        <form onSubmit={onSubmit} className="f-form">
            <table className="f-form-table">
                <tbody>
                    {
                        fields.map(f => {
                            return (
                                <tr className={classnames('f-form-row')} key={f.name}>
                                    <td className="f-form-label">
                                        {f.label}
                                    </td>
                                    <td>
                                        <Input type={f.input.type} value={formData[f.name]} onChange={onInputChange.bind(null, f.name)} className={classnames({danger: !!props.errors[f.name]})}/>
                                        <div className="f-form-error">
                                          {
                                              props.errors[f.name] ?
                                              props.errors[f.name].join(',') :
                                              <span>&nbsp;</span>
                                          }
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td>
                            {props.buttons}
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
};
export default Form;