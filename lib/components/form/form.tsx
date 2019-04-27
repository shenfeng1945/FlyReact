import React, { ReactFragment } from 'react'

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
        props.onChange({...formData,[name]: e.target.value})
    };
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    return (
        <form onSubmit={onSubmit}>
            {
                fields.map(f => {
                    return (
                        <div key={f.name}>
                            {f.label}
                            <input type={f.input.type} value={formData[f.name]} onChange={onInputChange.bind(null, f.name)} />
                        </div>
                    )
                })
            }
            <div>
                {props.buttons}
            </div>
        </form>
    )
};
export default Form;