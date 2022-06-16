import { defineStore } from "pinia"

interface SecretItem {
  Description: string
  Id: number
}

export default defineStore("session", {
  state() {
    return {
      token: "",
      username: "",
      secretList: [] as SecretItem[],
      keyid: 0,
      keyname: "",
    }
  },
  actions: {
    // 更新密钥列表
    setSecrets(data: SecretItem[]) {
      this.secretList = data
      if (data.length > 0 && this.keyid < 1) {
        this.keyname = data[0].Description
        this.keyid = data[0].Id
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
        key: "vt_session",
        storage: localStorage,
      },
    ],
  },
})
