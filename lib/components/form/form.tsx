import React, { ReactFragment } from 'react'
import Input from '../input/input';
import classnames from '../utils/classnames';
import './form.scss';

export interface FormValue {
    [K: string]: any
}
interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue) => void;
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
            <table>
                <tbody>

                    {
                        fields.map(f => {
                            return (
                                <tr className={classnames('f-form-row')} key={f.name}>
                                    <td>
                                        {f.label}
                                    </td>
                                    <td>
                                        <Input type={f.input.type} value={formData[f.name]} onChange={onInputChange.bind(null, f.name)} />
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