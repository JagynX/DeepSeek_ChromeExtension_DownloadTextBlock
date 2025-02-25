// content.js
function generateGuid() {

  return 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function extractFilename(text) {
  const regex =  /\b[\w.-]+\.[a-zA-Zа-яА-Я0-9]{1,}\b/g;
  const match = text.match(regex);
  return match ? match[0] : null;
}
function addCodeDownloadButtons() {
  document.querySelectorAll('.md-code-block, .md-code-block-banner-wrap').forEach(codeBlock => {
    const container = codeBlock.querySelector('.md-code-block-action, .md-code-block-banner');
    if (!container || container.querySelector('.download-btn')) return;
    
    const downloadBtn = document.createElement('div');
    downloadBtn.className = 'ds-markdown-code-copy-button download-btn';
    downloadBtn.textContent = 'Download';
    
    downloadBtn.addEventListener('click', () => downloadCode(codeBlock));
    
    container.appendChild(downloadBtn);
  });
}

// Update your download handlers to use this function
async function downloadCode(codeBlock) {
  try {
    const code = codeBlock.querySelector('pre').textContent;
    const infostring = codeBlock.querySelector('.md-code-block-infostring');
    const parentContent = codeBlock.previousElementSibling.textContent.trim().toLowerCase();
    const parentContentFileName = extractFilename(parentContent);
    const extension = infostring?.textContent.trim().toLowerCase() || 'txt';
    const cleanExtension = extension.replace(/[^a-z0-9]/gi, '');
     // Map extensions to MIME types
 const mimeTypes = {
  js: 'text/javascript',
  javascript: 'text/javascript',
  css: 'text/css',
  html: 'text/html',
  json: 'application/json',
  txt: 'text/plain'
};

    const filename = parentContentFileName ? parentContentFileName : `${generateGuid()}.${cleanExtension}`;




const mimeType = mimeTypes[extension] || 'text/plain';
console.log(codeBlock);
console.log(infostring);
console.log(parentContent);
console.log(parentContentFileName);
console.log(extension);
console.log(cleanExtension);
console.log(filename);
console.log(mimeType);


    await sendDownloadRequest(
      URL.createObjectURL(new Blob([code], { type: mimeType})),
      filename
    );
  } catch (error) {
    console.error('Download failed:', error);
  }
}


// Add this function to content.js
function sendDownloadRequest(url, filename) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      { action: 'download', url, filename },
      (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(response);
        }
      }
    );
  });
}



function addAllFeatures() {
  addCodeDownloadButtons();
}


// Initial setup
addAllFeatures();

// Watch for DOM changes
const observer = new MutationObserver(addAllFeatures);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
