<script>
  import { SkeletonBlock, SkeletonText, SkeletonAvatar } from 'skeleton-elements/svelte'
  import 'skeleton-elements/skeleton-elements.css' //CSSファイルはHTMLから直接読み込むこともできるが、ここではrollup.jsでまとめてビルドする
  import { LoremIpsum } from 'lorem-ipsum' //ダミーテキストを生成するパッケージ（ https://www.npmjs.com/package/lorem-ipsum ）

  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 10,
      min: 5
    }
  })

  const mockData = { //APIから取得する想定のダミーデータ
    imageUrl: 'https://pxgrid3.imgix.net/profile/watanabe.jpg?w=160&h=160',
    name: '渡辺 由',
    title: 'フロントエンド・エンジニア',
    description: 'Web制作会社、ECサイト運営会社にてマークアップや社内システム構築を担当したのち、大学の研究室のエンジニアとしてデータベースや解析ツールなどのWebアプリケーション開発に従事。インフラやサーバーサイドを含め、Web技術全般を幅広く経験したが、いま最も興味があるのはJavaSciptやCSSやUIの設計。2021年にピクセルグリッドに入社。'
  }

  let isBusy = true //aria属性のコントロールのため、状態を変数に格納しておく
  const fetch = async() => {
    await new Promise(r => setTimeout(r, 3000)) // 3秒待ってからにダミーデータを返す
    isBusy = false

    return mockData
  }
</script>
<div>
  <h1 class="pageTitle">プロフィール</h1>
  <div class="profile" aria-busy="{ isBusy }"><!-- スケルトンスクリーンと実際のコンテンツの親要素 -->
    {#await fetch()}
    <!-- ここからスケルトンスクリーン -->
      <div class="profile_container skeleton-effect-wave" style="--skeleton-color: #EEE" aria-hidden="true">
        <div class="profile_icon">
          <SkeletonAvatar size={80} />
        </div>
        <div class="profile_outline">
          <div class="profile_name"><SkeletonText>{lorem.generateWords(2)}</SkeletonText></div>
          <div class="profile_title"><SkeletonText>{lorem.generateWords(3)}</SkeletonText></div>
        </div>
        <div class="profile_description">
          <SkeletonText>{lorem.generateSentences(6)}</SkeletonText>
        </div>
        <div class="profile_footer">
          <SkeletonBlock width="100%" height="40px" />
        </div>
      </div>
    <!-- ここまでスケルトンスクリーン -->
    {:then data}
    <!-- ここから実際に表示したいコンテンツ -->
      <div class="profile_container">
        <div class="profile_icon">
          <img class="profile_img" src="{ data.imageUrl }" width="80" height="80" alt="">
        </div>
        <div class="profile_outline">
          <div class="profile_name">{ data.name }</div>
          <div class="profile_title">{ data.title }</div>
        </div>
        <div class="profile_description">
          <p>{ data.description }</p>
        </div>
        <div class="profile_footer">
          <a class="profile_link" href="http://example.com/">詳細を見る</a>
        </div>
      </div>
    <!-- ここまで実際に表示したいコンテンツ -->
    {/await}
  </div>
</div>
<style>
  .pageTitle {
    font-size: 20px;
    text-align: center;
  }

  .profile_container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: min(400px, 100%);
    margin: 20px auto;
    padding: 10px;
  }

  .profile_icon {
    width: 80px;
    border-radius: 50%;
    overflow: hidden;
  }

  .profile_img {
    display: block;
  }

  .profile_outline {
    margin-left: 10px;
  }

  .profile_name {
    font-size: 20px;
  }

  .profile_title {
    font-size: 12px;
  }

  .profile_description {
    width: 100%;
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.6;
  }

  .profile_footer {
    width: 100%;
    margin-top: 15px;
  }

  .profile_link {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #666;
    color: #FFF;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
  }
</style>
