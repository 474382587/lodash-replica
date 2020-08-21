import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"

import "./services.scss"
import { Link } from "gatsby"

const services = [
  {
    title: "购买新房",
    slug: "/loan/details/new-home",
    content:
      "不管您是首次购房族，还是有良好信用记录的有经验购房者，温顶贷款能够为您获得最佳贷款产品和利率。",
    img: "",
  },
  {
    title: "贷款续借",
    slug: "/loan/details/renewal",
    content:
      "加拿大接近 60% 以上的借款人在贷款合约到期时，会根据原本的贷款机构提供的利率和条件直接续约。温顶贷款凭借长期与各大银行的合作关系，可以为您争取到更优利率和条件。",
    img: "",
  },
  {
    title: "贷款重组",
    slug: "/loan/details/refine",
    content:
      "除了续借贷款之外，您还可以选择将贷款重组，即申请获得更优的贷款方案（利率或还款期等），用新贷款付清旧贷款。温顶建议您在贷款到期前 4 至 6 个月之前开始咨询其他更优利率贷款。",
    img: "",
  },
  {
    title: "二 / 三级抵押（ETO）",
    slug: "/loan/details/eto",
    content:
      "如有资金需求，您可以考虑进行二级抵押（或三级抵押），凭借现有住房资产 —— 无需担心需要付清现有的一级贷款，从贷款机构获得更多现金流，满足生活事业中的其他需求。很多人因为在一级贷款期信用提高，或是想把浮动转成固定，都会考虑进行二 / 三级贷款。",
    img: "",
  },
  {
    title: "特快私贷",
    slug: "/loan/details/quick-loan",
    content:
      "对于不少因为住房或是个人问题而无法从六大银行顺利获得贷款的客户，温顶还为您提供私人贷款机构的优质借贷方案。您无需准备繁琐的收入证明文件、资产报表和信用证明等文件。不论是购买新房、贷款重组、二级或三级贷款，还是楼花贷款， 私贷更加快捷和容易。",
    img: "",
  },
  {
    title: "楼花贷款",
    slug: "/loan/details/apt-loan",
    content:
      "温顶贷款团队常年服务于楼花贷款的客户。好消息是：我们总是可以为你获得更优利率，更快审批，更便捷的咨询和申请流程。如果您想了解这个项目，可以致电 604-722-3222 或电邮：info@guaranti.ca。",
    img: "",
  },
]
const Contentful = require("contentful")
const Services = () => {
  const [post, setPost] = useState([])
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

  const client = Contentful.createClient({
    space: "xxnh1wfwedpb",
    accessToken: "2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E",
  })
  useEffect(() => {
    client
      .getEntries({
        content_type: "postChinese",
      })
      .then(function(entries) {
        console.dir(entries)
        let res = []
        if (entries.items.length > 0) {
          res = entries.items
            .filter(e => e.fields.tags.includes("cases"))
            .map(e => ({
              ...e.fields,
              image: e.fields.image.fields.file.url,
              date: new Date(e.sys.createdAt).toDateString(),
              id: e.sys.id,
            }))
          console.log(res)
          if (res.length > 0) {
            setPost(res[0])
          }
        }
      })
  }, [])
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
            <img width="120" src={require("../../../images/daikuan.jpg")} />
          </div>
        </p>
      </div>
      <Container className="mt-5 loan-services">
        <section>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            温顶贷款-为你带来希望
          </h1>
          <h3>
            温顶贷款拥有一站式咨询和申请服务，为您选择最符合客户财务现状的贷款方案。我们的全国顶尖贷款团队为您提供包括但不限于
            —— 住房贷款、建筑贷款、商业贷款及投资理财。在创始人许家齐（Elvis
            Hui）的带领下，已经成为整个加拿大华人群体的贷款领军人物。凭借对房屋贷款多年的专业经验和认识，根据客户各种不同情况，温顶贷款可以高效迅速地从众多金融产品中为客户选择出最适合他们的贷款方案。
          </h3>
        </section>
        <section>
          <h4 className="mt-5">住房贷款</h4>
          <Row>
            {services.map((item, index) => {
              return (
                <Col md="4" sm="12" key={index}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={require("../../../images/1.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      {/**<Button
                      variant="primary"
                      onClick={() => {
                        handleOpen(item.title, item.content)
                      }}
                    ></Button> */}
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
        </section>

        <section>
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
            </AndtCarousel>
          </div>
        </section>

        <section>
          <h4 className="mt-5">成功案例</h4>
          {post ? (
            <Row className="flexie">
              <Col md="4" sm="12">
                <div className="image-container">
                  <img width="100%" src={post.image} />
                </div>
              </Col>
              <Col md="8" sm="12">
                {/** <h6>最新成功案例</h6> */}
                <h5>{post.title}</h5>
                <p>
                  {post.excerpt} -
                  <Link to={"/post/?id=" + post.id}>查看更多</Link>
                </p>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </section>

        <Row
          style={{
            marginTop: 30,
          }}
        >
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            <Link to="/loan/business">◀ 商业贷款</Link>
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

export default Services
