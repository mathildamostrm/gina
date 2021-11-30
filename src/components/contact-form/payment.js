import React from 'react'
import './styles/payment.css'

const Payment = () => {
    return (
        <>
        <div className='container'>
         <div className='paypal'>
          <img src={require('../../images/paypal.png').default} alt='form'></img>
            <img src={require('../../images/paypal-qr.png').default} alt='form'></img>
                <form className='paypal-form' action="https://www.paypal.com/donate" method="post" target="_top">
                   <input type="hidden" name="hosted_button_id" value="DBHH92WF85MZL" />
                   <input type="image" src="https://www.paypalobjects.com/en_US/NO/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                   <img alt="" border="0" src="https://www.paypal.com/en_NO/i/scr/pixel.gif" width="0" height="0" />
                </form>
         </div>
         
         <div className='vipps'>
            <img className='vipps-logo' src={require('../../images/vipps.png').default} alt='form'></img>
            <img src={require('../../images/vipps-qr.png').default} alt='form-img'></img>
         </div>
        </div>
        <h1 className='text'>I can’t do this without you. Be part of my journey and help me inspire the next generation.</h1>
        </>
    )
}

export default Payment