import React, { FunctionComponent, RefObject, useRef } from "react";
import { SpringHandle, useChain } from "react-spring";

import AnimationFrame from "../../AnimationFrame";
import AnimationText from "../../AnimationText";
import ImgWrapper from "../../ImgWrapper";

import './styles.scss';

const About: FunctionComponent = () => {
    const textRef: RefObject<SpringHandle> = useRef(null);
    const photoRef: RefObject<SpringHandle>  = useRef(null);

    useChain([textRef]);
    
    return (
        <div className="About" >
            <div className="About__frame">
                <div className="About__title">
                    <AnimationText 
                        isRevertAnimation={true}
                        animRef={textRef}
                    >
                        <h2 className="title">hawaii</h2>
                    </AnimationText>
                </div>
                <AnimationFrame 
                    isRevertAnimation={true}
                    animRef={photoRef}
                >
                    <ImgWrapper url="sea.jpg" />
                </AnimationFrame>
            </div>
        </div>
    );
};

export default About;
