import React from 'react';

const DefaultPrefix = 'f-layout';
const scopeClassName = (name = '') => {
    return [DefaultPrefix, name].filter(Boolean).join('-')
}
const sc = scopeClassName;

const Layout: React.FunctionComponent = () => {
    return (
      <div className={sc('')}>
        
      </div>
    )
}

export default Layout;