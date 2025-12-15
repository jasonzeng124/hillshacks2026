import { Flex, Box, Container, NavLink } from 'theme-ui';
import Image from '../components/themed-image';
import ColorSwitcher from '../components/color-switcher';

const Nav = props => {
  return (
    <Box
      as="header"
      sx={{
        backgroundColor: "backgroundTransparent",
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: "1px solid",
        borderBottomColor: "border",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 999,
      }}
    >
      <Container>
        <Flex sx={{maxWidth: "layout", mx: "auto", alignItems: "center"}} {...props}>
          <NavLink href="#" sx={{height: "36px"}}>
            <Image src="/icon.svg" width="36"/>
          </NavLink>
          <Box sx={{flex: '1 1 auto', justifyContent: "", margin: '3'}}>
            <NavLink href="#mailing" p={2}>
              Register
            </NavLink>
            <NavLink href="#about" p={2}>
              About
            </NavLink>
            <NavLink href="#faq" p={2}>
              FAQ
            </NavLink>
            <NavLink href="#logistics" p={2}>
              Schedule
            </NavLink>
            
            <NavLink href="#sponsors" p={2}>
              Sponsors
            </NavLink>
            <NavLink href="#contact" p={2}>
              Contact
            </NavLink>
            {/*<NavLink href="https://2021.hillshacks.com/" p={2}>
              2021 Site
            </NavLink>
            <NavDropdown label="Previous Years">
              <NavLink href="#!">
                2020 
              </NavLink>
              <NavLink href="#!">
                2019
              </NavLink>
              <NavLink href="#!">
                2018 
              </NavLink>
              <NavLink href="#!">
                2017
              </NavLink>
            </NavDropdown>*/}
          </Box>
          <ColorSwitcher mr={3}/>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav;
