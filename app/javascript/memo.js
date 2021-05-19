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
  });
}

window.addEventListener('load', post);
//ページがロードすることをきっかけに、関数postを実行させる