import packageJson from '../package.json'
export const settings = {
/*页面布局相关*/
  //标题和导航栏显示的名称
  title: 'Vue3 Admin Plus',
  //是否显示图标和标题（Logo）
  sidebarLogo: true,
  //是否导航栏的中间的title
  showNavbarTitle: false,
  //是否显示下拉框区域
  ShowDropDown: true,
  //是否显示面包屑导航（Breadcrumb）
  showHamburger: true,
  //是否显示侧边栏（Sidebar）
  showLeftMenu: true,
  //是否显示标签栏（TagsView）
  showTagsView: true,
  //显示标签栏时，配置最多显示标签的个数，超过将会替换最后一个标签
  tagsViewNum: 6,
  //是否显示导航栏（NavBar）
  showTopNavbar: true,
  
  /*页面动画相关*/
  //主视区域和面包屑导航是否需要动画
  mainNeedAnimation: true,
  //是否需要页面加载进度条
  isNeedNprogress: true,
  
   
  /*
    首次进入是否需要登录
    true: 走正常的登录流程，包括角色权限的校验
    false:不走登录流程，直接进入主页，此时没有token。架构中会在permission.js文件中，
    动态设置个临时token使用，临时token取的是settings.js文件中的tmpToken
    dev环境时，设置为false，可以适当提高你的开发效率
   */
  isNeedLogin: true,
  
  // 当isNeedLogin设置为false起作用，建议调试时的token写在这里，架构会自动设置到auth.js中，
  // 和登录流程设置的token一样
  tmpToken: 'tmp_token',
  
  /*
    动态路由过滤的方式 'roles' | 'code' | 'rbac'
    roles: 通过角色进行过滤
    code:  通过codeArr进行过滤
    rbac:  动态生成菜单列表
   */
  permissionMode: 'roles',
  
    
  //是否开启生产时也使用mock,开启后生产环境也能使用开发时的mock数据
  openProdMock: true,
  
  /*
    配置那个环境需要，收集错误日志 ['build', 'serve']
    注：尽量不要配置serve下收集错误日志，因为收集到的日志大多没有意义，还浪费了服务器资源
   */
  errorLog: ['build'],
    
  // el-table中动态高度设定，计算的数值为height(100vh-delWindowHeight)，
  // 可以根据自己公司的实际业务进行调整
  delWindowHeight: '210px',

  /*
   * vite.config.js base config
   * */
  viteBasePath: './',
         
   /*
   * 初始默认语言
   * en/zh
   * */
  defaultLanguage: 'zh',
  /*
   * 设置默认主题色
   * base-theme/lighting-theme/dark-theme
   * */
  defaultTheme: 'base-theme',
  /*
   * 设置默认大小
   * large / default /small
   * */
  defaultSize: 'small',
  /*
   * 设置平台id
   * such as
   * */
  //平台id  2->vue3-admin-plus
  plateFormId: 2
}

export default settings