import React from 'react'
import "./Manual.css"


const Manual = (props) => {

  return (
    <div className="content">
            <div className="heading">⟠ GUIDE TO OASIS ⟠</div>
            <div className="rules"> ⟠ Say "OASIS, start." to get started with your shopping experience.
                <br/><br/>⟠ Say "OASIS, help." to pull up the guide to Oasis.
                <br/><br/>⟠ Say "OASIS, show all products." to view our collection of items from the future.
                <br/><br/>⟠ Say "OASIS, show me {"item-name"}" to view the product from our inventory.
                <br/><br/>⟠ Say "OASIS, focus on {"item-name"}." to view all the details of a product.
                <div className="rem"><br/>PAYMENT ONLY IN ETHEREUM. INVITE-ONLY ENTRY.</div>
            </div>
    </div>
  )
}

export default Manual