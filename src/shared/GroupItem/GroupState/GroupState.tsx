interface GroupStateProps {
  groupState: boolean;
}
const GroupState: React.FC<GroupStateProps> = ({ groupState }) => {
  return (
    <>
      {groupState ? (
        <p className="group__state">Открытая группа</p>
      ) : (
        <p className="group__state">Закрытая группа</p>
      )}
    </>
  );
};
export default GroupState;
