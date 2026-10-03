// ../../packages/kit/src/elements.ts
var SECTORS = [
  { id: "dfm", label: "DFM", href: "https://dontfeedmachines.com/"},
  { id: "stopthescrape", label: "STOPTHESCRAPE", href: "https://stopthescrape.com/"},
  { id: "synthstop", label: "SYNTHSTOP", href: "https://synths.top/"},
  { id: "humanlayer", label: "HUMANLAYER", href: "https://humanlayer.vip/"},
  { id: "bloodoath", label: "BLOODOATH", href: "https://humanlayer.vip/oath"}
];

function store(key, value) {
  try {
    if (value === void 0) return localStorage.getItem(key);
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
  }
  return null;
}
function setPlain(on) {
  document.documentElement.toggleAttribute("data-plain", on);
  store("dfm:plain", on ? "1" : null);
  document.dispatchEvent(new CustomEvent("dfm:plain", { detail: { on } }));
}
function setLens(on) {
  document.documentElement.toggleAttribute("data-lens", on);
  document.dispatchEvent(new CustomEvent("dfm:lens", { detail: { on } }));
}
var lensOn = () => document.documentElement.hasAttribute("data-lens");
var plainOn = () => document.documentElement.hasAttribute("data-plain");
var SectorBar = class extends HTMLElement {
  connectedCallback() {
    const current2 = this.getAttribute("current");
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "dfm sectors");
    for (const s of SECTORS) {
      const a = document.createElement("a");
      a.href = sectorHref(s.id);
      a.textContent = s.label;
      if (s.id === current2) a.setAttribute("aria-current", "page");
      nav.append(a);
    }
    const keys = document.createElement("button");
    keys.className = "keys";
    keys.type = "button";
    keys.textContent = "? KEYS";
    keys.addEventListener("click", () => document.querySelector("dfm-keys")?.toggleAttribute("open"));
    nav.append(keys);
    this.replaceChildren(nav);
  }
};
var CodeSlip = class extends HTMLElement {
  #pre;
  #count;
  #stamp;
  #obs;
  connectedCallback() {
    if (this.#pre) return;
    const existing = this.querySelector("pre");
    const pre = existing ?? document.createElement("pre");
    const name = this.getAttribute("name") ?? "output.txt";
    const wrap = document.createElement("div");
    wrap.className = "slip";
    const head = document.createElement("div");
    head.className = "slip-head";
    const label = document.createElement("span");
    label.className = "slip-name";
    label.textContent = name;
    this.#count = document.createElement("span");
    this.#count.className = "slip-count";
    const copy = document.createElement("button");
    copy.type = "button";
    copy.textContent = "COPY";
    copy.addEventListener("click", () => this.copy());
    const dl = document.createElement("button");
    dl.type = "button";
    dl.textContent = "DOWNLOAD";
    dl.addEventListener("click", () => this.download());
    head.append(label, this.#count, copy, dl);
    this.#stamp = document.createElement("span");
    this.#stamp.className = "slip-stamp";
    this.#stamp.setAttribute("aria-hidden", "true");
    this.#stamp.textContent = this.getAttribute("stamp") ?? "COPIED";
    wrap.append(head, pre);
    this.replaceChildren(wrap, this.#stamp);
    this.#pre = pre;
    this.#obs = new MutationObserver(() => this.#recount());
    this.#obs.observe(pre, { childList: true, characterData: true, subtree: true });
    this.#recount();
  }
  disconnectedCallback() {
    this.#obs?.disconnect();
  }
  set text(v) {
    if (this.#pre) this.#pre.textContent = v;
  }
  get text() {
    return this.#pre?.textContent ?? "";
  }
  #recount() {
    const lines = this.text ? this.text.split("\n").length : 0;
    this.#count.textContent = `${lines} line${lines === 1 ? "" : "s"}`;
  }
  async copy() {
    try {
      await navigator.clipboard.writeText(this.text);
    } catch {
      const r = document.createRange();
      r.selectNodeContents(this.#pre);
      const sel = getSelection();
      sel?.removeAllRanges();
      sel?.addRange(r);
    }
    this.#stamp.classList.add("on");
    setTimeout(() => this.#stamp.classList.remove("on"), 900);
  }
  download() {
    const name = this.getAttribute("name") ?? "output.txt";
    const blob = new Blob([this.text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1e3);
  }
};
var Palette = class extends HTMLElement {
  #items = null;
  #input;
  #list;
  #sel = 0;
  #shown = [];
  #ret = null;
  connectedCallback() {
    if (this.#input) return;
    this.setAttribute("role", "dialog");
    this.setAttribute("aria-label", "search this site");
    const box = document.createElement("div");
    box.className = "pal";
    this.#input = document.createElement("input");
    this.#input.type = "search";
    this.#input.placeholder = this.getAttribute("placeholder") ?? "search pages and tools";
    this.#input.setAttribute("aria-label", "search");
    this.#list = document.createElement("ul");
    this.#list.setAttribute("role", "listbox");
    box.append(this.#input, this.#list);
    this.replaceChildren(box);
    this.#input.addEventListener("input", () => this.#filter());
    this.#input.addEventListener("keydown", (e) => this.#key(e));
    this.addEventListener("click", (e) => {
      if (e.target === this) this.close();
    });
  }
  async open() {
    this.#ret = document.activeElement;
    this.setAttribute("open", "");
    this.#input.value = "";
    if (!this.#items) {
      const src = this.getAttribute("src") ?? "/search.json";
      try {
        if (src.startsWith("#")) this.#items = JSON.parse(document.querySelector(src)?.textContent ?? "[]");
        else this.#items = await (await fetch(src)).json();
      } catch {
        this.#items = [];
      }
    }
    this.#filter();
    this.#input.focus();
  }
  close() {
    this.removeAttribute("open");
    this.#ret?.focus?.();
  }
  #filter() {
    const q = this.#input.value.trim().toLowerCase();
    const all = this.#items ?? [];
    const terms = q.split(/\s+/).filter(Boolean);
    this.#shown = (terms.length ? all.filter((it) => {
      const hay = `${it.title} ${it.kind} ${it.text ?? ""}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    }) : all).slice(0, 40);
    this.#sel = 0;
    this.#render();
  }
  #render() {
    this.#list.replaceChildren();
    if (!this.#shown.length) {
      const li = document.createElement("li");
      li.className = "pal-empty";
      li.textContent = "nothing matches. try fewer words.";
      this.#list.append(li);
      return;
    }
    this.#shown.forEach((it, i) => {
      const li = document.createElement("li");
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(i === this.#sel));
      const a = document.createElement("a");
      a.href = it.href;
      const t = document.createElement("span");
      t.textContent = it.title;
      const k = document.createElement("small");
      k.textContent = it.kind;
      a.append(t, k);
      li.append(a);
      this.#list.append(li);
    });
    this.#list.children[this.#sel]?.scrollIntoView({ block: "nearest" });
  }
  #key(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      this.close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      this.#sel = Math.min(this.#sel + 1, this.#shown.length - 1);
      this.#render();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      this.#sel = Math.max(this.#sel - 1, 0);
      this.#render();
    } else if (e.key === "Enter") {
      const it = this.#shown[this.#sel];
      if (it) location.href = it.href;
    }
  }
};
var KeysHelp = class extends HTMLElement {
  connectedCallback() {
    if (this.childElementCount) return;
    const lens = this.getAttribute("lens") ?? "LENS";
    const plain = this.getAttribute("plain") ?? "PLAIN MODE";
    this.setAttribute("role", "dialog");
    this.setAttribute("aria-label", "keyboard keys");
    const card = document.createElement("div");
    card.className = "keys-card";
    const rows = [
      ["L", lens],
      ["P", plain],
      ["/", "search"],
      ["?", "this list"],
      ["ESC", "close"]
    ];
    const dl = document.createElement("dl");
    for (const [k, v] of rows) {
      const dt = document.createElement("dt");
      const kbd = document.createElement("kbd");
      kbd.textContent = k;
      dt.append(kbd);
      const dd = document.createElement("dd");
      dd.textContent = v;
      dl.append(dt, dd);
    }
    const h = document.createElement("strong");
    h.textContent = "KEYS";
    card.append(h, dl);
    this.append(card);
    this.addEventListener("click", () => this.removeAttribute("open"));
  }
};
function typing(t) {
  const el = t;
  if (!el) return false;
  return el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
}
var booted = false;
function boot() {
  if (booted) return;
  booted = true;
  customElements.get("dfm-sector-bar") || customElements.define("dfm-sector-bar", SectorBar);
  customElements.get("dfm-code-slip") || customElements.define("dfm-code-slip", CodeSlip);
  customElements.get("dfm-palette") || customElements.define("dfm-palette", Palette);
  customElements.get("dfm-keys") || customElements.define("dfm-keys", KeysHelp);
  if (store("dfm:plain") === "1") document.documentElement.setAttribute("data-plain", "");
  document.addEventListener("click", (e) => {
    const t = e.target?.closest?.("[data-toggle]");
    if (!t) return;
    const what = t.getAttribute("data-toggle");
    if (what === "plain") setPlain(!plainOn());
    if (what === "lens") setLens(!lensOn());
  });
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const pal = document.querySelector("dfm-palette");
    const keys = document.querySelector("dfm-keys");
    if (e.key === "Escape") {
      if (pal?.hasAttribute("open")) pal.close();
      keys?.removeAttribute("open");
      return;
    }
    if (typing(e.target)) return;
    const k = e.key.toLowerCase();
    if (k === "/") {
      e.preventDefault();
      pal?.open();
    } else if (k === "?") {
      keys?.toggleAttribute("open");
    } else if (k === "l") {
      setLens(!lensOn());
    } else if (k === "p") {
      setPlain(!plainOn());
    }
  });
}

// src/scripts/teletext.ts
boot();
var $ = (sel) => document.querySelector(sel);
var map = JSON.parse($("#tt-map")?.textContent ?? "{}");
var screen = $(".screen");
var current = Number(screen.dataset.page);
var pnum = $("[data-pnum]");
var jump = $("[data-jump]");
var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
var pref = (k, fallback) => {
  try {
    return localStorage.getItem(k) ?? fallback;
  } catch {
    return fallback;
  }
};
var countUp = () => pref("dfm:countup", "1") === "1" && !reduced && !document.documentElement.hasAttribute("data-plain");
var DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var pad = (n) => String(n).padStart(2, "0");
function tick() {
  const d = /* @__PURE__ */ new Date();
  const el = $("[data-clock]");
  if (el) el.textContent = `${DAYS[d.getDay()]} ${pad(d.getDate())} ${MONTHS[d.getMonth()]} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
tick();
setInterval(tick, 1e3);
var busy = false;
function notFound(n) {
  pnum.textContent = `P${n} NOT FOUND`;
  pnum.classList.add("notfound");
  setTimeout(() => {
    pnum.textContent = `P${current}`;
    pnum.classList.remove("notfound");
  }, 2e3);
}
function go(n) {
  if (busy) return;
  const href = map[n];
  jump.value = "";
  if (!href) return notFound(n);
  if (!countUp() || Number(n) === current) {
    location.href = href;
    return;
  }
  busy = true;
  pnum.classList.add("searching");
  const target = Number(n);
  const steps = Math.min(12, Math.abs(target - current));
  let i = 0;
  const t = setInterval(() => {
    i++;
    const v = Math.round(current + (target - current) * i / steps);
    pnum.textContent = `P${v}`;
    if (i >= steps) {
      clearInterval(t);
      location.href = href;
    }
  }, 40);
}
var buffer = "";
var bufferTimer;
var typing2 = (t) => {
  const el = t;
  return !!el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
};
document.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey || typing2(e.target)) return;
  if (document.querySelector("dfm-palette[open], dfm-keys[open]")) return;
  if (/^[0-9]$/.test(e.key)) {
    buffer += e.key;
    jump.value = buffer;
    clearTimeout(bufferTimer);
    if (buffer.length === 3) {
      const n = buffer;
      buffer = "";
      go(n);
    } else {
      bufferTimer = window.setTimeout(() => {
        buffer = "";
        jump.value = "";
      }, 3e3);
    }
    return;
  }
  const k = e.key.toLowerCase();
  if (["r", "g", "y", "b"].includes(k)) {
    const a = $(`[data-fast="${k}"]`);
    if (a) {
      e.preventDefault();
      a.click();
    }
  } else if (k === "h") {
    setHold(!hold);
  }
});
jump.addEventListener("input", () => {
  jump.value = jump.value.replace(/\D/g, "").slice(0, 3);
  if (jump.value.length === 3) go(jump.value);
});
jump.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && jump.value) go(jump.value.padStart(3, "0"));
  if (e.key === "Escape") {
    jump.value = "";
    jump.blur();
  }
});
var hold = reduced || pref("dfm:hold", "0") === "1";
var subs = [...document.querySelectorAll("[data-sub]")];
var subIndex = 0;
function showSub(i) {
  subIndex = (i + subs.length) % subs.length;
  subs.forEach((s, j) => s.hidden = j !== subIndex);
  const f = $("[data-flag-sub]");
  if (f) {
    f.hidden = false;
    f.textContent = `${subIndex + 1}/${subs.length}`;
  }
}
function setHold(on) {
  hold = on;
  try {
    localStorage.setItem("dfm:hold", on ? "1" : "0");
  } catch {
  }
  const f = $("[data-flag-hold]");
  if (f) f.hidden = !on;
  document.dispatchEvent(new CustomEvent("dfm:hold", { detail: { on } }));
}
setHold(hold);
if (subs.length) {
  showSub(0);
  setInterval(() => {
    if (!hold) showSub(subIndex + 1);
  }, 8e3);
  document.querySelectorAll("[data-sub-step]").forEach(
    (b) => b.addEventListener("click", () => showSub(subIndex + Number(b.dataset.subStep)))
  );
}
function syncReveal() {
  const f = $("[data-flag-reveal]");
  if (f) f.hidden = !lensOn();
}
document.addEventListener("dfm:lens", syncReveal);
syncReveal();
export {
  go,
  setHold
};
