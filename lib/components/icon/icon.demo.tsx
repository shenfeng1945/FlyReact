import React from 'react'
import DemoContainer from '../demoContainer';
import IconExample from './icon.example'

const IconDemo = () => {
    return (
        <DemoContainer code={require('!!raw-loader!./icon.example.tsx').default}>
            <IconExample />
        </DemoContainer>
    )
}
export default IconDemo;