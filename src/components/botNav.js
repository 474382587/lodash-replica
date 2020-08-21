import React, { Fragment, useState, useEffect } from "react"
import { Link } from "gatsby"

const BotNav = ({ left, right, llink, rlink }) => {
  return (
    <div className="bot-nav">
      <div className="bot-nav-left">
        <Link to={llink}>
          <span>◀</span>
          <span className="left-nav">{left}</span>
        </Link>
      </div>
      <div className="bot-nav-right">
        <Link to={rlink}>
          <span className="right-nav">{right}</span>
          <span>▶</span>
        </Link>
      </div>
    </div>
  )
}

export default BotNav
