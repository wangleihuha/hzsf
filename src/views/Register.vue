<template>
  <div class="register-part">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="scss">
.register-part {
  position: relative;
  .demo-ruleForm {
    width: 500px;
    position: absolute;
    right: 500px;
    top: 200px;
  }
}
</style>
<script>
export default {
  data() {
    // 验证用户名
    var checkName = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{2,10}$/;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }else if(!reg.test(value)){
        return callback(new Error("用户名需为2至10位字符串，可包含中英文、数字或下划线"));
      }else{
        // 若验证通过，调用回调函数
        callback();
      }
      
    };
    // 验证密码
    var validatePass = (rule, value, callback) => {
      let reg = /^\d{6}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    // 验证确认密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          // 发送post请求，执行注册
          console.log(this.ruleForm);
          this.axios.post('/register',`username=${this.ruleForm.username}&password=${this.ruleForm.pass}`).then(result=>{
            console.log(result);
            if(result.data.code==200){ // 注册成功
              alert('注册成功！');
              // this.$toast({
              //   message: '注册成功',
              //   position: 'bottom',
              //   duration: 3000
              // })
              this.$router.push('/login');
            }else if(result.data.code==201){ // 用户已存在
              alert('啊哦！注册失败，您输入的用户名已存在');
              // this.$toast({
              //   message: '注册失败，用户已存在',
              //   position: 'bottom',
              //   duration: 3000
              // })
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>