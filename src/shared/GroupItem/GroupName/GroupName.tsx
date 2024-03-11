interface GroupNameProps {
  groupName: string;
}
const GroupName: React.FC<GroupNameProps> = ({ groupName }) => {
  return <h1 className="group__name">{groupName}</h1>;
};
export default GroupName;
