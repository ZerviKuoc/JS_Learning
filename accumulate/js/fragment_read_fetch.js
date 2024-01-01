/* 情景：寻常请求结果拿到的时候是完整的
但是像ChatGpt，他的文字结果是一点一点出来的。
怎么在一个请求中，一部分一部分的拿到结果去渲染？
*/

const url = "https://localhost:8080/chat";

async function getResponse(content) {
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  // 第一个await只是响应头出来了，但是响应体没有
  // 我们不需要响应体全部拿到后再来
  const reader = resp.body?.getReader();
  // 解码器
  const decoder = new TextDecoder();
  while (1) {
    // 一块一块读的，拿到的 value是Unit8Array字节数组
    const { done, value } = await reader?.read();
    if (done) {
      break;
    }
    const txt = decoder.decode(value);
    console.log("txt: ", txt);
  }
}
/* 
  axios的话
    axios配置项里面有onDownloadProgress配置项，
    是个函数，在里面可以拿到需要的数据
  上述返回的json格式就用不起来了。
*/