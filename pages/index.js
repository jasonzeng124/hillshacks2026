/** @jsxRuntime classic */
/** @jsx jsx */

import {
  jsx,
  Box,
  Heading,
  Text,
  Button,
  Container,
  Grid,
  Card,
  Flex,
  Link,
  Alert
} from 'theme-ui'
import Image from '../components/themed-image';

import React from 'react'

import Faq from '../components/accordion'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Stats from '../components/stats'
import { EVENT_FULL, LOCATION_URL, EVENT_YEAR, ENTRY_FEE, REGISTRATION_EMBED_URL, MAP_QUERY, SPONSOR_PACKET_URL, MAILTO } from '../lib/constants'

const Index = props => (
  <>
    <Nav />
    <Hero />
    <Container as="section" variant="copy" mt={4} {...props}>
      <Stats />
    </Container>
    <Container id="about" as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline" sx={{ fontSize: '40px' }}>
        This is not your typical hackathon.
      </Heading>
      <Text as="p" sx={{ fontSize: 2 }} mb={3}>
        <b>hillsHacks was born with a mission:</b> to show that computer science
        is something anyone can learn. It's more than memorizing technical
        jargon and stuffing code into machines. CS is for innovators, creators,
        problem solvers, artists, and <i>you</i>.
      </Text>
      <Text as="p" sx={{ fontSize: 2 }} mb={3}>
        Rather than leave you alone expecting a full-fledged product launch at
        the end of the day, we'll guide you through the learning process with{' '}
        <b>workshops</b> from Watchung Hills alumni. Plus, we'll provide you
        one-on-one <b>mentorship</b> and an opportunity to listen in and ask
        questions about tech during our <b>Panel Q&A</b> session. Deviating from
        the traditional hackathon, there will be a no-code{' '}
        <b>design challenge</b>, with a greater emphasis on ideas and how
        technology can be used for good. Participants can win generous cash{' '}
        <b>prizes</b>, too!
      </Text>
      <Text variant="lead">
        <b>
          This is the ninth iteration of hillsHacks, Watchung Hills' premier
          hackathon open to students grades 7 through 12.
        </b>
      </Text>
      <br />
    </Container>
    <Container as="section" py={4} variant="copy" {...props}>
      <Image
        src="/eventPhoto.jpg"
        alt="Event Photo 1"
        mb={2}
        sx={{
          boxShadow: 'card',
          borderRadius: 'extra',
          userDrag: 'none',
          WebkitUserDrag: 'none',
        }}
      />
      <Grid sx={{ columnGap: 3 }} columns={[1, 2, 2]}>
        <Image
          src="/eventPhoto1.jpg"
          alt="Event Photo 2"
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none',
          }}
        />
        <Image
          src="/eventPhoto2.jpg"
          alt="Event Photo 3"
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none',
          }}
        />
      </Grid>
    </Container>
    <Container as="section" variant="copy" py={4} {...props}>
      <Card>
        <Heading variant="headline" sx={{fontSize: "40px"}}>Details</Heading>
        <Text as="p"><b>Where:</b> <Link href="#map">Watchung Hills Regional High School</Link> (108 Stirling Rd, Warren, NJ 07059)</Text><br/>
        <Text as="p"><b>When:</b> {EVENT_FULL}</Text><br/>
        <Text as="p"><b>Cost:</b> There will be an entry fee of {ENTRY_FEE} to cover costs for food and T-shirts for all attendees!</Text><br/>
        <Text as="p"><b>Who:</b> All students in grades 7 and up are welcome to attend, regardless of experience!</Text>
      </Card>
    </Container>
    <Container id="faq" as="section" py={4} {...props}>
      <Heading variant="headline">FAQ</Heading>
      <Faq />
      <br />
    </Container>

    <Container
      id="logistics"
      as="section"
      sx={{ textAlign: 'center' }}
      py={4}
      {...props}
    >
      <Heading variant="headline" mb={4}>
        Schedule
      </Heading>
      <Image 
        src="/APznzaYmTz-WX3WS2umHgEEdszfy2rysHR-z25iPOqp8qXy8y1pnoNgGqLa-tkvVaZJ7ADABlHhkzvOljTH_3M9a_WnX-mYE8PPKmh4_UEgGGw0MzqryS9IPwWomhoHO9kz3mV33iSe4T_laXFTRghkHkgC7gHCIi2JdLr1qQLxOe-PlT_keqHCGjtKVDYXdgcFkT-CD3HMw5M0JGwdqh8.jpg"
        sx={{
          width: '100%',
          maxWidth: '720px',
          userDrag: 'none',
          WebkitUserDrag: 'none',
          boxShadow: 'elevated',
        }}
      />
    </Container>
    {/* Google Maps embed below schedule */}
    <Container id="map" as="section" py={3} sx={{ textAlign: 'center' }}>
      <iframe
        title="Watchung Hills Map"
        src={'https://maps.google.com/maps?q=' + MAP_QUERY + '&output=embed'}
        width="100%"
        height="360"
        style={{ border: 0, maxWidth: '900px' }}
      />
    </Container>

    {/* Mailing list / registration embed */}
    <Container id="mailing" as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline">Join our mailing list</Heading>
      <Text as="p" mb={3}>Stay updated — sign up for announcements and updates.</Text>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title="Registration Form"
          src={REGISTRATION_EMBED_URL}
          width="640"
          height="800"
          style={{ border: 0 }}
        />
      </Box>
    </Container>
    <Container
      id="sponsors"
      as="section"
      sx={{ textAlign: 'center' }}
      py={4}
      {...props}
    >
      <Heading variant="headline" mb={4}>
        Sponsors
      </Heading>
      <a href="https://www.codeninjas.com/nj-green-brook" target="_blank">
        <Image 
          src="/codeninjas.png"
          sx={{
            width: '100%',
            maxWidth: '360px',
            userDrag: 'none',
            WebkitUserDrag: 'none',
            cursor: 'pointer',
            borderRadius: 'extra',
          }}
        />
      </a>
        <a href="https://artofproblemsolving.com/" target="_blank">
          <Image
          src="/AoPS_Main_Logo (1).png"
          sx={{
            width: '100%',
            maxWidth: '360px',
            userDrag: 'none',
            WebkitUserDrag: 'none',
            cursor: 'pointer',
            borderRadius: 'extra',
          }}
        />
      </a>
      <Box sx={{ mt: 3, display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button as="a" href={SPONSOR_PACKET_URL} target="_blank" variant="outline">Sponsor packet</Button>
        <Button as="a" href={MAILTO} variant="primary">Contact us</Button>
      </Box>
    </Container>

    {/* Contact section */}
    <Container id="contact" as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline">Contact</Heading>
      <Text as="p" mb={2}>Have questions about sponsorships, volunteering, or the event? Reach out and we'll get back to you shortly.</Text>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
        <Button as="a" href={MAILTO} target="_self" variant="primary">Email us</Button>
      </Box>
    </Container>
    <Container as="section" py={4} {...props}>
      <Card>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Heading as="h1" variant="headline">
              HillsHacks is on the way!
            </Heading>
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Button
              variant="lg"
              as="a"
              href="#mailing"
              mr={4}
            >
              Join our mailing list
            </Button>
          </Box>
        </Flex>
      </Card>
    </Container>
    <footer sx={{ textAlign: 'center', padding: 4 }}>
      <Text as="p" mb={2} sx={{ fontSize: 1 }}>
        Previous years:{' '}
        <Link href="https://hills-hacks-2024.vercel.app/">2024</Link> |{' '}
        <Link href="https://2023.hillshacks.com/">2023</Link> |{' '}
        <Link href="https://2022.hillshacks.com/">2022</Link> |{' '}
        <Link href="https://2021.hillshacks.com/">2021</Link> |{' '}
        <Link href="https://2020.hillshacks.com/">2020</Link> |{' '}
        <Link href="https://2019.hillshacks.com/">2019</Link> |{' '}
        <Link href="https://github.com/googol88/hillshacks-vi">2018</Link>
      </Text>
      <Text as="p" mb={2} sx={{ fontSize: 1 }}>
        Created with &#x3C;3 by the Watchung Hills CS Club. See the{' '}
        <Link href="https://github.com/LiterallyCanada312/HillsHacks2025">source</Link>.
      </Text>
        <Text as="p" sx={{ fontSize: 1, color: 'muted' }}>
        © Copyright {EVENT_YEAR} hillsHacks
      </Text>
    </footer>
  </>
)

export default Index
