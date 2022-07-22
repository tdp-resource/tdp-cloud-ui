import { ElMessage } from "element-plus"

import sessionStore from "@/store/session"

import { Message } from "./mesg"
import { HttpCache } from "./httpcache"

let session: ReturnType<typeof sessionStore>

type CacheParam = {
    cache: boolean
    version?: string
}


export class HttpClient {
    protected get session() {
        return session || (session = sessionStore())
    }

    protected async get(url: string, query?: unknown, cache?: CacheParam) {
        if (query) {
            url += "?" + this.buildQuery(query)
        }
        let httpCache: HttpCache | undefined = undefined
        if (cache?.cache) {
            httpCache = new HttpCache("/api" + url, "GET", {}, cache.version,)
            const cach_res = httpCache.Get()
            if (cach_res != null) {
                return cach_res
            }
        }
        const body = await fetch("/api" + url, {
            method: "GET",
            headers: this.buildHeader(),
        })
        const res = await this.parseResponse(body)
        if (httpCache) {
            httpCache.Set(res)
        }
        return res
    }

    protected async post(url: string, query: unknown, cache?: CacheParam) {
        let httpCache: HttpCache | undefined = undefined
        if (cache?.cache) {
            httpCache = new HttpCache("/api" + url, "GET", query, cache.version,)
            const cach_res = httpCache.Get()
            if (cach_res != null) {
                return cach_res
            }
        }
        const body = await fetch("/api" + url, {
            method: "POST",
            headers: this.buildHeader("json"),
            body: JSON.stringify(query || {}),
        })
        const res = await this.parseResponse(body)
        if (httpCache) {
            httpCache.Set(res)
        }
        return res
    }

    protected async patch(url: string, query: unknown) {
        const body = await fetch("/api" + url, {
            method: "PATCH",
            headers: this.buildHeader("json"),
            body: JSON.stringify(query || {}),
        })
        return this.parseResponse(body)
    }

    protected async delete(url: string, query?: unknown) {
        if (query) {
            url += "?" + this.buildQuery(query)
        }
        const body = await fetch("/api" + url, {
            method: "DELETE",
            headers: this.buildHeader(),
        })
        return this.parseResponse(body)
    }

    protected async parseResponse(body: Response) {
        const data = await body.json()

        if (data.Error) {
            const err = data.Error.Message || data.Error || "UKN"
            ElMessage.error(Message[err] || err)
            throw new Error(err)
        }

        if (data.Payload) {
            if (data.Payload.Message) {
                ElMessage.success(data.Payload.Message)
            }
            return data.Payload
        }

        return data
    }

    protected buildHeader(type?: string) {
        const headers: HeadersInit = {
            Accept: "application/json",
        }

        const keyid = this.session.keyid || 0
        const token = this.session.token || ""

        if (token) {
            headers.Authorization = keyid + ":" + token
        }

        if (type === "json") {
            headers["Content-Type"] = "application/json"
        }

        return headers
    }

    protected buildQuery(obj: unknown, key?: string) {
        if (!obj && !key) {
            return ""
        }

        if (obj == null) {
            return key + "="
        }

        const result = []

        switch (typeof obj) {
            case "string":
            case "number":
            case "boolean":
                result.push(key + "=" + encodeURIComponent(obj))
                break
            case "object":
                obj && Object.entries(obj).forEach(o => {
                    const [k, v] = o
                    const i = key ? key + "[" + k + "]" : k
                    result.push(this.buildQuery(v, i))
                })
                break
        }

        return result.join("&")
    }
}
