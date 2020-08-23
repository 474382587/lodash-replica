import React, { useState } from "react"
import Layout from "../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import "./about.scss"
import { Link } from "gatsby"
import BotNav from "../../components/botNav"
const About = () => {
  let slidesToShow = 5

  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth
    console.log(windowWidth)
    if (windowWidth < 768) {
      slidesToShow = 1
    }
  }

  return (
    <Layout>
      <Container className="about-services">
        <div className="title">
          <h1>ABOUT US</h1>
          <h3>
            Guaranti Group is a one-stop mortgage and financial service
            platform, providing the top residential and commercial mortgage
            solutions, as well as the well-rounded financial planning and
            insurance services that cover a variety of needs for clients.
          </h3>
        </div>
        <Row>
          <Col md="6" sm="12" className="center-align">
            <h4>Our vision</h4>
            <p>
              Our vision is to bring you hope, growth and protection for
              yourself, your family and your business.
            </p>
          </Col>
          <Col md="6" sm="12" className="center-align">
            <h4>Our mission</h4>
            <p>
              To bring you hope, growth and protection with our top,
              well-rounded and professional service in good faith.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="center-align">
            <img src={require("../../images/1.png")} />
          </Col>
        </Row>
        <section>
          <h2>温顶荣誉</h2>
          <p>
            Click any image to change it.Click blue "Gear" icon in the top right
            corner to change background, amount slides and amount visible items
            at once.
          </p>
        </section>
        <div className="ant-carousel">
          <AndtCarousel
            autoplay={true}
            slidesToShow={slidesToShow}
            autoplaySpeed={2000}
            arrows={true}
            dots={false}
            arrows
          >
            <div className="image-container">
              <img width="100%" src={require("../../images/1.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/2.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/3.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/1.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/2.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/3.png")} />
            </div>
          </AndtCarousel>
        </div>
        <section>
          <h2>媒体报道</h2>
          <p>
            Make your own website in a few clicks! Mobirise helps you cut down
            development time by providing you with a flexible website editor
            with a drag and drop interface. Mobirise Website Builder creates
            responsive, retina and mobile friendly websites in a few clicks.
            Mobirise is one of the easiest website development tools available
            today. It also gives you the freedom to develop as many websites as
            you like given the fact that it is a desktop app.
          </p>
          <div className="image-container">
            <img src={require("../../images/1.png")} />
          </div>
        </section>
      </Container>
      <BotNav llink="/join" rlink="/team" left="加入我们" right="团队成员" />
    </Layout>
  )
}

export default About
