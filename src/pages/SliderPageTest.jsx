import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  z-index: 3;
  height: 7em;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(0.66rem, 2vw, 1rem);
  letter-spacing: 0.5em;
`;

const Logo = styled.div`
  font-size: 2rem;
`;

const Links = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 2rem;
  }
`;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;

  .bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  .bg1 {
    background-image: url(
        'https://images.unsplash.com/photo-1536751048178-14106afab4f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80'
    );
    z-index: 2;
    background-size: cover;
    background-position: center;
  }

  .bg2 {
    background-image: url(
      'https://images.unsplash.com/photo-1573882077407-90354b357c52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80'
    );
    z-index: 1;
    background-size: cover;
    background-position: center;
  }


  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .content {
    position: relative;
    z-index: 4;
    color: #fff;
    font-size: 3rem;
    text-align: center;
   
  }

  .end {
    position: relative;
    z-index: 4;
    color: #fff;
    font-size: 3rem;
    text-align: center;
    margin-top: 30vh;
  }
`;



const ScrollingText = styled.div`
  opacity: 0;
  color: white;
  width: 100rem;
  top: 200%;
  position: absolute;
  
  transition: opacity 0.5s ease-in-out;

  &.show {
    opacity: 1;
  }
  z-index: 10;
`;



const SliderPage = () => {
  const controller = useRef(null);
  const [activeScene, setActiveScene] = useState(1);
  const scenes = [1, 2];
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  


  return (
    <div>
      <Header>
        <Logo>LOGO</Logo>
        <Links>
          {scenes.map((scene) => (
            <a
key={scene}
href="#"
onClick={() => setActiveScene(scene)}
className={activeScene === scene ? 'active' : ''}
>
Scene {scene}
</a>

))}
</Links>
<ScrollingText className={scrolling ? 'show' : ''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt <br />ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui sapien eget. Rhoncus est pellentesque elit ullamcorper <br />dignissim <br />cras tincidunt lobortis. <br />Phasellus egestas tellus rutrum tellus pellentesque. Vitae suscipit tellus mauris a diam maecenas sed.  
Egestas pretium aenean pharetra magna. Tortor posuere ac ut consequat. Risus feugiat in ante metus dictum at. Odio <br />tempor orci dapibus ultrices in. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Consectetur adipiscing elit ut <br />aliquam purus sit amet luctus. Sem integer vitae <br />justo eget magna fermentum. Felis eget velit aliquet sagittis id consectetur purus. Laoreet sit amet <br />
cursus sit amet dictum sit amet. Magna sit amet purus gravida quis. Odio e<br />uismod lacinia at quis risus sed <br />vulputate. Massa id neque aliquam vestibulum morbi blandit.<br /><br />

Imperdiet dui accumsan sit amet nulla. Nullam non nisi est sit amet. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Eleifend mi in nulla posuere. Imperdiet proin fermentum <br />leo vel or<br />ci porta non pulvinar. Curabitur gravida arcu ac <br />tortor dignissim convallis aenean et. Risus nullam eget felis eget nunc. Augue eget arcu dictum varius duis. 
In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Magna sit amet purus gravida quis blandit.<br /><br />

Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Nibh sed pulvinar proin gravida. Sollicitudin aliquam ultrices sagittis <br />orci. Consectetur libero id faucibus <br />nisl. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. <br />Sit amet mauris <br />commodo quis imperdiet massa. Risus feugiat in <br />ante metus dictum at tempor commodo. Imperdiet nulla malesuada pellentesque elit eget. Nunc aliquet bibendum 
enim facilisis gravida. Arcu non sodales neque sodales. At lectus urna duis convallis convallis tellus. Eleifend donec pretium <br />vulputate sapien nec sagittis. Mauris rhoncus aenean vel elit scelerisque. Eget est lorem ipsum dolor sit amet. Platea <br />dictumst quisque sagittis purus sit amet<br /> volutpat <br />consequat mauris. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Massa id neque aliquam vestibulum. 
Aliquam purus sit amet luctus venenatis. Sodales ut etiam sit amet nisl purus in mollis nunc. </ScrollingText>
</Header>
<Controller globalSceneOptions={{ triggerHook: 'onLeave' }} ref={controller}>
<Scene duration="100%" triggerHook="onLeave" pin>
{(progress) => (
<div>
<Section>
<div className="bg bg1" style={{ opacity: progress }} />
<div className="bg bg2" style={{ opacity: 1 - progress }} />
<div className="overlay" />
<div className="content">
<Tween
to={{ opacity: 0 }}
duration={1}
ease="power2.out"
delay={0.5}
stagger={{ amount: 0.5 }}
>
<h1>Welcome</h1>
</Tween>
<Tween
to={{ opacity: 0 }}
duration={1.5}
ease="power2.out"
delay={1}
stagger={{ amount: 0.5 }}
>
<p>Scroll down to see more</p>
</Tween>
</div>
</Section>
</div>
)}



</Scene>
</Controller>
</div>
);
};

export default SliderPage;