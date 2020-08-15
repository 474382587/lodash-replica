import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "./join.scss"

const Contentful = require("contentful")
const Join = () => {
  const client = Contentful.createClient({
    space: "xxnh1wfwedpb",
    accessToken: "2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E",
  })
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    client
      .getEntries({
        content_type: "jobs",
      })
      .then(function(entries) {
        console.dir(entries)
        let res = []
        if (entries.items.length > 0) {
          res = entries.items.map(e => ({
            ...e.fields,
            pdf: e.fields.pdf.fields.file.url,
            date: new Date(e.sys.createdAt).toDateString(),
            id: e.sys.id,
          }))
          console.log(res)
          setJobs(res)
        }
      })
  }, [])

  return (
    <Layout>
      <Container className="join-services">
        <div className="title">
          <h1>加入温顶</h1>
        </div>
        <div>
          <img width="100%" src={require("../images/1.jpg")} />
        </div>
        <Row>
          {jobs.map(job => {
            return (
              <Col md="6" sm="12" className="job-card">
                <div className="left">
                  <h4>{job.title}</h4>
                  <p>{job.intro ? job.intro : ""}</p>
                </div>
                <div className="right">
                  <a target="_blank" download href={job.pdf}>
                    Apply
                  </a>
                </div>
              </Col>
            )
          })}
        </Row>
        <div className="more">
          <p>
            更多职位! Mobirise helps you cut down development time by providing
            you with a flexible website editor with a drag and drop interface.
            Mobirise Website Builder creates responsive, retina and mobile
            friendly websites in a few clicks. Mobirise is one of the easiest
            website development tools available today. It also gives you the
            freedom to develop as many websites as you like given the fact that
            it is a desktop app.
          </p>
        </div>
        <Row
          style={{
            marginTop: 30,
          }}
        >
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            <Link to="/about"> ◀公司介绍 </Link>
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            <Link to="/team"> 团队成员 ▶</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Join
