import React from 'react'
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

const GoogleMap = () => (
    <ReactGoogleMapLoader
        params={{
            key: "AIzaSyBBOSoemfhgz4v6QuE4auXvOaYDkhvzVHw",
            libraries: "places,geometry",
        }}
        render={googleMaps =>
            googleMaps && (
                <div style={{height: "300px"}}>
                    <ReactGoogleMap
                        googleMaps={googleMaps}
                        center={{lat: 43.51112450455952, lng: 16.46922315719325}}
                        zoom={12}
                    />
                </div>
            )
        }
    />
)

export default GoogleMap