import { FilterOptions } from '../../../types/types';

interface ColorFilterProps {
  filterColorOptions: string;
  handleAvatarColorChange: (avatarColor: string) => void;
}
const ColorFilter: React.FC<ColorFilterProps> = ({
  filterColorOptions,
  handleAvatarColorChange,
}) => {
  return (
    <select
      value={filterColorOptions}
      onChange={(e) =>
        handleAvatarColorChange(e.target.value as FilterOptions['avatarColor'])
      }
    >
      <option value="any">Any</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
      <option value="purple">Purple</option>
      <option value="white">White</option>
      <option value="orange">Orange</option>
    </select>
  );
};
export default ColorFilter;
