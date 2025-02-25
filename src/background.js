chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'download') {
    chrome.downloads.download({
      url: request.url,
      filename: request.filename,
      conflictAction: 'uniquify',
      saveAs: false,
      // Force Chrome to respect the extension
      headers: [{
        name: 'Content-Type',
        value: 'application/octet-stream' // Generic binary type
      }]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error('Download failed:', chrome.runtime.lastError);
      }
      sendResponse({ status: 'completed' });
    });
    return true;
  }
});