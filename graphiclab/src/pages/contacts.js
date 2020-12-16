import React from "react"

import Layout from "../components/layout/base/base"
import Banner from "../components/banners/custom/banner"
import Container from "../components/layout/base/components/container/container"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFax, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

import Map from "../components/map/map"

export default class ContactsPage extends React.Component {
  render(){
    return(
      <Layout isContainer={false} isVisible={ true } parents={ ["Home"] } current={ "Contacts" }>
        <Banner name="contacts"/>
        <Container>
                <h2>Contacts</h2>
                <p>Feel free to contact us! Here are some ways to do it:</p>
                <div>
                  <p><i><FontAwesomeIcon icon={ faPhone }/></i>+385 (0)21 305 777</p>
                  <p><i><FontAwesomeIcon icon={ faFax }/></i>+385 (0)21 305 776</p>
                  <p><i><FontAwesomeIcon icon={ faEnvelope }/></i>hr@graphiclab.com</p>
                  <p><i><FontAwesomeIcon icon={ faMapMarkedAlt }/></i>R. Boskovića 32, 21 000 Split, Croatia</p>
                </div>
                <div class="lefelet-container">
                  <Map/>
                </div>
          </Container>
      </Layout>
    )
  }
}