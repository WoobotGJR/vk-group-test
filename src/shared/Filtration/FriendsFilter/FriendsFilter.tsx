interface FriendsFilterProps {
  filterFriendsOptions: boolean;
  handleHasFriendsChange: (hasFriends: boolean) => void;
}
const FriendsFilter: React.FC<FriendsFilterProps> = ({
  filterFriendsOptions,
  handleHasFriendsChange,
}) => {
  return (
    <>
      <input
        type="checkbox"
        checked={filterFriendsOptions}
        onChange={(e) => handleHasFriendsChange(e.target.checked)}
      />
      <label>Has Friends</label>
    </>
  );
};
export default FriendsFilter;
