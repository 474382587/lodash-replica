import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
// import "./services.scss"
const Contentful = require("contentful")
const NewHome = () => {
  const [post, setPost] = useState({})
  const id = "6GLhHwqikqHcJuC7CrFCib"
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
      <Container className="service-container">
        <h1>住房按揭</h1>
        <div className="html-content"></div>
      </Container>
    </Layout>
  )
}

export default NewHome
