import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
  return (
<footer className="text-center text-lg-start bg-light text-muted">
  
  {/* <!-- Section: Links  --> */}
  <section className="footer">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="rowf row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Cafe
          </h6>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="/" className="text-reset">Burgers</a>
          </p>
          <p>
            <a href="/" className="text-reset">Pizza</a>
          </p>
          <p>
            <a href="/" className="text-reset">Lattes</a>
          </p>
          <p>
            <a href="/" className="text-reset">Jacket Potates</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="/" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="/" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="/" className="text-reset">Help</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Vesu, Surat</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
  <div className="text-center p-4" >
    © {currentYear} Copyright
  </div>
  {/* <!-- Copyright --> */}
</footer>
// <!-- Footer -->
  );
}

export default Footer;