import React, { FunctionComponent } from "react";
import { useHistory } from "react-router";

import ImgWrapper from "../../ImgWrapper";
import AnimationText from "../../AnimationText";

import './styles.scss';

const Home: FunctionComponent = () => {
    const history = useHistory();

    return (
        <div className="Home">
            <div
                style={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    position: 'relative',
                    width: '25%'
                }}
                onClick={() => history.push('/about')}
            >
                <div className="Home__title">
                    <div>
                        <h1 className="title">sea</h1>
                    </div>
                </div>
                <ImgWrapper url="sea.jpg" />
                <div className="Home__coordinates">
                    <div>
                        <p>
                            <span>32.330752649496254</span>
                            <span>34.84880869867034</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;