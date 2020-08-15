import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"

import "./index.scss"

const Contentful = require("contentful")
const News = ({ navigate }) => {
  console.log(navigate)
  const [pageTitle, setPageTitle] = useState("新闻资讯")
  const [posts, setPosts] = useState([])
  const [displayPosts, setDisplayPosts] = useState([])

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
          res = entries.items.map(e => ({
            ...e.fields,
            image: e.fields.image.fields.file.url,
            date: new Date(e.sys.createdAt).toDateString(),
            id: e.sys.id,
          }))
          console.log(res)
          setPosts(res)
          setDisplayPosts(res)
        }
      })
  }, [])

  const clearActiveFilter = () => {
    document.querySelector(".active").classList.remove("active")
  }
  const handleRowClick = postId => {
    console.log("clicked!")
    navigate("/post/?id=" + postId)
  }
  const applyFilter = tag => {
    if (!!tag) {
      const res = posts.filter(post => post.tags.includes(tag))
      setDisplayPosts(res)
    } else {
      setDisplayPosts(posts)
    }
    console.log("Applied!")
  }

  return (
    <Layout>
      <Container className="news">
        <div className="title">
          <h1>{pageTitle}</h1>
          <h3>Full-screen intro with background image and video popup.</h3>
        </div>

        <div className="filter">
          <Button
            className="active"
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")
              applyFilter()
            }}
          >
            All
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")
              applyFilter("news")
            }}
          >
            最新资讯
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")
              applyFilter("featured")
            }}
          >
            精彩篇章
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")

              applyFilter("seminar")
            }}
          >
            讲座教程
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")

              applyFilter("faq")
            }}
          >
            咨询问答
          </Button>
        </div>

        {displayPosts.map((post, index) => (
          <Row
            key={index}
            onClick={() => {
              handleRowClick(post.id)
            }}
          >
            <Col sm="12" md="4">
              <img width="100%" src={post.image} />
            </Col>
            <Col sm="12" md="8" className="right">
              <div className="title-section">
                <h6>{post.title}</h6>
                <p className="excerpt">{post.excerpt}</p>
              </div>
              <div className="date-author">
                <p>{post.author}</p>
                <p>{post.date}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </Layout>
  )
}

export default News
