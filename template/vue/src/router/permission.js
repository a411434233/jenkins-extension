/**
 * 登录判断
 */
import { getQuery } from '@/common/utils'
import { getToken } from '@/utils/auth' // get token from cookie
import { getConfig } from '@/utils/global-config'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import Oidc from 'oidc-client'
import { requestApi as HTTP } from 'xs-request'
import router from './index'

NProgress.configure({
  showSpinner: false,
});

const curOrigin = window.location.origin;
const path = window.location.pathname;
const _redirect_uri = `${curOrigin}${path}#/callback`;

const id4config = {
  authority: getConfig("ID4_AUTH"),
  client_id: getConfig("CLIENT_ID"),
  redirect_uri: _redirect_uri,
  client_secret: getConfig("CLIENT_SECRET"),
  response_type: "code",
  scope: getConfig("ID4_SCOPE"),
  response_mode: "query",
};

window.$mgr = new Oidc.UserManager(id4config);
// NProgress Configuration
const whiteList = ["/login", "/404", "/slienceAuth"]; // no redirect whitelist
router.beforeEach((to, from, next) => {
  const clientId = getConfig("CLIENT_ID");
  const title = getLocalStorage(`title_${clientId}`);
  if (title) { // 此处只作用于 ucuser项目
    beforeInPage(title);
  } else {
    HTTP.get("api.GetProject", {
      clientId,
    }).then((res) => {
      setLocalStorage(
        `title_${clientId}`,
        { title: res.data.title },
        60 * 60 * 1000
      );
      beforeInPage(res.data);
    });
  }


  const isLogin = getToken();    // title_js_ucmngvue 获取个项目token
  const isLoginPage = whiteList.indexOf(to.path) !== -1; // 存在
  if (to.path === '/home') {
    if (window.parent !== window.self && window.name === 'qualityTestParty') {
      next()
    }
  }
  if (to.path === "/callback" || to.path === "/scan" || to.path === '/slienceAuth') next();
  else if (isLogin && !isLoginPage) next();
  // 登录 & 进入的不是登录页 => 不做处理
  else if (!isLogin && isLoginPage) next();
  // 没登录 & 在登录页 => 不做处理
  else if (isLogin && isLoginPage) {
    toTargetPage(to, next);
  } // 登录 & 在登录页 => 跳转到目标页
  else if (!isLogin && !isLoginPage) {
    toLoginPage(to, next);

  } // 没登录 & 没在登录页 => 跳转到登录页
});

router.afterEach(() => {
  NProgress.done();
});

function beforeInPage(to, next) {
  var url =
    "https://id4lp194.365xs.cn/ucmng/ucvue/#/login?ReturnUrl=https%3A%2F%2Fid4lp194.365xs.cn%2Fucid4%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Djs_localvue%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A9528%252F%2523%252Fcallback%253Fredic_url%253D%252Fhome%26response_type%3Dcode%26scope%3Daimng%2520commng%2520cpmng%2520cvmng%2520erpmng%2520hkmng%2520mtmng%2520otmng%2520rcmng%2520ucmng%2520ucuser%2520openid%2520profile%26state%3D561cf219797d4e33b5db795975180886%26code_challenge%3DYO8UTivoEb6jRFH9SS213zH_exJ6z4FfhTnUqZlL6EU%26code_challenge_method%3DS256%26response_mode%3Dquery";

  // start progress bar
  NProgress.start();
  // set page title
  const title = getConfig("PROJECT_NAME_TEXT") || "Vue Admin Template";
  const pageTitle = to.title;
  document.title = pageTitle ? `${pageTitle}` : `${title}`;
}

function toTargetPage(to, next) {
  if (getConfig("ID4_LOGINTYPE")) {
    next();
  } else {
    if (getConfig("NEW_LOGIN")) {
      const redirectUrl = getQuery(to.fullPath, "redirect");
      const isExtenalPage = redirectUrl.startsWith("http");
      if (isExtenalPage) {
        window.location = decodeURIComponent(redirectUrl);
      } else {
        next({ path: "/" });
      }
    }
  }
}

function toLoginPage(to, next) {
  // 使用 ID4 接管
  if (getConfig("ID4_LOGINTYPE")) {
    id4config.redirect_uri = `${id4config.redirect_uri}?redic_url=${to.path}`;
    window.$mgr = new Oidc.UserManager(id4config);

    window.$mgr.signinRedirect();
  } else {
    if (getConfig("NEW_LOGIN")) {
      const redirectUrl = `${window.location.origin}${window.location.pathname}#/${to.path}`;
      window.location = `${getConfig(
        "USER_CENTER_URL"
      )}/#/login?redirect=${redirectUrl}`
        .replace(/\/{2}/gi, "/")
        .replace(/(http:\/|https:\/)/gi, "$1/");
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
}
