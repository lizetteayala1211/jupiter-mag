export function Dummy({
  width,
  height,
  text,
}: {
  width: number
  height: number
  text?: string
}) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "lavender",
        color: "violet",
        textAlign: "center",
        padding: `${height / 2}px 0`,
      }}
    >
      {text ? text : "dummy"}
    </div>
  )
}
