import React, { FunctionComponent, PropsWithChildren, RefObject } from "react";
import { SpringHandle } from "react-spring";

import './styles.scss';

interface IAnimationFrame {
    isRevertAnimation: boolean;
    animRef?: RefObject<SpringHandle | undefined>;
    onClick?: () => void;
    callBack?: () => void;
}

const AnimationFrame: FunctionComponent<PropsWithChildren<IAnimationFrame>> = ({ 
    isRevertAnimation, 
    animRef = undefined, 
    onClick = () => {}, 
    callBack = () => {},
    children
}) => {

    return (
        <div
            className="AnimationFrame"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default AnimationFrame;
