"use client"

import { EmailInput, Dummy } from "@/components"
import {
  PhotoSection,
  Main,
  ProgramHeaderSection,
  TimeSection,
  AddressSection,
  DescSection,
  EmailSection,
} from "./styled"

export default function Desktop() {
  return (
    <Main>
      <PhotoSection>
        <Dummy width={700} height={500} />
      </PhotoSection>
      <ProgramHeaderSection>
        <h1>Program Header</h1>
        <h2>Subtitle</h2>
      </ProgramHeaderSection>
      <TimeSection>
        <p>Mo. 12, 2024</p>
        <p>7PM–11PM</p>
      </TimeSection>
      <AddressSection>
        <p>Building Info</p>
        <p>New York, NY</p>
      </AddressSection>
      <DescSection>
        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit.
      </DescSection>
      <EmailSection>
        <EmailInput />
      </EmailSection>
    </Main>
  )
}
