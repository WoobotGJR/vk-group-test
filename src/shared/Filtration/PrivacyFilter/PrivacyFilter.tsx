import { FilterOptions } from '../../../types/types';

interface PrivacyFilterProps {
  filterPrivacyOptions: 'all' | 'closed' | 'open';
  handlePrivacyChange: (privacy: 'all' | 'closed' | 'open') => void;
}

const PrivacyFilter: React.FC<PrivacyFilterProps> = ({
  filterPrivacyOptions,
  handlePrivacyChange,
}) => {
  return (
    <select
      value={filterPrivacyOptions}
      onChange={(e) =>
        handlePrivacyChange(e.target.value as FilterOptions['privacy'])
      }
    >
      <option value="all">All</option>
      <option value="closed">Closed</option>
      <option value="open">Open</option>
    </select>
  );
};
export default PrivacyFilter;
