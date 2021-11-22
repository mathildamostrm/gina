import React from 'react'
import { Link } from 'react-router-dom'
import './pingvin-card.css'

function PingvinCardsItem(props) {
  return (
    <>
    <li className='cards-item'>
      <Link className='cards-item-link' to={props.path}>
        <figure className='cards-item-pic-wrap' data-category={props.label}>
          <img src={props.src} alt='pingvin' className='cards-item-img' />
        </figure>
        <div className='cards-item-info'>
          <h5 className='cards-item-text'>{props.headline}</h5>
          <ul className='cards-item-list'>
            <li>{props.textOne}</li>
            <li>{props.textTwo}</li>
            <li>{props.textThree}</li>
            <li>{props.textFour}</li>
            <li>{props.textFive}</li>
            <li>{props.textSix}</li>
            <li>{props.textSeven}</li>
            <li>{props.textEight}</li>
            <li>{props.textNine}</li>
            <li>{props.textTen}</li>
          </ul>
        </div>
      </Link>
    </li>
    </>
  )
}

export default PingvinCardsItem