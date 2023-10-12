import React from "react";

function SignUp(){
    return(
        <section className="text-center text-lg-start">
     
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className=" register col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right">
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                   
                      
                        <div className="form-outline mb-4">
                          <input type="text" id="form3Example1" placeholder="Name" className="form-control" />
                        </div>
                     
                 
      
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" placeholder="Email"  className="form-control" />
                    </div>
      
                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" placeholder="Password"  className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                          <input type="text" id="form3Example2" placeholder="Conform Password" className="form-control" />
                          
                    </div>
                      
                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
    
                  </form>
                </div>
              </div>
            </div>
      
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
                alt="" />
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
    );
};

export default SignUp;

