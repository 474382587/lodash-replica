import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "./join.scss"
import BotNav from "../components/botNav"

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
                    {/**<p>{job.intro ? job.intro : ""}</p> */}
                  </div>
                  <div className="right">
                    <a target="_blank" download href={job.pdf}>
                      现在申请
                    </a>
                  </div>
                </Col>
              )
            })}
          </Row>

          <div className="more">
            <p>
              温顶集团是一个全新的集合贷款、理财、投资、保险和税务等一站式金融咨询和财税规划服务平台，在服务好每一位客户的同时，温顶欢迎学习热情高及适应能力强的年轻专业人士，或是拥有资深经验的职场老兵一起加入，将温顶的品牌理念和专业服务送达至更多人的心中。
            </p>
          </div>
        </section>
      </Container>
      <BotNav llink="/about" rlink="/team" left="公司介绍" right="团队成员" />
    </Layout>
  )
}

export default Join
