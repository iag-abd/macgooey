// @flow

import { KEYS } from "./keys";

export const noPropagate = (event: SyntheticEvent<HTMLElement>) => {
  event.stopPropagation();
  return event;
};

export const noImmediatePropagate = (event: SyntheticEvent<HTMLElement>) => {
  event.nativeEvent.stopImmediatePropagation();
  return event;
};

export const preventDefault = (event: SyntheticEvent<HTMLElement>) => {
  event.preventDefault();
  return event;
};

export function keyEvent(keys: $Keys<KEYS>[], handler: mixed => mixed) {
  return (event: SyntheticKeyboardEvent<EventTarget>) => {
    if (keys.includes(event.keyCode)) {
      handler(event);
    }
    return event;
  };
}
