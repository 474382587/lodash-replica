import React, { useState } from "react"
import Layout from "../../components/layout"
import "./business.scss"

import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"

import "./services.scss"
import { Link } from "gatsby"

const services = [
  {
    title: "企业运营贷款",
    slug: "/loan/details/operation",
    content:
      "如果您缺少建房资金，得知预算后，温顶会为您挑选最合适的贷款产品。通常建筑贷款不会一次性付清，而是分期支付（通常4次）。每次发放贷款，都会重新审核贷款条件。",
    img: "",
  },
  {
    title: "建筑贷款",
    slug: "/loan/details/construction",
    content: "主要针对仓库，办公室或空地等投资资金。",
    img: "",
  },
  {
    title: "办公室场地贷款",
    slug: "/loan/details/location",
    content: "如果您是中小企业业主，需要资金运营",
    img: "",
  },
]

const Business = () => {
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

  let slidesToShow = 5
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
            <img width="120" src={require("../../images/daikuan.jpg")} />
          </div>
        </p>
      </div>
      <Container className="mt-5 business-services">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          温顶贷款-为您贷来希望
        </h1>
        <h3>
          温顶贷款拥有一站式咨询和申请服务，为您选择最符合客户财务现状的贷款方案。我们的全国顶尖贷款团队为您提供包括但不限于
          —— 住房贷款、建筑贷款、商业贷款及投资理财。<br></br>
          在加拿大，通常有两种渠道进行贷款申请：直接从贷款机构（如银行）直接贷款，或寻求持牌贷款经纪公司的帮助（如温顶贷款）。温顶贷款代表客户
          ——
          而非代表贷款机构方，为您锁定最佳利率、搜寻当下市场中最好的贷款产品，制定最切合您财务状况的贷款方案。丰富的贷款方案满足您的独特需求。
        </h3>
        <h4 className="mt-5">商业贷款</h4>
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

        <h4 className="mt-5">代理VS银行</h4>
        <Row>
          <Col>
            <video width="100%" controls name="media">
              <source
                src="https://elvishui.com/wp-content/uploads/2018/01/Broker-VS-Bank-final%EF%BC%89.mp4?_=1&loop=0&autoplay=0"
                type="video/mp4"
              />
            </video>
          </Col>
        </Row>

        <h4 className="mt-5">合作机构</h4>
        <h3>
          温顶贷款和多家大小银行和金融机构保持长期合作关系，能够为客户提供数百个金融产品的选择。
          作为专业且富有丰富经验的贷款经纪公司，我们会根据客户的不同情况，在众多产品中为客户选择最适合他们的贷款方案。丰富的贷款方案满足您的独特需求。
        </h3>
        <Row>
          <Col md="4" sm="12">
            <h5>甲级银行/甲级金融机构</h5>
            <p>适合一般新移民，或海外居民，或是信用好收入高的客户</p>
          </Col>
          <Col md="4" sm="12">
            <h5>乙级银行/乙级金融机构</h5>
            <p>适合信用分数比较低，或自雇人士，或是以现金收入为主的客户</p>
          </Col>
          <Col md="4" sm="12">
            <h5>私人贷款机构</h5>
            <p>
              适合二次贷款，或三次贷款，或无收入证明，或需要特快批下贷款的客户
            </p>
          </Col>
        </Row>

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
              <img width="100%" src={require("../../images/partners/1.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/partners/2.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/partners/3.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/partners/4.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/partners/5.png")} />
            </div>
            <div className="image-container">
              <img width="100%" src={require("../../images/partners/6.png")} />
            </div>
          </AndtCarousel>
        </div>

        <Row
          style={{
            marginTop: 30,
          }}
        >
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            <Link to="/loan/services">◀ 住房贷款</Link>
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            <a href="http://sv.mikecrm.com/JcYy9jm" target="_blank">
              申请贷款 ▶
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Business
