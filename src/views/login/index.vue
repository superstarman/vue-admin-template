<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <img src="@/assets/images/logo.png" />
        <h3>{{$t('login.logoName')}}</h3>
      </div>
      <div class="header-right">
        <lang-select />
      </div>
    </div>
    <div class="banner">
      <img alt src="../../assets/images/login/login_bg.jpg" />
      <div class="login-container">
        <el-form
          :model="loginForm"
          :rules="loginRules"
          auto-complete="on"
          class="login-form"
          label-position="left"
          ref="loginForm"
        >
          <div class="login-title">{{$t('login.title')}}</div>

          <el-form-item class="user-item" prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              :placeholder="$t('login.username')"
              auto-complete="on"
              name="username"
              ref="username"
              tabindex="1"
              type="text"
              v-model="loginForm.username"
            />
            <span class="stick"></span>
          </el-form-item>
          <el-tooltip
            :content="$t('login.capsTips')"
            manual
            placement="right"
            v-model="capsTooltip"
          >
            <el-form-item class="psw-item" prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                :key="passwordType"
                :placeholder="$t('login.password')"
                :type="passwordType"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
                @keyup.native="checkCapsLock"
                auto-complete="on"
                name="password"
                ref="password"
                tabindex="2"
                v-model="loginForm.password"
              />
              <span class="stick"></span>
              <span @click="showPwd" class="show-pwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
          </el-tooltip>
          <el-button
            :loading="loading"
            @click.native.prevent="handleLogin"
            type="default"
          >{{$t('login.logIn')}}</el-button>

          <div class="tips">{{$t('login.tips')}}</div>
        </el-form>
      </div>
    </div>
    <div class="foot">
      <div class="copyright">{{$t('login.copyright')}}</div>
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
import { validUsername } from '@/utils/validate'
import { generateTitle } from '@/utils/i18n'

export default {
  name: 'Login',
  components: { LangSelect },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error(this.$t('login.errorTips1')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error(this.$t('login.errorTips2')))
      } else if (value.length > 20) {
        callback(new Error(this.$t('login.errorTips3')))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: 'admin',
        password: '111111',
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername },
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },
      loading: false,
      capsTooltip: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  methods: {
    checkCapsLock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z'
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch((err) => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    generateTitle,
  },
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #f0f0f0;
$gray: #666;
$default: #4fc08d;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-form-item {
    width: 300px;
    height: 45px;
    margin: 0 auto;
    background-color: $bg;
    border-radius: 5px;
    color: #454545;
    border: 1px solid transparent;
    .el-input {
      display: inline-block;
      height: 45px;
      width: 80%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 25px;
        color: $gray;
        height: 45px;
        caret-color: $cursor;
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
  }
  .el-button {
    display: block;
    width: 300px;
    height: 50px;
    margin: 40px auto;
    border-radius: 0;
    color: #fff;
    background-color: $default;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #f2f2f2;
$gray: #666;
$default: #4fc08d;

.container {
  position: relative;
  width: 100%;
  background-color: $bg;
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    .header-left {
      display: flex;
      align-items: center;
      height: 50px;
      float: left;
      img {
        width: 32px;
        height: 32px;
      }
      h3 {
        color: #4fc08d;
        font-weight: 600;
        font-size: 18px;
        margin-left: 8px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      }
    }
    .header-right {
      float: right;
      margin-right: 20px;
    }
  }
  .banner {
    position: relative;
    min-width: 375px;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
    }
    .login-container {
      position: absolute;
      top: 90px;
      right: 8%;
      width: 348px;
      height: 390px;
      background-color: #fff;
      @media screen and (max-width: 992px) {
        right: 50%;
        margin-right: -174px;
      }
      .login-form {
        .login-title {
          width: 100%;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 24px;
          color: #000;
          margin-top: 25px;
        }
        .el-form-item {
          .stick {
            position: absolute;
            top: 14px;
            left: 40px;
            width: 1px;
            height: 18px;
            background-color: #cbcbcb;
          }
          .svg-container {
            padding: 2px 5px 6px 15px;
            color: $gray;
            vertical-align: middle;
            width: 30px;
            font-size: 16px;
            display: inline-block;
          }

          .show-pwd {
            position: absolute;
            right: 8px;
            top: 4px;
            font-size: 16px;
            color: $gray;
            cursor: pointer;
            user-select: none;
          }
        }
        .user-item {
          margin-top: 20px;
        }
        .psw-item {
          margin-top: 30px;
        }
        .psw-item-focus {
          border-color: $default;
        }

        .tips {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 12px;
          color: #333;
        }
      }
    }
  }
  .foot {
    position: absolute;
    bottom: -60px;
    left: 0;
    width: 100%;
    .copyright {
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 12px;
      color: #333;
    }
  }
}
</style>
