/**
 * Highlight component that is part of site Footer
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSketch  } from '@fortawesome/free-brands-svg-icons'
import { faTachometerAlt, faMoneyBillWave, faLock } from '@fortawesome/free-solid-svg-icons'


const Highlight = ({ }) => {
    return (
        <>

        <div class="highlight">
            <div class="container">
                <div class="card">
                    <i><FontAwesomeIcon icon={ faSketch }/></i>
                    <div>
                        <h2>Gorgeous</h2>
                        <p>Gorgeous design</p>
                    </div>
                </div>
                <div class="card">
                    <i><FontAwesomeIcon icon={ faTachometerAlt }/></i>
                    <div>
                        <h2>Fast</h2>
                        <p>Fast shippment</p>
                    </div>
                </div>
                <div class="card">
                    <i><FontAwesomeIcon icon={ faMoneyBillWave }/></i>
                    <div>
                        <h2>Cheap</h2>
                        <p>Low-cost products</p>
                    </div>
                </div>
                <div class="card">
                    <i><FontAwesomeIcon icon={ faLock }/></i>
                    <div>
                        <h2>Secure</h2>
                        <p>Secure payment</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Highlight