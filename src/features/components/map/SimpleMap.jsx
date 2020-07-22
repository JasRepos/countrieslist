import React, { Component } from 'react';
import { Icon, Container } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red' />

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 5
  }; 

  render() {
    const {latlng} = this.props;
    return (
      // Important! Always set the container height explicitly
      <Container style={{ height: '300px', width: '800px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDiEfRxbWN9yRKYnfYJZ0C8joch7kiej9Q' }}
          defaultCenter={latlng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={latlng[0]}
            lng={latlng[1]}
            
          />
        </GoogleMapReact>
      </Container>
    );
  }
}

export default SimpleMap;