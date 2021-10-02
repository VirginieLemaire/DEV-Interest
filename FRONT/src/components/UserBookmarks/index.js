import './user-bookmarks.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookmarkedCards from '../BookmarkedCards';
import Contributions from '../Contributions';
import { fetchBookmarkedCards, fetchContributions } from '../../action/userCurrent';

const UserBookmarks = () => {
  const dispatch = useDispatch();

  const { darkMode, loading } = useSelector((state) => state.displayOptions);
  const { username, bookmarkedCards, contributions } = useSelector((state) => state.userCurrent);

  useEffect(() => {
    dispatch(fetchBookmarkedCards());
    // dispatch(fetchContributions());
  }, []);
  
  if (loading) return null;

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
      <div className="user-bookmarks__thumbs">
        <div className="user-bookmarks__thumbs__total-bookmarks">
          {`${bookmarkedCards.length} ${bookmarkedCards.length > 1 ? "favoris" : "favori"}`}
        </div>
        <div className="user-bookmarks__thumbs__total-bookmarks">
          {`${contributions.length} ${contributions.length > 1 ? "contributions" : "contribution"}`}
        </div>
      </div>
      <div className="user-bookmarks__bookmarks-container">
        <BookmarkedCards />
        <Contributions />
      </div>
    </div>
  );
};

export default UserBookmarks;
