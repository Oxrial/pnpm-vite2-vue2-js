import {useBasicStore} from './basic'
import {useConfigStore} from './config'
import {useTagsViewStore} from './tags-view'
import {useCounterStore} from './count'
const appStore = {}
export const registerStore = () => {
  appStore.useBasicStore = useBasicStore()
  appStore.useConfigStore = useConfigStore()
  appStore.useTagsViewStore = useTagsViewStore()
  appStore.useCounterStore = useCounterStore()
}

export default appStore;