var et = Object.defineProperty
  , tt = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var Fe = Object.getOwnPropertySymbols;
var st = Object.prototype.hasOwnProperty
  , ot = Object.prototype.propertyIsEnumerable;
var Ae = (t,n,s)=>n in t ? et(t, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[n] = s
  , b = (t,n)=>{
    for (var s in n || (n = {}))
        st.call(n, s) && Ae(t, s, n[s]);
    if (Fe)
        for (var s of Fe(n))
            ot.call(n, s) && Ae(t, s, n[s]);
    return t
}
  , D = (t,n)=>tt(t, nt(n));
import {R as e, c as x, r as d, f as fe, E as $e, a as le, b as at, d as _, e as he, u as Le, g as rt, h as T, i as Ie, j as Ee, Z as G, k as lt, l as ye, m as ct, n as xe, o as it, p as ut, q as mt, s as ee, t as dt, A as pt, F as ft, v as ht, N as Et, S as yt, w as Be, x as xt, H as gt} from "./vendor.ca041cc5.js";
const vt = function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        a(o);
    new MutationObserver(o=>{
        for (const r of o)
            if (r.type === "childList")
                for (const l of r.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && a(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(o) {
        const r = {};
        return o.integrity && (r.integrity = o.integrity),
        o.referrerpolicy && (r.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials" ? r.credentials = "include" : o.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function a(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const r = s(o);
        fetch(o.href, r)
    }
};
vt();
function X() {
    return navigator.userAgent === "ClashX Runtime"
}
let N = null;
class wt {
    constructor(n) {
        this.instance = null,
        window.WebViewJavascriptBridge != null && (this.instance = window.WebViewJavascriptBridge),
        this.initBridge(s=>{
            this.instance = s,
            n()
        }
        )
    }
    initBridge(n) {
        if (!X())
            return n == null ? void 0 : n(null);
        if (window.WebViewJavascriptBridge != null)
            return n(window.WebViewJavascriptBridge);
        if (window.WVJBCallbacks != null)
            return window.WVJBCallbacks.push(n);
        window.WVJBCallbacks = [n];
        const s = document.createElement("iframe");
        s.style.display = "none",
        s.src = "https://__bridge_loaded__",
        document.documentElement.appendChild(s),
        setTimeout(()=>document.documentElement.removeChild(s), 0)
    }
    async callHandler(n, s) {
        return await new Promise(a=>{
            var o;
            (o = this.instance) == null || o.callHandler(n, s, a)
        }
        )
    }
    async ping() {
        return await this.callHandler("ping")
    }
    async readConfigString() {
        return await this.callHandler("readConfigString")
    }
    async getPasteboard() {
        return await this.callHandler("getPasteboard")
    }
    async getAPIInfo() {
        return await this.callHandler("apiInfo")
    }
    async setPasteboard(n) {
        return await this.callHandler("setPasteboard", n)
    }
    async writeConfigWithString(n) {
        return await this.callHandler("writeConfigWithString", n)
    }
    async setSystemProxy(n) {
        return await this.callHandler("setSystemProxy", n)
    }
    async getStartAtLogin() {
        return await this.callHandler("getStartAtLogin")
    }
    async getProxyDelay(n) {
        return await this.callHandler("speedTest", n)
    }
    async setStartAtLogin(n) {
        return await this.callHandler("setStartAtLogin", n)
    }
    async isSystemProxySet() {
        return await this.callHandler("isSystemProxySet")
    }
}
function Ct(t) {
    if (N != null) {
        t();
        return
    }
    N = new wt(t)
}
function W(t) {
    const {title: n, children: s, className: a, style: o} = t;
    return e.createElement("header", {
        className: x("header", a),
        style: o
    }, e.createElement("h1", {
        className: "md:text-xl"
    }, n), e.createElement("div", {
        className: "flex flex-auto items-center justify-end"
    }, s))
}
function R(t) {
    const {type: n, size: s=14, className: a, style: o} = t
      , r = x("clash-iconfont", `icon-${n}`, a)
      , l = b({
        fontSize: s
    }, o)
      , c = D(b({}, t), {
        className: r,
        style: l
    });
    return e.createElement("i", b({}, c))
}
function H() {}
function bt(t, n) {
    const s = []
      , a = [];
    for (const o of t)
        n(o) ? s.push(o) : a.push(o);
    return [s, a]
}
function M(t) {
    const n = ["B", "KB", "MB", "GB", "TB"];
    let s = 0;
    for (; ~~(t / 1024) && s < n.length; )
        t /= 1024,
        s++;
    return `${s === 0 ? t : t.toFixed(2)} ${n[s]}`
}
function ge(t) {
    const {className: n, checked: s=!1, disabled: a=!1, onChange: o=H} = t
      , r = x("switch", {
        checked: s,
        disabled: a
    }, n);
    function l() {
        a || o(!s)
    }
    return e.createElement("div", {
        className: r,
        onClick: l
    }, e.createElement(R, {
        className: "switch-icon font-bold",
        type: "check",
        size: 20
    }))
}
const U = d.exports.forwardRef((t,n)=>{
    const {className: s, style: a, children: o} = t;
    return e.createElement("div", {
        className: x("card", s),
        style: a,
        ref: n
    }, o)
}
);
function Te(t) {
    const {options: n, value: s, onSelect: a} = t;
    return e.createElement("div", {
        className: "button-select"
    }, n.map(o=>e.createElement("button", {
        value: o.value,
        key: o.value,
        className: x("button-select-options", {
            actived: s === o.value
        }),
        onClick: ()=>a == null ? void 0 : a(o.value)
    }, o.label)))
}
const Nt = {
    SideBar: {
        Proxies: "Proxies",
        Overview: "Overview",
        Logs: "Logs",
        Rules: "Rules",
        Settings: "Setting",
        Connections: "Connections",
        Version: "Version"
    },
    Settings: {
        title: "Settings",
        labels: {
            startAtLogin: "Start at login",
            language: "language",
            setAsSystemProxy: "Set as system proxy",
            allowConnectFromLan: "Allow connect from Lan",
            proxyMode: "Mode",
            socks5ProxyPort: "Socks5 proxy port",
            httpProxyPort: "HTTP proxy port",
            mixedProxyPort: "Mixed proxy port",
            externalController: "External controller"
        },
        values: {
            cn: "\u4E2D\u6587",
            en: "English",
            global: "Global",
            rules: "Rules",
            direct: "Direct",
            script: "Script"
        },
        versionString: "Current ClashX is the latest version\uFF1A{{version}}",
        checkUpdate: "Check Update",
        externalControllerSetting: {
            title: "External Controller",
            note: "Please note that modifying this configuration will only configure Dashboard. Will not modify your Clash configuration file. Please make sure that the external controller address matches the address in the Clash configuration file, otherwise, Dashboard will not be able to connect to Clash.",
            host: "Host",
            port: "Port",
            secret: "Secret"
        }
    },
    Logs: {
        title: "Logs"
    },
    Rules: {
        title: "Rules",
        providerTitle: "Providers",
        providerUpdateTime: "Last updated at",
        ruleCount: "Rule count"
    },
    Connections: {
        title: "Connections",
        keepClosed: "Keep closed connections",
        total: {
            text: "total",
            upload: "upload",
            download: "download"
        },
        closeAll: {
            title: "Warning",
            content: "This would close all connections"
        },
        filter: {
            all: "All"
        },
        columns: {
            host: "Host",
            network: "Network",
            type: "Type",
            chains: "Chains",
            rule: "Rule",
            time: "Time",
            speed: "Speed",
            upload: "Upload",
            download: "Download",
            sourceIP: "Source IP"
        },
        info: {
            title: "Connection",
            id: "ID",
            host: "Host",
            hostEmpty: "Empty",
            dstIP: "IP",
            dstIPEmpty: "Empty",
            srcIP: "Source",
            upload: "Upload",
            download: "Download",
            network: "Network",
            inbound: "Inbound",
            rule: "Rule",
            chains: "Chains",
            status: "Status",
            opening: "Open",
            closed: "Closed",
            closeConnection: "Close"
        }
    },
    Proxies: {
        title: "Proxies",
        editDialog: {
            title: "Edit Proxy",
            color: "Color",
            name: "Name",
            type: "Type",
            server: "Server",
            port: "Port",
            password: "Password",
            cipher: "Cipher",
            obfs: "Obfs",
            "obfs-host": "Obfs-host",
            uuid: "UUID",
            alterId: "AlterId",
            tls: "TLS"
        },
        groupTitle: "Policy Group",
        providerTitle: "Providers",
        providerUpdateTime: "Last updated at",
        expandText: "Expand",
        collapseText: "Collapse",
        speedTestText: "Speed Test",
        breakConnectionsText: "Close connections which include the group"
    },
    Modal: {
        ok: "Ok",
        cancel: "Cancel"
    }
}
  , Pt = {
    SideBar: {
        Proxies: "\u4EE3\u7406",
        Overview: "\u603B\u89C8",
        Logs: "\u65E5\u5FD7",
        Rules: "\u89C4\u5219",
        Settings: "\u8BBE\u7F6E",
        Connections: "\u8FDE\u63A5",
        Version: "\u7248\u672C"
    },
    Settings: {
        title: "\u8BBE\u7F6E",
        labels: {
            startAtLogin: "\u5F00\u673A\u65F6\u542F\u52A8",
            language: "\u8BED\u8A00",
            setAsSystemProxy: "\u8BBE\u7F6E\u4E3A\u7CFB\u7EDF\u4EE3\u7406",
            allowConnectFromLan: "\u5141\u8BB8\u6765\u81EA\u5C40\u57DF\u7F51\u7684\u8FDE\u63A5",
            proxyMode: "\u4EE3\u7406\u6A21\u5F0F",
            socks5ProxyPort: "Socks5 \u4EE3\u7406\u7AEF\u53E3",
            httpProxyPort: "HTTP \u4EE3\u7406\u7AEF\u53E3",
            mixedProxyPort: "\u6DF7\u5408\u4EE3\u7406\u7AEF\u53E3",
            externalController: "\u5916\u90E8\u63A7\u5236\u8BBE\u7F6E"
        },
        values: {
            cn: "\u4E2D\u6587",
            en: "English",
            global: "\u5168\u5C40",
            rules: "\u89C4\u5219",
            direct: "\u76F4\u8FDE",
            script: "\u811A\u672C"
        },
        versionString: "\u5F53\u524D ClashX \u5DF2\u662F\u6700\u65B0\u7248\u672C\uFF1A{{version}}",
        checkUpdate: "\u68C0\u67E5\u66F4\u65B0",
        externalControllerSetting: {
            title: "\u7F16\u8F91\u5916\u90E8\u63A7\u5236\u8BBE\u7F6E",
            note: "\u8BF7\u6CE8\u610F\uFF0C\u4FEE\u6539\u8BE5\u914D\u7F6E\u9879\u5E76\u4E0D\u4F1A\u4FEE\u6539\u4F60\u7684 Clash \u914D\u7F6E\u6587\u4EF6\uFF0C\u8BF7\u786E\u8BA4\u4FEE\u6539\u540E\u7684\u5916\u90E8\u63A7\u5236\u5730\u5740\u548C Clash \u914D\u7F6E\u6587\u4EF6\u5185\u7684\u5730\u5740\u4E00\u81F4\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4 Dashboard \u65E0\u6CD5\u8FDE\u63A5\u3002",
            host: "Host",
            port: "\u7AEF\u53E3",
            secret: "\u5BC6\u94A5"
        }
    },
    Logs: {
        title: "\u65E5\u5FD7"
    },
    Rules: {
        title: "\u89C4\u5219",
        providerTitle: "\u89C4\u5219\u96C6",
        providerUpdateTime: "\u6700\u540E\u66F4\u65B0\u4E8E",
        ruleCount: "\u89C4\u5219\u6761\u6570"
    },
    Connections: {
        title: "\u8FDE\u63A5",
        keepClosed: "\u4FDD\u7559\u5173\u95ED\u8FDE\u63A5",
        total: {
            text: "\u603B\u91CF",
            upload: "\u4E0A\u4F20",
            download: "\u4E0B\u8F7D"
        },
        closeAll: {
            title: "\u8B66\u544A",
            content: "\u5C06\u4F1A\u5173\u95ED\u6240\u6709\u8FDE\u63A5"
        },
        filter: {
            all: "\u5168\u90E8"
        },
        columns: {
            host: "\u57DF\u540D",
            network: "\u7F51\u7EDC",
            type: "\u7C7B\u578B",
            chains: "\u8282\u70B9\u94FE",
            rule: "\u89C4\u5219",
            time: "\u8FDE\u63A5\u65F6\u95F4",
            speed: "\u901F\u7387",
            upload: "\u4E0A\u4F20",
            download: "\u4E0B\u8F7D",
            sourceIP: "\u6765\u6E90 IP"
        },
        info: {
            title: "\u8FDE\u63A5\u4FE1\u606F",
            id: "ID",
            host: "\u57DF\u540D",
            hostEmpty: "\u7A7A",
            dstIP: "IP",
            dstIPEmpty: "\u7A7A",
            srcIP: "\u6765\u6E90",
            upload: "\u4E0A\u4F20",
            download: "\u4E0B\u8F7D",
            network: "\u7F51\u7EDC",
            inbound: "\u5165\u53E3",
            rule: "\u89C4\u5219",
            chains: "\u4EE3\u7406",
            status: "\u72B6\u6001",
            opening: "\u8FDE\u63A5\u4E2D",
            closed: "\u5DF2\u5173\u95ED",
            closeConnection: "\u5173\u95ED\u8FDE\u63A5"
        }
    },
    Proxies: {
        title: "\u4EE3\u7406",
        editDialog: {
            title: "\u7F16\u8F91\u4EE3\u7406",
            color: "\u989C\u8272",
            name: "\u540D\u5B57",
            type: "\u7C7B\u578B",
            server: "\u670D\u52A1\u5668",
            port: "\u7AEF\u53E3",
            password: "\u5BC6\u7801",
            cipher: "\u52A0\u5BC6\u65B9\u5F0F",
            obfs: "Obfs",
            "obfs-host": "Obfs-host",
            uuid: "UUID",
            alterId: "AlterId",
            tls: "TLS"
        },
        groupTitle: "\u7B56\u7565\u7EC4",
        providerTitle: "\u4EE3\u7406\u96C6",
        providerUpdateTime: "\u6700\u540E\u66F4\u65B0\u4E8E",
        expandText: "\u5C55\u5F00",
        collapseText: "\u6536\u8D77",
        speedTestText: "\u6D4B\u901F",
        breakConnectionsText: "\u5207\u6362\u65F6\u6253\u65AD\u5305\u542B\u7B56\u7565\u7EC4\u7684\u8FDE\u63A5"
    },
    Modal: {
        ok: "\u786E \u5B9A",
        cancel: "\u53D6 \u6D88"
    }
}
  , Re = {
    en_US: Nt,
    zh_CN: Pt
}
  , St = Object.keys(Re);
function kt() {
    for (const t of window.navigator.languages) {
        if (t.includes("zh"))
            return "zh_CN";
        if (t.includes("us"))
            return "en_US"
    }
    return "en_US"
}
function ve(t) {
    return d.exports.useMemo(()=>{
        function s(a, o) {
            if (typeof a == "string")
                t(r=>{
                    const l = a
                      , c = o;
                    r[l] = c
                }
                );
            else if (typeof a == "function") {
                const r = a;
                t(l=>r(l))
            } else
                typeof a == "object" && t(r=>fe(r, l=>{
                    const c = a;
                    for (const u of Object.keys(c)) {
                        const f = u;
                        l[f] = c[f]
                    }
                }
                ))
        }
        return s
    }
    , [t])
}
class He {
    constructor(n) {
        this.EE = new $e,
        this.innerBuffer = [],
        this.isClose = !1,
        this.config = Object.assign({
            bufferLength: 0,
            retryInterval: 5e3,
            headers: {}
        }, n),
        this.config.useWebsocket ? this.websocketLoop() : this.loop()
    }
    websocketLoop() {
        var a;
        const n = new URL(this.config.url);
        n.protocol = n.protocol === "http:" ? "ws:" : "wss:",
        n.searchParams.set("token", (a = this.config.token) != null ? a : "");
        const s = new WebSocket(n.toString());
        s.addEventListener("message", o=>{
            const r = JSON.parse(o.data);
            this.EE.emit("data", [r]),
            this.config.bufferLength > 0 && (this.innerBuffer.push(r),
            this.innerBuffer.length > this.config.bufferLength && this.innerBuffer.splice(0, this.innerBuffer.length - this.config.bufferLength))
        }
        ),
        s.addEventListener("close", ()=>setTimeout(this.websocketLoop, this.config.retryInterval)),
        s.addEventListener("error", o=>{
            this.EE.emit("error", o),
            setTimeout(this.websocketLoop, this.config.retryInterval)
        }
        )
    }
    async loop() {
        const n = await le.fromPromise(fetch(this.config.url, {
            mode: "cors",
            headers: this.config.token ? {
                Authorization: `Bearer ${this.config.token}`
            } : {}
        }), o=>o);
        if (n.isErr()) {
            this.retry(n.error);
            return
        } else if (n.value.body == null) {
            this.retry(new Error("fetch body error"));
            return
        }
        const s = n.value.body.getReader()
          , a = new TextDecoder;
        for (; !this.isClose; ) {
            const o = await le.fromPromise(s == null ? void 0 : s.read(), c=>c);
            if (o.isErr()) {
                this.retry(o.error);
                break
            }
            const l = a.decode(o.value.value).trim().split(`
`).map(c=>JSON.parse(c));
            this.EE.emit("data", l),
            this.config.bufferLength > 0 && (this.innerBuffer.push(...l),
            this.innerBuffer.length > this.config.bufferLength && this.innerBuffer.splice(0, this.innerBuffer.length - this.config.bufferLength))
        }
    }
    retry(n) {
        this.isClose || (this.EE.emit("error", n),
        window.setTimeout(()=>{
            this.loop()
        }
        , this.config.retryInterval))
    }
    subscribe(n, s) {
        this.EE.addListener(n, s)
    }
    unsubscribe(n, s) {
        this.EE.removeListener(n, s)
    }
    buffer() {
        return this.innerBuffer.slice()
    }
    destory() {
        this.EE.removeAllListeners(),
        this.isClose = !0
    }
}
class Dt {
    constructor(n, s) {
        this.axiosClient = at.create({
            baseURL: n,
            headers: s ? {
                Authorization: `Bearer ${s}`
            } : {}
        })
    }
    async getConfig() {
        return await this.axiosClient.get("configs")
    }
    async updateConfig(n) {
        return await this.axiosClient.patch("configs", n)
    }
    async getRules() {
        return await this.axiosClient.get("rules")
    }
    async getProxyProviders() {
        const n = await this.axiosClient.get("providers/proxies", {
            validateStatus(s) {
                return s >= 200 && s < 300 || s === 404
            }
        });
        return n.status === 404 && (n.data = {
            providers: {}
        }),
        n
    }
    async getRuleProviders() {
        return await this.axiosClient.get("providers/rules")
    }
    async updateProvider(n) {
        return await this.axiosClient.put(`providers/proxies/${encodeURIComponent(n)}`)
    }
    async updateRuleProvider(n) {
        return await this.axiosClient.put(`providers/rules/${encodeURIComponent(n)}`)
    }
    async healthCheckProvider(n) {
        return await this.axiosClient.get(`providers/proxies/${encodeURIComponent(n)}/healthcheck`)
    }
    async getProxies() {
        return await this.axiosClient.get("proxies")
    }
    async getProxy(n) {
        return await this.axiosClient.get(`proxies/${encodeURIComponent(n)}`)
    }
    async getVersion() {
        return await this.axiosClient.get("version")
    }
    async getProxyDelay(n) {
        return await this.axiosClient.get(`proxies/${encodeURIComponent(n)}/delay`, {
            params: {
                timeout: 5e3,
                url: "http://www.gstatic.com/generate_204"
            }
        })
    }
    async closeAllConnections() {
        return await this.axiosClient.delete("connections")
    }
    async closeConnection(n) {
        return await this.axiosClient.delete(`connections/${n}`)
    }
    async getConnections() {
        return await this.axiosClient.get("connections")
    }
    async changeProxySelected(n, s) {
        return await this.axiosClient.put(`proxies/${encodeURIComponent(n)}`, {
            name: s
        })
    }
}
const Ft = _(async()=>{
    if (!X())
        return null;
    const t = await N.getAPIInfo();
    return {
        hostname: t.host,
        port: t.port,
        secret: t.secret,
        protocol: "http:"
    }
}
)
  , Me = he("externalControllers", []);
function te() {
    var f, i, m, h, E, w, F, A, L, k, P, I, V, J, j;
    const t = Le(Ft)
      , n = rt()
      , s = Le(Me);
    if (t != null)
        return t;
    let a;
    {
        const O = document.querySelector('meta[name="external-controller"]');
        ((f = O == null ? void 0 : O.content) == null ? void 0 : f.match(/^https?:/)) != null && (a = new URL(O.content))
    }
    const o = new URLSearchParams(n.search)
      , r = (E = (h = (m = o.get("host")) != null ? m : (i = s == null ? void 0 : s[0]) == null ? void 0 : i.hostname) != null ? h : a == null ? void 0 : a.hostname) != null ? E : "127.0.0.1"
      , l = (L = (A = (F = o.get("port")) != null ? F : (w = s == null ? void 0 : s[0]) == null ? void 0 : w.port) != null ? A : a == null ? void 0 : a.port) != null ? L : "9090"
      , c = (V = (I = (P = o.get("secret")) != null ? P : (k = s == null ? void 0 : s[0]) == null ? void 0 : k.secret) != null ? I : a == null ? void 0 : a.username) != null ? V : ""
      , u = ((J = o.get("protocol")) != null ? J : r === "127.0.0.1") ? "http:" : (j = a == null ? void 0 : a.protocol) != null ? j : window.location.protocol;
    return {
        hostname: r,
        port: l,
        secret: c,
        protocol: u
    }
}
const At = _({
    key: "",
    instance: null
});
function $() {
    const {hostname: t, port: n, secret: s, protocol: a} = te()
      , [o,r] = T(At)
      , l = `${a}//${t}:${n}?secret=${s}`;
    if (o.key === l)
        return o.instance;
    const c = new Dt(`${a}//${t}:${n}`,s);
    return r({
        key: l,
        instance: c
    }),
    c
}
const we = _(!0)
  , $t = he("language", void 0);
function S() {
    const [t,n] = T($t)
      , s = d.exports.useMemo(()=>t != null ? t : kt(), [t])
      , a = d.exports.useCallback(function(o) {
        function r(l) {
            return lt(Re[s][o], l)
        }
        return {
            t: r
        }
    }, [s]);
    return {
        lang: s,
        locales: St,
        setLang: n,
        translation: a
    }
}
const Ue = _({
    version: "",
    premium: !1
});
function ce() {
    const [t,n] = T(Ue)
      , s = $()
      , a = Ee(we);
    return G([s], async function() {
        const o = await le.fromPromise(s.getVersion(), r=>r);
        a(o.isOk()),
        n(o.isErr() ? {
            version: "",
            premium: !1
        } : {
            version: o.value.data.version,
            premium: !!o.value.data.premium
        })
    }),
    t
}
function Oe() {
    const [{premium: t}] = T(Ue)
      , n = $()
      , {data: s, mutate: a} = G(["/providers/rule", n, t], async()=>{
        if (!t)
            return [];
        const o = await n.getRuleProviders();
        return Object.keys(o.data.providers).map(r=>o.data.providers[r])
    }
    );
    return {
        providers: s != null ? s : [],
        update: a
    }
}
const Lt = he("profile", {
    breakConnections: !1
});
function ze() {
    const [t,n] = T(Lt)
      , s = d.exports.useCallback(a=>{
        n(fe(t, a))
    }
    , [t, n]);
    return {
        data: t,
        set: ve(s)
    }
}
const We = _([]);
function je() {
    const [t,n] = T(We)
      , s = $()
      , {data: a, mutate: o} = G(["/providers/proxy", s], async()=>{
        const r = await s.getProxyProviders();
        return Object.keys(r.data.providers).map(l=>r.data.providers[l]).filter(l=>l.name !== "default").filter(l=>l.vehicleType !== "Compatible")
    }
    );
    return d.exports.useEffect(()=>{
        n(a != null ? a : [])
    }
    , [a, n]),
    {
        providers: t,
        update: o
    }
}
function Ce() {
    const t = $()
      , {data: n, mutate: s} = G(["/config", t], async()=>{
        var r;
        const o = (await t.getConfig()).data;
        return {
            port: o.port,
            socksPort: o["socks-port"],
            mixedPort: (r = o["mixed-port"]) != null ? r : 0,
            redirPort: o["redir-port"],
            mode: o.mode.toLowerCase(),
            logLevel: o["log-level"],
            allowLan: o["allow-lan"]
        }
    }
    );
    return {
        general: n != null ? n : {},
        update: s
    }
}
const _e = Ie({
    proxies: [],
    groups: [],
    global: {
        name: "GLOBAL",
        type: "Selector",
        now: "",
        history: [],
        all: []
    }
});
function ie() {
    const [t,n] = T(_e)
      , s = ve(n)
      , a = $()
      , {mutate: o} = G(["/proxies", a], async()=>{
        const l = await a.getProxies()
          , c = l.data.proxies.GLOBAL;
        c.name = "GLOBAL";
        const u = new Set(["Selector", "URLTest", "Fallback", "LoadBalance"])
          , f = new Set(["DIRECT", "REJECT", "GLOBAL"])
          , i = c.all.filter(E=>!f.has(E)).map(E=>D(b({}, l.data.proxies[E]), {
            name: E
        }))
          , [m,h] = bt(i, E=>!u.has(E.type));
        s({
            proxies: m,
            groups: h,
            global: c
        })
    }
    )
      , r = d.exports.useCallback((l,c)=>{
        s(u=>{
            l === "GLOBAL" && (u.global.now = c);
            for (const f of u.groups)
                f.name === l && (f.now = c)
        }
        )
    }
    , [s]);
    return {
        proxies: t.proxies,
        groups: t.groups,
        global: t.global,
        update: o,
        markProxySelected: r,
        set: s
    }
}
const It = _(t=>{
    const n = t(_e)
      , s = t(We)
      , a = new Map;
    for (const o of n.proxies)
        a.set(o.name, o);
    for (const o of s)
        for (const r of o.proxies)
            a.set(r.name, r);
    return a
}
);
function Ge() {
    const {data: t, mutate: n} = G("/clashx", async()=>{
        var o, r;
        if (!X())
            return {
                isClashX: !1,
                startAtLogin: !1,
                systemProxy: !1
            };
        const s = (o = await (N == null ? void 0 : N.getStartAtLogin())) != null ? o : !1
          , a = (r = await (N == null ? void 0 : N.isSystemProxySet())) != null ? r : !1;
        return {
            startAtLogin: s,
            systemProxy: a,
            isClashX: !0
        }
    }
    );
    return {
        data: t,
        update: n
    }
}
const Bt = Ie([]);
function Tt() {
    const [t,n] = T(Bt)
      , s = ve(n)
      , a = $();
    async function o() {
        const r = await a.getRules();
        s(r.data.rules)
    }
    return {
        rules: t,
        update: o
    }
}
const Rt = _({
    key: "",
    instance: null
});
function Ve() {
    var i, m;
    const t = te()
      , {general: n} = Ce()
      , s = ce()
      , [a,o] = T(Rt);
    if (!s.version || !n.logLevel)
        return null;
    const r = !!s.version || !0
      , l = `${t.protocol}//${t.hostname}:${t.port}/logs?level=${(i = n.logLevel) != null ? i : ""}&useWebsocket=${r}&secret=${t.secret}`;
    if (a.key === l)
        return a.instance;
    const c = a.instance
      , u = `${t.protocol}//${t.hostname}:${t.port}/logs?level=${(m = n.logLevel) != null ? m : ""}`
      , f = new He({
        url: u,
        bufferLength: 200,
        token: t.secret,
        useWebsocket: r
    });
    return o({
        key: l,
        instance: f
    }),
    c != null && c.destory(),
    f
}
function Ht() {
    const t = te()
      , n = ce()
      , s = !!n.version || !0
      , a = `${t.protocol}//${t.hostname}:${t.port}/connections`;
    return d.exports.useMemo(()=>n.version ? new He({
        url: a,
        bufferLength: 200,
        token: t.secret,
        useWebsocket: s
    }) : null, [t.secret, a, s, n.version])
}
function Mt(t) {
    const {className: n, data: s, onClick: a, select: o, canClick: r, errSet: l, rowHeight: c} = t
      , {translation: u} = S()
      , {t: f} = u("Proxies")
      , [i,m] = d.exports.useState(!1)
      , [h,E] = d.exports.useState(!1)
      , w = d.exports.useRef(null);
    d.exports.useLayoutEffect(()=>{
        var P, I;
        E(((I = (P = w == null ? void 0 : w.current) == null ? void 0 : P.offsetHeight) != null ? I : 0) > 30)
    }
    , []);
    const F = i ? "auto" : c
      , A = r ? a : H;
    function L() {
        m(!i)
    }
    const k = s.map(P=>{
        const I = x({
            "tags-selected": o === P,
            "cursor-pointer": r,
            error: l == null ? void 0 : l.has(P)
        });
        return e.createElement("li", {
            className: I,
            key: P,
            onClick: ()=>A(P)
        }, P)
    }
    );
    return e.createElement("div", {
        className: x("flex items-start overflow-y-hidden", n),
        style: {
            height: F
        }
    }, e.createElement("ul", {
        ref: w,
        className: x("tags", {
            expand: i
        })
    }, k), h && e.createElement("span", {
        className: "h-7 px-5 select-none cursor-pointer leading-7",
        onClick: L
    }, f(i ? "collapseText" : "expandText")))
}
function Y(t) {
    const {className: n, style: s, value: a="", align: o="center", inside: r=!1, autoFocus: l=!1, type: c="text", disabled: u=!1, onChange: f=H, onBlur: i=H, onEnter: m=H} = t
      , h = x("input", `text-${o}`, {
        "focus:shadow-none": r
    }, n);
    function E(w) {
        w.code === "Enter" && m(w)
    }
    return e.createElement("input", {
        disabled: u,
        className: h,
        style: s,
        value: a,
        autoFocus: l,
        type: c,
        onChange: w=>f(w.target.value, w),
        onBlur: i,
        onKeyDown: E
    })
}
function Je(t) {
    const {show: n=!0, title: s="Modal", size: a="small", footer: o=!0, onOk: r=H, onClose: l=H, bodyClassName: c, bodyStyle: u, className: f, style: i, children: m} = t
      , {translation: h} = S()
      , {t: E} = h("Modal")
      , w = d.exports.useRef(document.createElement("div"))
      , F = d.exports.useRef(null);
    d.exports.useLayoutEffect(()=>{
        const k = w.current;
        return document.body.appendChild(k),
        ()=>{
            document.body.removeChild(k)
        }
    }
    , []);
    function A(k) {
        k.target === F.current && l()
    }
    const L = e.createElement("div", {
        className: x("modal-mask", {
            "modal-show": n
        }),
        ref: F,
        onMouseDown: A
    }, e.createElement("div", {
        className: x("modal", `modal-${a}`, f),
        style: i
    }, e.createElement("div", {
        className: "modal-title"
    }, s), e.createElement("div", {
        className: x("modal-body", c),
        style: u
    }, m), o && e.createElement("div", {
        className: "footer"
    }, e.createElement(be, {
        onClick: ()=>l()
    }, E("cancel")), e.createElement(be, {
        type: "primary",
        onClick: ()=>r()
    }, E("ok")))));
    return ye.exports.createPortal(L, w.current)
}
const Ut = {
    success: "check",
    info: "info",
    warning: "info",
    error: "close"
};
function Ot(t) {
    const {message: n="", type: s="info", inside: a=!1, children: o, className: r, style: l} = t
      , c = x("alert", `alert-${a ? "note" : "box"}-${s}`, r);
    return e.createElement("div", {
        className: c,
        style: l
    }, e.createElement("span", {
        className: "alert-icon"
    }, e.createElement(R, {
        type: Ut[s],
        size: 26
    })), n ? e.createElement("p", {
        className: "alert-message"
    }, n) : e.createElement("div", {
        className: "alert-message"
    }, o))
}
function be(t) {
    const {type: n="normal", onClick: s=H, children: a, className: o, style: r, disiabled: l} = t
      , c = x("button", `button-${n}`, o, {
        "button-disabled": l
    });
    return e.createElement("button", {
        className: c,
        style: r,
        onClick: s,
        disabled: l
    }, a)
}
function ue(t) {
    const [n,s] = ct(t)
      , a = d.exports.useMemo(()=>{
        function o(r, l) {
            typeof r == "string" ? s(c=>{
                const u = r
                  , f = l;
                c[u] = f
            }
            ) : typeof r == "function" ? s(r) : typeof r == "object" && s(c=>{
                const u = r;
                for (const f of Object.keys(u)) {
                    const i = f;
                    c[i] = u[i]
                }
            }
            )
        }
        return o
    }
    , [s]);
    return [n, a]
}
function zt(t, n=0) {
    if (t.length < 2)
        throw new Error("List requires at least two elements");
    const [s,a] = d.exports.useState(n);
    function o() {
        a((s + 1) % t.length)
    }
    return {
        current: d.exports.useMemo(()=>t[s], [t, s]),
        next: o
    }
}
function Ne(t=!1) {
    const [n,s] = d.exports.useState(t);
    function a() {
        s(!1)
    }
    function o() {
        s(!0)
    }
    return {
        visible: n,
        hide: a,
        show: o
    }
}
function Xe(t) {
    const {className: n, checked: s=!1, onChange: a=H} = t
      , o = x("checkbox", {
        checked: s
    }, n);
    function r() {
        a(!s)
    }
    return e.createElement("div", {
        className: o,
        onClick: r
    }, e.createElement(R, {
        className: "checkbox-icon",
        type: "check",
        size: 18
    }), e.createElement("div", null, t.children))
}
function me(t) {
    const {color: n, className: s, style: a} = t
      , o = x("tag", s)
      , r = b({
        color: n
    }, a)
      , l = D(b({}, t), {
        className: o,
        style: r
    });
    return e.createElement("span", b({}, l), t.children)
}
function Wt(t) {
    const n = x("spinner", t.className);
    return e.createElement("div", {
        className: n
    }, e.createElement("div", {
        className: "spinner-circle"
    }, e.createElement("div", {
        className: "spinner-inner"
    })), e.createElement("div", {
        className: "spinner-circle"
    }, e.createElement("div", {
        className: "spinner-inner"
    })), e.createElement("div", {
        className: "spinner-circle"
    }, e.createElement("div", {
        className: "spinner-inner"
    })), e.createElement("div", {
        className: "spinner-circle"
    }, e.createElement("div", {
        className: "spinner-inner"
    })), e.createElement("div", {
        className: "spinner-circle"
    }, e.createElement("div", {
        className: "spinner-inner"
    })))
}
function Ye(t) {
    const n = x("loading", "visible", t.className);
    return t.visible ? e.createElement("div", {
        className: n
    }, e.createElement(Wt, {
        className: t.spinnerClassName
    })) : null
}
function jt(t) {
    var o, r, l;
    const n = d.exports.useRef(document.createElement("div"));
    d.exports.useLayoutEffect(()=>{
        const c = n.current;
        return document.body.appendChild(c),
        ()=>{
            document.body.removeChild(c)
        }
    }
    , []);
    const s = "absolute h-full right-0 transition-transform transform translate-x-full duration-100 pointer-events-auto"
      , a = e.createElement("div", {
        className: x(t.className, "absolute inset-0 pointer-events-none z-9999")
    }, e.createElement(U, {
        className: x(s, {
            "translate-x-0": t.visible
        }),
        style: {
            width: (o = t.width) != null ? o : 400
        }
    }, t.children));
    return ye.exports.createPortal(a, (l = (r = t.containerRef) == null ? void 0 : r.current) != null ? l : n.current)
}
xe.extend(it);
function Pe(t, n) {
    const s = n === "en_US" ? "en" : "zh-cn";
    return xe().locale(s).from(t)
}
var Se;
(function(t) {
    t.Domain = "Domain",
    t.DomainSuffix = "DomainSuffix",
    t.DomainKeyword = "DomainKeyword",
    t.GeoIP = "GeoIP",
    t.IPCIDR = "IPCIDR",
    t.SrcIPCIDR = "SrcIPCIDR",
    t.SrcPort = "SrcPort",
    t.DstPort = "DstPort",
    t.MATCH = "MATCH",
    t.RuleSet = "RuleSet"
}
)(Se || (Se = {}));
function _t(t) {
    const {translation: n} = S()
      , s = d.exports.useMemo(()=>n("Connections").t, [n])
      , {className: a, style: o} = t
      , r = x("flex flex-wrap px-1", a);
    function l(c) {
        var u;
        (u = t.onChange) == null || u.call(t, c)
    }
    return e.createElement("div", {
        className: r,
        style: o
    }, e.createElement("div", {
        className: x("connections-devices-item pt-2 mb-2", {
            selected: t.selected === ""
        }),
        onClick: ()=>l("")
    }, s("filter.all")), t.devices.map(c=>e.createElement("div", {
        key: c.label,
        className: x("connections-devices-item pt-2 mb-2", {
            selected: t.selected === c.label
        }),
        onClick: ()=>l(c.label)
    }, c.label, " (", c.number, ")")))
}
function Gt(t) {
    var a, o, r, l, c, u, f, i, m, h, E;
    const {translation: n} = S()
      , s = d.exports.useMemo(()=>n("Connections").t, [n]);
    return e.createElement("div", {
        className: x(t.className, "text-sm flex flex-col")
    }, e.createElement("div", {
        className: "flex my-3"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.id")), e.createElement("span", {
        className: "font-mono"
    }, t.connection.id)), e.createElement("div", {
        className: "flex justify-between my-3"
    }, e.createElement("div", {
        className: "flex flex-1"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.network")), e.createElement("span", {
        className: "font-mono"
    }, (a = t.connection.metadata) == null ? void 0 : a.network)), e.createElement("div", {
        className: "flex flex-1"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.inbound")), e.createElement("span", {
        className: "font-mono"
    }, (o = t.connection.metadata) == null ? void 0 : o.type))), e.createElement("div", {
        className: "flex my-3"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.host")), e.createElement("span", {
        className: "font-mono flex-1 break-all"
    }, ((r = t.connection.metadata) == null ? void 0 : r.host) ? `${t.connection.metadata.host}:${(l = t.connection.metadata) == null ? void 0 : l.destinationPort}` : s("info.hostEmpty"))), e.createElement("div", {
        className: "flex my-3"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.dstIP")), e.createElement("span", {
        className: "font-mono"
    }, ((c = t.connection.metadata) == null ? void 0 : c.destinationIP) ? `${t.connection.metadata.destinationIP}:${(u = t.connection.metadata) == null ? void 0 : u.destinationPort}` : s("info.hostEmpty"))), e.createElement("div", {
        className: "flex my-3"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.srcIP")), e.createElement("span", {
        className: "font-mono"
    }, `${(f = t.connection.metadata) == null ? void 0 : f.sourceIP}:${(i = t.connection.metadata) == null ? void 0 : i.sourcePort}`)), e.createElement("div", {
        className: "flex my-3"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.rule")), e.createElement("span", {
        className: "font-mono"
    }, t.connection.rule && `${t.connection.rule}${t.connection.rulePayload && `(${t.connection.rulePayload})`}`)), e.createElement("div", {
        className: "flex my-3"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.chains")), e.createElement("span", {
        className: "font-mono flex-1 break-all"
    }, (m = t.connection.chains) == null ? void 0 : m.slice().reverse().join(" / "))), e.createElement("div", {
        className: "flex justify-between my-3"
    }, e.createElement("div", {
        className: "flex flex-1"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.upload")), e.createElement("span", {
        className: "font-mono"
    }, M((h = t.connection.upload) != null ? h : 0))), e.createElement("div", {
        className: "flex flex-1"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.download")), e.createElement("span", {
        className: "font-mono"
    }, M((E = t.connection.download) != null ? E : 0)))), e.createElement("div", {
        className: "flex my-3"
    }, e.createElement("span", {
        className: "w-16 font-bold"
    }, s("info.status")), e.createElement("span", {
        className: "font-mono"
    }, t.connection.completed ? e.createElement("span", {
        className: "text-red"
    }, s("info.closed")) : e.createElement("span", {
        className: "text-green"
    }, s("info.opening")))))
}
class Vt {
    constructor() {
        this.connections = new Map,
        this.saveDisconnection = !1
    }
    appendToSet(n) {
        var a;
        const s = n.reduce((o,r)=>o.set(r.id, r), new Map);
        for (const o of this.connections.keys())
            if (!s.has(o))
                if (!this.saveDisconnection)
                    this.connections.delete(o);
                else {
                    const r = this.connections.get(o);
                    r != null && this.connections.set(o, fe(r, l=>{
                        l.completed = !0,
                        l.uploadSpeed = 0,
                        l.downloadSpeed = 0
                    }
                    ))
                }
        for (const o of s.keys()) {
            if (!this.connections.has(o)) {
                this.connections.set(o, D(b({}, s.get(o)), {
                    uploadSpeed: 0,
                    downloadSpeed: 0
                }));
                continue
            }
            const r = this.connections.get(o)
              , l = s.get(o);
            (a = this.connections) == null || a.set(o, D(b({}, l), {
                uploadSpeed: l.upload - r.upload,
                downloadSpeed: l.download - r.download
            }))
        }
    }
    toggleSave() {
        var n, s;
        if (this.saveDisconnection) {
            this.saveDisconnection = !1;
            for (const a of this.connections.keys())
                ((s = (n = this.connections) == null ? void 0 : n.get(a)) == null ? void 0 : s.completed) && this.connections.delete(a)
        } else
            this.saveDisconnection = !0;
        return this.saveDisconnection
    }
    getConnections() {
        return [...this.connections.values()]
    }
}
function Jt() {
    const t = d.exports.useMemo(()=>new Vt, [])
      , n = d.exports.useRef(!0)
      , [s,a] = d.exports.useState([])
      , [o,r] = d.exports.useState(!1)
      , l = d.exports.useCallback(function(u) {
        t.appendToSet(u),
        n.current && a(t.getConnections()),
        n.current = !n.current
    }, [t])
      , c = d.exports.useCallback(function() {
        const u = t.toggleSave();
        r(u),
        u || a(t.getConnections()),
        n.current = !0
    }, [t]);
    return {
        connections: s,
        feed: l,
        toggleSave: c,
        save: o
    }
}
var y;
(function(t) {
    t.Host = "host",
    t.Network = "network",
    t.Type = "type",
    t.Chains = "chains",
    t.Rule = "rule",
    t.Speed = "speed",
    t.Upload = "upload",
    t.Download = "download",
    t.SourceIP = "sourceIP",
    t.Time = "time"
}
)(y || (y = {}));
const Xt = new Set([y.Network, y.Type, y.Rule, y.Speed, y.Upload, y.Download, y.SourceIP, y.Time]);
function Yt(t, n) {
    switch (!0) {
    case (t === 0 && n === 0):
        return "-";
    case (t !== 0 && n !== 0):
        return `\u2191 ${M(t)}/s \u2193 ${M(n)}/s`;
    case t !== 0:
        return `\u2191 ${M(t)}/s`;
    default:
        return `\u2193 ${M(n)}/s`
    }
}
function qt() {
    const {translation: t, lang: n} = S()
      , s = d.exports.useMemo(()=>t("Connections").t, [t])
      , a = Ht()
      , o = $()
      , r = d.exports.useRef(null)
      , [l,c] = ue({
        uploadTotal: 0,
        downloadTotal: 0
    })
      , {visible: u, show: f, hide: i} = Ne();
    function m() {
        o.closeAllConnections().finally(()=>i())
    }
    const {connections: h, feed: E, save: w, toggleSave: F} = Jt()
      , A = d.exports.useMemo(()=>h.map(p=>({
        id: p.id,
        host: `${p.metadata.host || p.metadata.destinationIP}:${p.metadata.destinationPort}`,
        chains: p.chains.slice().reverse().join(" / "),
        rule: p.rule === Se.RuleSet ? `${p.rule}(${p.rulePayload})` : p.rule,
        time: new Date(p.start).getTime(),
        upload: p.upload,
        download: p.download,
        sourceIP: p.metadata.sourceIP,
        type: p.metadata.type,
        network: p.metadata.network.toUpperCase(),
        speed: {
            upload: p.uploadSpeed,
            download: p.downloadSpeed
        },
        completed: !!p.completed,
        original: p
    })), [h])
      , L = d.exports.useMemo(()=>{
        const p = ut(h, "metadata.sourceIP");
        return Object.keys(p).map(C=>({
            label: C,
            number: p[C].length
        })).sort((C,v)=>C.label.localeCompare(v.label))
    }
    , [h])
      , k = d.exports.useRef(null)
      , {x: P} = mt(k)
      , I = d.exports.useMemo(()=>[{
        Header: s(`columns.${y.Host}`),
        accessor: y.Host,
        minWidth: 260,
        width: 260
    }, {
        Header: s(`columns.${y.Network}`),
        accessor: y.Network,
        minWidth: 80,
        width: 80
    }, {
        Header: s(`columns.${y.Type}`),
        accessor: y.Type,
        minWidth: 120,
        width: 120
    }, {
        Header: s(`columns.${y.Chains}`),
        accessor: y.Chains,
        minWidth: 200,
        width: 200
    }, {
        Header: s(`columns.${y.Rule}`),
        accessor: y.Rule,
        minWidth: 140,
        width: 140
    }, {
        id: y.Speed,
        Header: s(`columns.${y.Speed}`),
        accessor(p) {
            return [p.speed.upload, p.speed.download]
        },
        sortType(p, C) {
            const v = p.original.speed
              , Q = C.original.speed;
            return v.download === Q.download ? v.upload - Q.upload : v.download - Q.download
        },
        minWidth: 200,
        width: 200,
        sortDescFirst: !0
    }, {
        Header: s(`columns.${y.Upload}`),
        accessor: y.Upload,
        minWidth: 100,
        width: 100,
        sortDescFirst: !0
    }, {
        Header: s(`columns.${y.Download}`),
        accessor: y.Download,
        minWidth: 100,
        width: 100,
        sortDescFirst: !0
    }, {
        Header: s(`columns.${y.SourceIP}`),
        accessor: y.SourceIP,
        minWidth: 140,
        width: 140,
        filter: "equals"
    }, {
        Header: s(`columns.${y.Time}`),
        accessor: y.Time,
        minWidth: 120,
        width: 120,
        sortType(p, C) {
            return C.original.time - p.original.time
        }
    }], [s]);
    d.exports.useLayoutEffect(()=>{
        function p(C) {
            for (const v of C)
                c({
                    uploadTotal: v.uploadTotal,
                    downloadTotal: v.downloadTotal
                }),
                E(v.connections)
        }
        return a == null || a.subscribe("data", p),
        ()=>{
            a == null || a.unsubscribe("data", p),
            a == null || a.destory()
        }
    }
    , [a, E, c]);
    const {getTableProps: V, getTableBodyProps: J, headerGroups: j, rows: O, prepareRow: de, setFilter: q} = ee.exports.useTable({
        columns: I,
        data: A,
        autoResetSortBy: !1,
        autoResetFilters: !1,
        initialState: {
            sortBy: [{
                id: y.Time,
                desc: !1
            }]
        }
    }, ee.exports.useResizeColumns, ee.exports.useBlockLayout, ee.exports.useFilters, ee.exports.useSortBy)
      , K = d.exports.useMemo(()=>j[0], [j])
      , z = d.exports.useCallback(function(p) {
        switch (p.column.id) {
        case y.Speed:
            return Yt(p.value[0], p.value[1]);
        case y.Upload:
        case y.Download:
            return M(p.value);
        case y.Time:
            return Pe(new Date(p.value), n);
        default:
            return p.value
        }
    }, [n])
      , [pe,se] = d.exports.useState("");
    function oe(p) {
        se(p),
        q == null || q(y.SourceIP, p || void 0)
    }
    const [B,g] = ue({
        visible: !1,
        selectedID: "",
        connection: {}
    });
    function ae(p) {
        g({
            visible: !0,
            selectedID: p
        })
    }
    function re() {
        g(p=>{
            p.connection.completed = !0
        }
        ),
        o.closeConnection(B.selectedID)
    }
    const Z = dt(B.connection);
    return d.exports.useEffect(()=>{
        var C;
        const p = (C = A.find(v=>v.id === B.selectedID)) == null ? void 0 : C.original;
        p ? g(v=>{
            v.connection = b({}, p),
            B.selectedID === Z.current.id && (v.connection.completed = Z.current.completed)
        }
        ) : Object.keys(Z.current).length !== 0 && !Z.current.completed && g(v=>{
            v.connection.completed = !0
        }
        )
    }
    , [A, B.selectedID, Z, g]),
    e.createElement("div", {
        className: "page"
    }, e.createElement(W, {
        title: s("title")
    }, e.createElement("span", {
        className: "connections-filter flex-1 cursor-default"
    }, `(${s("total.text")}: ${s("total.upload")} ${M(l.uploadTotal)} ${s("total.download")} ${M(l.downloadTotal)})`), e.createElement(Xe, {
        className: "connections-filter",
        checked: w,
        onChange: F
    }, s("keepClosed")), e.createElement(R, {
        className: "connections-filter dangerous",
        onClick: f,
        type: "close-all",
        size: 20
    })), L.length > 1 && e.createElement(_t, {
        devices: L,
        selected: pe,
        onChange: oe
    }), e.createElement(U, {
        ref: r,
        className: "connections-card relative"
    }, e.createElement("div", D(b({}, V()), {
        className: "flex flex-col w-full flex-1 overflow-auto",
        style: {
            flexBasis: 0
        },
        ref: k
    }), e.createElement("div", D(b({}, K.getHeaderGroupProps()), {
        className: "connections-header"
    }), K.headers.map((p,C)=>{
        const v = p
          , Q = v.id;
        return e.createElement("div", D(b({}, v.getHeaderProps()), {
            className: x("connections-th", {
                resizing: v.isResizing,
                fixed: P > 0 && v.id === y.Host
            }),
            key: Q
        }), e.createElement("div", b({}, v.getSortByToggleProps()), p.render("Header"), v.isSorted ? v.isSortedDesc ? " \u2193" : " \u2191" : null), C !== K.headers.length - 1 && e.createElement("div", D(b({}, v.getResizerProps()), {
            className: "connections-resizer"
        })))
    }
    )), e.createElement("div", D(b({}, J()), {
        className: "flex-1"
    }), O.map(p=>(de(p),
    e.createElement("div", D(b({}, p.getRowProps()), {
        className: "connections-item cursor-default select-none",
        key: p.original.id,
        onClick: ()=>ae(p.original.id)
    }), p.cells.map(C=>{
        const v = x("connections-block", {
            "text-center": Xt.has(C.column.id),
            completed: p.original.completed
        }, {
            fixed: P > 0 && C.column.id === y.Host
        });
        return e.createElement("div", D(b({}, C.getCellProps()), {
            className: v,
            key: C.column.id
        }), z(C))
    }
    ))))))), e.createElement(Je, {
        title: s("closeAll.title"),
        show: u,
        onClose: i,
        onOk: m
    }, s("closeAll.content")), e.createElement(jt, {
        containerRef: r,
        visible: B.visible,
        width: 450
    }, e.createElement("div", {
        className: "flex justify-between items-center h-8"
    }, e.createElement("span", {
        className: "pl-3 font-bold"
    }, s("info.title")), e.createElement(R, {
        type: "close",
        size: 16,
        className: "cursor-pointer",
        onClick: ()=>g("visible", !1)
    })), e.createElement(Gt, {
        className: "px-5 mt-3",
        connection: B.connection
    }), e.createElement("div", {
        className: "flex justify-end mt-3 pr-3"
    }, e.createElement(be, {
        type: "danger",
        disiabled: B.connection.completed,
        onClick: ()=>re()
    }, s("info.closeConnection")))))
}
function Kt() {
    const {translation: t} = S()
      , {t: n} = t("Settings")
      , {hostname: s, port: a, secret: o} = te()
      , [r,l] = T(we)
      , [c,u] = ue({
        hostname: "",
        port: "",
        secret: ""
    });
    d.exports.useEffect(()=>{
        u({
            hostname: s,
            port: a,
            secret: o
        })
    }
    , [s, a, o, u]);
    const f = Ee(Me);
    function i() {
        const {hostname: m, port: h, secret: E} = c;
        f([{
            hostname: m,
            port: h,
            secret: E
        }])
    }
    return e.createElement(Je, {
        show: !r,
        title: n("externalControllerSetting.title"),
        bodyClassName: "external-controller",
        onClose: ()=>l(!0),
        onOk: i
    }, e.createElement(Ot, {
        type: "info",
        inside: !0
    }, e.createElement("p", null, n("externalControllerSetting.note"))), e.createElement("div", {
        className: "flex items-center"
    }, e.createElement("span", {
        className: "md:my-3 w-14 my-1 font-bold"
    }, n("externalControllerSetting.host")), e.createElement(Y, {
        className: "md:my-3 flex-1 my-1",
        align: "left",
        inside: !0,
        value: c.hostname,
        onChange: m=>u("hostname", m),
        onEnter: i
    })), e.createElement("div", {
        className: "flex items-center"
    }, e.createElement("div", {
        className: "md:my-3 w-14 my-1 font-bold"
    }, n("externalControllerSetting.port")), e.createElement(Y, {
        className: "md:my-3 w-14 my-1 flex-1",
        align: "left",
        inside: !0,
        value: c.port,
        onChange: m=>u("port", m),
        onEnter: i
    })), e.createElement("div", {
        className: "flex items-center"
    }, e.createElement("div", {
        className: "md:my-3 w-14 my-1 font-bold"
    }, n("externalControllerSetting.secret")), e.createElement(Y, {
        className: "md:my-3 w-14 my-1 flex-1",
        align: "left",
        inside: !0,
        value: c.secret,
        onChange: m=>u("secret", m),
        onEnter: i
    })))
}
function Zt() {
    var u, f;
    const t = d.exports.useRef(null)
      , n = d.exports.useRef([])
      , [s,a] = d.exports.useState([])
      , {translation: o} = S()
      , {t: r} = o("Logs")
      , l = Ve()
      , c = d.exports.useRef((f = (u = t.current) == null ? void 0 : u.scrollHeight) != null ? f : 0);
    return d.exports.useLayoutEffect(()=>{
        var m;
        const i = t.current;
        i != null && c.current === i.scrollTop + i.clientHeight && (i.scrollTop = i.scrollHeight - i.clientHeight),
        c.current = (m = i == null ? void 0 : i.scrollHeight) != null ? m : 0
    }
    ),
    d.exports.useEffect(()=>{
        function i(m) {
            n.current = n.current.slice().concat(m.map(h=>D(b({}, h), {
                time: new Date
            }))),
            a(n.current)
        }
        return l != null && (l.subscribe("data", i),
        n.current = l.buffer(),
        a(n.current)),
        ()=>l == null ? void 0 : l.unsubscribe("data", i)
    }
    , [l]),
    e.createElement("div", {
        className: "page"
    }, e.createElement(W, {
        title: r("title")
    }), e.createElement(U, {
        className: "flex flex-col flex-1 mt-2.5 md:mt-4"
    }, e.createElement("ul", {
        className: "logs-panel",
        ref: t
    }, s.map((i,m)=>e.createElement("li", {
        className: "leading-5 inline-block",
        key: m
    }, e.createElement("span", {
        className: "mr-4 text-gray-400 text-opacity-90"
    }, xe(i.time).format("YYYY-MM-DD HH:mm:ss")), e.createElement("span", null, "[", i.type, "] ", i.payload))))))
}
var ne;
(function(t) {
    t.SPEED_NOTIFY = "speed-notify"
}
)(ne || (ne = {}));
class Qt {
    constructor() {
        this.EE = new $e
    }
    notifySpeedTest() {
        this.EE.emit(ne.SPEED_NOTIFY)
    }
    subscribe(n, s) {
        this.EE.addListener(n, s)
    }
    unsubscribe(n, s) {
        this.EE.removeListener(n, s)
    }
}
var ke = new Qt;
const qe = {
    "#909399": 0,
    "#00c520": 260,
    "#ff9a28": 600,
    "#ff3e5e": 1 / 0
};
function Ke(t) {
    const {config: n, className: s} = t
      , {set: a} = ie()
      , o = $()
      , r = d.exports.useCallback(async m=>{
        var E;
        if (X())
            return (E = await (N == null ? void 0 : N.getProxyDelay(m))) != null ? E : 0;
        const {data: {delay: h}} = await o.getProxyDelay(m);
        return h
    }
    , [o])
      , l = d.exports.useCallback(async function() {
        const m = await le.fromPromise(r(n.name), E=>E)
          , h = m.isErr() ? 0 : m.value;
        a(E=>{
            const w = E.proxies.find(F=>F.name === n.name);
            w != null && w.history.push({
                time: Date.now().toString(),
                delay: h
            })
        }
        )
    }, [n.name, r, a])
      , c = d.exports.useMemo(()=>{
        var m;
        return ((m = n.history) == null ? void 0 : m.length) ? n.history.slice(-1)[0].delay : 0
    }
    , [n]);
    d.exports.useLayoutEffect(()=>{
        const m = ()=>{
            l()
        }
        ;
        return ke.subscribe(ne.SPEED_NOTIFY, m),
        ()=>ke.unsubscribe(ne.SPEED_NOTIFY, m)
    }
    , [l]);
    const u = d.exports.useMemo(()=>c === 0, [c])
      , f = d.exports.useMemo(()=>Object.keys(qe).find(m=>c <= qe[m]), [c])
      , i = u ? void 0 : f;
    return e.createElement("div", {
        className: x("proxy-item", {
            "proxy-error": u
        }, s)
    }, e.createElement("span", {
        className: "proxy-type",
        style: {
            backgroundColor: i
        }
    }, n.type), e.createElement("p", {
        className: "proxy-name"
    }, n.name), e.createElement("p", {
        className: "proxy-delay"
    }, c === 0 ? "-" : `${c}ms`))
}
function en(t) {
    const {markProxySelected: n} = ie()
      , [s] = T(It)
      , {data: a} = ze()
      , o = $()
      , {config: r} = t;
    async function l(f) {
        if (await o.changeProxySelected(t.config.name, f),
        n(t.config.name, f),
        a.breakConnections) {
            const i = []
              , m = await o.getConnections();
            for (const h of m.data.connections)
                h.chains.includes(t.config.name) && i.push(h.id);
            await Promise.all(i.map(h=>o.closeConnection(h)))
        }
    }
    const c = d.exports.useMemo(()=>{
        var i;
        const f = new Set;
        for (const m of r.all) {
            const h = (i = s.get(m)) == null ? void 0 : i.history;
            (h == null ? void 0 : h.length) && h.slice(-1)[0].delay === 0 && f.add(m)
        }
        return f
    }
    , [r.all, s])
      , u = r.type === "Selector";
    return e.createElement("div", {
        className: "proxy-group"
    }, e.createElement("div", {
        className: "w-full h-10 mt-4 flex items-center justify-between md:h-15 md:mt-0 md:w-auto"
    }, e.createElement("span", {
        className: "overflow-hidden overflow-ellipsis whitespace-nowrap px-5 h-6 w-35 md:w-30"
    }, r.name), e.createElement(me, {
        className: "mr-5 md:mr-0"
    }, r.type)), e.createElement("div", {
        className: "py-2 md:py-4 flex-1"
    }, e.createElement(Mt, {
        className: "ml-5 md:ml-8",
        data: r.all,
        onClick: l,
        errSet: c,
        select: r.now,
        canClick: u,
        rowHeight: 30
    })))
}
function tn(t) {
    const {update: n} = je()
      , {translation: s, lang: a} = S()
      , o = $()
      , {provider: r} = t
      , {t: l} = s("Proxies")
      , {visible: c, hide: u, show: f} = Ne();
    function i() {
        f(),
        o.healthCheckProvider(r.name).then(async()=>await n()).finally(()=>u())
    }
    function m() {
        f(),
        o.updateProvider(r.name).then(async()=>await n()).finally(()=>u())
    }
    const h = d.exports.useMemo(()=>r.proxies.slice().sort((E,w)=>-1 * De(E, w)), [r.proxies]);
    return e.createElement(U, {
        className: "proxy-provider"
    }, e.createElement(Ye, {
        visible: c
    }), e.createElement("div", {
        className: "flex justify-between flex-col md:flex-row md:items-center"
    }, e.createElement("div", {
        className: "flex items-center"
    }, e.createElement("span", {
        className: "mr-6"
    }, r.name), e.createElement(me, null, r.vehicleType)), e.createElement("div", {
        className: "flex items-center pt-3 md:pt-0"
    }, r.updatedAt && e.createElement("span", {
        className: "text-sm"
    }, `${l("providerUpdateTime")}: ${Pe(new Date(r.updatedAt), a)}`), e.createElement(R, {
        className: "pl-5 cursor-pointer text-red",
        type: "healthcheck",
        size: 18,
        onClick: i
    }), e.createElement(R, {
        className: "pl-5 cursor-pointer",
        type: "update",
        size: 18,
        onClick: m
    }))), e.createElement("ul", {
        className: "proxies-list"
    }, h.map(E=>e.createElement("li", {
        key: E.name
    }, e.createElement(Ke, {
        className: "proxy-provider-item",
        config: E
    })))))
}
var Ze;
(function(t) {
    t[t.None = 0] = "None",
    t[t.Asc = 1] = "Asc",
    t[t.Desc = 2] = "Desc"
}
)(Ze || (Ze = {}));
const nn = {
    [0]: "sort",
    [1]: "sort-ascending",
    [2]: "sort-descending"
};
function De(t, n) {
    const s = t.history.length > 0 ? t.history.slice(-1)[0].delay : 0;
    return ((n.history.length > 0 ? n.history.slice(-1)[0].delay : 0) || Number.MAX_SAFE_INTEGER) - (s || Number.MAX_SAFE_INTEGER)
}
function sn() {
    const {groups: t, global: n} = ie()
      , {data: s, set: a} = ze()
      , {general: o} = Ce()
      , {translation: r} = S()
      , {t: l} = r("Proxies")
      , c = d.exports.useMemo(()=>o.mode === "global" ? [n] : t, [o, t, n]);
    return e.createElement(e.Fragment, null, c.length !== 0 && e.createElement("div", {
        className: "flex flex-col"
    }, e.createElement(W, {
        title: l("groupTitle")
    }, e.createElement(Xe, {
        className: "text-primary-600 text-sm text-shadow-primary cursor-pointer",
        checked: s.breakConnections,
        onChange: u=>a("breakConnections", u)
    }, l("breakConnectionsText"))), e.createElement(U, {
        className: "my-2.5 md:my-4 p-0"
    }, e.createElement("ul", {
        className: "list-none"
    }, c.map(u=>e.createElement("li", {
        className: "proxies-group-item",
        key: u.name
    }, e.createElement(en, {
        config: u
    })))))))
}
function on() {
    const {providers: t} = je()
      , {translation: n} = S()
      , {t: s} = n("Proxies");
    return e.createElement(e.Fragment, null, t.length !== 0 && e.createElement("div", {
        className: "flex flex-col"
    }, e.createElement(W, {
        title: s("providerTitle")
    }), e.createElement("ul", {
        className: "list-none"
    }, t.map(a=>e.createElement("li", {
        className: "my-2.5 md:my-4",
        key: a.name
    }, e.createElement(tn, {
        provider: a
    }))))))
}
function an() {
    const {proxies: t} = ie()
      , {translation: n} = S()
      , {t: s} = n("Proxies");
    function a() {
        ke.notifySpeedTest()
    }
    const {current: o, next: r} = zt([1, 2, 0])
      , l = d.exports.useMemo(()=>{
        switch (o) {
        case 2:
            return t.slice().sort((u,f)=>De(u, f));
        case 1:
            return t.slice().sort((u,f)=>-1 * De(u, f));
        default:
            return t.slice()
        }
    }
    , [o, t])
      , c = r;
    return e.createElement(e.Fragment, null, l.length !== 0 && e.createElement("div", {
        className: "flex flex-col"
    }, e.createElement(W, {
        title: s("title")
    }, e.createElement(R, {
        className: "ml-3",
        type: nn[o],
        onClick: c,
        size: 20
    }), e.createElement(R, {
        className: "ml-3",
        type: "speed",
        size: 20
    }), e.createElement("span", {
        className: "proxies-speed-test",
        onClick: a
    }, s("speedTestText"))), e.createElement("ul", {
        className: "proxies-list"
    }, l.map(u=>e.createElement("li", {
        key: u.name
    }, e.createElement(Ke, {
        config: u
    }))))))
}
function rn() {
    return e.createElement("div", {
        className: "page"
    }, e.createElement(sn, null), e.createElement(on, null), e.createElement(an, null))
}
function ln(t) {
    const {update: n} = Oe()
      , {translation: s, lang: a} = S()
      , o = $()
      , {provider: r} = t
      , {t: l} = s("Rules")
      , {visible: c, hide: u, show: f} = Ne();
    function i() {
        f(),
        o.updateRuleProvider(r.name).then(async()=>await n()).finally(()=>u())
    }
    const m = x("rule-provider-icon", {
        "rule-provider-loading": c
    });
    return e.createElement("div", {
        className: "rule-provider"
    }, e.createElement("div", {
        className: "rule-provider-header"
    }, e.createElement("div", {
        className: "rule-provider-header-part"
    }, e.createElement("span", {
        className: "rule-provider-name"
    }, r.name), e.createElement(me, null, r.vehicleType), e.createElement(me, {
        className: "rule-provider-behavior"
    }, r.behavior), e.createElement("span", {
        className: "rule-provider-update"
    }, `${l("ruleCount")}: ${r.ruleCount}`)), e.createElement("div", {
        className: "rule-provider-header-part"
    }, r.updatedAt && e.createElement("span", {
        className: "rule-provider-update"
    }, `${l("providerUpdateTime")}: ${Pe(new Date(r.updatedAt), a)}`), e.createElement(R, {
        className: m,
        type: "update",
        size: 18,
        onClick: i
    }))))
}
function cn() {
    const {providers: t} = Oe()
      , {translation: n} = S()
      , {t: s} = n("Rules");
    return e.createElement(e.Fragment, null, t.length !== 0 && e.createElement("div", {
        className: "flex flex-col"
    }, e.createElement(W, {
        title: s("providerTitle")
    }), e.createElement(U, {
        className: "rounded shadow-primary p-0 divide-y mt-4"
    }, t.map(a=>e.createElement(ln, {
        key: a.name,
        provider: a
    })))))
}
function un() {
    const {rules: t, update: n} = Tt()
      , {translation: s} = S()
      , {t: a} = s("Rules");
    G("rules", n);
    function o({index: r, style: l}) {
        const c = t[r];
        return e.createElement("li", {
            className: "rule-item",
            style: l
        }, e.createElement("div", {
            className: "py-1 flex"
        }, e.createElement("div", {
            className: "rule-type w-40 text-center"
        }, c.type), e.createElement("div", {
            className: "payload flex-1 text-center"
        }, c.payload), e.createElement("div", {
            className: "rule-proxy w-40 text-center"
        }, c.proxy)))
    }
    return e.createElement("div", {
        className: "page"
    }, e.createElement(cn, null), e.createElement(W, {
        className: "not-first:mt-7.5",
        title: a("title")
    }), e.createElement(U, {
        className: "flex flex-col flex-1 mt-2.5 md:mt-4 p-0 focus:outline-none"
    }, e.createElement(pt, {
        className: "min-h-120"
    }, ({height: r, width: l})=>e.createElement(ft, {
        height: r,
        width: l,
        itemCount: t.length,
        itemSize: 50
    }, o))))
}
const mn = [{
    label: "\u4E2D\u6587",
    value: "zh_CN"
}, {
    label: "English",
    value: "en_US"
}];
function dn() {
    var se, oe, B;
    const {premium: t} = ce()
      , {data: n, update: s} = Ge()
      , {general: a, update: o} = Ce()
      , r = Ee(we)
      , l = te()
      , {translation: c, setLang: u, lang: f} = S()
      , {t: i} = c("Settings")
      , m = $()
      , [h,E] = ue({
        socks5ProxyPort: 7891,
        httpProxyPort: 7890,
        mixedProxyPort: 0
    });
    d.exports.useEffect(()=>{
        var g, ae, re;
        E("socks5ProxyPort", (g = a == null ? void 0 : a.socksPort) != null ? g : 0),
        E("httpProxyPort", (ae = a == null ? void 0 : a.port) != null ? ae : 0),
        E("mixedProxyPort", (re = a == null ? void 0 : a.mixedPort) != null ? re : 0)
    }
    , [a, E]);
    async function w(g) {
        await m.updateConfig({
            mode: g
        }),
        await o()
    }
    async function F(g) {
        await (N == null ? void 0 : N.setStartAtLogin(g)),
        await s()
    }
    async function A(g) {
        await (N == null ? void 0 : N.setSystemProxy(g)),
        await s()
    }
    function L(g) {
        u(g)
    }
    async function k() {
        await m.updateConfig({
            port: h.httpProxyPort
        }),
        await o()
    }
    async function P() {
        await m.updateConfig({
            "socks-port": h.socks5ProxyPort
        }),
        await o()
    }
    async function I() {
        await m.updateConfig({
            "mixed-port": h.mixedProxyPort
        }),
        await o()
    }
    async function V(g) {
        await m.updateConfig({
            "allow-lan": g
        }),
        await o()
    }
    const {hostname: J, port: j} = l
      , {allowLan: O, mode: de} = a
      , q = (se = n == null ? void 0 : n.startAtLogin) != null ? se : !1
      , K = (oe = n == null ? void 0 : n.systemProxy) != null ? oe : !1
      , z = (B = n == null ? void 0 : n.isClashX) != null ? B : !1
      , pe = d.exports.useMemo(()=>{
        const g = [{
            label: i("values.global"),
            value: "Global"
        }, {
            label: i("values.rules"),
            value: "Rule"
        }, {
            label: i("values.direct"),
            value: "Direct"
        }];
        return t && g.push({
            label: i("values.script"),
            value: "Script"
        }),
        g
    }
    , [i, t]);
    return e.createElement("div", {
        className: "page"
    }, e.createElement(W, {
        title: i("title")
    }), e.createElement(U, {
        className: "settings-card"
    }, e.createElement("div", {
        className: "flex flex-wrap"
    }, e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.startAtLogin")), e.createElement(ge, {
        disabled: !(n == null ? void 0 : n.isClashX),
        checked: q,
        onChange: F
    })), e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.language")), e.createElement(Te, {
        options: mn,
        value: f,
        onSelect: g=>L(g)
    }))), e.createElement("div", {
        className: "flex flex-wrap"
    }, e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.setAsSystemProxy")), e.createElement(ge, {
        disabled: !z,
        checked: K,
        onChange: A
    })), e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.allowConnectFromLan")), e.createElement(ge, {
        checked: O,
        onChange: V
    })))), e.createElement(U, {
        className: "settings-card"
    }, e.createElement("div", {
        className: "flex flex-wrap"
    }, e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.proxyMode")), e.createElement(Te, {
        options: pe,
        value: ht(de),
        onSelect: w
    })), e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.socks5ProxyPort")), e.createElement(Y, {
        className: "w-28",
        disabled: z,
        value: h.socks5ProxyPort,
        onChange: g=>E("socks5ProxyPort", +g),
        onBlur: P
    }))), e.createElement("div", {
        className: "flex flex-wrap"
    }, e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.httpProxyPort")), e.createElement(Y, {
        className: "w-28",
        disabled: z,
        value: h.httpProxyPort,
        onChange: g=>E("httpProxyPort", +g),
        onBlur: k
    })), e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.mixedProxyPort")), e.createElement(Y, {
        className: "w-28",
        disabled: z,
        value: h.mixedProxyPort,
        onChange: g=>E("mixedProxyPort", +g),
        onBlur: I
    }))), e.createElement("div", {
        className: "flex flex-wrap"
    }, e.createElement("div", {
        className: "w-full flex md:w-1/2 items-center justify-between px-8 py-3"
    }, e.createElement("span", {
        className: "label font-bold"
    }, i("labels.externalController")), e.createElement("span", {
        className: x({
            "modify-btn": !z
        }, "external-controller"),
        onClick: ()=>!z && r(!1)
    }, `${J}:${j}`)), e.createElement("div", {
        className: "w-1/2 px-8"
    }))))
}
var pn = "./assets/logo.b453e72f.png";
function fn(t) {
    const {routes: n} = t
      , {translation: s} = S()
      , {version: a, premium: o} = ce()
      , {data: r} = Ge()
      , {t: l} = s("SideBar")
      , c = n.map(({path: u, name: f, exact: i, noMobile: m})=>e.createElement("li", {
        className: x("item", {
            "no-mobile": m
        }),
        key: f
    }, e.createElement(Et, {
        to: u,
        activeClassName: "active",
        exact: !!i
    }, l(f))));
    return e.createElement("div", {
        className: "sidebar"
    }, e.createElement("img", {
        src: pn,
        alt: "logo",
        className: "sidebar-logo"
    }), e.createElement("ul", {
        className: "sidebar-menu"
    }, c), e.createElement("div", {
        className: "sidebar-version"
    }, e.createElement("span", {
        className: "sidebar-version-label"
    }, "Clash", (r == null ? void 0 : r.isClashX) && "X", " ", l("Version")), e.createElement("span", {
        className: "sidebar-version-text"
    }, a), o && e.createElement("span", {
        className: "sidebar-version-label"
    }, "Premium")))
}
function hn() {
    Ve();
    const t = [{
        path: "/proxies",
        name: "Proxies",
        component: rn
    }, {
        path: "/logs",
        name: "Logs",
        component: Zt
    }, {
        path: "/rules",
        name: "Rules",
        component: un,
        noMobile: !0
    }, {
        path: "/connections",
        name: "Connections",
        component: qt,
        noMobile: !0
    }, {
        path: "/settings",
        name: "Settings",
        component: dn
    }];
    return e.createElement("div", {
        className: x("app", {
            "not-clashx": !X()
        })
    }, e.createElement(fn, {
        routes: t
    }), e.createElement("div", {
        className: "page-container"
    }, e.createElement(yt, null, e.createElement(Be, {
        exact: !0,
        path: "/",
        component: ()=>e.createElement(xt, {
            to: "/proxies"
        })
    }), t.map(n=>e.createElement(Be, {
        exact: !1,
        path: n.path,
        key: n.path,
        component: n.component
    })))), e.createElement(Kt, null))
}
function Qe() {
    const t = document.getElementById("root")
      , n = e.createElement(gt, null, e.createElement(d.exports.Suspense, {
        fallback: e.createElement(Ye, {
            visible: !0
        })
    }, e.createElement(hn, null)));
    ye.exports.render(n, t)
}
X() ? Ct(()=>Qe()) : Qe();
