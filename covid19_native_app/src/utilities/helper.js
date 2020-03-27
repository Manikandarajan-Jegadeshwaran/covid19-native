export const setState = (state, member, action) => ({
    ...state,
    [member]: action?.payload
  });
  