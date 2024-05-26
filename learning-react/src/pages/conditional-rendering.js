import React, {useState} from 'react';

const ConditionalRenderingPage = () => {

  const [visiblity, updateVisiblity] = useState(true);

  const showHide = () => {
    updateVisiblity(!visiblity);
  }

  return (
    <div>
      <h1>Conditional Rendering (hide/show)</h1>

      <h2>Condition Inline IF</h2>
      <button onClick={() => showHide()}>Show / Hide</button>
      {/* 
            { condition && HTML Code }
      */}

      { visiblity && <img src={require("../images/shinchan.png")} width={300} /> }

      <h2>Condition Inline IF ELSE</h2>
      {/* 
          { condition ? HTML Code 1 : HTML Code 2 }
      */}

      {
        visiblity ? <h2>Login Permission Granted</h2> : <h2>Login Access Denied</h2>
      }

    </div>
  );
};

export default ConditionalRenderingPage;