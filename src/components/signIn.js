import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
function SignIn() {
  let navigate=useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://cafe-3-0-b5ny.vercel.app/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });


    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      navigate("/");
    }
  };


  const handleChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <section className="text-center text-lg-start">

      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className=" register col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right">
              <div className="card-body p-5 shadow-5 text-center">
                <Link to="/"> <img src={require("../images/logo3.png")} alt="My logo" style={{ "height": "162px", "width": "200px", "margin": "2%" }}></img></Link>
                <form onSubmit={handleSubmit}>
             
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" placeholder="Email" className="form-control" name="email" value={credentials.email} onChange={handleChange} />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" placeholder="Password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
                  </div>



                  {/* <!-- Submit button --> */}
                  <div className="row">
                    <div className="col-lg-6">
                      <button type="submit" className="btn btn-primary btn-block mb-4">
                        Sign In
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <Link to="/createuser" className="btn btn-primary btn-block mb-4">
                        Don't have an Account?
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="https://source.unsplash.com/random/450x600/?coffee" className="w-100 rounded-4 shadow-4"
              alt="" />
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>
  )
};

export default SignIn;

