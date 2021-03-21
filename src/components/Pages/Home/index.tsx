import { useChain } from "@react-spring/three";
import React, { FunctionComponent, useRef, RefObject, useState } from "react";
import { useHistory } from "react-router";
import { SpringHandle } from "react-spring";

import AnimationFrame from "../../AnimationFrame";
import AnimationText from "../../AnimationText";
import ImgWrapper from "../../ImgWrapper";

import './styles.scss';

const Home: FunctionComponent = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const titleRef: RefObject<SpringHandle> = useRef(null);
    const textRef: RefObject<SpringHandle> = useRef(null);
    const photoRef: RefObject<SpringHandle>  = useRef(null);

    useChain(isOpen ? [titleRef, photoRef] : []);
    useChain(isOpen ? [textRef] : []);

    return (
        <div className="Home">
            <AnimationFrame 
                isRevertAnimation={false}
                animRef={photoRef}
                onClick={() => setIsOpen(true)}
                callBack={() => history.push('/about')}
            >
                <div className="Home__title">
                    <AnimationText 
                        isRevertAnimation={false}
                        animRef={titleRef}
                    >
                        <h1 className="title">sea</h1>
                    </AnimationText>
                </div>
                <ImgWrapper url="sea.jpg" />
                <div className="Home__coordinates">
                    <AnimationText
                        isRevertAnimation={false}
                        animRef={textRef} 
                    >
                        <p>
                            <span>32.330752649496254</span>
                            <span>34.84880869867034</span>
                        </p>
                    </AnimationText> 
                </div>
            </AnimationFrame>
        </div>
    );
};

export default Home;
