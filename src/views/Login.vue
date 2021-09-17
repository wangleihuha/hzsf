<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >快速登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    // 验证用户名
    var checkName = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{2,10}$/;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (!reg.test(value)) {
        return callback(
          new Error("用户名需为2至10位字符串，可包含中英文、数字或下划线")
        );
      } else {
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
    return {
      ruleForm: {
        pass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          // 发送post请求，执行注册
          console.log('发请求，执行登录业务...');
          this.axios
            .post(
              "/login",
              `username=${this.ruleForm.username}&password=${this.ruleForm.pass}`
            )
            .then((result) => {
              console.log(result);
              if (result.data.code == 200) {
                // 登录成功
                alert("登录成功！");
                // this.$toast({
                //   message: '注册成功',
                //   position: 'bottom',
                //   duration: 3000
                // })
                this.$router.push("/");
              } else if (result.data.code == 201) {
                // 用户已存在
                alert("登录失败，账号或密码输入错误");
                // this.$toast({
                //   message: '注册失败，用户已存在',
                //   position: 'bottom',
                //   duration: 3000
                // })
              }
            });
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