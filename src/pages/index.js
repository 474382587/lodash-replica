import React, { useState, useEffect } from "react"
import BotNav from "../components/botNav"
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
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import { Link } from "gatsby"

const Contentful = require("contentful")
const IndexPage = () => {
  let slidesToShow = 5

  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth
    console.log(windowWidth)
    if (windowWidth < 768) {
      slidesToShow = 1
    }
  }
  const [cases, setCases] = useState([])
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

    client
      .getEntries({
        content_type: "postChinese",
      })
      .then(function(entries) {
        console.dir(entries)
        let res = []
        if (entries.items.length > 0) {
          res = entries.items
            .filter(e => e.fields.tags.includes("home"))
            .map(e => ({
              ...e.fields,
              image: e.fields.image.fields.file.url,
              date: new Date(e.sys.createdAt).toDateString(),
              id: e.sys.id,
            }))
          setCases(res)
        }
        // log the title for all the entries that have it
        entries.items.forEach(function(entry) {
          if (entry.fields.productName) {
            console.log(entry.fields.productName)
          }
        })
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
                        <div
                          className="caps"
                          dangerouslySetInnerHTML={{
                            __html: documentToHtmlString(banner.content),
                          }}
                        ></div>
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
          <h3 style={{ marginTop: 50, fontSize: "3rem", textAlign: "center" }}>
            温顶为您提供
          </h3>
          <Row>
            <Col sm="12" md="4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={require("../images/loan.jpeg")} />
                <Card.Body>
                  <Card.Title>贷款按揭</Card.Title>
                  <Card.Text>
                    温顶贷款拥有加拿大华人第一贷款团队，提供各大银行和贷款机构的最优利率和最佳贷款方案，为您“贷”来希望。
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
                    温顶金融为客户提供一站式财税咨询和规划的金融服务，为您的资产保航护驾。
                    <br></br>
                    <br></br>
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
                    温顶旗下专业且热忱的保险服务团队，为您提供从个人到企业、从人身到财产等多方位的无忧保险方案。
                  </Card.Text>
                  <Link className="btn btn-primary" to="/insurance/corporate">
                    了解更多
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="margin100">
            <Col md="6" sm="12">
              <h2 className="big-title">选择温顶</h2>
            </Col>
            <Col md="6" sm="12">
              <p className="paragraph">
                温顶集团旗下的贷款按揭、财税规划和保险服务为贷款及投资人提供专业、快捷和真诚的金融服务，为您的购房安居带来希望，为您的资产保驾护航。
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
            对温顶而言，最不缺的是荣誉，最缺的也是荣誉。已经硕果累累的我们，希望在未来通过努力，服务好客户，斩获更多荣誉。
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
                <img width="113px" src={require("../images/2020.png")} />
              </div>
              <div className="image-container">
                <img width="113px" src={require("../images/2019.png")} />
              </div>
              <div className="image-container">
                <img width="113px" src={require("../images/2018.jpg")} />
              </div>
              <div className="image-container">
                <img
                  width="113px"
                  src={require("../images/2018 - broker of the year.png")}
                />
              </div>
              <div className="image-container">
                <img width="113px" src={require("../images/2017.jpg")} />
              </div>
              <div className="image-container">
                <img width="113px" src={require("../images/hallOfFame.jpg")} />
              </div>
              <div className="image-container">
                <img width="113px" src={require("../images/MDRT.jpg")} />
              </div>
              <div className="image-container">
                <img width="113px" src={require("../images/EPC.jpg")} />
              </div>
              <div className="image-container">
                <img width="113px" src={require("../images/MDRT.jpg")} />
              </div>
            </AndtCarousel>
          </div>
        </Container>

        <Container className="margin-top80">
          <h3 style={{ marginTop: 50, fontSize: "3rem", textAlign: "center" }}>
            温顶资讯
          </h3>
          <Row>
            {cases.map((post, index) => {
              if (index > 1) {
                return ""
              } else {
                return (
                  <Col md="6" sm="12" key={index}>
                    <Link to={"/post/?id=" + post.id}>
                      <Card style={{ width: "100%" }}>
                        <Card.Img variant="top" src={post.image} />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>{post.excerpt}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                )
              }
            })}
          </Row>
        </Container>
        <BotNav llink="/about" rlink="/join" left="关于温顶" right="加入我们" />
      </div>
    </Layout>
  )
}

export default IndexPage
