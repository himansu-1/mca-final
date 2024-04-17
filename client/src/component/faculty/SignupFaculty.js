import React from 'react';


const SignupFaculty = () => {
    return (<>
    
    <div class="login-box">
  <h2>Sign Up</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" className='rounded pt-4 px-2' required=""/>
      <label className='my-3'>User Name</label>
    </div>
    <div class="user-box">
      <input type="mail" name="" className='rounded pt-4 px-2' required=""/>
      <label className='my-3'>Mail Id</label>
    </div>
    <div class="user-box">
      <input type="password" name="" className='rounded pt-4 px-2' required=""/>
      <label className='my-3'>Password</label>
    </div>
    <a href="#" className='m-0'>        
      SignUp
    </a>
  </form>
</div>
    </>);
}

export default SignupFaculty;