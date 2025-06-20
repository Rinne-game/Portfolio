
const works = [
    {
        Att: 0,
        id: 'TapLine',
        title: 'TapLine',
        description: 'レーンが動く面白い音ゲー。',
        thumbnail: './images/game-b.png'
    },
    {
        Att: 0,
        id: 'Mgamer',
        title: 'μgamer',
        description: '上下からノーツが降ってくる音ゲー。',
        thumbnail: './images/game-b.png'
    },
    {
        Att: 0,
        id: 'Simplythm',
        title: 'Simplythm',
        description: '音楽ゲームです。それ以外は、動作に影響する可能性があるので、ありません。',
        thumbnail: './images/game-b.png'
    },
    {
        Att: 0,
        id: 'Frash_tile',
        title: 'Frash Tile',
        description: '初作品。タイルの色の配置を覚えるゲーム。',
        thumbnail: './images/game-b.png'
    },
    {
        Att: 1,
        id: 'Portfolio_Site',
        title: 'ポートフォリオサイト',
        description: '自分のプロフィールや制作実績を紹介するために制作したポートフォリオサイトです。',
        thumbnail: './images/game-b.png'
    },
    {
        Att: 1,
        id: 'Genshin_Score',
        title: '原神 聖遺物スコア計算ツール',
        description: '原神のスコアを表にして出力するためのツールです。',
        thumbnail: './images/game-b.png'
    },
    {
        Att: 1,
        id: 'OECU_Good_Site',
        title: '大阪電通生向けかゆいところに手が届くサイト',
        description: '105分に対応し切れなかった同士向けのサイトです。',
        thumbnail: './images/game-b.png'
    },
    {
        Att: 0,
        id: 'Avoid_ball',
        title: 'Avoid Ball',
        description: 'ボールを避けるゲーム。',
        thumbnail: './images/game-b.png'
    }
    //自分のプロフィールや制作実績を紹介するために制作した、レスポンシブ対応のポートフォリオサイトです。
];
const categories = ['Game', 'Web', 'Programing', 'Other'];
function Loadi(index) {
    let count = 0;
    works.forEach(work => {
        const wrapper = document.createElement('div');
        wrapper.className = 'work';
        switch (Load()) {
            //
            case "Game":
                if (index != work.Att) {
                    return;
                }
                else break;
            case "Web":
                if (index != work.Att) {
                    return;
                }
                else break;
            case "Programing":
                if (index != work.Att) {
                    return;
                }
                else break;
            case "Other":
                if (index != work.Att) {
                    return;
                }
                else break;
            default:
                if (index != work.Att) {
                    return;
                }
                break;
        }
        count++;
    });
    return count;
}
function Load() {
    let url = new URL(window.location.href);
    let params = url.searchParams;
    if (params.has('Dep')) {
        console.log(params.get('Dep')); // 5
        return params.get('Dep');
    }
    else return null;
}