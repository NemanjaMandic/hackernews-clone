const initialState = () => ({
  storyIds: {
    data: [],
    inProgress: false,
    errors: ""
  },
  stories: {
    data: [],
    page: 0,
    inProgress: false,
    errors: ""
  }
});

export default initialState;
