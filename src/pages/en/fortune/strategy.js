import React, { useState } from "react"
import Layout from "../../../components/layout"

import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "./strategy.scss"

const services = [
  {
    title: "家庭全面规划",
    slug: "/fortune/details/plan",
    content:
      "如果您缺少建房资金，得知预算后，温顶会为您挑选最合适的贷款产品。通常建筑贷款不会一次性付清，而是分期支付（通常4次）。每次发放贷款，都会重新审核贷款条件。",
    img: "",
  },
  {
    title: "政府福利",
    slug: "/fortune/details/welfare",
    content: "主要针对仓库，办公室或空地等投资资金。",
    img: "",
  },
  {
    title: "退休策划",
    slug: "/fortune/details/retirement",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
  {
    title: "遗产传承",
    slug: "/fortune/details/legacy",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
  {
    title: "风险管理",
    slug: "/fortune/details/risk",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
]

const Strategy = () => {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState(false)
  const [content, setContent] = useState(false)
  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = (title, content) => {
    setShowModal(true)
    setTitle(title)
    setContent(content)
  }

  let slidesToShow = 4
  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth
    console.log(windowWidth)
    if (windowWidth < 768) {
      slidesToShow = 1
    }
  }
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      {/* Modal */}
      <div className="floater">
        <p
          style={{
            marginBottom: 0,
          }}
        >
          <b>邮件:</b> <a href="mailto:info@guaranti.ca">info@guaranti.ca</a>
          <br></br>
          <b>电话:</b> <a href="tel:+1 (778) 297 7450">+1 (778) 297 7450</a>{" "}
          <br></br>
          <div className="img-wrapper">
            <img width="120" src={require("../../../images/baoxian-caishui.jpg")} />
          </div>
        </p>
      </div>
      <Container className="mt-5 strategy-services">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          温顶金融，为您融入梦想
        </h1>
        <h3>
          Shape your future web project with sharp design and refine coded
          functions.
        </h3>
        <h4 className="mt-5">理财策略</h4>
        <Row>
          {services.map((item, index) => {
            return (
              <Col md="4" sm="12" key={index}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={require("../../../images/1.png")} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Link className="btn btn-primary" to={item.slug}>
                      了解更多
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col
            style={{
              textAlign: "center",
            }}
          >
            <a download>
              <img width="100%" src={require("../../../images/1.png")} />
            </a>
          </Col>
        </Row>
        <h4 className="mt-5">我们的合作机构</h4>
        <h3>
          +++Click any image to change it.Click blue "Gear" icon in the top
          right corner to change background, amount slides and amount visible
          items at once.+++
        </h3>
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
              <img width="100%" src={require("../../../images/partners/1.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/2.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/3.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/4.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/5.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/6.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/7.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/8.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/9.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/10.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../../images/partners/11.png")} />
            </div>
          </AndtCarousel>
        </div>

        <Row
          style={{
            marginTop: 30,
          }}
        >
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            <Link to="/fortune/plan">◀ 投资方案</Link>
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            <Link to="/fortune/corporate">企业规划 ▶</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Strategy