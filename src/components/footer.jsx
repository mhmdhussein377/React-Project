import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../styles/footerStyles.css"
import {Link} from "react-router-dom"

const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6>Solutions</h6>
          <ul>
            <li>
              <Link className="link" to="/">
                Marketing
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Analytics
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Commerce
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Insights
              </Link>
            </li>
          </ul>
        </div>
        <div className="col support">
          <h6>Support</h6>
          <ul>
            <li>
              <Link className="link" to="/">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Guides
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                API Status
              </Link>
            </li>
          </ul>
        </div>
        <div className="col company">
          <h6>Company</h6>
          <ul>
            <li>
              <Link className="link" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div className="col legal">
          <h6>Legal</h6>
          <ul>
            <li>
              <Link className="link" to="/">
                Claim
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Cookies
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-subscribe">
          <h6>Subscribe to our newsletter</h6>
          <p>
            The latest news, atricles, and resources sent to your inbox weekly.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content">
          <div className="rights">
            <p>&copy; Workflow, Inc. All rights reserved.</p>
          </div>
          <div className='icons'>
            <FaFacebook
              size={20}
              style={{ color: "#d3d3d3", marginRigth: "10px" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#d3d3d3", marginRigth: "10px" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#d3d3d3", marginRigth: "10px" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#d3d3d3", marginRigth: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer