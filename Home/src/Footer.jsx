
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Logo or Branding */}
          <div className="col-md-4 mb-3">
            <h5>My Brand</h5>
            <p>Delivering great products with passion.</p>
          </div>
          
          {/* Column 2: Useful Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3"><a href="#" className="text-light"><i className="bi bi-facebook"></i> Facebook</a></li>
              <li className="me-3"><a href="#" className="text-light"><i className="bi bi-twitter"></i> Twitter</a></li>
              <li className="me-3"><a href="#" className="text-light"><i className="bi bi-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 My Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
