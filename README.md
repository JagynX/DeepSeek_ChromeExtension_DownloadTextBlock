Extension Description:

This extension adds a button to download a block of code in chats on https://chat.deepseek.com/.

If no specific file name is detected, it will attempt to download the file with a name in the format Guid().txt.

If there is a file extension (e.g., .json) before copying the code, it will download the file as Guid().extension (e.g., Guid().json).

If there is text above the code block that matches the regex pattern /\b[\w.-]+.[a-zA-Zа-яА-Я0-9]{1,}\b/g, indicating a file name with an extension, the file will be downloaded with the full name.

Installation:

Download the code as a ZIP file or clone the repository.

Go to the Chrome Extensions page or open chrome://extensions/.

Enable Developer Mode.

3.Click button "Load unpacked"
![image](https://github.com/user-attachments/assets/4d7f3bdf-dab0-4167-96e7-6de499fb1386)

4.Navigate to /src folder and select it
![image](https://github.com/user-attachments/assets/9c1b3370-a736-4804-a1b8-ca4cc4746f78)

Start using the extension to download files from DeepSeek. For the best experience, you can ask DeepSeek to generate full code instead of manually updating your files.

Examples:

First example for download manifest.json:
![image](https://github.com/user-attachments/assets/610a03fb-e316-4a54-9b43-a2d39422ce2e)

Second example for download Guid().js:
![image](https://github.com/user-attachments/assets/ce1af6e6-be41-42ce-91aa-5f1a480a0cc7)

Third example for download Guid().txt:
![image](https://github.com/user-attachments/assets/f2c98ae1-8a99-4f6c-ba96-c83cc217398f)

-----
Это расширение добавляет кнопку для скачивания блока кода в чатах на сайте https://chat.deepseek.com/.

Если имя файла не указано, расширение попытается скачать файл с именем в формате Guid().txt.

Если перед копированием кода указано расширение файла (например, .json), файл будет скачан как Guid().расширение (например, Guid().json).

Если над блоком кода есть текст, соответствующий регулярному выражению /\b[\w.-]+.[a-zA-Zа-яА-Я0-9]{1,}\b/g, что указывает на имя файла с расширением, файл будет скачан с полным именем.

Установка:

Скачайте код в виде ZIP-архива или клонируйте репозиторий.

Перейдите на страницу расширений Chrome или откройте chrome://extensions/.

Включите режим разработчика (Developer Mode).

Нажмите кнопку "Загрузить распакованное расширение" (Load unpacked).

Перейдите в папку /src и выберите её.

Начните использовать расширение для скачивания файлов из DeepSeek. Для лучшего результата вы можете попросить DeepSeek сгенерировать полный код вместо ручного обновления ваших файлов.

Примеры:

Скачивание manifest.json:
![image](https://github.com/user-attachments/assets/610a03fb-e316-4a54-9b43-a2d39422ce2e)

Скачивание Guid().js: 
![image](https://github.com/user-attachments/assets/ce1af6e6-be41-42ce-91aa-5f1a480a0cc7)

Скачивание Guid().txt:
![image](https://github.com/user-attachments/assets/f2c98ae1-8a99-4f6c-ba96-c83cc217398f)



