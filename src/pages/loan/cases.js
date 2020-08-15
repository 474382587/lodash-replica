import React, { useState } from "react"
import Layout from "../../components/layout"
import {
  Row,
  Col,
  Container,
  ListGroup,
  Card,
  Button,
  Carousel,
} from "react-bootstrap"
import "./cases.scss"

const Contentful = require("contentful")
const arr = [
  {
    title: "案例1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat fringilla porttitor pretium",
  },
  {
    title: "案例2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat fringilla porttitor pretium",
  },
  {
    title: "案例3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat fringilla porttitor pretium",
  },
]

const Cases = () => {
  const [banners, setBanners] = useState([])

  const client = Contentful.createClient({
    space: "1u2l88u90bu7",
    accessToken: "Hoh3zn4V3KzIt9pD8qf7bHA1mqqVr6Tzq036L9UsdL0",
  })

  client
    .getEntries({
      content_type: "homePageBanners",
    })
    .then(function(entries) {
      // log the title for all the entries that have it
      entries.items.forEach(function(entry) {
        if (entry.fields.productName) {
          console.log(entry.fields.productName)
        }
      })
    })

  return (
    <Layout>
      <Container className="cases-services">
        <h1 className="mt-5" style={{ textAlign: "center" }}>
          成功案例
        </h1>
        <h3>
          文案 helps you cut down development time by providing you with a
          flexible website editor with a drag and drop interface. Mobirise
          Website Builder creates responsive, retina and mobile friendly
          websites in a few clicks.
        </h3>
        <Row className="mt-5">
          {arr.map(e => (
            <Col md="4" sm="12">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={require("../../images/1.png")} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>
                    温顶贷款拥有加拿大华人第一贷款团队，为客户提供各大银行最优利率、专业团队一站式服务。
                  </Card.Text>
                  <Button variant="primary">更多</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default Cases
