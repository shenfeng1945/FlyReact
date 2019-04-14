import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';
import Button from '../button/button';

export default function () {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => setX(!x)}>click</button>
            <button onClick={() => alert('hello')}>alert</button>
            <button onClick={() => confirm('hello', () => console.log('confirm 确认了'), () => console.log('confirm 取消了'))}>confirm</button>
            <button onClick={() => modal('hello')}>modal</button>
            <Dialog visiable={x}
                onClose={() => setX(false)}
                buttons={[
                    <Button type="primary" onClick={() => setX(false)}>Ok</Button>,
                ]}
            >
                实现快速且灵活的开发流程
            </Dialog>
        </div>
    )
}