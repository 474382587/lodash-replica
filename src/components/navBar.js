import React, { Fragment } from "react"
import { Link } from "gatsby"
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import { AiFillWechat, AiFillInstagram } from "react-icons/ai"
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Image,
  NavLink,
} from "react-bootstrap"

import "./navBar.scss"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <Fragment>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}

        <Navbar.Brand as="div">
          <Link to="/" className="link-no-style">
            <div className="logo-container">
              <img width={150} src={require("../images/Guaranti-logo-04.png")} />
            </div>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav-left">
            <Nav className="ml-auto">
              <NavDropdown renderMenuOnMount={true} title="贷款按揭">
                <NavDropdown.Item as="div">
                  <Link to="/loan/services">住房贷款</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/loan/business">商业贷款</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/loan/cases">成功案例</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} title="财税规划">
                <NavDropdown.Item as="div">
                  <Link to="/fortune/corporate">企业资产规划</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/fortune/strategy">理财策略</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/fortune/plan">投资方案</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} title="保险服务">
                <NavDropdown.Item as="div">
                  <Link to="/insurance/corporate">企业保险</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/insurance/strategy">个人保险</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/insurance/asset">财产保险</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink href="/news">新闻资讯</NavLink>
              
              <NavDropdown renderMenuOnMount={true} title="关于温顶">
                <NavDropdown.Item as="div">
                  <Link to="/about">公司介绍</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/team">我们的团队</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink href='/join'>加入我们</NavLink>
            </Nav>
          </div>
          <div className="nav-right">
            <div className="social-media">
              <a href="#" target="_blank">
                <FaLinkedinIn size="22px"></FaLinkedinIn>
              </a>
              <a href="#" target="_blank">
                <FaFacebookF size="22px"></FaFacebookF>
              </a>
              <a href="#" target="_blank">
                <AiFillWechat size="22px"></AiFillWechat>
              </a>
              <a href="#" target="_blank">
                <AiFillInstagram size="22px"></AiFillInstagram>
              </a>
              <Link to="" className="ml">
                English
              </Link>
            </div>
          </div>
        </Navbar.Collapse>

        {/* </Container> */}
      </Navbar>
    </Fragment>
  )
}

export default CustomNavbar
