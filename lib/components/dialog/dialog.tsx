import React, { Fragment } from 'react';
import { Icon, Button } from '../index';
import './dialog.scss';

interface DialogProps {
    visiable: boolean;
    onClose?: any
}
const DefaultPrefix = 'f-dialog';
const scopeClassName = (name = '') => {
    return [DefaultPrefix, name].filter(Boolean).join('-')
}
const sc = scopeClassName;

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    return (
        props.visiable ?
            <Fragment>
                <div className={sc('wrapper')}></div>
                <div className={sc()}>
                    <header className={sc('header')}>
                        <h4 className={sc('heading')}>选项</h4>
                        <div className="close" onClick={() => props.onClose(false)}>
                            <Icon name="close"></Icon>
                        </div>
                    </header>
                    <main className={sc('main')}>
                        <div className={sc('body')}>{props.children}</div>
                    </main>
                    <footer className={sc('footer')}>
                        <div className={sc('footer-actions')}>
                            <Button onClick={() => props.onClose(false)}>Close</Button>
                            <Button type="primary">OK</Button>
                        </div>
                    </footer>
                </div>
            </Fragment> :
            null
    )
}

export default Dialog;