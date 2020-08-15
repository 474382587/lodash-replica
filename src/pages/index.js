import React, { useState, useEffect } from "react"

import {
  Row,
  Col,
  Container,
  ListGroup,
  Card,
  Button,
  Carousel,
} from "react-bootstrap"

import { Carousel as AndtCarousel } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import { Link } from "gatsby"

const Contentful = require("contentful")
const IndexPage = () => {
  let slidesToShow = 4

  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth
    console.log(windowWidth)
    if (windowWidth < 768) {
      slidesToShow = 1
    }
  }

  const [banners, setBanners] = useState([])
  const client = Contentful.createClient({
    space: "xxnh1wfwedpb",
    accessToken: "2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E",
  })
  useEffect(() => {
    client
      .getEntries({
        content_type: "homePageBannersChinese",
      })
      .then(function(entries) {
        // log the title for all the entries that have it
        if (entries.items.length > 0) {
          const res = entries.items.map(e => {
            return e.fields
          })
          setBanners(res)
          console.log("hahahaha")
          console.log(res)
        }
      })
  }, [])
  console.log(123)
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <div className="home-page">
        {/*<SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />*/}

        <div style={{ position: "relative" }}>
          <Carousel interval={3000}>
            {banners.length > 0
              ? banners.map((banner, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={banner.image.fields.file.url}
                        alt={banner.image.fields.title}
                      />
                      <Carousel.Caption>
                        {/*<h3>文字范例</h3>*/}
                        <p
                          style={{
                            textAlign: "right",
                          }}
                        >
                          <a href={banner.url} target="_blank">
                            了解更多
                          </a>
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })
              : ""}
            {/*
                <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/1.png")}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/3.png")}
                alt="Third slide"
              />
            </Carousel.Item>
            
            */}
          </Carousel>
        </div>

        <Container className="margin-top80">
          <Row>
            <Col sm="12" md="4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={require("../images/loan.jpeg")} />
                <Card.Body>
                  <Card.Title>贷款按揭</Card.Title>
                  <Card.Text>
                    温顶贷款拥有加拿大华人第一贷款团队，为客户提供各大银行最优利率、专业团队一站式服务。
                  </Card.Text>
                  <Link className="btn btn-primary" to="/loan/services">
                    了解更多
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" md="4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={require("../images/plan.jpeg")} />
                <Card.Body>
                  <Card.Title>财税规划</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link className="btn btn-primary" to="/fortune/corporate">
                    了解更多
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" md="4">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/insurance.jpeg")}
                />
                <Card.Body>
                  <Card.Title>财产保险</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link className="btn btn-primary" to="/insurance/corporate">
                    了解更多
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="margin-top80">
            <Col md="6" sm="12">
              <h2 className="big-title">选择温顶</h2>
            </Col>
            <Col md="6" sm="12">
              <p className="paragraph">
                温顶贷款和财税咨询规划公司为贷款人和投资人提供专业、快捷和真诚的金融服务，为客户的购房安居带来希望，为客户的资产保驾护航。
              </p>
            </Col>
          </Row>

          <h3 style={{ marginTop: 50, fontSize: "3rem", textAlign: "center" }}>
            温顶荣誉
          </h3>
          <p
            style={{ color: "#777", textAlign: "center" }}
            className="paragraph"
          >
            温顶集团旗下的贷款按揭与财税规划团队，屡获殊荣。温顶贷款连续多年（自2018年）荣登全加拿大华人贷款经纪第一名，而理财规划也是收获颇丰，联合创始人柯健莹连续
            9 年进入全球寿险精英百万圆桌会议（MDRT），也是大温最年轻的 MDRT-TOT
            获得者。
          </p>

          <div className="ant-carousel">
            <AndtCarousel
              autoplay={true}
              slidesToShow={slidesToShow}
              autoplaySpeed={3000}
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
        </Container>

        <Container className="margin-top80">
          <Row>
            <Col md="6" sm="12">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={require("../images/loan.jpeg")} />
                <Card.Body>
                  <Card.Title>贷款按揭</Card.Title>
                  <Card.Text>
                    温顶贷款拥有加拿大华人第一贷款团队，为客户提供各大银行最优利率、专业团队一站式服务。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" sm="12">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={require("../images/loan.jpeg")} />
                <Card.Body>
                  <Card.Title>贷款按揭</Card.Title>
                  <Card.Text>
                    温顶贷款拥有加拿大华人第一贷款团队，为客户提供各大银行最优利率、专业团队一站式服务。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 30,
            }}
          >
            <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
              <Link to="/about">◀ 关于温顶</Link>
            </Col>
            <Col
              md="6"
              sm="6"
              xs="6"
              style={{ textAlign: "right", fontSize: 32 }}
            >
              <Link to="/join">加入我们 ▶</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
