const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
      <div class="post">
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
          ${item.content}
        </div>
      </div>`;
  return html
}


function post (){
  //関数postを定義
  const submit = document.getElementById("submit");
  //submitというIdをもつ要素を取得し、submitという定数に定義
  submit.addEventListener("click", (e) => {
    //submitの要素がクリックされたら以下の関数が発動するイベント発火にタイミングを定義し、
    //第二引数で(e)というイベントオブジェクトを取得している。
    e.preventDefault();
    //eにより、ブラウザにデフォルトで設定されているイベントを無効化する
    const form = document.getElementById("form");
    //formという定数にフォームの要素を取得させた。
    const formData = new FormData(form);
    //formDataという定数にFormDataのオブジェクトを生成し、formの値を取得させた
    const XHR = new XMLHttpRequest();
    //非同期通信を行うため、XHRという定数にXMLHttpRequestのオブジェクトを生成した
    XHR.open("POST", "/posts", true);
    //オブジェクトXHRにリクエストの設定を行った
    XHR.responseType = "json";
    //オブジェクトXHRにレスポンスで受け取るデータフォーマットJSONを定義した
    XHR.send(formData);
    //オブジェクトXHRにフォームの値を渡し、送信させる
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert('Error ${XHR.status}: ${XHR.statusText}');
        return null;
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content")
      
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
}

window.addEventListener('load', post);
//ページがロードすることをきっかけに、関数postを実行させる