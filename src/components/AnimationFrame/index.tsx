import React, { FunctionComponent, PropsWithChildren, RefObject } from "react";
import { useSpring, a, SpringHandle, config } from "react-spring";

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
    const { width, translateY } = useSpring({
        config: {
            ...config.slow,
            mass: 5,
            tension: 140,
        },
        ref: animRef,
        from: { 
            width: isRevertAnimation ? 100 : 25,
            translateY: isRevertAnimation ? 50 : 0,
         },
        to: { 
            width: isRevertAnimation ? 25 : 100,
            translateY: isRevertAnimation ? 0 : 50,
        },
        onRest: callBack,
    });

    return (
        <a.div
            className="AnimationFrame"
            style={{
                width: width.interpolate((width) => `${width}%`),
                transform: translateY.interpolate((translateY) => `translateY(${translateY}%)`)
            }}
            onClick={onClick}
        >
            {children}
        </a.div>
    );
};

export default AnimationFrame;
