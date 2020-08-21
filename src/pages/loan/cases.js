import React, { useState, useEffect } from "react"
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
import { Link } from "gatsby"

const Contentful = require("contentful")

const Cases = () => {
  const [cases, setCases] = useState([])

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
          setCases(res)
        }
        // log the title for all the entries that have it
        entries.items.forEach(function(entry) {
          if (entry.fields.productName) {
            console.log(entry.fields.productName)
          }
        })
      })
  }, [])

  return (
    <Layout>
      <Container className="cases-services">
      <section>
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
          {cases.map(e => (
            <Col md="4" sm="12" key={e.id}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.excerpt}</Card.Text>
                  <Link className="btn btn-primary" to={"/post?id=" + e.id}>
                    了解更多
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </section>
        <Row
          style={{
            marginTop: 30,
          }}
        >
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            <a href="http://sv.mikecrm.com/JcYy9jm" target="_blank">
            ◀ 申请贷款 
            </a>
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            <Link to="/loan/services">住房贷款▶</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Cases
