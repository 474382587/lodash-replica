import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import "./team.scss"
const testMembers = [
  {
    image: require("../images/2.png"),
    name: "Joe Jin",
    intro:
      "是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT TOT），也是大温最年轻的女性百万圆桌会员。Carmen 持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470 《财税教室》节目主持人。",
  },
  {
    image: require("../images/2.png"),
    name: "Pho Hin",
    intro:
      "是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT TOT），也是大温最年轻的女性百万圆桌会员。Carmen 持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470 《财税教室》节目主持人。",
  },
  {
    image: require("../images/2.png"),
    name: "John Doe",
    intro:
      "是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT TOT），也是大温最年轻的女性百万圆桌会员。Carmen 持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470 《财税教室》节目主持人。",
  },
  {
    image: require("../images/2.png"),
    name: "Dol Sere",
    intro:
      "是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT TOT），也是大温最年轻的女性百万圆桌会员。Carmen 持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470 《财税教室》节目主持人。",
  },
  {
    image: require("../images/2.png"),
    name: "Phonex Dee",
    intro:
      "是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT TOT），也是大温最年轻的女性百万圆桌会员。Carmen 持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470 《财税教室》节目主持人。",
  },
  {
    image: require("../images/2.png"),
    name: "Bob Lee",
    intro:
      "是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT TOT），也是大温最年轻的女性百万圆桌会员。Carmen 持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470 《财税教室》节目主持人。",
  },
  {
    image: require("../images/2.png"),
    name: "Hell Lin",
    intro:
      "是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT TOT），也是大温最年轻的女性百万圆桌会员。Carmen 持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470 《财税教室》节目主持人。",
  },
]

const Team = () => {
  let slidesToShow = 5
  if (typeof window === `undefined`) {
    return <div></div>
  }
  const windowWidth = window.innerWidth
  console.log(windowWidth)
  if (windowWidth < 768) {
    slidesToShow = 1
  }

  const [members, setMembers] = useState([])
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
  useEffect(() => {
    setMembers(testMembers)
  }, [])

  return (
    <Layout>
      <Modal show={showModal} onHide={handleClose} centered size="lg">
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
      <Container className="team-services">
        <div className="title">
          <h1>我们的团队</h1>
          <h3>我们的团队副标题</h3>
        </div>
        <Row className="flexie">
          <Col md="5" sm="12" className="center-align">
            <img width="100%" src={require("../images/elvise-image-4.jpeg")} />
          </Col>
          <Col md="7" sm="12" className="left-align padding-left">
            <h4>
              <i>许家齐 | Elvis Hui 温顶金融创始人兼CEO</i>
            </h4>
            <p>
              许家齐（Elvis）移民至加拿大已经十多年，在温哥华定居后，2012
              年进入贷款行业。入行前并没有相关经验的他，凭借着踏实勤恳的干劲，从英属哥伦比亚大学（UBC）获得贷款经纪证书后，短短几年内，就在全加拿大超过万名的贷款经纪人中冲入前
              75 名。 Elvis
              始终坚持专业至上、实事求是的服务理念，这个准则赢得了客户一致好评。作为大温地区贷款经纪行业的翘楚，Elvis
              将继续凭借诚信和专业，继续带领团队为客户提供最好的贷款咨询和申请服务。
            </p>
            <p>
              连续两年全国华人贷款经纪中排名第一 <br />
              连续X年加拿大卑诗省排名第一
              <br />
              连续 X 年荣获加拿大贷款经纪前三（Top 3）
              <br /> 连续 4 年加拿大 TOP 75
              <br />
              贷款经纪 连续 2 年获得加拿大专业贷款经纪大奖“年度最佳贷款经纪”提名
              <br />
              2016 年以来贷款金额超过 10 亿加元，帮助超过数千名客户完成贷款审批
              <br />
              <a href="#">点击阅读更多</a>
            </p>
          </Col>
        </Row>
        <Row className="flexie">
          <Col md="7" sm="12" className="left-align padding-right">
            <h4>
              <i>柯健莹 | Carmen Ke，温顶金融创始人兼总裁</i>
            </h4>
            <p>
              “每当有人问我：如何定义在温顶金融的工作性质？我常常回答说，我是一名财税建筑师。与建筑设计师不同，我与客户沟通并了解他们的财务需求，再通过长年累积的专业财税规划知识和技能，帮助他们构筑未来的财税图景。我深知每个人在人生的不同阶段，财税需求各有不同，我时常对能够参与客户人生中的重大财务决定，感到至上的荣幸。现在我作为温顶金融的联合创始人兼总裁，我感到更多的责任，这份责任将敦促我更好地带领团队，更好服务每位尊敬的客户。”
            </p>
            <p>
              柯健莹（Carmen
              Ke）是温顶金融的首席顾问导师，连续九年闯入百万圆桌会员精英行列（MDRT
              TOT），也是大温最年轻的女性百万圆桌会员。Carmen
              持有多个金融牌照，目前名下管理资产过亿元。同时作为一名注册长者退休策划师的她，也是大温电台1320/1470
              《财税教室》节目主持人。
              <br />
              <a href="#">点击阅读更多</a>
            </p>
          </Col>
          <Col md="5" sm="12" className="center-align">
            <img width="100%" src={require("../images/camen.jpeg")} />
          </Col>
        </Row>

        <Row className="flexie">
          <Col md="5" sm="12" className="center-align">
            <img width="100%" src={require("../images/elvise-image-4.jpeg")} />
          </Col>
          <Col md="7" sm="12" className="left-align padding-left">
            <h4>
              <i>许家齐 | Elvis Hui 温顶金融创始人兼CEO</i>
            </h4>
            <p>
              许家齐（Elvis）移民至加拿大已经十多年，在温哥华定居后，2012
              年进入贷款行业。入行前并没有相关经验的他，凭借着踏实勤恳的干劲，从英属哥伦比亚大学（UBC）获得贷款经纪证书后，短短几年内，就在全加拿大超过万名的贷款经纪人中冲入前
              75 名。 Elvis
              始终坚持专业至上、实事求是的服务理念，这个准则赢得了客户一致好评。作为大温地区贷款经纪行业的翘楚，Elvis
              将继续凭借诚信和专业，继续带领团队为客户提供最好的贷款咨询和申请服务。
            </p>
            <p>
              连续两年全国华人贷款经纪中排名第一 <br />
              连续X年加拿大卑诗省排名第一
              <br />
              连续 X 年荣获加拿大贷款经纪前三（Top 3）
              <br /> 连续 4 年加拿大 TOP 75
              <br />
              贷款经纪 连续 2 年获得加拿大专业贷款经纪大奖“年度最佳贷款经纪”提名
              <br />
              2016 年以来贷款金额超过 10 亿加元，帮助超过数千名客户完成贷款审批
              <br />
              <a href="#">点击阅读更多</a>
            </p>
          </Col>
        </Row>

        <section>
          <h2>温顶团队成员</h2>
        </section>
        <Row>
          {members.map(member => {
            return (
              <Col
                md="4"
                sm="12"
                className="member"
                onClick={() => {
                  handleOpen(member.name, member.intro)
                }}
              >
                <div className="card-container">
                  <img width="100%" src={member.image} />
                  <div className="name">{member.name}</div>
                </div>
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
            公司介绍
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            加入我们
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Team
