import React, { useState } from "react"
import Layout from "../../components/layout"

import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "./strategy.scss"

const services = [
  {
    title: "人寿保险",
    slug: "/insurance/details/life",
    content:
      "如果您缺少建房资金，得知预算后，温顶会为您挑选最合适的贷款产品。通常建筑贷款不会一次性付清，而是分期支付（通常4次）。每次发放贷款，都会重新审核贷款条件。",
    img: "",
  },
  {
    title: "参与性分红保险",
    slug: "/insurance/details/bonus",
    content: "主要针对仓库，办公室或空地等投资资金。",
    img: "",
  },
  {
    title: "贷款保险",
    slug: "/insurance/details/loan",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
  {
    title: "大病保险",
    slug: "/insurance/details/illness",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
  {
    title: "长期护理",
    slug: "/insurance/details/long-term",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
  {
    title: "财富传承",
    slug: "/insurance/details/wealth",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
  {
    title: "保险信托",
    slug: "/insurance/details/insurance-trust",
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
      <Modal size="l" show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="mt-5 strategy-services">
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
        <h4 className="mt-5">个人保险</h4>
        <Row>
          {services.map((item, index) => {
            return (
              <Col md="4" sm="12" key={index}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={require("../../images/1.png")} />
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

        <Row
          style={{
            marginTop: 30,
          }}
        >
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            住房贷款
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            申请贷款
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Strategy
