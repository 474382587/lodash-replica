/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
// import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import { AiFillWechat, AiFillInstagram } from "react-icons/ai"
import Header from "./header"
import Navbar from "./navBar"
import { Link } from "gatsby"
import './layout.scss'
const Layout = ({ children, pageInfo }) => {
  return (
    <Fragment>
      <Container fluid className="px-0 main">
        <Navbar pageInfo={pageInfo} />
        <Row noGutters>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer-container">
        <Container>
          <Row className="footer-sections">
            <Col lg="3" md="3" sm="12">
              <a className="image-container" href="/">
                <img
                  width="180"
                  src={require("../images/Guaranti-logo-04.png")}
                />
              </a>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div className="footer-content">
                <p>
                  <Link to="/loan/services">贷款按揭</Link>
                </p>
                <p>
                  <Link to="/fortune/corporate">财税规划</Link>
                </p>
                <p>
                  <Link to="/insurance/corporate">保险服务</Link>
                </p>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div className="footer-content">
                <h5>联系我们</h5>
                <p>
                  邮件: info@guaranti.ca<br></br>
                  电话: +1 (778) 297 7450 <br></br>
                  地址: #205 - 6011 Westminster<br></br>Hwy, Richmond, BC
                </p>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div className="footer-content">
                <p>
                  <Link to="/">订阅博客</Link>
                </p>
                <p>
                  <Link to="/join">加入我们</Link>
                </p>
                <p>
                  <Link to="/about">关于温顶</Link>
                </p>
              </div>
            </Col>
          </Row>
          <Row noGutters className="lower-footer">
            <Col lg="9" md="12">
              <span className="copyright">
                © Copyright {new Date().getFullYear()} Inverse Technology Inc. -
                All Rights Reserved
              </span>
            </Col>
            <Col lg="3" md="12">
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
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  )
}

export default Layout
