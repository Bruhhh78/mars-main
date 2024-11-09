import React from 'react'
import AnimateCursor from "react-animated-cursor";


const AnimatedCursor = () => {
  return (
    <AnimateCursor
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMorde={true}
    innerStyle={{
      backgroundColor: "lightpink",
    }}
    outerStyle={{
      border: "3px solid blue",
    }}
  />
  )
}

export default AnimatedCursor