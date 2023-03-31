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
   * @description Whether need login
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
