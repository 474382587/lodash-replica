import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "./join.scss"
import BotNav from "../../components/botNav"

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
        <section>
          <div className="title">
            <h1>Join Us</h1>
          </div>
          <div>
            <img width="100%" src={require("../../images/1.jpg")} />
          </div>
          <Row>
            {jobs.map(job => {
              return (
                <Col md="6" sm="12" className="job-card">
                  <div className="left">
                    <h4>{job.title}</h4>
                    {/**<p>{job.intro ? job.intro : ""}</p> */}
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
              Guaranti Group is a newly revamped one-stop financial service
              platform for mortgage and loans, wealth management and investment,
              insurance and tax planning. While doing our best to serve every
              dear customer, Guaranti welcomes new graduates, young and
              experienced professionals to join us and bring our belief and
              service to a bigger community.{" "}
            </p>
          </div>
        </section>
      </Container>
      <BotNav llink="/about" rlink="/team" left="公司介绍" right="团队成员" />
    </Layout>
  )
}

export default Join
