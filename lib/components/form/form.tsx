import React, { ReactFragment } from 'react'
interface Props {
    value: { [K: string]: any };
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler;
    onChange: any;
}

const Form: React.FunctionComponent<Props> = (props) => {
    const { fields, value: formData } = props;
    const onInputChange = (name: string, e: any) => {
        props.onChange({...formData,[name]: e.target.value})
    };
    const onSubmit = (e:any) => {
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