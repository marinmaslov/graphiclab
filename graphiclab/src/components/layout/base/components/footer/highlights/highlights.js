/**
 * Highlight component that is part of site Footer
 */
import React from "react"

const Highlight = ({ }) => {
    return (
        <>

        <div class="highlight">
            <div class="container">
                <div class="card">
                    <i class="fab fa-sketch"></i>
                    <div>
                        <h2>Gorgeous</h2>
                        <p>Gorgeous design</p>
                    </div>
                </div>
                <div class="card">
                    <i class="fas fa-tachometer-alt"></i>
                    <div>
                        <h2>Fast</h2>
                        <p>Fast shippment</p>
                    </div>
                </div>
                <div class="card">
                    <i class="fas fa-money-bill-wave"></i>
                    <div>
                        <h2>Cheap</h2>
                        <p>Low-cost products</p>
                    </div>
                </div>
                <div class="card">
                    <i class="fas fa-lock"></i>
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