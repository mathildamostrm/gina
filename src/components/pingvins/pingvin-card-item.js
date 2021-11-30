import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pingvin-card.css'

function PingvinCardsItem(props) {

  const listItems = props.text.map((item) =>
  <li>{item}</li>
  )

  return (
    <>
    <li className='cards-item'>
      {/* <Link className='cards-item-link' to={props.path}> */}
        <figure className='cards-item-pic-wrap' data-category={props.label}>
          <img src={props.src} alt='pingvin' className='cards-item-img' />
        </figure>
        <div className='cards-item-info'>
          <h5 className='cards-item-text'>{props.headline}</h5>
          <ul className='cards-item-list'>{listItems}</ul>
        </div>
      {/* </Link> */}
    </li>
    </>
  )
}

export default PingvinCardsItem