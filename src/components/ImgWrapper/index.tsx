import React, { FunctionComponent } from 'react';

import './styles.scss';

const ImgWrapper: FunctionComponent<{ url: string }> = ({url}) => {
    return (
        <div className="ImgWrapper">
            <img src={url} alt={url} />
        </div>
    )
};

export default ImgWrapper;
