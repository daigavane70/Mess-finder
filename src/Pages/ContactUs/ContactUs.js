import React from "react";
// import {
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBIcon,
//   MDBBtn,
//   MDBInput,
// } from "mdbreact";

const ContactPage = () => {
  return (
    <div className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <div className="row">
        <div className="col-lg-6" style={{ margin: 25 }}>
          <div className="card">
            <div className="card-body">
              <div className="form-header blue accent-1">
                <h3 className="mt-2 text-center">
                  <i class="fas fa-envelope"></i> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-tag"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Subject"
                  aria-label="Subject"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-pen"></i>
                  </span>
                </div>
                <textarea
                  class="form-control"
                  placeholder="Brief Description"
                  aria-label="With textarea"
                ></textarea>
              </div>

              <div className="text-center">
                <input
                  class="btn btn-primary"
                  type="submit"
                  value="Submit"
                ></input>
              </div>

            </div>
          </div>
        </div>

        <div className="col-lg-5" style={{ margin: 25 }}>
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "410px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
        </div>
      </div>

      <div className="row text-center ">
        <div className="col-md-2">
          <button type="button" class="btn btn-primary">
            <i class="fas fa-map-marker-alt fa-3x"></i>
          </button>
          <p>New York, 94126</p>
          <p className="mb-md-0">United States</p>
        </div>

        <div className="col-md-2">
          <button type="button" class="btn btn-primary">
            <i class="fas fa-phone fa-3x"></i>
          </button>
          <p>+ 01 234 567 89</p>
          <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
        </div>

        <div className="col-md-2">
        <a href="mailto:info@gmail.com" target="_blank" rel="noreferrer">
          <button type="button" class="btn btn-primary">
            <i class="fas fa-envelope fa-3x"></i>
          </button>
          </a>
          <p>info@gmail.com</p>
          <p className="mb-md-0">sale@gmail.com</p>
        </div>

        <div className="col-md-2">
          <a href="whatsapp://send?text=Hello MessFinder!&amp;phone=+917006000025"
            target="_blank" rel="noreferrer">
            <button type="button" class="btn btn-primary">
              <i class="fab fa-whatsapp fa-3x"></i>
            </button>
          </a>
          <p>Mess Finder</p>
          <p className="mb-md-0">Join with us on Whatsapp</p>
        </div>

        <div className="col-md-2">
        <a href="https://twitter.com/MessFinder" target="_blank" rel="noreferrer">
          <button type="button" class="btn btn-primary">
            <i class="fab fa-twitter fa-3x"></i>
          </button>
          </a>
          <p>@MessFinder</p>
          <p className="mb-md-0">Join with us on Twitter</p>
        </div>

        <div className="col-md-2">
        <a href="https://instagram.com/MessFinder/" target="_blank" rel="noreferrer">
          <button type="button" class="btn btn-primary">
            <i class="fab fa-instagram fa-3x"></i>
          </button>
          </a>
          <p>MessFinder</p>
          <p className="mb-md-0">Join with us on </p>
        </div>
      </div>
    </div>

  );
};

export default ContactPage;
