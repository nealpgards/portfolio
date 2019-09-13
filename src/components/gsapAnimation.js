import React from 'react';
import styled from '@emotion/styled';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const Sticky2Styled = styled.div`
  overflow: hidden;
  .section {
    height: 70vh;
    background: linear-gradient(160deg, #f47c66 0%,#e51906 100%);
  }
  
  .sticky, .sticky2 {
    height: 100vh;
    background: linear-gradient(160deg, #e4f5fc 0%,#bfe8f9 26%,#9fd8ef 59%,#0068f2 100%);
    width: 100%;
    & .animation, .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100%;
      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 10%;
        margin: 0;
      }
    }
  }

  .animation {
      font-size: 80px;
  }
`;

const Sticky2 = () => (
  <Sticky2Styled>
    <div className="section" />
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration={1000}
        pin
        addIndicators
      >
        {(progress) => (
          <div className="sticky">
            <Timeline totalProgress={progress} paused>
              <Tween
                  from={{ x: '0%', top: '0%' }}
                  to={{ x: '60%', top: '10%' }}
              >
                <div className="animation">
                    ☝🏻
                </div>
              </Tween>
              <Timeline 
                target={
                  <div className="heading">
                    <h2>This is a cool heading</h2>
                  </div>
                }
              >
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                />
                <Tween
                  to={{ x: '110%' }}
                />
              </Timeline>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
    <div className="section" />
  </Sticky2Styled>
);

export default Sticky2;