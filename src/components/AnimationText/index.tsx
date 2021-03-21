import React, { FunctionComponent, RefObject, PropsWithChildren } from "react";
import { useSpring, a, SpringHandle, config } from "react-spring";

import './styles.scss';

interface IAnimationText {
    isRevertAnimation: boolean;
    animRef?: RefObject<SpringHandle | undefined>;
};

const AnimationText: FunctionComponent<PropsWithChildren<IAnimationText>> = ({ isRevertAnimation, children, animRef = undefined }) => {

    const { translateY } = useSpring({
        config: {
            ...config.stiff,
            friction: 40,
        },
        ref: animRef,
        from: { translateY: isRevertAnimation ? 100 : 0 },
        to: { translateY: isRevertAnimation ? 0 : 100 }
    });

    return (
        <div className="AnimationText">
            <a.div
                style={{
                    transform: translateY.interpolate((translateY) => `translateY(${translateY}%)`)
                }}
            >
                { children }
            </a.div>
        </div>
    );
};

export default AnimationText;
