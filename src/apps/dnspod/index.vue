<template>
    <div>
        <el-breadcrumb separator="/" class="crumbs">
            <el-breadcrumb-item to="/">
                首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                域名列表
            </el-breadcrumb-item>
        </el-breadcrumb>
        <el-card v-if="domainDescribe && domainDescribe.DomainCountInfo" shadow="hover">
            <template #header>
                <div class="card-header">
                    <b>域名列表</b> &nbsp;
                    <small>域名总数: {{ domainDescribe.DomainCountInfo.AllTotal }}</small>
                </div>
            </template>
            <el-table :data="domainDescribe.DomainList" table-layout="fixed">
                <el-table-column fixed prop="Name" label="域名" min-width="150" />
                <el-table-column label="状态" min-width="100">
                    <template #default="scope">
                        {{ DomainStatusMap[scope.row.Status] }}
                    </template>
                </el-table-column>
                <el-table-column prop="RecordCount" label="记录数" min-width="100" />
                <el-table-column prop="EffectiveDNS" label="NS 服务器" min-width="250" />
                <el-table-column label="NS 记录" min-width="100">
                    <template #default="scope">
                        {{ scope.row.DNSStatus ? "错误" : "正常" }}
                    </template>
                </el-table-column>
                <el-table-column prop="GradeTitle" label="套餐" min-width="100" />
                <el-table-column prop="VipEndAt" label="套餐有效期" min-width="180" />
                <el-table-column fixed="right" label="操作" width="180" align="center">
                    <template #default="scope">
                        <router-link :to="'/dnspod/detail/' + scope.row.Name">
                            <el-button link type="primary" icon="View">
                                查看
                            </el-button>
                        </router-link>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import Api, { Dnspod } from "@/api"

import { DomainStatusMap } from "@/api/qcloud/dnspod"

const domainDescribe = ref<Dnspod.DescribeDomainListResponse>()

Api.dnspod.describeDomainList().then((res) => {
    domainDescribe.value = res
})
</script>

<style lang="scss" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
