import React, { useState, useEffect } from "react"
import Layout from "../../../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
// import "./services.scss"
import { Link } from "gatsby"
const Contentful = require("contentful")
const Service = () => {
  const [post, setPost] = useState({})
  const id = "5s4aFEVMvMsa47t2LDDvfH"
  useEffect(() => {
    const client = Contentful.createClient({
      space: "xxnh1wfwedpb",
      accessToken: "2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E",
    })
    client.getEntry(id).then(res => {
      console.log(res)
      setPost({
        ...res.fields,
        date: new Date(res.sys.createdAt).toDateString(),
      })
      const htmlString = documentToHtmlString(res.fields.content)
      if (typeof document !== "undefined") {
        document.querySelector(".html-content").innerHTML = htmlString
      }
    })
  }, [])
  return (
    <Layout>
      <Container className="service-container">
        <h1>二 / 三级按揭抵押（ETO）</h1>
        <div className="html-content"></div>
        <h3>相关资讯</h3>
        <Row className="nav-links">
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            <Link to="/loan/services">
              <div className="content-container">
                <div className="image-container">
                  <img width="100%" src={require("../../../../images/1.jpg")} />
                </div>
                <div className="sub-title">住房贷款</div>
              </div>
            </Link>
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            <a href={post.url ? post.url : "#"}>
              <div className="content-container">
                <div className="image-container">
                  <img width="100%" src={require("../../../../images/2.jpg")} />
                </div>
                <div className="sub-title">推荐博客</div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Service
