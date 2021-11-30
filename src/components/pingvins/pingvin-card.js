import React from 'react'
import PingvinCardsItem from './pingvin-card-item'
import './styles/pingvin-card.css'
import { Emperor, King , Gentoo, Rockhopper, Adelie, Chinstrap, Macaroni} from './pingvin-data'


function PingvinCards() {
    const EmperorText = [
        Emperor.textOne,
        Emperor.textTwo,
        Emperor.textThree,
        Emperor.textFour,
        Emperor.textFive,
        Emperor.textSix,
        Emperor.textSeven,
        Emperor.textEight,
        Emperor.textNine,
        Emperor.textTen
    ]

    const KingText = [
        King.textOne,
        King.textTwo,
        King.textThree,
        King.textFour,
        King.textFive,
        King.textSix,
        King.textSeven,
        King.textEight
    ]

    const GentooText = [
        Gentoo.textOne,
        Gentoo.textTwo,
        Gentoo.textThree,
        Gentoo.textFour,
        Gentoo.textFive,
        Gentoo.textSix,
        Gentoo.textSeven,
    ]

    const RockhopperText = [
        Rockhopper.textOne,
        Rockhopper.textTwo,
        Rockhopper.textThree,
        Rockhopper.textFour,
        Rockhopper.textFive,
        Rockhopper.textSix,
        Rockhopper.textSeven,
    ]
    
    const AdelieText = [
        Adelie.textOne,
        Adelie.textTwo,
        Adelie.textThree,
        Adelie.textFour,
        Adelie.textFive,
    ]

    const ChinstrapText = [
        Chinstrap.textOne,
        Chinstrap.textTwo,
        Chinstrap.textThree
    ]

    const MacaroniText = [
        Macaroni.textOne,
        Macaroni.textTwo,
        Macaroni.textThree,
        Macaroni.textFour
    ]
    
    return (
        <>
        <div className='cards'>
            <h1 className='headline'>PENGUIN SPONSOR PACKAGE</h1>
            <div className='cards-containter'>
            <div className='slider-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                    <PingvinCardsItem
                        src={require('../../images/pingvins/Emperor.jpg').default}
                        headline={Emperor.headline}
                        label={Emperor.label}
                        text={EmperorText}
                        path='/' />

                        <PingvinCardsItem
                        src={require('../../images/pingvins/King.jpg').default}
                        headline={King.headline}
                        label={King.label}
                        text={KingText}
                        path='/' />

                        <PingvinCardsItem
                        src={require('../../images/pingvins/Gentoo.png').default}
                        headline={Gentoo.headline}
                        label={Gentoo.label}
                        text={GentooText}
                        path='/' />

                        <PingvinCardsItem
                        src={require('../../images/pingvins/Rockhopper.png').default}
                        headline={Rockhopper.headline}
                        label={Rockhopper.label}
                        text={RockhopperText}
                        path='/' />
                        
                        <PingvinCardsItem
                        src={require('../../images/pingvins/Adelie.png').default}
                        headline={Adelie.headline}
                        label={Adelie.label}
                        text={AdelieText}
                        path='/' />

                        <PingvinCardsItem
                        src={require('../../images/pingvins/Chinstrap.png').default}
                        headline={Chinstrap.headline}
                        label={Chinstrap.label}
                        text={ChinstrapText}
                        path='/' />

                        <PingvinCardsItem
                        src={require('../../images/pingvins/Macaroni.png').default}
                        headline={Macaroni.headline}
                        label={Macaroni.label}
                        text={MacaroniText}
                        path='/' />
                    </ul>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PingvinCards