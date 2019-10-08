// @flow

import  React from 'react';
import StoryItem from '../StoryItem/StoryItem';
import { ListWrapper } from './style';

type PropsT = {
    stories: Array<any>
}
const List = ({stories}: PropsT) => {

    return ( 
        <ListWrapper>
          {stories && stories.map(story => <StoryItem {...story} key={story.id} />)}
        </ListWrapper>
   
    );
}


export default List;