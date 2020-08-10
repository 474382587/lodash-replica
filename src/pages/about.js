import React, { useState } from "react"
import Layout from "../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import "./about.scss"

const About = () => {
  if (typeof window === `undefined`) {
    return <div></div>
  }

  let slidesToShow = 5
  const windowWidth = window.innerWidth
  console.log(windowWidth)
  if (windowWidth < 768) {
    slidesToShow = 1
  }
  return (
    <Layout>
      <Container className="about-services">
        <div className="title">
          <h1>关于温顶</h1>
          <h3>
            Click any text or icon to edit or style it. Use the block parameters
            to hide/show text or icons and change media size or position.
          </h3>
        </div>
        <Row>
          <Col md="6" sm="12" className="center-align">
            <h4>我们的使命</h4>
            <p>
              Mobirise is an easy website builder - just drop site elements to
              your page, add content and style it to look the way you like.
            </p>
          </Col>
          <Col md="6" sm="12" className="center-align">
            <h4>我们的目标</h4>
            <p>
              Mobirise is an easy website builder - just drop site elements to
              your page, add content and style it to look the way you like.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="center-align">
            <img src={require("../images/1.png")} />
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
              <img width="100%" src={require("../images/1.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../images/2.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../images/3.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../images/1.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../images/2.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../images/3.png")} />
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
            <img src={require("../images/1.png")} />
          </div>
        </section>
        <Row
          style={{
            marginTop: 30,
          }}
        >
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            加入我们
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            团队成员
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About
