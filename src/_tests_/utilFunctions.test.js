import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './_data_/testData';

test('shortenText does not alt str', () => {
    expect(shortenText(shortText)).toHaveLength(29)
});

test('shortenText cut off ext char after 100 and add 3 per', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('wordCount counts num of words in sent correctly', () => {
    expect(wordCount(posts)).toBe(233)
});

test('attachUserName attach a users full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

test('attachUserName removes any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5]
    expect(newPosts[0]).not.toContainEqual(deletedPost)
})