import packageJson from '../package.json'
export const settings = {
  title: packageJson.name,
  /**
   * @type {boolean} true | false
   * @description 是否显示图标和标题（Logo）
   */
  sidebarLogo: true,
  /**
   * @type {boolean} true | false
   * @description 是否导航栏的中间的title
   */
  showNavbarTitle: false,
  /**
   * @type {boolean} true | false
   * @description 是否显示下拉框区域
   */
  ShowDropDown: true,
  /**
   * @type {boolean} true | false
   * @description 是否显示面包屑导航（Breadcrumb）
   */
  showHamburger: true,
  /**
   * @type {boolean} true | false
   * @description 是否显示侧边栏（Sidebar）
   */
  showLeftMenu: true,
  /**
   * @type {boolean} true | false
   * @description 是否显示标签栏（TagsView）
   */
  showTagsView: true,
  /**
   * @description 显示标签栏时，配置最多显示标签的个数，超过将会替换最后一个标签
   */
  tagsViewNum: 6,
  /**
   * @type {boolean} true | false
   * @description 是否显示导航栏（NavBar）
   */
  showTopNavbar: true,
  /* page  animation related*/
  /**
   * @type {boolean} true | false
   * @description Whether need animation of main area
   */
  mainNeedAnimation: false,
  /**
   * @type {boolean} true | false
   * @description 是否需要页面加载进度条
   */
  isNeedNprogress: true,

  /*page login or other*/
  /**
   * @type {boolean} true | false
   * @description 首次进入是否需要登录
                    true: 走正常的登录流程，包括角色权限的校验
                    false:不走登录流程，直接进入主页，此时没有token。架构中会在permission.js文件中，
                    动态设置个临时token使用，临时token取的是settings.js文件中的tmpToken
                    dev环境时，设置为false，可以适当提高你的开发效率
   */
  isNeedLogin: true,
  /**
   * @type {string} 'rbac'| 'roles' | 'code'
   */
  permissionMode: 'roles',
  /**
   * @type {boolean} true | false
   * @description Whether  open prod mock
   */
  openProdMock: true,
  /**
   * @type {string | array} 'dev' | ['prod','test','dev'] according to the .env file props of VITE_APP_ENV
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['dev', 'test']
   */
  errorLog: ['prod'],
  /*
   * table height(100vh-delWindowHeight)
   * */
  delWindowHeight: '210px',
  /*
   * setting dev token when  isNeedLogin is setting false
   * */
  tmpToken: 'tmp_token',

  /*
   * vite.config.js base config
   * */
  viteBasePath: './',

  /*
   * i18n setting default language
   * en/zh
   * */
  defaultLanguage: 'zh',
  /*
   *  default theme
   * base-theme/lighting-theme/dark-theme
   * */
  defaultTheme: 'base-theme',
  /*
   * setting default defaultSize
   * large / default /small
   * */
  defaultSize: 'small',
  /*
   * vite.config.js base config
   * such as
   * */
  //平台id  2->vue3-admin-plus
  plateFormId: 2
}

export default settings
