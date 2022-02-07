<template>
    <div class="login">
        <el-card class="login-card">
            <h2>登录</h2>
            <el-form ref="form" :model="loginForm" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { login } from '@/api/index'
    const router = useRouter()
    const loginForm = reactive({
        username: 'user0',
        password: '123456'
    })
    const onLogin = () => {
        login(loginForm).then(res => {
            if (res.success) {
                const { userId, username, token } = res.content
                localStorage.setItem('userInfo', JSON.stringify({
                    userId, username
                }))
                localStorage.setItem('token', token)
                router.push('/home')
            }
        })
    }
</script>

<style lang="scss" scoped>
    .login {
        .login-card {
            h2 {
                text-align: center;
                font-size: 24px;
                margin-bottom: 20px;
            }
            width: 400px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>