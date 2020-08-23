import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"

import "./index.scss"

const Contentful = require("contentful")
const News = ({ navigate }) => {
  console.log(navigate)
  const [pageTitle, setPageTitle] = useState("温顶资讯")
  const [posts, setPosts] = useState([])
  const [displayPosts, setDisplayPosts] = useState([])

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
          res = entries.items.map(e => ({
            ...e.fields,
            image: e.fields.image.fields.file.url,
            // date: new Date(e.sys.createdAt).toDateString(),
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

  const [showModal, setShowModal] = useState(false)
  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }
  return (
    <Layout>
      <Modal show={showModal} onHide={handleClose} centered size="xs">
        <Modal.Header closeButton>
          <Modal.Title>微信二维码</Modal.Title>
        </Modal.Header>
        <Modal.Body className="center-align">
          <img width="200" src={require("../../../images/qrcode.jpg")} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="news">
        <div className="title">
          <h1>{pageTitle}</h1>
          <h3>真诚交流，专业取胜</h3>
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
              applyFilter("residential")
            }}
          >
            Residential mortgages
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")
              applyFilter("commercial")
            }}
          >
            Commercial mortgages
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")

              applyFilter("financial")
            }}
          >
            Financial planning
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")

              applyFilter("insurance")
            }}
          >
            Insurance strategies
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")

              applyFilter("insights")
            }}
          >
            Guaranti insights
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              clearActiveFilter()
              e.target.classList.add("active")

              applyFilter("culture")
            }}
          >
            Cultures & Communities
          </Button>
        </div>

        <Row>
          <Col md="3" sm="12">
            <div className="subscribe-box">
              <div>
                <h3>
                  <a href="http://sv.mikecrm.com/LJVlNbV" target="_blank">
                    即刻订阅
                  </a>
                </h3>
                <p>获得专属你的VIP资讯和优惠</p>
              </div>
              <div class="social-media social-media-post">
                <a
                  href="https://www.linkedin.com/company/guaranti-mortgages/?viewAsMember=true"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="22px"
                    width="22px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/GuarantiGroup/?eid=ARBWHHonkTPnUxYBTqLi-qA3C2Kl8mVj1OmohJf4IH-K6OWqyokoJeGuwIdrZbesUShVbKjgEQel7Kvd"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    height="22px"
                    width="22px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  onClick={e => {
                    e.preventDefault()
                    handleOpen()
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="22px"
                    width="22px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/guarantigroup/"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="22px"
                    width="22px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Col>
          <Col md="9" sm="12">
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
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default News
