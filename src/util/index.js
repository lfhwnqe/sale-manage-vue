export function changePageTitle(title) {
  // 写文档标题
  document.title = title;
  // hack ios设备无法修改title
  if (isIOS()) {
    let iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = "/favicon.ico";
    document.body.appendChild(iframe);
    iframe.addEventListener('load', function() {
      setTimeout(function() {
        iframe.remove();
      }, 0);
    });
  }
}


export function isIOS() {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}
