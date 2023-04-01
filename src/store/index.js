import {useBasicStore} from './basic'
import {useConfigStore} from './config'
import {useTagsViewStore} from './tags-view'
const appStore = {}
export const registerStore = () => {
  appStore.useBasicStore = useBasicStore();
  appStore.useConfigStore = useConfigStore();
  appStore.useTagsViewStore = useTagsViewStore();
};

export default appStore;