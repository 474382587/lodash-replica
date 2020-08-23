import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
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
import BotNav from "../../../components/botNav"

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
        content_type: "postEnglish",
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
          <h3 style={{ textAlign: "center" }}>
            温顶贷款每周更新成功案例，<br></br>
            您的需求与困惑，他们曾经也有。
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
                      Learn More
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
      <BotNav rlink="/loan/services" llink="http://sv.mikecrm.com/JcYy9jm" left="申请贷款" right="住房贷款" />
    </Layout>
  )
}

export default Cases
