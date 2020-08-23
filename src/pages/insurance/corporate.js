import React, { useState } from "react"
import Layout from "../../components/layout"

import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"

import "./corporate.scss"
import { Link } from "gatsby"
import BotNav from "../../components/botNav"

const services = [
  {
    title: "团体保险",
    slug: "/insurance/details/group",
    content:
      "如果您缺少建房资金，得知预算后，温顶会为您挑选最合适的贷款产品。通常建筑贷款不会一次性付清，而是分期支付（通常4次）。每次发放贷款，都会重新审核贷款条件。",
    image: "团体保险.jpg",
  },
  {
    title: "企业家医疗信托",
    slug: "/insurance/details/trust",
    content: "主要针对仓库，办公室或空地等投资资金。",
    image: "企业家医疗信托.jpeg",
  },
  {
    title: "企业关键人保险",
    slug: "/insurance/details/individual",
    content: "如果您是中小企业业主，需要资金运营",
    image: "企业关键人保险.jpg",
  },
  {
    title: "高管退休计划",
    slug: "/insurance/details/retirement",
    content: "如果您是中小企业业主，需要资金运营",
    image: "高管退休计划.jpg",
  },
]

const Corporate = () => {
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
              src={require("../../images/baoxian-caishui.jpg")}
            />
          </div>
        </p>
      </div>
      <Container className="mt-5 corporate-services">
        <section>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            温顶保险-为您保驾护航
          </h1>
          <h3>
            Shape your future web project with sharp design and refine coded
            functions.
          </h3>
          <section></section>
          <h4 className="mt-5">企业福利保障</h4>
          <Row>
            {services.map((item, index) => {
              return (
                <Col md="6" sm="12" key={index}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={require("../../images/" + item.image)}
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
        
      </Container>
      <BotNav llink="/insurance/strategy" rlink="/insurance/asset" left="个人保险" right="财产保险" />
    </Layout>
  )
}

export default Corporate
