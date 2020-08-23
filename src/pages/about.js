import React, { useState } from "react"
import Layout from "../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import "./about.scss"
import { Link } from "gatsby"
import BotNav from "../components/botNav"
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
        <section>
          <div className="title">
            <h1>关于温顶</h1>
            <h3>
              温顶集团是一个集住房贷款、商业贷款、财税规划、保险方案和资产配置为一体的中心平台。这里集合大量的地产和财税等各方面的专业人士，为您的生活和事业带来希望，为您的资产保航护驾。
            </h3>
          </div>
          <Row>
            <Col md="6" sm="12" className="center-align">
              <h4>我们的愿景</h4>
              <p>为您、您的家庭和事业带来希望、成长和保障。</p>
            </Col>
            <Col md="6" sm="12" className="center-align">
              <h4>我们的使命</h4>
              <p>
                通过全国顶尖的专业贷款和财税规划等多方位服务项目，用最真诚的态度，满足客户安居乐业和财富规划等需求。
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="center-align">
              <img src={require("../images/1.png")} />
            </Col>
          </Row>
        </section>
        <section>
          <h2>温顶荣誉</h2>
          <p>
            对温顶而言，最不缺的是荣誉，最缺的是更多的荣誉。我们的收获是您对我们的认可，希望我们继续用专业和实例，证明您选择温顶，是最对的选择。
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
          <h2>温顶资讯</h2>
          <p>最真诚的面貌，最专业的服务</p>
          <div className="image-container">
            <Link to="/news">
              <img src={require("../images/媒体报道图.jpg")} />
            </Link>
          </div>
        </section>
      </Container>
      <BotNav llink="/join" rlink="/team" left="加入我们" right="团队成员" />
    </Layout>
  )
}

export default About
