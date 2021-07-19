import React from "react";

const Home = () => {
  return (
    <div>
      <header
        id="header"
        class="fixed-top d-flex align-items-center  header-transparent "
      >
        <div class="container d-flex align-items-center">
          <div class="logo mr-auto">
            <img
              src="assets/img/apple-touch-icon.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div id="hero">
        <div class="slider-container">
          <div class="slider-control left inactive"></div>
          <div class="slider-control right"></div>
          <ul class="slider-pagi"></ul>
          <div class="slider">
            <div class="slide slide-0 active">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <svg
                  class="slide__overlay"
                  viewBox="0 0 720 405"
                  preserveAspectRatio="xMaxYMax slice"
                >
                  <path
                    class="slide__overlay-path"
                    d="M0,0 150,0 500,405 0,405"
                  />
                </svg>
                <div class="slide__text">
                  <h2 class="slide__text-heading" style="font-size: 45px;">
                    MESS FINDER
                  </h2>
                  <p style="font-size: 16px;" class="slide__text-desc">
                    One line.
                  </p>
                  <p style="font-size: 16px;" class="slide__text-desc"></p>
                  <a class="slide__text-link" style="font-size: 25px;"></a>
                </div>
              </div>
            </div>
            <div class="slide slide-1 ">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <svg
                  class="slide__overlay"
                  viewBox="0 0 720 405"
                  preserveAspectRatio="xMaxYMax slice"
                >
                  <path
                    class="slide__overlay-path"
                    d="M0,0 150,0 500,405 0,405"
                  />
                </svg>
                <div class="slide__text">
                  <h2 class="slide__text-heading" style="font-size: 35px;">
                    INFO
                  </h2>
                  <p style="font-size: 16px;" class="slide__text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio veniam minus illo debitis nihil animi facere,
                    doloremque voluptate tempore quia. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Distinctio veniam minus
                    illo debitis nihil animi facere, doloremque voluptate
                    tempore quia.
                  </p>
                  <a class="slide__text-link" style="font-size: 25px;">
                    Project link
                  </a>
                </div>
              </div>
            </div>
            <div class="slide slide-2">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <svg
                  class="slide__overlay"
                  viewBox="0 0 720 405"
                  preserveAspectRatio="xMaxYMax slice"
                >
                  <path
                    class="slide__overlay-path"
                    d="M0,0 150,0 500,405 0,405"
                  />
                </svg>
                <div class="slide__text">
                  <h2 class="slide__text-heading " style="font-size: 45px;">
                    INFO
                  </h2>
                  <p style="font-size: 16px;" class=" slide__text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio veniam minus illo debitis nihil animi facere,
                    doloremque voluptate tempore quia. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Distinctio veniam minus
                    illo debitis nihil animi facere, doloremque voluptate
                    tempore quia.
                  </p>
                  <a class="slide__text-link" style="font-size: 25px;">
                    Project link
                  </a>
                </div>
              </div>
            </div>
            <div class="slide slide-3">
              <div class="slide__bg"></div>
              <div class="slide__content">
                <svg
                  class="slide__overlay"
                  viewBox="0 0 720 405"
                  preserveAspectRatio="xMaxYMax slice"
                >
                  <path
                    class="slide__overlay-path"
                    d="M0,0 150,0 500,405 0,405"
                  />
                </svg>
                <div class="slide__text">
                  <h2 class="slide__text-heading" style="font-size: 45px;">
                    INFO
                  </h2>
                  <p style="font-size: 16px;" class="slide__text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio veniam minus illo debitis nihil animi facere,
                    doloremque voluptate tempore quia. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Distinctio veniam minus
                    illo debitis nihil animi facere, doloremque voluptate
                    tempore quia.
                  </p>
                  <a class="slide__text-link" style="font-size: 25px;">
                    Project link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="team" class="team">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2>MENU OPTIONS</h2>
            <p>VEG OPTIONS</p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up">
                <div class="member-img">
                  <img
                    src="assets/img/veg/veg-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <img
                    src="assets/img/veg/veg-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="200">
                <div class="member-img">
                  <img
                    src="assets/img/veg/veg-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="300">
                <div class="member-img">
                  <img
                    src="assets/img/veg/veg-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" class="team">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <p>NON-VEG OPTIONS</p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up">
                <div class="member-img">
                  <img
                    src="assets/img/non_veg/non_veg-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <img
                    src="assets/img/non_veg/non_veg-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">

                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="200">
                <div class="member-img">
                  <img
                    src="assets/img/non_veg/non_veg-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="300">
                <div class="member-img">
                  <img
                    src="assets/img/non_veg/non_veg-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Name</h4>
                  <span>Info</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div
          class="container"
          style="text-align: center;justify-content:center;"
        >
          <h3>Project </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


          <div
            class="info"
            style="text-align:left;justify-content:left;align-items:left;"
          >
            <ul>
              <li>
                <a href="">TEAM A</a>{" "}
              </li>
              <li>
                <a href="">TEAM B</a>
              </li>
              <li>
                <a href="">TEAM C</a>{" "}
              </li>
            </ul>
          </div>
          <div class="social-links">
            <h4>Follow us at:</h4>
            <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <div class="credits">
            Designed by <a>ABC</a>
          </div>
        </div>
      </footer>

      <a href="#" class="back-to-top">
        <i class="ri-arrow-up-line"></i>
      </a>
      
      {/* 
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/carousel.js"></script> */}
  
    </div>
  );
};

export default Home;
