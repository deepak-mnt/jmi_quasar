/*
export const someMutation = (state) => {}
 */

export const updateDrawerState = (state,opened) => {
    state.drawerState = opened,
    state.tempValue = opened
  }
