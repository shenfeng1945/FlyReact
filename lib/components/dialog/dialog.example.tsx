import React, { useState } from 'react';
import Dialog, {alert} from './dialog';
import Button from '../button/button';

export default function () {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => setX(!x)}>click</button>
            <button onClick={() => alert('hello')}>click1</button>
            <Dialog visiable={x}
                onClose={() => setX(false)}
                buttons={[
                    <Button>Cancel</Button>,
                    <Button type="primary">Ok</Button>,
                ]}
            >
                实现快速且灵活的开发流程
            </Dialog>
        </div>
    )
}