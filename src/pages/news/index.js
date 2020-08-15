import React, { useState } from "react"
import Layout from "../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"

import "./index.scss"

const testPosts = [
  {
    title: "THis idas",
    author: "Joseph Jin",
    date: "2020-08-09",
    excerpt:
      "博客内容第一段Loving the additions to the new version of Mobirise web dev app. It's a great, cleanly designed, user-friendly, not-bloated design program. So easy and a pleasure to use",
    thumbnail: require("../../images/1.png"),
    tags: ["news"],
  },
  {
    title: "THis idas",
    author: "Joseph Jin",
    date: "2020-08-09",
    excerpt:
      "博客内容第一段Loving the additions to the new version of Mobirise web dev app. It's a great, cleanly designed, user-friendly, not-bloated design program. So easy and a pleasure to use",
    thumbnail: require("../../images/2.png"),
    tags: ["featured"],
  },
  {
    title: "THis idas",
    author: "Joseph Jin",
    date: "2020-08-09",
    excerpt:
      "博客内容第一段Loving the additions to the new version of Mobirise web dev app. It's a great, cleanly designed, user-friendly, not-bloated design program. So easy and a pleasure to use",
    thumbnail: require("../../images/3.png"),
    tags: ["seminar"],
  },
  {
    title: "THis idas",
    author: "Joseph Jin",
    date: "2020-08-09",
    excerpt:
      "博客内容第一段Loving the additions to the new version of Mobirise web dev app. It's a great, cleanly designed, user-friendly, not-bloated design program. So easy and a pleasure to use",
    thumbnail: require("../../images/2.png"),
    tags: ["faq"],
  },
  {
    title: "THis idas",
    author: "Joseph Jin",
    date: "2020-08-09",
    excerpt:
      "博客内容第一段Loving the additions to the new version of Mobirise web dev app. It's a great, cleanly designed, user-friendly, not-bloated design program. So easy and a pleasure to use",
    thumbnail: require("../../images/3.png"),
    tags: ["news"],
  },
]

const News = () => {
  let prev = null
  const [pageTitle, setPageTitle] = useState("新闻资讯")
  const [posts, setPosts] = useState(testPosts)
  const [displayPosts, setDisplayPosts] = useState(posts)

  const clearActiveFilter = () => {
    document.querySelector(".active").classList.remove("active")
  }
  const handleRowClick = postId => {
    console.log("clicked!")
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
              handleRowClick()
            }}
          >
            <Col sm="12" md="4">
              <img width="100%" src={post.thumbnail} />
            </Col>
            <Col sm="12" md="8" className="right">
              <p className="excerpt">{post.excerpt}</p>
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
