function showDetail(spice) {
    const detail = document.getElementById('spice-detail');
    let content = "";

    if (spice === 'turmeric') {
        content = `
            <h2 class="spice-detail__title">ターメリック(9割記入)</h2>
            <p class="spice-detail__description">抗炎症作用があるスパイス。<br>
            
            接種目安:2g/日<br>
            (ターメリックの1日の摂取量の目安は1.5～3グラム程度。)<br>
            抗酸化作用や抗炎症作用により、肌のシミやシワ、くすみを予防する。<br>
            成分: クルクミン<br>
            <br>

            買える場所:<br>

            値段目安:<br>

            何処から輸入される？(流通ルートは？は？);<br>
            <br>
            <a class="spice-detail__description" href="https://furunavi.jp/discovery/knowledge_food/202408-turmeric/#:~:text=%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82-,%E7%BE%8E%E8%82%8C%E5%8A%B9%E6%9E%9C,%E3%81%A7%E3%81%8D%E3%81%AB%E3%81%8F%E3%81%8F%E3%81%AA%E3%82%8B%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82">
            // 引用元:ふるさと納税DISCOVERY>食べ物の知識<br>
            ターメリックの効能は？クルクミンの作用やおすすめレシピも紹介
            <br>
            <br>
            <a class="spice-detail__description" href="https://www.womenshealthmag.com/jp/food/a43692735/turmeric-20230510/">
            // 引用元:Women's Health>フードニュース<br>
            毎日でも摂るべき？　ターメリックの優れた栄養素と摂取のポイント
            どれほど体にいいの？

            </p>
        `;
    } else if (spice === 'cinnamon') {
        content = `
            <h2 class="spice-detail__title">シナモン</h2>
            <p class="spice-detail__description">血糖値の安定や抗菌作用に効果的。<br>
            接種目安: 1～3g/日<br>成分: シンナムアルデヒド<br>
            </p>
        `;
    } else if (spice === 'ginger') {
        content = `
            <h2 class="spice-detail__title">ショウガパウダー</h2>
            <p class="spice-detail__description">体を温め、免疫力を高めるスパイス。<br>接種目安: 1.5～4g/日<br>成分: ジンゲロール</p>
        `;
    }

    detail.innerHTML = content;
}


// function showDetail(spice) {
//     console.log("showDetail called with:", spice); // 呼び出し時の引数を確認

//     const detail = document.getElementById('spice-detail');
//     console.log("spice-detail element:", detail); // 要素が正しく取得できているか

//     let content = "";

//     if (spice === 'turmeric') {
//         content = `<h2 class="spice-detail__title">ターメリック</h2>`;
//     } else if (spice === 'cinnamon') {
//         content = `<h2 class="spice-detail__title">シナモン</h2>`;
//     } else if (spice === 'ginger') {
//         content = `<h2 class="spice-detail__title">ショウガパウダー</h2>`;
//     }

//     console.log("Generated content:", content); // 挿入されるHTMLの確認
//     detail.innerHTML = content;
// }




// 栄養素（ビタミン）
function showDetail(vitamin) {
    const detail = document.getElementById('vitamin-detail');
    let content = "";

    switch (vitamin) {
        case 'turmeric-vitamin':
            content = `
                <h2 class="vitamin-detail__title">ターメリック</h2>
                <p class="vitamin-detail__description">抗炎症作用があるスパイス。<br>摂取目安: 1～3g/日<br>成分: クルクミン</p>
            `;
            break;
        case 'cinnamon-vitamin':
            content = `
                <h2 class="vitamin-detail__title">シナモン</h2>
                <p class="vitamin-detail__description">血糖値の安定や抗菌作用に効果的。<br>摂取目安: 1～3g/日<br>成分: シンナムアルデヒド</p>
            `;
            break;
        case 'ginger-vitamin':
            content = `
                <h2 class="vitamin-detail__title">ショウガパウダー</h2>
                <p class="vitamin-detail__description">体を温め、免疫力を高めるスパイス。<br>摂取目安: 1.5～4g/日<br>成分: ジンゲロール</p>
            `;
            break;
        case 'bonito-vitamin':
            content = `
                <h2 class="vitamin-detail__title">カツオ</h2>
                <p class="vitamin-detail__description">高タンパクでDHA・EPAが豊富。<br>摂取目安: 適量<br>成分: DHA, EPA</p>
            `;
            break;
        case 'flaxseed-oil-vitamin':
            content = `
                <h2 class="vitamin-detail__title">アマニオイル</h2>
                <p class="vitamin-detail__description">オメガ3脂肪酸を含み、健康維持に最適。<br>摂取目安: 1日小さじ1杯<br>成分: α-リノレン酸</p>
            `;
            break;
        case 'ergothioneine-vitamin':
            content = `
                <h2 class="vitamin-detail__title">エルゴチオネイン(菌活)</h2>
                <p class="vitamin-detail__description">抗酸化作用を持つ成分。<br>主に含まれる食品: ひらたけ</p>
            `;
            break;
        case 'ornithine-vitamin':
            content = `
                <h2 class="vitamin-detail__title">オルニチン(菌活)</h2>
                <p class="vitamin-detail__description">疲労回復や肝機能向上に関与。<br>主に含まれる食品: ブナシメジ</p>
            `;
            break;
        case 'polyphenol-vitamin':
            content = `
                <h2 class="vitamin-detail__title">ポリフェノール</h2>
                <p class="vitamin-detail__description">抗酸化作用があり、老化防止に役立つ。</p>
            `;
            break;
        case 'vitamin-a':
            content = `
                <h2 class="vitamin-detail__title">ビタミンA</h2>
                <p class="vitamin-detail__description">視力維持や免疫機能に重要。</p>
            `;
            break;
        case 'vitamin-e':
            content = `
                <h2 class="vitamin-detail__title">ビタミンE</h2>
                <p class="vitamin-detail__description">抗酸化作用が強く、血行促進に良い。</p>
                <p class="vitamin-detail__description">ビタミンを多く含む食品
                卵、アーモンド、オリーブオイル<br>胚芽油、アボカド、大豆、うなぎ<br>かぼちゃ<br>全粒穀物</p>
            `;
            break;
        default:
            content = `
                <h2 class="vitamin-detail__title">栄養素(ビタミン)の詳細</h2>
                <p class="vitamin-detail__description">左のリストから選択してください。</p>
            `;
    }

    detail.innerHTML = content;
}
