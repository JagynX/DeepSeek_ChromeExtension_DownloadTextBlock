Extension that add button to download block of code in chat with https://chat.deepseek.com/
Will try to download file with name Guid().txt
if before copy there extension like json, will download file  Guid().extension (like .json in the example)
if there text above block and some text matches regexp "/\b[\w.-]+\.[a-zA-Zа-яА-Я0-9]{1,}\b/g" mean theres file name.extension - then will download with full name

Instalation:
0.Dowwnload code zip or like repository
1. Go to page in chrome: 
chrome://extensions/
2.Enable DevMode
3.Click button "Load unpacked"
![image](https://github.com/user-attachments/assets/4d7f3bdf-dab0-4167-96e7-6de499fb1386)
4.Navigate to /src folder
![image](https://github.com/user-attachments/assets/9c1b3370-a736-4804-a1b8-ca4cc4746f78)
5.Go and get some files from DeepSeek.
You may ask him to generate full code instead of updating your`s manual for best use of extension

Examples: 
First example for download manifest.json:
![image](https://github.com/user-attachments/assets/610a03fb-e316-4a54-9b43-a2d39422ce2e)

Second example for download Guid().js:
![image](https://github.com/user-attachments/assets/ce1af6e6-be41-42ce-91aa-5f1a480a0cc7)

Third example for download Guid().txt:
![image](https://github.com/user-attachments/assets/f2c98ae1-8a99-4f6c-ba96-c83cc217398f)

