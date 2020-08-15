import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import "./post.scss"
const Contentful = require("contentful")

const Post = ({ location }) => {
  console.log(location)

  const id = location.search.split("=")[1]

  const [post, setPost] = useState({})

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
        console.log(123)
        document.querySelector(".html-content").innerHTML = htmlString
      }
      console.log(htmlString)
    })
  }, [])

  return (
    <Layout>
      {post.title ? (
        <Container className="post-item">
          <div className="title-section">
            <h1>{post.title}</h1>
            <p>
              <b>{post.author}</b> - {post.date}
            </p>
          </div>
          <div className="html-content"></div>
        </Container>
      ) : (
        <div></div>
      )}
    </Layout>
  )
}

export default Post
