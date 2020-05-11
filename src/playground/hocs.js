/*Concretely, a higher-order component is a function that takes a component and returns a new component.
const EnhancedComponent = higherOrderComponent(WrappedComponent);
Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer.


*/
import React from 'react';
import ReactDOM from 'react-dom'; 


const Info = (props)=> (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  
  </div>  
);


const withAuthentication = (WrappedComponent)=>{

  return(props)=>(
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props}/>

      ): ('Please Login to continue')} 

    </div>

  );
};

const WithAdminWarning = (WrappedComponent)=>{

  return (props)=>(
    <div>
      {props.isAdmin && <p>This information is classified please do not share</p>}

      <WrappedComponent {...props}/>
    
    </div>
  ) 
}

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = withAuthentication(Info)

ReactDOM.render(<AuthInfo isAuth={0}  info='This is the information using Auth Info HOC'/>, document.getElementById('app'));