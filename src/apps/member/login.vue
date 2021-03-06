<template>
    <div class="login-wrap">
        <div class="vt-login">
            <div class="vt-title">
                TDP Cloud
            </div>
            <el-form ref="formRef" :model="formModel" :rules="formRules" label-width="0px" class="vt-content">
                <el-form-item prop="username">
                    <el-input v-model="formModel.username" placeholder="用户名">
                        <template #prepend>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formModel.password" type="password" placeholder="密码" @keyup.enter="formSubmit(formRef)">
                        <template #prepend>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="formSubmit(formRef)">
                        登录
                    </el-button>
                </div>
                <div class="login-btn">
                    <router-link to="/member/register">
                        <el-button>注册</el-button>
                    </router-link>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { ElMessage, FormInstance, FormRules } from "element-plus"

import Api from "@/api"
import sessionStore from "@/store/session"

const router = useRouter()
const session = sessionStore()

const formRef = ref<FormInstance>()

const formModel = reactive({
    username: import.meta.env.VITE_USERNAME || "",
    password: import.meta.env.VITE_PASSWORD || "",
})

const formRules: FormRules = {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
}

const formSubmit = (form: FormInstance | undefined) => {
    form && form.validate(valid => {
        if (!valid) {
            ElMessage.error("请检查表单")
            return false
        }
        Api.user.login(formModel).then((data) => {
            ElMessage.success("登录成功")
            session.username = data.username
            session.description = data.description
            session.token = data.token
            session.keyid = data.keyid
            router.push("/")
        })
    })
}
</script>

<style lang="scss" scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: #324157;
    background-image: url(@/assets/img/bg01.jpg);
    background-size: cover;
}

.vt-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #333;
    border-bottom: 1px solid #ddd;
}

.vt-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}

.vt-content {
    padding: 30px 30px;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
</style>
