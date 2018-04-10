<template>
    <div class="register">
        <el-form ref="formData" :model="formData" label-width="100px" size="small" :rules="rules">
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="formData.username" placeholder="您的用户名"></el-input>
          </el-form-item>
          <el-form-item label="设置密码：" prop="password">
            <el-input v-model="formData.password" placeholder="至少为6位数"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="passwordCheck">
            <el-input v-model="formData.passwordCheck" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="中国+86：" prop="phone">
            <el-input v-model="formData.phone" placeholder="经常使用的手机号码"></el-input>
          </el-form-item>
          <el-form-item class="code">
            <img src="../assets/img/code.png" alt="">
            <p>看不清，换一张</p>
          </el-form-item>
          <el-form-item label="验证码：" prop="code">
            <el-input v-model="formData.code" placeholder="请输入验证码"></el-input>
          </el-form-item>
        </el-form>
        <el-checkbox v-model="checked">我已阅读并同意《魔幻饰界注册协议》</el-checkbox>
        <el-button type="primary" @click="register" :loading="loading">注册</el-button>
    </div>
</template>

<script>
export default {
  name: "register",
  components: {},
  data() {
    let passwordRule = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码至少为6位数！"));
      } else {
        if (this.formData.passwordCheck !== "") {
          this.$refs.formData.validateField("passwordCheck");
        } else {
          callback();
        }
      }
    };
    let passwordCheckRule = (rule, value, callback) => {
      if (value !== this.formData.password) {
        callback(new Error("两次输入密码不一致！"));
      } else {
        callback();
      }
    };
    let phoneRule = (rule, value, callback) => {
      let valReg = /^1[34578]\d{9}$/;
      if (!valReg.test(value)) {
        callback(new Error('手机号码格式有误！'));
      } else {
        callback();
      }
    };
    return {
      formData: {
        username: "",
        password: "",
        passwordCheck: "",
        phone: "",
        code: ""
      },
      checked: false,
      loading: false,
      rules: {
        username: {
          required: true,
          message: "用户名不能为空",
          trigger: "blur"
        },
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { validator: passwordRule, trigger: "blur" }
        ],
        passwordCheck: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { validator: passwordCheckRule, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          { validator: phoneRule, trigger: "blur" }
        ],
        code: {
          required: true,
          message: "请输入验证码",
          trigger: "blur"
        },
      }
    };
  },
  methods: {
    register(){
      this.$refs.formData.validate(valid => {
        if(valid){
          this.loading = true;
          
        }
      });
    }
  }
};
</script>

<style lang="scss">
.register {
  width: 450px;
  margin: auto;
  padding: 40px 0;
  .el-form {
    .code{
      img{ margin-left:-100px;}
      p{ margin:-50px 0 0 5px; cursor:pointer;}
    }
  }
  .el-button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
