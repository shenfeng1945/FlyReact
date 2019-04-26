import React, { ReactFragment } from 'react'
interface Props {
    value: { [K: string]: any };
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler;
    onChange: React.FormEventHandler;
}

const Form: React.FunctionComponent<Props> = (props) => {
    const { fields, value: formData } = props;
    const onInputChange = (name: string, e: any) => {
        console.log(name, e.target.value)
    }
    return (
        <form>
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
}
export default Form;