var tipuesearch = {"pages": [{'title': 'about', 'text': '40823131 江建儒\xa0  Mr.\xa0 Tabby \n 倉儲: \n \n 網頁: \n \n 分組網頁: \n \n 個人youtube: \n \n 歷年網頁 \n cp2019: https://40823131.github.io/cp2019/ \n wcm2020: https://40823131.github.io/wcm2020/ \n cad2020: https://40823131.github.io/cad2020/ \n wvp2021: https://40823131.github.io/wvp2021/ \n \n \n', 'tags': '', 'url': 'about.html'}, {'title': 'Stage1', 'text': '', 'tags': '', 'url': 'Stage1.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': '建立網頁', 'text': '利用 https://github.com/mdecourse/cmstemplate \xa0樣板，建立網頁，步驟如下: \n 1.按下Use this template，即可建立新倉儲，命名為cd2021。 \n 2.利用隨身系統，輸入指令 \n git clone --recurse-submodules https://github.com/40823131/cd2021.git \n 將cd2021 clone進指定資料夾。 \n 注意:此時不可使用git clone指令clone倉儲，而需改用git clone --recurse-submodules，須使用後述指令之原因為，指定倉儲已有(cmsimde)子模版，而git clone則是用來clone未有(cmsimde)子模板的倉儲，再行安裝子模組。 \n \n 3.進入cmsimde資料夾並輸入指令python wsgi.py，即可對網頁內容進行編輯。 \n \n', 'tags': '', 'url': '建立網頁.html'}, {'title': 'Blog建立', 'text': '利用leo對pelican.leo檔案進行編輯，以達成創建Blog的目的，操作如我過往在wcm2020專案中所提到的作法: https://40823131.github.io/wcm2020/content/%E4%BD%BF%E7%94%A8Leo%20Editor%E7%B7%A8%E8%AD%AFpelican.leo%E5%BB%BA%E7%AB%8Bblog%E7%B6%B2%E8%AA%8C.html \n 需修改之部分均相同，不同之處為需將上述網站教學內容中所有wcm2020的部分改為cd2021，即可完成創建部落格。 \n', 'tags': '', 'url': 'Blog建立.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': '分組(二人專案小組)', 'text': '標題:\xa0 2021-協同產品設計實習-stage1-ag26 \n \xa0 \xa0 \xa0 \xa0 專題題目:自動寵物飼料機 \n \xa0 \xa0 \xa0 \xa0 第一位組員學號: 40823131\xa0 |\xa0 Repository:\xa0 40823131 \xa0 | Site: \xa0 40823131 \n \xa0 \xa0 \xa0 \xa0 第二位組員學號: 40823116\xa0 |\xa0Repository:\xa0 40823116 \xa0 | Site: \xa0 40823116 \n', 'tags': '', 'url': '分組(二人專案小組).html'}, {'title': '利用Hamachi建立虛擬區域網路', 'text': '利用Hamachi，達成協同編輯分組網站的目的。 \n 首先需先下載Hamachi: https://www.vpn.net/ \xa0 \n 安裝後，可建立虛擬網路並設置密碼。 \n \n 將網路ID及密碼分享給組員，組員可借由連接上此虛擬區域網路，來達成就算在不同網域的情況下，也能夠借由連上組長的虛擬區網來進行小組網頁編輯。 \n \n 在開啟小組網頁動態時的網址為https://[::]:9443 \n 其中[::]其實就是組長的ipv6位址，取得方式如下。 \n \n 將組長的ipv6位址取代網址中的[::]及可成功連上小組網頁動態進行編輯。 \n', 'tags': '', 'url': '利用Hamachi建立虛擬區域網路.html'}, {'title': '利用虛擬主機建立Ethercalc伺服器', 'text': '使用的ubuntu版本為20.04 \n \n 安裝curl \n sudo apt install curl \n \n 納入 Nodesource repository \n curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - \n 安裝 node.js \n sudo apt install --assume-yes nodejs \n \n 安裝npm \n sudo apt install npm \n \n 安裝 ethercalc \n sudo npm install -g ethercalc \n 開啟ethercalc server \n ethercalc \n \n 使用firefox前往   http://cd2021ag26:8000 \xa0 \n \n', 'tags': '', 'url': '利用虛擬主機建立Ethercalc伺服器.html'}, {'title': 'W3', 'text': '利用coppeliasim對已完成之成品進行模擬 \n', 'tags': '', 'url': 'W3.html'}, {'title': '初代機(version 1.0.0) ฅ^•ω•^ฅ', 'text': '場景檔: https://drive.google.com/file/d/1flnM51QFMFAkOVgVQ6EJE0GaNEwl4Kb4/view?usp=sharing \xa0 \n stl檔: https://drive.google.com/file/d/1OSYmHnWZztxp95ZPyKEOnh1jfADEdcgd/view?usp=sharing \xa0 \n', 'tags': '', 'url': '初代機(version 1.0.0) ฅ^•ω•^ฅ.html'}, {'title': '貳代機(version 2.0.0)\xa0^ↀᴥↀ^', 'text': '場景檔: https://drive.google.com/file/d/1zx1sQH35AiW-sQGoPBtUzH_rCZiGe6E_/view?usp=sharing \xa0 \n stl檔: https://drive.google.com/file/d/1om6qK5MmQifteyIR2raxF1kGzh5wU11E/view?usp=sharing \xa0 \n', 'tags': '', 'url': '貳代機(version 2.0.0)\xa0^ↀᴥↀ^.html'}, {'title': '参代機(version 3.0.0)\xa0ଲ(^ⓛ ω ⓛ^)ଲ', 'text': '場景檔: https://drive.google.com/file/d/1abmOlBmMaag_MNbuSYV6TcFEhF2tMd4a/view?usp=sharing \xa0 \n stl檔: \n', 'tags': '', 'url': '参代機(version 3.0.0)\xa0ଲ(^ⓛ ω ⓛ^)ଲ.html'}, {'title': '肆代機(version 4.0.0)\xa0V(=^･ω･^=)v', 'text': '場景檔: https://drive.google.com/file/d/122SyiBWZQpqqTPrJkhfHVHMAU9kx8AMN/view?usp=sharing \xa0 \n stl檔: https://drive.google.com/file/d/1XN7ku3YdPHd53RKRVKYT9fSw2k-Rs_4s/view?usp=sharing \xa0 \n', 'tags': '', 'url': '肆代機(version 4.0.0)\xa0V(=^･ω･^=)v.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': '利用程式方法更改影片檔名', 'text': '使用python程式編寫進而達到更改影片名稱的效果，藉由最後修改時間做為線索來判斷組別，依此線索先利用程式取得各檔案最後修改時間，將取得的時間加入檔名前端進行排序，最後再進行檔名修整，修整為所要的格式。 1.取得最後修改時間，將時間加入檔頭後，放入串列。 2.使用串列排序，排列後更名(階段性更名，此步驟重點為順序)。 3.更改為最終需要的檔名格式。 \n 程式碼如下。 \n import os\n#sorted:排序。\ndef renameFilesAndSortedByTime(dirPath):\n    #建立空串列。\n    newlist = []\n    #獲取檔名列表。\n    files = os.listdir(dirPath)\n    #獲取新增修改時間的檔名列表。\n    for j in files:\n        #獲取從1970年1月1日上午12時00分到檔案最後修改的UTC時間總共經過多少秒。\n        createTime = os.path.getmtime(dirPath + j)\n        # 將createTime中取得的秒數加入文件名稱前方，並加入串列以利排序。\n        newlist.append(str(int(createTime)) + "-" + j)\n\n    # 將串列進行排序\n    newlist = sorted(newlist)\n    #印出串列\n    print(newlist)\n    # range()內的數字經由len(newlist)決定\n    #len()主要用來傳回串列參數L的長度，也就是包含幾個元素。\n    for i in range(len(newlist)):\n        #newlist[i][11:]\n        #[i]的意思為串列中的第i項。\n        #[11:]是用來取得檔案名稱從第12字元開始到最後字元的檔名。\n        #使用上述兩個方法再配合迴圈可取得串列內所有檔案的舊檔名。\n        oldName = newlist[i][11:]\n\n        # 將秒數部分修改為序號，得到新的文件名。\n        # 一定要按照下列寫法否則後期排序更名會出現錯誤。\n        newName = newlist[i][11:]\n        if (i + 1) < 10:\n            newName = \'00\' + str(i + 1) + newName\n        elif (i + 1) > 9 and (i + 1) < 100:\n            newName = \'0\' + str(i + 1) + newName\n        else:\n            newName = str(i + 1) + newName\n        # dirpath為目標文件資料夾。\n        # 重命名文件照修改時間加序号在前方。\n        os.rename(dirPath + oldName, dirPath + newName)\n\nif __name__ == \'__main__\':\n    renameFilesAndSortedByTime("C:/Users/Administrator/Downloads/2021-03_2a_stage1/")\n    print("rename ok!")\n    path = \'C:/Users/Administrator/Downloads/2021-03_2a_stage1/\'\n    #轉入目標文件夾。\n    file=os.listdir(path)\n    print(file) #印出讀取到的檔名稱。\n    n=0 #設定初始值。\n    for i in file: #因為資料夾裡面的檔案都要重新更換名稱。\n        oldname=path+file[n] #path為路徑名稱，[n]表示第n個檔案。\n        newname=path+\'cd2021_2a_\'+str(n+1)+\'.mp4\' \n        os.rename(oldname,newname)\n        print(oldname+\'>\'+newname) \n        n=n+1 \n\n     \n youtube: \n \n', 'tags': '', 'url': '利用程式方法更改影片檔名.html'}, {'title': 'Stage2', 'text': '', 'tags': '', 'url': 'Stage2.html'}, {'title': 'W5', 'text': '', 'tags': '', 'url': 'W5.html'}, {'title': '分組組員', 'text': '40823116\xa0 |\xa0Repository:\xa0 40823116 \xa0 | Site: \xa0 40823116 \n 40823123\xa0 |\xa0Repository:\xa0 40823123 \xa0 | Site: \xa0 40823123 \n 40823131\xa0 |\xa0 Repository:\xa0 40823131 \xa0 | Site: \xa0 40823131 \n 40823136\xa0 |\xa0 Repository:\xa0 40823136 \xa0 | Site: \xa0 40823136 \n', 'tags': '', 'url': '分組組員.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'Heroku小組網站', 'text': 'https://stage2-ag11.herokuapp.com/content/index.html \xa0 \n 1.從\xa0 http://a.kmol.info:88/heroku.7z \xa0下載 Heroku CLI， 解開壓縮至隨身碟Y槽。 \n \n 2.後修改start.bat檔案如下: \n \n 3. \n heroku login -i\nheroku git:remote -a 名稱 \n \n \n \n \n \n \n \n git push heroku\n \n \n', 'tags': '', 'url': 'Heroku小組網站.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': '運輸小車繪製', 'text': '因為此次專案只有小車需繪製，所以仍採用Inventor(2018)進行繪製。 \n stl檔: https://drive.google.com/file/d/1HULgTeENzh3tGrNMneSqoOs3D_XNICU-/view?usp=sharing \xa0 \n ipt檔: https://drive.google.com/file/d/11L6R_NlkVavxR1QjsBnwVqe7aqBPAduU/view?usp=sharing \xa0 \n \n 後續將進行程式編寫，以配合整體輸送帶的運作流程。 \n', 'tags': '', 'url': '運輸小車繪製.html'}, {'title': 'push more easily', 'text': '因組長需推送更新至組員倉儲及維護heroku網頁，可利用建立批次檔節省時間，如下。 \n 將下列存入Y槽中，存為push.bat。 \n git push 40823123\ngit push 40823116\ngit push 40823136\ngit push heroku\n \n \n 於隨身系統倉儲資料夾中輸入指令push即可使用，以便節省時間。 \n', 'tags': '', 'url': 'push more easily.html'}, {'title': '程式控制', 'text': '運輸小車 \n \n', 'tags': '', 'url': '程式控制.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': '使用鍵盤程式控制小車移動', 'text': '\n', 'tags': '', 'url': '使用鍵盤程式控制小車移動.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': '成果(自動化生產線速率程式控制小車ver.)', 'text': '場景檔: 速率控制版本 \n \n', 'tags': '', 'url': '成果(自動化生產線速率程式控制小車ver.).html'}, {'title': '成果(自動化生產線鍵盤程式控制小車ver.)', 'text': '場景檔: 鍵盤控制版本 \n \n', 'tags': '', 'url': '成果(自動化生產線鍵盤程式控制小車ver.).html'}, {'title': '心得', 'text': '此次專案很遺憾的是沒能達成理想中的生產線(以sensor控制整個生產線運作)，因程式基礎薄弱，無法使用sensor控制，因此先以折衷的方式，以簡單的基礎作動方式做起，預計八人專案將更深入研究sensor控制的部分，已完成理想中的效果。 \n', 'tags': '', 'url': '心得.html'}, {'title': 'Stage3', 'text': '', 'tags': '', 'url': 'Stage3.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'task1', 'text': '利用python程式 讀取  stage3_2a.txt ，建立 Stage3 的分組倉儲，分組網頁，以及各組員倉儲及網頁連結。 \n 成果壓縮檔: task1.7z \n 講解影片: \n \n 程式碼(version1) \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF- 08" is needed\nwith open("stage3_2a.txt") as fh:\n    # readlines will read into the whole line and put into list format 23\n    # has \\n at the end of each line 13\n    data = fh.readlines()\n#print(len(data))1\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\'|<a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>|<a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    for j in range(2,18,2):\n        print(\'<p>\'+group[j]+\'|Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\'|Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a></p>\')\n \n 程式碼(version2) \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF-08" is needed\nwith open("stage3_2a.txt") as fh:\n    # readlines will read into the whole line and put into list format 23\n    # has \\n at the end of each line 13\n    data = fh.readlines()\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    data = [c.replace(\'\\t\\t\\t\\t\',\'\') for c in data]\n    print(data)\n#print(len(data))1\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\'|<a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>|<a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n# the following will use group data to generate needed html\n\n    for j in range(2,18,2):\n        try:\n            print(\'<p>\'+group[j]+\'|Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\'|Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a></p>\')\n        except:\n            continue \n 程式碼(version3) \n 新增各組員協同分組網站。 \n # open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2a.txt") as fh:\n    #開啟stage3_2a.txt檔案並命名為fh,並且使用with語法無需使用關閉語法cloce(),文件開啟後會自動關閉.\n    data = fh.readlines()\n    #讀取文件的每一行,直到遇到结束符 EOF.\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #利用取代(replace)修正讀取出的錯誤學號.\n    data = [c.replace(\'\\t\\t\\t\\t\',\'\') for c in data]\n    #其中一組為六人,因此需消除列表中的多餘空格.\n    #print(data)\n#print(len(data))\nfor i in range(len(data)):\n    #以range為len(data)=6進行迴圈,變數為i\n    group = data[i].rstrip("\\n").split("\\t")\n    #取data list中的第i項進行處理,去除元素中的\\n,並利用\\n為依據,分割元素成為新串列.\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a> | <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    #使用print依序索引group list中的元素,放入html格式,並依序打印出來.\n\n    for j in range(2,18,2):\n    #以2為起始每次加2加到<18,也就是執行迴圈8次.\n        #try:\n            print(\'<p>\'+group[j]+\' | Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[j]+\'.github.io/stage3-ag\'+group[0][9]+\'">\'+group[j]+\'</a></p>\')\n    #依序索引group list中的元素放入html格式,並打印出來.\n        except:\n            continue\n    #有一組為六人,因此此處會出現out of range錯誤,需使用try...except語法解決.\n#try...except語法為若try下方敘述執行錯誤,則執行except下方敘述,此處我需要迴圈繼續,因此使用continue. \n 程式碼(version4) \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF-08" is needed\nwith open("stage3_2a.txt") as fh:\n    #開啟stage3_2a.txt檔案並命名為fh,並且使用with語法無需使用關閉語法cloce(),文件開啟後會自動關閉.\n    data = fh.readlines()\n    #讀取文件的每一行,直到遇到结束符 EOF.\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #利用取代(replace)修正讀取出的錯誤學號.\n    data = [c.replace(\'\\t\\t\\t\\t\',\'\') for c in data]\n    #其中一組為六人,因此需消除列表中的多餘空格.\n    data = [b.replace(\'_\',\'-\') for b in data]\n    #將_取代為-,以便後續存取.\n    #print(data)\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    #print(group)\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0]+\'">網站</a> | <a href="https://github.com/\'+group[2]+\'/\'+group[0]+\'">倉儲</a></p>\')\n# the following will use group data to generate needed html\n\n    for j in range(2,18,2):\n        #try:\n            print(\'<p>\'+group[j]+\' | Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[j]+\'.github.io/\'+group[0]+\'">\'+group[j]+\'</a></p>\')\n        except:\n            continue\n #有一組為六人,因此此處會出現out of range錯誤,需使用try...except語法解決.\n#try...except語法為若try下方敘述執行錯誤,則執行except下方敘述,此處我需要迴圈繼續,因此使用continue.            \n             \n 成果: \n stage3-ag1 |  網站  |  倉儲 \n 40823131 | Website: 40823131  | Repository: 40823131  | Group Website: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112  | Group Website: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123  | Group Website: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145  | Group Website: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136  | Group Website: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109  | Group Website: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116  | Group Website: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108  | Group Website: 40823108 \n stage3-ag2 |  網站  |  倉儲 \n 40823151 | Website: 40823151  | Repository: 40823151  | Group Website: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121  | Group Website: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106  | Group Website: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102  | Group Website: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104  | Group Website: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106  | Group Website: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101  | Group Website: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132  | Group Website: 40823132 \n stage3-ag3 |  網站  |  倉儲 \n 40823119 | Website: 40823119  | Repository: 40823119  | Group Website: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150  | Group Website: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103  | Group Website: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107  | Group Website: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252  | Group Website: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154  | Group Website: 40823154 \n stage3-ag4 |  網站  |  倉儲 \n 40823142 | Website: 40823142  | Repository: 40823142  | Group Website: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144  | Group Website: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127  | Group Website: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148  | Group Website: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121  | Group Website: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135  | Group Website: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114  | Group Website: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146  | Group Website: 40823146 \n stage3-ag5 |  網站  |  倉儲 \n 40823111 | Website: 40823111  | Repository: 40823111  | Group Website: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115  | Group Website: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128  | Group Website: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120  | Group Website: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140  | Group Website: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124  | Group Website: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139  | Group Website: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126  | Group Website: 40823126 \n stage3-ag6 |  網站  |  倉儲 \n 40823152 | Website: 40823152  | Repository: 40823152  | Group Website: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110  | Group Website: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122  | Group Website: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125  | Group Website: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117  | Group Website: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129  | Group Website: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149  | Group Website: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153  | Group Website: 40823153 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '將個人在 stage1 與 stage2 所完成的 coppeliasim 場景, 採 Python remote API 進行操控. \n \n Python remote API程式: \n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19997)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'192.168.50.154\', 19997, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,U_motor_handle=vrep.simxGetObjectHandle(clientID,\'U\',vrep.simx_opmode_oneshot_wait)\n \nerrorCode,D_motor_handle=vrep.simxGetObjectHandle(clientID,\'D\',vrep.simx_opmode_oneshot_wait)\n \nif errorCode == -1:\n    print(\'Can not find U or D motor\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,U_motor_handle,0, vrep.simx_opmode_oneshot_wait)\nerrorCode=vrep.simxSetJointTargetVelocity(clientID,D_motor_handle,0, vrep.simx_opmode_oneshot_wait)\n \n \xa0', 'tags': '', 'url': 'task2.html'}]};