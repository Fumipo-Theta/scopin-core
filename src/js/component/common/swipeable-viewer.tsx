import React from "react"
import SwipeableViews from "react-swipeable-views";

import { bindKeyboard } from 'react-swipeable-views-utils';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

type Props = {
  children: React.ReactNode
}

export const Swipe: React.FC<Props> = ({ children }) => {
  const [_swipeableActions, setSwipeableActions] = React.useState();

  return <BindKeyboardSwipeableViews
    enableMouseEvents
    action={actions => setSwipeableActions(actions)}
    resistance
  >
    {
      children
    }
  </BindKeyboardSwipeableViews>
}
