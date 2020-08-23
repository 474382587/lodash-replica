import React, { useState } from "react"
import Layout from "../../../components/layout"

import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"

import "./plan.scss"
import { Link } from "gatsby"
import BotNav from "../../../components/botNav"

const services = [
  {
    title: "注册免税账户 TFSA",
    slug: "/fortune/details/tfsa",
    content:
      "如果您缺少建房资金，得知预算后，温顶会为您挑选最合适的贷款产品。通常建筑贷款不会一次性付清，而是分期支付（通常4次）。每次发放贷款，都会重新审核贷款条件。",
    image: "TFSA.jpg",
  },
  {
    title: "注册退休储蓄计划 RRSP",
    slug: "/fortune/details/rrsp",
    content: "主要针对仓库，办公室或空地等投资资金。",
    image: "RESP.png",
  },
  {
    title: "教育基金 RESP",
    slug: "/fortune/details/resp",
    content: "如果您是中小企业业主，需要资金运营",
    image: "RRSP.jpg",
  },
  {
    title: "固定收益",
    slug: "/fortune/details/fixed",
    content: "如果您是中小企业业主，需要资金运营",
    image: "固定收益.png",
  },
  {
    title: "保本基金 / 互惠基金",
    slug: "/fortune/details/mutual",
    content: "如果您是中小企业业主，需要资金运营",
    image: "保本基金.jpg",
  },
  {
    title: "房地产基金",
    slug: "/fortune/details/real-estate",
    content: "如果您是中小企业业主，需要资金运营",
    image: "房地产基金.jpg",
  },
  {
    title: "贷款投资",
    slug: "/fortune/details/loan",
    content: "如果您是中小企业业主，需要资金运营",
    image: "222.png",
  },
]

const Plan = () => {
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
    <Layout>
      {/* Modal */}
      <div className="floater">
        <h3>联系我们</h3>
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
            <img
              width="120"
              src={require("../../../images/baoxian-caishui.jpg")}
            />
          </div>
        </p>
      </div>
      <Container className="mt-5 plan-services">
        <section>
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
        </section>
        <section>
          <h4 className="mt-5">投资方案</h4>
          <Row>
            {services.map((item, index) => {
              return (
                <Col md="4" sm="12" key={index}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={require("../../../images/" + item.image)}
                    />
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
        </section>
        <section>
          <Row>
            <Col
              style={{
                textAlign: "center",
              }}
            >
              <a download>
                <img
                  width="100%"
                  src={require("../../../images/温顶金融6步骤_英文版.png")}
                />
              </a>
            </Col>
          </Row>
        </section>
        <section>
          <h4 className="mt-5">合作机构</h4>
          <h3>
          温顶贷款和多家大小银行和金融机构保持长期合作关系，能够为客户提供数百个金融产品的选择。 作为专业且富有丰富经验的贷款经纪公司，我们会根据客户的不同情况，在众多产品中为客户选择最适合他们的贷款方案。丰富的贷款方案满足您的独特需求。

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
                <img
                  width="100%"
                  src={require("../../../images/partners/1.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/2.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/3.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/4.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/5.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/6.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/7.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/8.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/9.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/10.png")}
                />
              </div>
              <div className="image-container">
                <img
                  width="100%"
                  src={require("../../../images/partners/11.png")}
                />
              </div>
            </AndtCarousel>
          </div>
        </section>
      </Container>
      <BotNav llink="/fortune/strategy" rlink="/fortune/corporate" left="理财策略" right="企业规划" />
    </Layout>
  )
}

export default Plan
