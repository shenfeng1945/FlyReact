import React, { Fragment, ReactElement } from 'react';
import { Icon } from '../index';
import './dialog.scss';
import ReactDOM from 'react-dom';
import Button from '../button/button';

interface DialogProps {
    visiable: boolean;
    onClose: React.MouseEventHandler;
    buttons?: Array<ReactElement>;
    onCloseClickWrapper?: boolean;
}
const DefaultPrefix = 'f-dialog';
const scopeClassName = (name = '') => {
    return [DefaultPrefix, name].filter(Boolean).join('-')
}
const sc = scopeClassName;

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const handlerClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    }
    const handlerCloseWrapper: React.MouseEventHandler = (e) => {
        if (props.onCloseClickWrapper) {
            props.onClose(e);
        }
    }
    const renderElement = props.visiable ?
        <Fragment>
            <div className={sc('wrapper')} onClick={handlerCloseWrapper}></div>
            <div className={sc()}>
                <header className={sc('header')}>
                    <h4 className={sc('heading')}>选项</h4>
                    <div className="close" onClick={handlerClose}>
                        <Icon name="close"></Icon>
                    </div>
                </header>
                <main className={sc('main')}>
                    <div className={sc('body')}>{props.children}</div>
                </main>
                <footer className={sc('footer')}>
                    <div className={sc('footer-actions')}>
                        {props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, { key: index })
                        })}
                    </div>
                </footer>
            </div>
        </Fragment> :
        null;

    return ReactDOM.createPortal(renderElement, document.body)
}

// 动态创建组件
const alert = (content: string) => {
    const onClose = () => {
        ReactDOM.render(
            React.cloneElement(component, { visiable: false }), div
        )
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const div = document.createElement('div')
    document.body.appendChild(div)
    const component = <Dialog visiable={true} onClose={onClose}
        buttons={[
            <Button type="primary" onClick={onClose}>OK</Button>
        ]}>{content}</Dialog>;

    ReactDOM.render(
        component,
        div
    )
}

const confirm = (content: string, yes: () => void, no: () => void) => {
    const onClose = () => {
        ReactDOM.render(
            React.cloneElement(component, { visiable: false }), div
        )
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const onYes = () => {
        onClose()
        yes && yes();
    }
    const onNo = () => {
        onClose()
        no && no();
    }
    const div = document.createElement('div')
    document.body.appendChild(div)
    const component = <Dialog visiable={true} onClose={onClose}
        buttons={[
            <Button onClick={onNo}>Cancel</Button>,
            <Button type="primary" onClick={onYes}>OK</Button>,
        ]}>{content}</Dialog>;

    ReactDOM.render(
        component,
        div
    )
}

const modal = (content: string, yes?: () => void, no?: () => void) => {
    const onClose = () => {
        ReactDOM.render(
            React.cloneElement(component, { visiable: false }), div
        )
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const div = document.createElement('div')
    document.body.appendChild(div)
    const component = <Dialog visiable={true} onClose={onClose}>{content}</Dialog>;

    ReactDOM.render(
        component,
        div
    )
}


Dialog.defaultProps = {
    onCloseClickWrapper: true
}

export default Dialog;
export { alert, confirm, modal }