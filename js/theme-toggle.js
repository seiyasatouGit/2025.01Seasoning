function setDarkMode(color) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = color === 'yellow' ? "#ffd700" : "#32cd32"; // 黄色 or 緑


    // 🌙 ヘッダー・セクションの背景色をダークに
    document.querySelectorAll("section, .hero, .content").forEach(el => {
        el.style.backgroundColor = "#1a1a1a"; // ダークグレー
        el.style.color = color === 'yellow' ? "#ffd700" : "#32cd32"; // 文字色
});


// ✨ ボタンのスタイル変更
document.querySelectorAll(".mode-selector div, .top-button").forEach(btn => {
    btn.style.backgroundColor = "#333"; // ボタンの背景
    btn.style.borderColor = color === 'yellow' ? "#ffd700" : "#32cd32"; // 枠の色
    btn.style.color = color === 'yellow' ? "#ffd700" : "#32cd32"; // 文字色
});

// 🔗 リンクカラーの変更
document.querySelectorAll("a").forEach(link => {
    link.style.color = color === 'yellow' ? "#ffcc00" : "#00ff99"; // リンクの色
});


// **すべての枠を変更（hero, card, button, footer など）**
document.querySelectorAll(".hero, .box, .button, .header, .footer, .card.button, table, input, textarea").forEach(el => {
    el.style.border = `2px solid ${color === 'yellow' ? "#ffd700" : "#32cd32"}`;
    el.style.boxShadow = `0 0 10px ${color === 'yellow' ? "#ffd700" : "#32cd32"}`;
    el.style.backgroundColor = "#1a1a1a"; // hero, card の背景をさらに黒っぽく
});

// リンクの色変更
document.querySelectorAll("a").forEach(link => {
    link.style.color = color === 'yellow' ? "#ffd700" : "#32cd32";
});


// ✅ フォームのテキスト入力色
document.querySelectorAll("input, textarea").forEach(input => {
    input.style.color = "#fff";
    input.style.backgroundColor = "#1a1a1a";
    input.style.border = `1px solid ${color === 'yellow' ? "#ffd700" : "#32cd32"}`;
});
}
function setLightMode() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";


    document.querySelectorAll("section, .hero, .content").forEach(el => {
        el.style.backgroundColor = "#ede6d6"; // 元の色に戻す
        el.style.color = "#000";

    });

    document.querySelectorAll(".mode-selector div, .top-button").forEach(btn => {
        btn.style.backgroundColor = "#ddd";
        btn.style.borderColor = "#000";
        btn.style.color = "#000";
    });

   // **hero, card, button, footer などの枠をリセット**
    document.querySelectorAll(".hero, .box, .button, .header, .footer, .card").forEach(el => {
    el.style.border = "2px solid #000";
    el.style.boxShadow = "none";
    el.style.backgroundColor = "#f9f9f9"; // hero, card の背景を明るく
    });

    // リンクの色をデフォルトに戻す
    // document.querySelectorAll("a").forEach(link => {
    //     link.style.color = "#000";
    // });


    document.querySelectorAll("a").forEach(link => {
        link.style.color = "#0077cc"; // 通常のリンク色
    });

    // ✅ フォームのテキスト入力色
    document.querySelectorAll("input, textarea").forEach(input => {
        input.style.color = "#000";
        input.style.backgroundColor = "#fff";
        input.style.border = "1px solid #000";
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
