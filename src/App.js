// @flow

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Layout } from "./components/StoryList/style";
import StoryList from "./components/StoryList/StoryList";
import { getAllStoryIds, getStories } from "./state/news/actions";
import Loader from "./components/Loader";
import Header from "./components/Header/Header";

type PropsT = {
  stories: Array<any>,
  storyIds: Array<any>,
  getAllStoryIds: Function,
  getStories: Function,
  inProgress: boolean
};
function App(props: PropsT) {
  const { getStories, stories, inProgress } = props;
  useEffect(() => {
    getStories();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header
          logo="https://news.ycombinator.com/y18.gif"
          alt="HackerNews Logo"
          title="Hacker News"
        />
        {inProgress ? <Loader /> : <StoryList stories={stories} />}
      </Layout>
    </div>
  );
}

const mapStateToProps = ({
  news: {
    stories: { data: stories },
    stories: { inProgress }
  }
}) => ({
  stories,
  inProgress
});

export default connect(
  mapStateToProps,
  { getAllStoryIds, getStories }
)(App);
