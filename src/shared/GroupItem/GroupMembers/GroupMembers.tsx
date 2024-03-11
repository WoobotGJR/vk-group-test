interface GroupMembersProps {
  groupMembersCount: number;
}
const GroupMembers: React.FC<GroupMembersProps> = ({ groupMembersCount }) => {
  return (
    <>
      {groupMembersCount ? (
        <p>Количество подписчиков: {groupMembersCount}</p>
      ) : (
        <p>У сообщества нет подписчиков</p>
      )}
    </>
  );
};
export default GroupMembers;
