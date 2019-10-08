// @Flow

import React, {useState} from 'react';
import getSiteHostname from '../../utils/getSiteHostName';
import { formatDate } from '../../utils/dateFormater';
import getArticleLink, {USER, ITEM} from '../../utils/getArticle';
import {Item, Host, TitleLink, Description, Link} from './style';


type PropsT = {
    id: number,
    by: string,
    kids: Array<number>,
    score: number,
    url: string,
    title: string,
    time: number | Date
}
const ListItem = (props: PropsT) => {
    const {by, kids = [], score, url, title, id, time} = props;
   
    const site = getSiteHostname(url) || 'news.ycombinator.com';
    const link = getArticleLink({url, id});
    const commentUrl = `${ITEM}${id}`;
    const userUrl = `${USER}${by}`;
    


    const formatedDate = formatDate(time);
    

    return ( 
        <Item>
            <TitleLink href={link} target="_blank">
                {title}<Host>({site})</Host>
            </TitleLink>
            <Description>
                {score} points by 
                <Link href={userUrl} target="_blank">
                    {by}
                </Link>
                {formatedDate}
                { ' | '}
                <Link href={commentUrl}>
                    {kids.length} comments
                </Link>
            
            </Description>
        </Item>
     );
}
 

export default ListItem;