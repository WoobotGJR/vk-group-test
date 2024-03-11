import { Group } from '../../types/types';

const groupService = {
  loadJSON: async function loadJSON(url: string): Promise<Group[]> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        resolve(jsonData);
      }, 1000);
    });
  },
};

export default groupService;
