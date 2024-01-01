import { Dummy } from "@/components/Dummy"

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        margin: " 36px 12px",
      }}
    >
      <Dummy width={400} height={400} />

      <div style={{ marginInlineStart: "12px" }}>
        <h1>Program Header</h1>
        <h2>Subtitle</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInlineEnd: "10em",
          marginInlineStart: "12px",
        }}
      >
        <div>
          <p>Mo. 12, 2024</p>
          <p>7PM–11PM</p>
        </div>
        <div>
          <p>Building Info</p>
          <p>New York, NY</p>
        </div>
      </div>

      <p style={{ marginInlineStart: "12px" }}>
        This is the event blurb. Ted ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt.{" "}
      </p>

      <div style={{ marginInlineStart: "12px" }}>
        __________________(dummy)_____________________ Enter your email to
        receive additional information and RSVP for this event.
      </div>
    </div>
  )
}
