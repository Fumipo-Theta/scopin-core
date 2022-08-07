import React from "react"
import SwipeableViews from "react-swipeable-views";


type Props = {
  children: React.ReactNode
}

export const Swipe: React.FC<Props> = ({children}) => {
  const [_swipeableActions, setSwipeableActions] = React.useState();

  return <SwipeableViews
      enableMouseEvents
      action={actions => setSwipeableActions(actions)}
      resistance
      animateHeight
  >
    {
      children
    }
  </SwipeableViews>
}
