import React, { FunctionComponent } from "react";

import ImgWrapper from "../../ImgWrapper";
import AnimationText from "../../AnimationText";
import AnimationFrame from "../../AnimationFrame";

import './styles.scss';

const About: FunctionComponent = () => {    
    return (
        <div className="About" >
            <div className="About__frame">
                <div className="About__title">
                    <div>
                        <h2 className="title">hawaii</h2>
                    </div>
                </div>
                <div
                    style={{
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        position: 'relative',
                        width: '100%',
                        transform: `translateY(50%)`
                    }}
                >
                    <ImgWrapper url="sea.jpg" />
                </div>
            </div>
        </div>
    );
};

export default About;