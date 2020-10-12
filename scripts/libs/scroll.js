// イージング関数
let Ease = {
  easeInOut: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
};

// アニメーションの Duration の設定
let duration = 600;

window.addEventListener("DOMContentLoaded", () => {
  // スムーススクロールのトリガーを取得
  let smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');

  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
    // トリガーをクリックした時に実行
    smoothScrollTrigger.addEventListener("click", function (e) {
      // href属性の値を取得
      let href = smoothScrollTrigger.getAttribute("href");

      // 現在のスクロール位置を取得（クロスブラウザに対応）
      let currentPostion =
        document.documentElement.scrollTop || document.body.scrollTop;

      // スクロール先の要素を取得
      let targetElement = document.getElementById(href.replace("#", ""));

      // スクロール先の要素が存在する場合はスムーススクロールを実行
      if (targetElement) {
        // デフォルトのイベントアクションをキャンセル
        e.preventDefault();
        e.stopPropagation();

        // スクロール先の要素の位置を取得
        let targetPosition =
          window.pageYOffset + targetElement.getBoundingClientRect().top - 140; // headerと余白の分だけずらす

        // スタート時点の時間を取得
        let startTime = performance.now();

        // アニメーションのループを定義
        let loop = function (nowTime) {
          // スタートからの経過時間を取得
          let time = nowTime - startTime;

          // duration を1とした場合の経過時間を計算
          let normalizedTime = time / duration;

          // duration に経過時間が達していない場合はアニメーションを実行
          if (normalizedTime < 1) {
            // 経過時間とイージングに応じてスクロール位置を変更
            window.scrollTo(
              0,
              currentPostion +
                (targetPosition - currentPostion) *
                  Ease.easeInOut(normalizedTime)
            );

            // アニメーションを継続
            requestAnimationFrame(loop);

            // duration に経過時間が達したら、アニメーションを終了
          } else {
            window.scrollTo(0, targetPosition);
          }
        };

        // アニメーションをスタート
        requestAnimationFrame(loop);
      }
    });
  });
});
