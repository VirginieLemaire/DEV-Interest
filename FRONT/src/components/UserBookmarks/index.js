import './user-bookmarks.scss';
import { useSelector } from 'react-redux';
import Card from '../Card';

const UserBookmarks = () => {
  const { darkMode } = useSelector((state) => state.displayOptions);
  const { bookmarkedCards, username } = useSelector((state) => state.userCurrent);
  console.log(bookmarkedCards);

  return (
    <div className={darkMode ? 'user-bookmarks user-bookmarks--dark' : 'user-bookmarks'}>
      <div className="user-bookmarks__user-container">
        <div className="user-bookmarks__user-container__initials">
          {username.charAt(0)}
        </div>
        <div className="user-bookmarks__user-container__username">
          {username}
        </div>
      </div>
      <div className="user-bookmarks__total-bookmarks">
        {`${bookmarkedCards.length} favoris`}
      </div>
      <div className="user-bookmarks__bookmarks-container">
        {
          bookmarkedCards.map((bookmark) => (
            <Card key={bookmark.id} card={bookmark} />
          ))
        }
      </div>
    </div>
  );
};

export default UserBookmarks;
