import React, { FunctionComponent, RefObject, PropsWithChildren } from "react";
import { SpringHandle } from "react-spring";

import './styles.scss';

interface IAnimationText {
    isRevertAnimation: boolean;
    animRef?: RefObject<SpringHandle | undefined>;
};

const AnimationText: FunctionComponent<PropsWithChildren<IAnimationText>> = ({ isRevertAnimation, children, animRef = undefined }) => {

    return (
        <div className="AnimationText">
            <div>
                { children }
            </div>
        </div>
    );
};

export default AnimationText;
