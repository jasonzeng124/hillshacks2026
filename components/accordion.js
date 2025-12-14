import React from 'react'
//https://www.npmjs.com/package/react-accessible-accordion
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { Link } from 'theme-ui'
import { EVENT_FULL, REGISTRATION_FORM_URL, LOCATION_URL, MAILTO, ENTRY_FEE } from '../lib/constants'

const Faq = () => {
  return (
    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Why come to hillsHacks?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Can you spend a day without using some form of technology developed
            in the last 5 years? It would probably be difficult — technology has
            completely changed the way we live our lives. Regardless of your
            experience, you will learn something new at hillsHacks about how
            computer science is being used all around us — often in things we
            take for granted! All students in grades 7 and up are welcome.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Where will the event take place?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            hillsHacks will be a fully in-person event at{' '}
            <Link href={LOCATION_URL} target="_blank">
              Watchung Hills Regional High School
            </Link>
            !
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>When will hillsHacks be?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>The event will take place on {EVENT_FULL}.</p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>How much does this cost?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Entry will be {ENTRY_FEE}. Make checks payable to WHRHS. Include
            the participant's name in the memo. Mail to Mary Ellen Phelan at
            Watchung Hills Regional High School, 108 Stirling Road, Warren, NJ
            07059.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Will there be swag?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Every attendee will receive a hillsHacks T-shirt. Winners of the
            competitive programming challenge can choose from a pool of
            prizes.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What if I don’t know anything about coding or computer science?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            No problem! We highly encourage beginners to come, and our
            workshops will give you opportunities to learn about fundamental CS
            concepts. After creating an idea as part of our design challenge,
            you'll be ready to implement it on your own after the event!
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            I’m an expert at coding. What do I get out of this event?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Check out our advanced workshops. We recommend that you actively
            engage in our Panel Q&A session and consider competing in the
            competitive programming event (this applies to beginners, too).
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Can I work as a team?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Although teams are allowed, we highly encourage you to work solo for
            the competitive programming challenge.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            When will registrations open?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Registration is now open. To register, please fill out{' '}
            <Link href={REGISTRATION_FORM_URL} target="_blank">this form</Link>.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Will there be food?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Yes, lunch is covered by the {ENTRY_FEE} entry fee!</p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>I have another question...</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Please feel free to email us at{' '}
            <Link href={MAILTO} aria-label="Email team@hillshacks.com">team@hillshacks.com</Link>{' '}
            with any questions you may have!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
export default Faq