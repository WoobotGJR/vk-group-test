import { useEffect, useState } from 'react';
import { FilterOptions, Group } from '../../types/types';
import PrivacyFilter from './PrivacyFilter/PrivacyFilter';
import ColorFilter from './ColorFilter/ColorFilter';
import FriendsFilter from './FriendsFilter/FriendsFilter';

interface FiltrationProps {
  groups: Group[];
  setFilteredGroups: React.Dispatch<React.SetStateAction<Group[]>>;
}

const Filtration: React.FC<FiltrationProps> = ({
  groups,
  setFilteredGroups,
}) => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    privacy: 'all',
    avatarColor: 'any',
    hasFriends: false,
  });

  const allGroups: Group[] = [...groups];

  const applyFilters = () => {
    // Fake api delay
    setTimeout(() => {
      let filteredGroups = [...allGroups];

      if (filterOptions.privacy !== 'all') {
        filteredGroups = filteredGroups.filter(
          (group) => group.closed === (filterOptions.privacy !== 'closed')
        );
      }

      if (filterOptions.avatarColor !== 'any') {
        filteredGroups = filteredGroups.filter(
          (group) => group.avatar_color === filterOptions.avatarColor
        );
      }

      if (filterOptions.hasFriends) {
        filteredGroups = filteredGroups.filter(
          (group) => group.friends && group.friends.length > 0
        );
      }

      setFilteredGroups(filteredGroups);
    }, 1000);
  };

  const handlePrivacyChange = (privacy: FilterOptions['privacy']) => {
    setFilterOptions({ ...filterOptions, privacy });
  };

  const handleAvatarColorChange = (
    avatarColor: FilterOptions['avatarColor']
  ) => {
    setFilterOptions({ ...filterOptions, avatarColor });
  };

  const handleHasFriendsChange = (hasFriends: FilterOptions['hasFriends']) => {
    setFilterOptions({ ...filterOptions, hasFriends });
  };

  useEffect(() => {
    if (allGroups.length === 0) return;

    applyFilters();
  }, [filterOptions]);

  return (
    <div className="filtration">
      <PrivacyFilter
        filterPrivacyOptions={filterOptions.privacy}
        handlePrivacyChange={handlePrivacyChange}
      />

      <ColorFilter
        filterColorOptions={filterOptions.avatarColor}
        handleAvatarColorChange={handleAvatarColorChange}
      />

      <FriendsFilter
        filterFriendsOptions={filterOptions.hasFriends}
        handleHasFriendsChange={handleHasFriendsChange}
      />
    </div>
  );
};
export default Filtration;
