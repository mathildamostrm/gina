import React from 'react'
import { Container } from '../../global-styles'
import './styles/km-list.css'

function KmList() {
    return(
        <>
        <Container>
            <h1 className='headline'>KILOMETERS SPONSORED</h1>
            <ol className='list'>
                <li>Add Nature</li>
                <li>Salve Ljosland</li>
                <li>Janne og Roy</li>
                <li>Joakim Rolfsnes</li>
            </ol>
        </Container>
        </>
    )
}

export default KmList