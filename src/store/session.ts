import { defineStore } from "pinia"

import type { SecretItem } from "@/api/local/secret"

export default defineStore("session", {
    state() {
        return {
            token: "",
            username: "",
            description: "",
            secretList: [] as SecretItem[],
            keyid: 0,
            keyname: "",
        }
    },
    actions: {
        // 更新密钥列表
        setSecrets(data: SecretItem[]) {
            this.secretList = data
            if (data.length > 0) {
                this.useSecret(this.keyid > 0 ? this.keyid : data[0].Id)
            }
        },
        // 设置当前密钥
        useSecret(id: number) {
            for (const item of this.secretList) {
                if (id - item.Id === 0) {
                    this.keyname = item.Description
                    this.keyid = item.Id
                    break
                }
            }
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: "tdp/session",
                storage: localStorage,
            },
        ],
    },
})
