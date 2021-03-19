var tipuesearch = {"pages": [{'title': 'about', 'text': '40823131 江建儒 \n 倉儲: https://github.com/40823131/cd2021 \n 網頁: https://40823131.github.io/cd2021/ \n 分組網頁: https://40823131.github.io/cd2021ag23/ \n 歷年網頁 \n cp2019: https://40823131.github.io/cp2019/ \n wcm2020: https://40823131.github.io/wcm2020/ \n cad2020: https://40823131.github.io/cad2020/ \n wvp2021: https://40823131.github.io/wvp2021/ \n \n \n', 'tags': '', 'url': 'about.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': '建立網頁', 'text': '利用 https://github.com/mdecourse/cmstemplate \xa0樣板，建立網頁，步驟如下: \n 1.按下Use this template，即可建立新倉儲，命名為cd2021。 \n 2.利用隨身系統，輸入指令 \n git clone --recurse-submodules https://github.com/40823131/cd2021.git \n 將cd2021 clone進指定資料夾。 \n 注意:此時不可使用git clone指令clone倉儲，而需改用git clone --recurse-submodules，須使用後述指令之原因為，指定倉儲已有(cmsimde)子模版，而git clone則是用來clone未有(cmsimde)子模板的倉儲，再行安裝子模組。 \n \n 3.進入cmsimde資料夾並輸入指令python wsgi.py，即可對網頁內容進行編輯。 \n \n', 'tags': '', 'url': '建立網頁.html'}, {'title': 'Blog建立', 'text': '利用leo對pelican.leo檔案進行編輯，以達成創建Blog的目的，操作如我過往在wcm2020專案中所提到的作法: https://40823131.github.io/wcm2020/content/%E4%BD%BF%E7%94%A8Leo%20Editor%E7%B7%A8%E8%AD%AFpelican.leo%E5%BB%BA%E7%AB%8Bblog%E7%B6%B2%E8%AA%8C.html \n 需修改之部分均相同，不同之處為需將上述網站教學內容中所有wcm2020的部分改為cd2021，即可完成創建部落格。 \n', 'tags': '', 'url': 'Blog建立.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': '分組(二人專案小組)', 'text': '標題:\xa0 2021-協同產品設計實習-stage1-ag26 \n \xa0 \xa0 \xa0 \xa0 專題題目:自動寵物飼料機 \n \xa0 \xa0 \xa0 \xa0 第一位組員學號: 40823131\xa0 |\xa0 Repository:\xa0 40823131 \xa0 | Site: \xa0 40823131 \n \xa0 \xa0 \xa0 \xa0 第二位組員學號: 40823116\xa0 |\xa0Repository:\xa0 40823116 \xa0 | Site: \xa0 40823116 \n', 'tags': '', 'url': '分組(二人專案小組).html'}, {'title': '利用Hamachi建立虛擬區域網路', 'text': '利用Hamachi，達成協同編輯分組網站的目的。 \n 首先需先下載Hamachi: https://www.vpn.net/ \xa0 \n 安裝後，可建立虛擬網路並設置密碼。 \n \n 將網路ID及密碼分享給組員，組員可借由連接上此虛擬區域網路，來達成就算在不同網域的情況下，也能夠借由連上組長的虛擬區網來進行小組網頁編輯。 \n \n 在開啟小組網頁動態時的網址為https://[::]:9443 \n 其中[::]其實就是組長的ipv6位址，取得方式如下。 \n \n 將組長的ipv6位址取代網址中的[::]及可成功連上小組網頁動態進行編輯。 \n', 'tags': '', 'url': '利用Hamachi建立虛擬區域網路.html'}, {'title': '利用虛擬主機建立Ethercalc伺服器', 'text': '使用的ubuntu版本為20.04 \n \n 安裝curl \n sudo apt install curl \n \n 納入 Nodesource repository \n curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - \n 安裝 node.js \n sudo apt install --assume-yes nodejs \n \n 安裝npm \n sudo apt install npm \n \n 安裝 ethercalc \n sudo npm install -g ethercalc \n 開啟ethercalc server \n ethercalc \n \n 使用firefox前往   http://cd2021ag26:8000 \xa0 \n \n', 'tags': '', 'url': '利用虛擬主機建立Ethercalc伺服器.html'}, {'title': 'W3', 'text': '利用coppeliasim對已完成之成品進行模擬 \n', 'tags': '', 'url': 'W3.html'}, {'title': '初代機(version 1.0.0) ฅ^•ω•^ฅ', 'text': '場景檔: https://drive.google.com/file/d/1flnM51QFMFAkOVgVQ6EJE0GaNEwl4Kb4/view?usp=sharing \xa0 \n stl檔: https://drive.google.com/file/d/1OSYmHnWZztxp95ZPyKEOnh1jfADEdcgd/view?usp=sharing \xa0 \n', 'tags': '', 'url': '初代機(version 1.0.0) ฅ^•ω•^ฅ.html'}, {'title': '貳代機(version 2.0.0)\xa0^ↀᴥↀ^', 'text': '場景檔: https://drive.google.com/file/d/1zx1sQH35AiW-sQGoPBtUzH_rCZiGe6E_/view?usp=sharing \xa0 \n stl檔: https://drive.google.com/file/d/1om6qK5MmQifteyIR2raxF1kGzh5wU11E/view?usp=sharing \xa0 \n', 'tags': '', 'url': '貳代機(version 2.0.0)\xa0^ↀᴥↀ^.html'}, {'title': '参代機(version 3.0.0)\xa0ଲ(^ⓛ ω ⓛ^)ଲ', 'text': '場景檔: https://drive.google.com/file/d/1abmOlBmMaag_MNbuSYV6TcFEhF2tMd4a/view?usp=sharing \xa0 \n stl檔: \n', 'tags': '', 'url': '参代機(version 3.0.0)\xa0ଲ(^ⓛ ω ⓛ^)ଲ.html'}, {'title': '肆代機(version 4.0.0)\xa0V(=^･ω･^=)v', 'text': '場景檔: https://drive.google.com/file/d/122SyiBWZQpqqTPrJkhfHVHMAU9kx8AMN/view?usp=sharing \xa0 \n stl檔: https://drive.google.com/file/d/1XN7ku3YdPHd53RKRVKYT9fSw2k-Rs_4s/view?usp=sharing \xa0 \n', 'tags': '', 'url': '肆代機(version 4.0.0)\xa0V(=^･ω･^=)v.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': '利用程式方法更改影片檔名', 'text': '使用python程式編寫進而達到更改影片名稱的效果，藉由最後修改時間做為線索來判斷組別，依此線索先利用程式取得各檔案最後修改時間，將取得的時間加入檔名前端進行排序，最後再進行檔名修整，修整為所要的格式。 1.取得最後修改時間，將時間加入檔頭後，放入串列。 2.使用串列排序，排列後更名(階段性更名，此步驟重點為順序)。 3.更改為最終需要的檔名格式。 \n 程式碼如下。 \n import os\n#sorted:排序。\ndef renameFilesAndSortedByTime(dirPath):\n    #建立空串列。\n    newlist = []\n    #獲取檔名列表。\n    files = os.listdir(dirPath)\n    #獲取新增修改時間的檔名列表。\n    for j in files:\n        #獲取從1970年1月1日上午12時00分到檔案最後修改的UTC時間總共經過多少秒。\n        createTime = os.path.getmtime(dirPath + j)\n        # 將createTime中取得的秒數加入文件名稱前方，並加入串列以利排序。\n        newlist.append(str(int(createTime)) + "-" + j)\n\n    # 將串列進行排序\n    newlist = sorted(newlist)\n    #印出串列\n    print(newlist)\n    # range()內的數字經由len(newlist)決定\n    #len()主要用來傳回串列參數L的長度，也就是包含幾個元素。\n    for i in range(len(newlist)):\n        #newlist[i][11:]\n        #[i]的意思為串列中的第i項。\n        #[11:]是用來取得檔案名稱從第12字元開始到最後字元的檔名。\n        #使用上述兩個方法再配合迴圈可取得串列內所有檔案的舊檔名。\n        oldName = newlist[i][11:]\n\n        # 將秒數部分修改為序號，得到新的文件名。\n        # 一定要按照下列寫法否則後期排序更名會出現錯誤。\n        newName = newlist[i][11:]\n        if (i + 1) < 10:\n            newName = \'00\' + str(i + 1) + newName\n        elif (i + 1) > 9 and (i + 1) < 100:\n            newName = \'0\' + str(i + 1) + newName\n        else:\n            newName = str(i + 1) + newName\n        # dirpath為目標文件資料夾。\n        # 重命名文件照修改時間加序号在前方。\n        os.rename(dirPath + oldName, dirPath + newName)\n\nif __name__ == \'__main__\':\n    renameFilesAndSortedByTime("C:/Users/Administrator/Downloads/2021-03_2a_stage1/")\n    print("rename ok!")\n    path = \'C:/Users/Administrator/Downloads/2021-03_2a_stage1/\'\n    #轉入目標文件夾。\n    file=os.listdir(path)\n    print(file) #印出讀取到的檔名稱。\n    n=0 #設定初始值。\n    for i in file: #因為資料夾裡面的檔案都要重新更換名稱。\n        oldname=path+file[n] #path為路徑名稱，[n]表示第n個檔案。\n        newname=path+\'cd2021_2a_\'+str(n+1)+\'.mp4\' \n        os.rename(oldname,newname)\n        print(oldname+\'>\'+newname) \n        n=n+1 \n\n     \n youtube: \n', 'tags': '', 'url': '利用程式方法更改影片檔名.html'}]};