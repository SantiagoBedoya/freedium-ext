chrome.action.onClicked.addListener((tab) => {
  const currentURL = tab.url;
  const freediumURL = `https://freedium.cfd/${currentURL}`;
  chrome.tabs.update({ url: freediumURL });
});
