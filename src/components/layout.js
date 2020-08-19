/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment, useState } from "react"
// import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import { AiFillWechat, AiFillInstagram } from "react-icons/ai"
import Header from "./header"
import Navbar from "./navBar"
import { Link } from "gatsby"
import "./layout.scss"

const Layout = ({ children, pageInfo }) => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }
  return (
    <Fragment>
      <Modal show={showModal} onHide={handleClose} centered size="xs">
        <Modal.Header closeButton>
          <Modal.Title>微信二维码</Modal.Title>
        </Modal.Header>
        <Modal.Body className="center-align">
          <img width="200" src={require("../images/qrcode.jpg")} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid className="px-0 main">
        <Navbar handleOpen={handleOpen} pageInfo={pageInfo} />
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
                  <b>邮件:</b>{" "}
                  <a href="mailto:info@guaranti.ca">info@guaranti.ca</a>
                  <br></br>
                  <b>电话:</b>{" "}
                  <a href="tel:+1 (778) 297 7450">+1 (778) 297 7450</a>{" "}
                  <br></br>
                  <b>地址:</b> #205 - 6011 Westminster<br></br>Hwy, Richmond, BC
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
                <a
                  href="https://www.linkedin.com/company/guaranti-mortgages/?viewAsMember=true"
                  target="_blank"
                >
                  <FaLinkedinIn size="22px"></FaLinkedinIn>
                </a>
                <a
                  href="https://www.facebook.com/GuarantiGroup/?eid=ARBWHHonkTPnUxYBTqLi-qA3C2Kl8mVj1OmohJf4IH-K6OWqyokoJeGuwIdrZbesUShVbKjgEQel7Kvd"
                  target="_blank"
                >
                  <FaFacebookF size="22px"></FaFacebookF>
                </a>
                <a
                  href="#"
                  target="_blank"
                  onClick={e => {
                    e.preventDefault()
                    handleOpen()
                  }}
                >
                  <AiFillWechat size="22px"></AiFillWechat>
                </a>
                <a
                  href="https://www.instagram.com/guarantigroup/"
                  target="_blank"
                >
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
