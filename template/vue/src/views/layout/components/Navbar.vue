<template>
  <div class="navbar">
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="30%"
      append-to-body
    >
      <el-form label-width="80px">
        <el-form-item label="原密码">
          <el-input v-model="oldPwd" />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="newPwd" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeAll">取 消</el-button>
        <el-button type="primary" @click="openConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <div>
      <hamburger
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <breadcrumb class="breadcrumb-container" />
    </div>
    <div class="right-menu">
      <AllSearch />
      <div class="is-dot">
        <el-badge
          v-if="isShowKF === 'isv' || isShowKF === 'erp'"
          is-dot
          class="item"
        >
          <el-button
            size="mini"
            round
            icon="el-icon-chat-line-round"
            style="font-size: 20px"
            @click="clickDrawer"
          />
        </el-badge>
      </div>
      <div>
        <el-tag>{{
          userProfile &&
          userProfile.hasOwnProperty("real_name") &&
          userProfile.real_name
            ? userProfile.real_name
            : "--未实名--"
        }}</el-tag>
        <el-tag
          >{{
            userProfile &&
            userProfile.hasOwnProperty("phone_number") &&
            userProfile.phone_number
              ? userProfile.phone_number
              : "--未绑定--"
          }}
        </el-tag>
      </div>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img
            src="../../../../static/avatar-default-boy.png"
            class="user-avatar"
          />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <span
              style="display: block; margin: 0 -10px; text-align: center"
              @click="open"
              >修改密码</span
            >
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span
              style="display: block; margin: 0 -10px; text-align: center"
              @click="logout"
              >登出</span
            >
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      :direction="direction"
      :size="'400px'"
    >
      <ImCom ref="ImCom" />
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import AllSearch from './AllSearch'
import { getConfig } from '@/utils/global-config'
import { getToken, removeLocalToken, removeToken } from '@/utils/auth' // get token from cookie
import ImCom from '@/components/im'
import { getLocalStorage } from '@/utils/localStorage'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    AllSearch,
    ImCom,
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      oldPwd: "",
      newPwd: "",
      innerVisible: false,
      dialogVisible: false,
      SaveMenus: [],
      newLists: [],
      rules: {
        oldPwd: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
      userProfile: getLocalStorage("userProfile"),
      cheildrenList: [],
      LoginName: false,
      isShowKF: getConfig("GROUP"),
      defaultParentId: "887904812217cca9bc2b9adb875daf42",
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  created() {
    const userName = getToken("LoginUserName");
    if (userName === "admin") {
      this.LoginName = true;
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    clickDrawer() {
      this.drawer = !this.drawer;
    },
    closeAll() {
      this.dialogVisible = false;
      this.innerVisible = false;
    },
    async logout() {
      const tokenKey = `${getConfig("CLIENT_ID")}_token`;
      localStorage.removeItem("token");
      removeToken(tokenKey);
      removeToken("LoginUserName");
      sessionStorage.removeItem('token')

      if (process.env.NODE_ENV !== "production") {
        removeLocalToken(tokenKey);
      }
      if (!getConfig("ID4_LOGINTYPE")) {
        if (getConfig("NEW_LOGIN")) {
          window.location = `${getConfig(
            "USER_CENTER_URL",
            this
          )}/#/login?redirect=${window.location.href}`;
        } else {
          this.$router.push(`/login?redirect=%2F`);
        }
      } else {
        window.$mgr.signoutRedirect();
      }
    },
    open() {
      this.dialogVisible = true;
    },
    openConfirm() {
      this.$confirm("确定修改密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.changePwd();
          this.closeAll();
        })
        .catch(() => {
          this.closeAll();
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    async changePwd() {
      await this.$http
        .put("api.UpdatePwd", {
          oldPassword: this.oldPwd,
          newPassword: this.newPwd,
        })
        .then((res) => {
          this.$msg(res);
          if (res.code === 0) {
            this.dialogVisible = false;
            this.innerVisible = false;
          } else {
            this.dialogVisible = false;
          }
        })
        .catch((err) => {
          console.log("err");
        });
    },
    subApiFormate(metaApi) {
      const _api = [];
      metaApi.forEach((el) => {
        const url = API[el[1]] ? API[el[1]] : el[1];
        const method = el[0];
        const moduleName = this.__getURLPrefix(url);
        const formateApi = [moduleName, this.__getAbsURL(url), method];
        _api.push(formateApi);
      });
      return _api;
    },
    __getURLPrefix(_url) {
      if (!_url.startsWith("@")) return "";
      const reg = /(^@.+?\/)/g;
      reg.test(_url);
      const replaceStr = RegExp.$1;
      const apiKey = replaceStr.substr(1, replaceStr.length - 2);
      const apis = getConfig("apis");
      return apis && apis.hasOwnProperty(apiKey)
        ? getConfig("apis")[apiKey].Name
        : "";
    },
    __getAbsURL(_url) {
      if (_url.startsWith("@")) {
        const reg = /(^@.+?\/)/g;
        reg.test(_url);
        const replaceStr = RegExp.$1;
        _url = _url.replace(replaceStr, "");
      }
      return _url;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    .is-dot {
      height: 40px;
      line-height: 40px;
      margin-top: 10px;
      width: 60px;
      // background: saddlebrown;
      text-align: center;
      cursor: pointer;
    }

    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
