import React from "react"

import Layout from "../components/layout/base/base"
import Banner from "../components/banners/custom/banner"
import Container from "../components/layout/base/components/container/container"
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFax, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

export default class ContactsPage extends React.Component {
  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,
    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,
    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [43.511445, 16.469166],
    zoom: 15,
    markerText: "GraphicLab HC, Ul. Ruđera Boškovića 32, 21000, Split"
  }

  render(){
    return(
      <Layout isContainer={false}>
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
                  <MapContainer
                    className="lefelet-container"
                    center={[43.511445, 16.469166]}
                    zoom={15}
                    maxZoom={35}
                  >
                    <TileLayer
                      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {this.props.markerText !== "" &&
                      <Marker position={this.props.position}>
                        <Popup>{this.props.markerText}</Popup>
                      </Marker>
                    }
                  </MapContainer>
                </div>
          </Container>
      </Layout>
    )
  }
}