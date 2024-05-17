import React from "react";
import "./component styling/Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6 className="text-dark">About</h6>
              <p class="text-start">
              The BUMCA Alumni Gathering Web Application is a dedicated platform designed to connect alumni, staff, and administration of Berhampur University's MCA program. Our mission is to foster engagement, networking, and professional growth within the alumni community.
              </p>
              <hr className="m-0"/>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">
                  Copyright &copy; 2024 All Rights Reserved by
                  <a href="#"> BU</a>.
                </p>
              </div>
            </div>

            <div class="col-xs-6 col-md-2 px-3">
              <h6 className="text-dark">Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-2 px-">
              <h6 className="text-dark">Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-2 px-5">
              <ul class="social-icons">
                <li>
                  <a class="facebook" target='_blank' href="https://www.facebook.com/himansusekharsahu.suman">
                    <i class="fa fa-facebook text-light"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" target='_blank' href="https://twitter.com/Himansu123Sahu">
                    <i class="fa fa-twitter text-light"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" target='_blank' href="https://www.instagram.com/himansusekhar_official/">
                    <i class="fa fa-dribbble text-light"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" target='_blank' href="https://www.linkedin.com/in/it-is-himansu/">
                    <i class="fa fa-linkedin text-light"></i>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
