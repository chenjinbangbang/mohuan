<template>
  <div class="register">
    <el-form :model="dataForm" ref="dataForm" label-width="100px" size="small" :rules="rules">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="dataForm.username" placeholder="您的用户名"></el-input>
      </el-form-item>
      <el-form-item label="设置密码：" prop="password">
        <el-input type="password" v-model="dataForm.password" placeholder="至少为6位数"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="passwordCheck">
        <el-input type="password" v-model="dataForm.passwordCheck" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item label="中国+86：" prop="phone">
        <el-input v-model="dataForm.phone" placeholder="经常使用的手机号码"></el-input>
      </el-form-item>
      <el-form-item class="code">
        <div v-html="codeImg" @click="getCode" style="cursor:pointer;"></div>
        <p style="cursor:pointer;" @click="getCode">看不清，换一张</p>
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <el-input v-model="dataForm.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
    </el-form>
    <el-checkbox v-model="checked">我已阅读并同意《魔幻饰界注册协议》</el-checkbox>
    <el-button type="primary" @click="register" :loading="loading">注册</el-button>
  </div>
</template>

<script>
  import { register,getCode } from '@/api/users';
  export default {
    name: "register",
    components: {},
    data() {
      let passwordRule = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error("密码至少为6位数！"));
        } else {
          if (this.dataForm.passwordCheck !== "") {
            this.$refs.dataForm.validateField("passwordCheck");
          }
          callback();
        }
      };
      let passwordCheckRule = (rule, value, callback) => {
        if (value !== this.dataForm.password) {
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
      let codeRule = (rule, value, callback) => {
        value = value.toLowerCase();
        if (value !== this.code) {
          callback(new Error('输入验证码不正确！'));
        } else {
          callback();
        }
      };

      return {
        dataForm: {
          username: "",
          password: "",
          passwordCheck: "",
          phone: "",
          code: ""
        },
        checked: false,
        loading: false,
        codeImg: '',
        code: '',
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
          code: [
            { required: true, message: "请输入验证码", trigger: "blur" },
            { validator: codeRule, trigger: "blur" }
          ]
        }
      };
    },
    created(){
        this.getCode();
    },
    methods: {
      getCode(){
        getCode().then(res => {
          if(res.error_code === 0){
            //console.log(res.data);
            this.codeImg = res.data.data;
            this.code = res.data.text.toLowerCase();
            this.dataForm.code = this.code;
          }
        });
      },
      register(){
        this.$refs['dataForm'].validate(valid => {

          if(valid){

            this.loading = true;
            let data = {
              username: this.dataForm.username,
              password: this.dataForm.password,
              phone: this.dataForm.phone,
            };

            register(data).then(res => {
              if(res.error_code === 0){
                this.$message.success({message: '注册成功！',duration:1500,center:true,onClose: () => {
                  this.$router.push({path: '/'});
                }});
              }
              this.loading = false;
            });
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
      .code{ display:flex;
        div{
          margin-left:-80px;
        }
        p{ margin:-45px 0 0 25px; cursor:pointer;}
      }
    }
    .el-button {
      width: 100%;
      margin-top: 10px;
      background-color:#5BC0DE;
      border-color:#5BC0DE;
    }
  }
</style>
