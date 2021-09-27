import './user-bookmarks.scss';
import { useSelector } from 'react-redux';
import Card from '../Card';

const UserBookmarks = () => {
  const { username, bookmarksCards } = useSelector((state) => state.user);
  console.log(bookmarksCards);

  return (
    <div className="user-bookmarks">
      <div className="user-bookmarks__user-container">
        <div className="user-bookmarks__user-container__initials">
          {username.charAt(0)}
        </div>
        <div className="user-bookmarks__user-container__username">
          {username}
        </div>
      </div>
      <div className="user-bookmarks__total-bookmarks">
        {`${bookmarksCards.length} favoris`}
      </div>
      <div className="user-bookmarks__bookmarks-container">
        {
          bookmarksCards.map((bookmark) => (
            <Card key={bookmark.id} card={bookmark} />
          ))
        }
      </div>
    </div>
  );
};

export default UserBookmarks;
