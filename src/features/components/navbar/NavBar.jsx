import React from 'react'
import { Menu, Container, Button, Icon } from 'semantic-ui-react'

const NavBar = () => {
    return (
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header>
                    <Icon name='world' />
                    Countriest-List
                  </Menu.Item>
                  
                  <Menu.Item position="right">
                    <Button basic inverted content="Dark Mode" />
                  </Menu.Item>
                </Container>
              </Menu>
    )
}

export default NavBar
