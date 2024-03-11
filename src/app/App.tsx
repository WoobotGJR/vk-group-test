import { useEffect, useState } from 'react';
import { Group } from '../types/types';
import { groupService } from '../api';
import { url } from '../utils/constants';
import GroupItem from '../shared/GroupItem/GroupItem';
import Filtration from '../shared/Filtration/Filtration';
import './app.css';

function App() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);

  // fetching and setting groups from api(json)
  useEffect(() => {
    (async () => {
      const groups = await groupService.loadJSON(url);

      setGroups(groups);
      setFilteredGroups(groups);
    })();
  }, []);

  return (
    <>
      <Filtration groups={groups} setFilteredGroups={setFilteredGroups} />

      <div className="group_container">
        {filteredGroups.length !== 0 ? (
          filteredGroups.map((group) => (
            <GroupItem key={group.id} groupInfo={group} />
          ))
        ) : (
          <p>По такому запросу не было найдено результатов</p>
        )}
      </div>
    </>
  );
}

export default App;
