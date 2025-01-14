import React from 'react'

const ChildComponent =React.memo(
   (props) => {
    console.log("Child component got re-render again");
  return (
    <div>
    <button onClick={props.handleclick}>
        {props.buttonName}
    </button>
    </div>
  )
}
);

export default ChildComponent
//React.memo(); - when wrap compnent in this, this will not e-render. this will happen when props will change.
// if you are sending a function, then React.memo() would not be able to sae you re-render.
//