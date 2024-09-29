import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Software Developer', 'ML Engineer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:30,
        }}
      />
    </div>
  )
}

export default Typed
