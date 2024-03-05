"use strict";

PetiteVue.createApp({
  name: "名前",
  total: 0,
  ope: "＋",
  ship: 0,
  style: { color: "lightgreen" },
  //グッズリスト
  list: [
    { id: 1, item: "缶バッジ", unit: 500, qty: 0 },
    { id: 2, item: "アクリルキーホルダー", unit: 800, qty: 0 },
    { id: 3, item: "アクリルスタンド", unit: 1200, qty: 0 },
    { id: 4, item: "フィギュア", unit: 12000, qty: 0 },
    { id: 5, item: "ぬいぐるみ", unit: 3000, qty: 0 },
    { id: 6, item: "トレーディングカード", unit: 500, qty: 0 },
    { id: 7, item: "ブロマイド", unit: 600, qty: 0 },
    { id: 8, item: "うちわ", unit: 1400, qty: 0 },
    { id: 9, item: "ペンライト", unit: 3800, qty: 0 },
    { id: 10, item: "リングライト", unit: 1100, qty: 0 },
    { id: 11, item: "ステッカー", unit: 800, qty: 0 },
    { id: 12, item: "アクリルバングル", unit: 700, qty: 0 },
    { id: 13, item: "シリコンバンド", unit: 600, qty: 0 },
    { id: 14, item: "タペストリー", unit: 3000, qty: 0 },
    { id: 15, item: "マフラータオル", unit: 3200, qty: 0 },
    { id: 16, item: "バスタオル", unit: 5000, qty: 0 },
    { id: 17, item: "ハンカチ", unit: 1200, qty: 0 },
    { id: 18, item: "ブランケット", unit: 8000, qty: 0 },
    { id: 19, item: "コップ", unit: 1300, qty: 0 },
    { id: 20, item: "タンブラー", unit: 4000, qty: 0 },
    { id: 21, item: "コースター", unit: 500, qty: 0 },
    { id: 22, item: "スマホカバー", unit: 2000, qty: 0 },
    { id: 23, item: "スマホリング", unit: 1400, qty: 0 },
    { id: 24, item: "ケーブルカバー", unit: 1100, qty: 0 },
    { id: 25, item: "ヘアクリップ", unit: 1200, qty: 0 },
    { id: 26, item: "ミラー", unit: 1400, qty: 0 },
    { id: 27, item: "シュシュ", unit: 600, qty: 0 },
    { id: 28, item: "カチューシャ", unit: 2200, qty: 0 },
    { id: 29, item: "イヤリング", unit: 1800, qty: 0 },
    { id: 30, item: "カレンダー", unit: 1800, qty: 0 },
    { id: 31, item: "クリアファイル", unit: 800, qty: 0 },
    { id: 32, item: "マスキングテープ", unit: 800, qty: 0 },
    { id: 33, item: "ペンケース", unit: 3200, qty: 0 },
    { id: 34, item: "下敷き", unit: 1200, qty: 0 },
    { id: 35, item: "レターセット", unit: 1500, qty: 0 },
    { id: 36, item: "ノート", unit: 1300, qty: 0 },
    { id: 37, item: "ふせん", unit: 500, qty: 0 },
    { id: 38, item: "Tシャツ", unit: 4800, qty: 0 },
    { id: 39, item: "ロングTシャツ", unit: 5400, qty: 0 },
    { id: 40, item: "パーカー", unit: 6600, qty: 0 },
    { id: 41, item: "ポーチ", unit: 2800, qty: 0 },
    { id: 42, item: "トートバッグ", unit: 3200, qty: 0 },
    { id: 43, item: "エコバッグ", unit: 3200, qty: 0 },
    { id: 44, item: "サコッシュ", unit: 2700, qty: 0 },
    { id: 45, item: "キャップ", unit: 2800, qty: 0 },
    { id: 46, item: "クッション", unit: 4300, qty: 0 },
  ],

  //名前の設定
  setName() {
    let a = window.prompt("名前を設定");
    this.name = a;
  },
  //送料を設定
  shipping() {
    let ship = window.prompt("送料を設定");
    if (isNaN(ship) || ship == "") {
      window.alert("数値を入力してください");
      this.total;
    } else {
      this.total += Number(ship);
      this.ship = Number(ship);
    }
  },
  //単価の設定
  setUnit(idx) {
    let u = window.prompt("単価を設定");
    if (isNaN(u) || u == "") {
      window.alert("数値を入力してください");
      this.list[idx].unit;
    } else {
      this.list[idx].unit = Number(u);
    }
  },
  //アイテムをクリック
  add(n, i) {
    if (this.list[i].qty == 0) {
      if (this.ope == "＋") {
        this.total += n;
        this.list[i].qty += 1;
        const ul = document.querySelectorAll("ul")[0];
        const li = document.createElement("li");
        li.setAttribute("id", this.list[i].id);
        li.classList.add("want-item");
        // グッズ名
        const h3 = document.createElement("h3");
        h3.textContent = this.list[i].item;
        li.appendChild(h3);
        ul.appendChild(li);
        //<div class="subtotal">
        const subTotal = document.createElement("div");
        subTotal.classList.add("subtotal");
        li.appendChild(subTotal);
        // 個数
        const qty = document.createElement("p");
        qty.classList.add("qty");
        qty.textContent = "×" + this.list[i].qty;
        subTotal.appendChild(qty);
        //個数×単価
        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = "￥" + this.list[i].unit * this.list[i].qty;
        subTotal.appendChild(price);
      }
    } else if (this.list[i].qty > 0) {
      if (this.ope == "＋") {
        this.total += n;
        this.list[i].qty += 1;
        const witem = document.getElementById(i + 1);
        const qty = witem.querySelector(".qty");
        const price = witem.querySelector(".price");
        qty.textContent = "×" + this.list[i].qty;
        price.textContent = "￥" + this.list[i].unit * this.list[i].qty;
      } else if (this.ope == "－") {
        this.total -= n;
        this.list[i].qty -= 1;
        const witem = document.getElementById(i + 1);
        const qty = witem.querySelector(".qty");
        const price = witem.querySelector(".price");
        qty.textContent = "×" + this.list[i].qty;
        price.textContent = "￥" + this.list[i].unit * this.list[i].qty;
        if (this.list[i].qty == 0) {
          witem.remove();
        }
      }
    }
    //合計の色
    if (this.total >= 12000) {
      this.style.color = "red";
    } else if (this.total >= 8000) {
      this.style.color = "orange";
    } else if (this.total >= 5000) {
      this.style.color = "gold";
    } else if (this.total >= 0) {
      this.style.color = "lightgreen";
    }
  },
}).mount();
