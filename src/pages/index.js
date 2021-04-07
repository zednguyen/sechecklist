import React from "react"
import tw, { styled } from "twin.macro"

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`
// or use shorthand version
//
const ButtonPrivate = tw.button`
  bg-green-500 hover:bg-blue-900 text-white p-2 rounded
`

export default function Home() {
  return (
    <div>
      <p>Hello world!</p>
      <Button>Click me</Button>
      <ButtonPrivate>Button Private</ButtonPrivate>
    </div>
  )
}
