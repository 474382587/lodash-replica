import React, { Fragment } from "react"
import Layout from "../../components/layout"
import { Row, Col, Button, Container } from "react-bootstrap"
import { Link } from "gatsby"
import Navbar from "../../components/navBar.js"

import "./asset.scss"
import BotNav from "../../components/botNav"
const Asset = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <div className="parallax-container">
        <div className="parallax-image"></div>
        <div className="content-container">
          <Row noGutters>
            <Col md="8" sm="12" className="left-side">
              <div>
                <h1> 财产保险</h1>
                {/**<h4>Beautiful mobile websites</h4> */}
                <p style={{ fontSize: 20 }}>
                  温顶通过与专业热忱的一般险经纪团队，为您提供包括包括车险、房屋险、旅游险和商业险等在内的多种财产保险类别。
                </p>
                <p>
                  <Button>
                    <a href="tel:+1(778)2977450" style={{ color: "#fff" }}>
                      联系我们
                    </a>
                  </Button>
                </p>
              </div>
            </Col>
            <Col md="4" sm="0"></Col>
          </Row>
        </div>
      </div>
      <Container className="asset-container">
        <p>
          财产保险中的房屋保险，是目前温顶客户咨询最多的一种类别。在加拿大，房屋保险的种类分得特别细致。与华人及移民关系较大的，主要有以下几种：
        </p>
        <ul style={{ fontSize: 20 }}>
          <li>自住房保险（Homeowners Insurance）</li>
          <li>租客保险</li>
          <li>房东保险</li>
          <li>公寓或联排别墅等共管物业的保险</li>
        </ul>
        <p>
          房屋保险范围分为基本保险和附加险，有些保险类别不在基本保险中，需要酌情额外购买，并且有些可能十分重要。当然，房屋保险也有很多不予理赔的项目：如空置物业超过30天；或是住房用作商业用途等。
        </p>
      </Container>
      <BotNav
        llink="/insurance/strategy"
        rlink="/insurance/corporate"
        left="个人保险"
        right="企业保险"
      />
    </Layout>
  )
}

export default Asset
