import React, { useState } from 'react';
import Dialog from './dialog';

export default function () {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => setX(!x)}>click</button>
            <Dialog visiable={x} onClose={setX}>
                实现快速且灵活的开发流程
            </Dialog>
        </div>
    )
}