import React, {Fragment, ReactElement, ReactNode} from 'react';
import {Icon} from '../index';
import './dialog.scss';
import ReactDOM from 'react-dom';
import Button from '../button/button';
import scopeClass from "../utils/scopeClass";

interface DialogProps {
    visiable: boolean;
    onClose: React.MouseEventHandler;
    buttons?: Array<ReactElement>;
    onCloseClickWrapper?: boolean;
    enableWrapper?: boolean;
}

const sc = scopeClass('f-dialog');

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const handlerClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const handlerCloseWrapper: React.MouseEventHandler = (e) => {
        if (props.onCloseClickWrapper) {
            props.onClose(e);
        }
    };
    const renderElement = props.visiable ?
        <Fragment>
            {
                props.enableWrapper &&
                <div className={sc('wrapper')} onClick={handlerCloseWrapper}/>
            }
            <div className={sc('')}>
                <header className={sc('header')}>
                    <h4 className={sc('heading')}>选项</h4>
                    <div className="close" onClick={handlerClose}>
                        <Icon name="close"/>
                    </div>
                </header>
                <main className={sc('main')}>
                    <div className={sc('body')}>{props.children}</div>
                </main>
                <footer className={sc('footer')}>
                    <div className={sc('footer-actions')}>
                        {props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, {key: index})
                        })}
                    </div>
                </footer>
            </div>
        </Fragment> :
        null;

    return ReactDOM.createPortal(renderElement, document.body)
};

// 动态创建组件
const alert = (content: string) => {
    const buttons = [<Button type="primary" onClick={() => close()}>OK</Button>];
    const close = modal(content, buttons)
};

const confirm = (content: string, yes: () => void, no: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [
        <Button onClick={onNo}>Cancel</Button>,
        <Button type="primary" onClick={onYes}>OK</Button>,
    ];
    const close = modal(content, buttons, no)
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const onClose = () => {
        ReactDOM.render(
            React.cloneElement(component, {visiable: false}), div
        );
        ReactDOM.unmountComponentAtNode(div);
        div.remove()
    };
    const div = document.createElement('div');
    document.body.appendChild(div);
    const component =
        <Dialog
            visiable={true}
            buttons={buttons}
            onClose={() => {
                onClose();
                afterClose && afterClose()
            }}>
            {content}
        </Dialog>;
    ReactDOM.render(
        component,
        div
    );
    return onClose;
};

Dialog.defaultProps = {
    onCloseClickWrapper: true,
    enableWrapper: true
};

export default Dialog;
export {alert, confirm, modal}