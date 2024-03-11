import { Avatar } from '@vkontakte/vkui';
import { AVATAR_SIZE } from '../../../utils/constants';
import { getInitials } from '../../../utils/getInitials';

interface GroupAvatarProps {
  avatarColor?: string;
  group_name: string;
}
const GroupAvatar: React.FC<GroupAvatarProps> = ({
  avatarColor,
  group_name,
}) => {
  return (
    <>
      {avatarColor ? ( // Если указан цвет аватара
        <Avatar
          size={AVATAR_SIZE}
          className="group__avatar"
          style={{ backgroundColor: avatarColor }} // Используем указанный цвет
        />
      ) : (
        <Avatar
          size={AVATAR_SIZE}
          className="group__avatar_initials"
          initials={getInitials(group_name)} // Передаем инициалы, полученные из имени группы
        />
      )}
    </>
  );
};
export default GroupAvatar;
