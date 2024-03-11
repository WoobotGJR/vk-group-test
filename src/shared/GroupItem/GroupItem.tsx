import { SimpleCell } from '@vkontakte/vkui';
import { Group } from '../../types/types';
import GroupAvatar from './GroupAvatar/GroupAvatar';
import GroupName from './GroupName/GroupName';
import GroupState from './GroupState/GroupState';
import GroupMembers from './GroupMembers/GroupMembers';
import GroupFriends from './GroupFriends/GroupFriends';

interface GroupItemProps {
  groupInfo: Group;
}
const GroupItem: React.FC<GroupItemProps> = ({ groupInfo }) => {
  return (
    <div className="group-item">
      <SimpleCell
        key={groupInfo.id}
        className="group"
        before={
          <GroupAvatar
            group_name={groupInfo.name}
            avatarColor={groupInfo.avatar_color}
          />
        }
        after={<GroupState groupState={groupInfo.closed} />}
      >
        <div className="group-item__info">
          <GroupName groupName={groupInfo.name} />
          <GroupMembers groupMembersCount={groupInfo.members_count} />
          <GroupFriends friends={groupInfo.friends} />
        </div>
      </SimpleCell>
    </div>
  );
};
export default GroupItem;
