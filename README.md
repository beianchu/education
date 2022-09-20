1111

Microsoft Windows [版本 10.0.22000.978]
(c) Microsoft Corporation。保留所有权利。

C:\Users\86184\Desktop\项目作业>git init
Initialized empty Git repository in C:/Users/86184/Desktop/项目作业/.git/

C:\Users\86184\Desktop\项目作业>git add README.md
fatal: pathspec 'README.md' did not match any files

C:\Users\86184\Desktop\项目作业>git add README.md

C:\Users\86184\Desktop\项目作业>git commit -m "first commit"
[master (root-commit) 3c01902] first commit
 1 file changed, 2 insertions(+)
 create mode 100644 README.md

C:\Users\86184\Desktop\项目作业>git branch -M main

C:\Users\86184\Desktop\项目作业>git remote add origin https://github.com/beianchu/education.git

C:\Users\86184\Desktop\项目作业>git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 213 bytes | 213.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/beianchu/education.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

C:\Users\86184\Desktop\项目作业>git branch
* main

C:\Users\86184\Desktop\项目作业>git branch education

C:\Users\86184\Desktop\项目作业>git checkout education
Switched to branch 'education'

C:\Users\86184\Desktop\项目作业>git push
fatal: The current branch education has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin education


C:\Users\86184\Desktop\项目作业>git add .
warning: LF will be replaced by CRLF in education-h5-app/App.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/api/api.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/api/http.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/common/common/css/common.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/common/common/js/util.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/common/common/mixin/mixin.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/components/classList.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/components/components/slider-bar.nvue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/components/newlist.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/components/search.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/config/config/env.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/font_uewcy0we63t/demo.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/font_uewcy0we63t/demo_index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/font_uewcy0we63t/iconfont.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/font_uewcy0we63t/iconfont.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/main.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/manifest.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/pages.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/pages/ask/ask.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/pages/fenlei/fenlei.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/pages/index/index.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/pages/my/my.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/pages/red/red.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/static/icon/iconfont.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/static/static/icon/iconfont.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in education-h5-app/uni.scss.
The file will have its original line endings in your working directory

C:\Users\86184\Desktop\项目作业>git commit -m "feat:education"
[education 189b04a] feat:education
 97 files changed, 5513 insertions(+)
 create mode 100644 education-h5-app/App.vue
 create mode 100644 education-h5-app/api/api.js
 create mode 100644 education-h5-app/api/http.js
 create mode 100644 education-h5-app/common/common/css/common.css
 create mode 100644 education-h5-app/common/common/css/github-markdown.css
 create mode 100644 education-h5-app/common/common/css/github-min.css
 create mode 100644 education-h5-app/common/common/js/request.js
 create mode 100644 education-h5-app/common/common/js/upload.js
 create mode 100644 education-h5-app/common/common/js/util.js
 create mode 100644 education-h5-app/common/common/mixin/mixin.js
 create mode 100644 education-h5-app/components/classList.vue
 create mode 100644 education-h5-app/components/components/slider-bar.nvue
 create mode 100644 education-h5-app/components/components/uni-rate/uni-rate.vue
 create mode 100644 education-h5-app/components/components/uni-search-bar/uni-search-bar.vue
 create mode 100644 education-h5-app/components/newlist.vue
 create mode 100644 education-h5-app/components/search.vue
 create mode 100644 education-h5-app/config/config/course-details-tabs.js
 create mode 100644 education-h5-app/config/config/course-down-bar.js
 create mode 100644 education-h5-app/config/config/env.js
 create mode 100644 education-h5-app/config/config/my-list-bar.js
 create mode 100644 education-h5-app/config/config/question-tabs.js
 create mode 100644 education-h5-app/config/config/setting-list-bar.js
 create mode 100644 education-h5-app/config/config/user-list-bar.js
 create mode 100644 education-h5-app/font_uewcy0we63t/demo.css
 create mode 100644 education-h5-app/font_uewcy0we63t/demo_index.html
 create mode 100644 education-h5-app/font_uewcy0we63t/iconfont.css
 create mode 100644 education-h5-app/font_uewcy0we63t/iconfont.js
 create mode 100644 education-h5-app/font_uewcy0we63t/iconfont.json
 create mode 100644 education-h5-app/font_uewcy0we63t/iconfont.ttf
 create mode 100644 education-h5-app/index.html
 create mode 100644 education-h5-app/main.js
 create mode 100644 education-h5-app/manifest.json
 create mode 100644 education-h5-app/mixins/mixins/pay.js
 create mode 100644 education-h5-app/mock/mock/courseData.js
 create mode 100644 education-h5-app/mock/mock/courseGroupData.js
 create mode 100644 education-h5-app/pages.json
 create mode 100644 education-h5-app/pages/ask/ask.vue
 create mode 100644 education-h5-app/pages/fenlei/fenlei.vue
 create mode 100644 education-h5-app/pages/index/index.vue
 create mode 100644 education-h5-app/pages/my/my.vue
 create mode 100644 education-h5-app/pages/red/red.vue
 create mode 100644 education-h5-app/static/icon/iconfont-app-icon.css
 create mode 100644 education-h5-app/static/icon/iconfont.css
 create mode 100644 education-h5-app/static/icon/iconfont.ttf
 create mode 100644 education-h5-app/static/images/banner1.jpg
 create mode 100644 education-h5-app/static/images/banner2.jpg
 create mode 100644 education-h5-app/static/images/banner3.jpg
 create mode 100644 education-h5-app/static/images/loading.gif
 create mode 100644 education-h5-app/static/images/logo-black.png
 create mode 100644 education-h5-app/static/images/no.png
 create mode 100644 education-h5-app/static/logo.png
 create mode 100644 education-h5-app/static/pay/alipay.png
 create mode 100644 education-h5-app/static/pay/wxpay.png
 create mode 100644 education-h5-app/static/share/link.png
 create mode 100644 education-h5-app/static/share/pengyouquan.png
 create mode 100644 education-h5-app/static/share/qq.png
 create mode 100644 education-h5-app/static/share/weibo.png
 create mode 100644 education-h5-app/static/share/weixin.png
 create mode 100644 education-h5-app/static/static/icon/iconfont-app-icon.css
 create mode 100644 education-h5-app/static/static/icon/iconfont.css
 create mode 100644 education-h5-app/static/static/icon/iconfont.ttf
 create mode 100644 education-h5-app/static/static/images/banner1.jpg
 create mode 100644 education-h5-app/static/static/images/banner2.jpg
 create mode 100644 education-h5-app/static/static/images/banner3.jpg
 create mode 100644 education-h5-app/static/static/images/loading.gif
 create mode 100644 education-h5-app/static/static/images/no.png
 create mode 100644 education-h5-app/static/static/logo.png
 create mode 100644 education-h5-app/static/static/pay/alipay.png
 create mode 100644 education-h5-app/static/static/pay/wxpay.png
 create mode 100644 education-h5-app/static/static/share/link.png
 create mode 100644 education-h5-app/static/static/share/pengyouquan.png
 create mode 100644 education-h5-app/static/static/share/qq.png
 create mode 100644 education-h5-app/static/static/share/weibo.png
 create mode 100644 education-h5-app/static/static/share/weixin.png
 create mode 100644 education-h5-app/static/static/tab/article-active.png
 create mode 100644 education-h5-app/static/static/tab/article.png
 create mode 100644 education-h5-app/static/static/tab/category-active.png
 create mode 100644 education-h5-app/static/static/tab/category.png
 create mode 100644 education-h5-app/static/static/tab/index-active.png
 create mode 100644 education-h5-app/static/static/tab/index.png
 create mode 100644 education-h5-app/static/static/tab/my-active.png
 create mode 100644 education-h5-app/static/static/tab/my.png
 create mode 100644 education-h5-app/static/static/tab/question-active.png
 create mode 100644 education-h5-app/static/static/tab/question.png
 create mode 100644 education-h5-app/static/tab/article-active.png
 create mode 100644 education-h5-app/static/tab/article.png
 create mode 100644 education-h5-app/static/tab/category-active.png
 create mode 100644 education-h5-app/static/tab/category.png
 create mode 100644 education-h5-app/static/tab/index-active.png
 create mode 100644 education-h5-app/static/tab/index.png
 create mode 100644 education-h5-app/static/tab/my-active.png
 create mode 100644 education-h5-app/static/tab/my.png
 create mode 100644 education-h5-app/static/tab/question-active.png
 create mode 100644 education-h5-app/static/tab/question.png
 create mode 100644 education-h5-app/uni.scss
 create mode 100644 "~$\345\214\226\345\234\250\347\272\277\346\225\231\350\202\262APP\351\241\271\347\233\256.docx"
 create mode 100644 "\345\210\235\345\247\213\345\214\226\345\234\250\347\272\277\346\225\231\350\202\262APP\351\241\271\347\233\256.docx"

C:\Users\86184\Desktop\项目作业>git status
On branch education
nothing to commit, working tree clean

C:\Users\86184\Desktop\项目作业>git push
fatal: The current branch education has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin education


C:\Users\86184\Desktop\项目作业>git checkout education
Already on 'education'

C:\Users\86184\Desktop\项目作业>git branch
* education
  main

C:\Users\86184\Desktop\项目作业>git add 。
fatal: pathspec '。' did not match any files

C:\Users\86184\Desktop\项目作业>git add .

C:\Users\86184\Desktop\项目作业>git commit -m "feat:update"
On branch education
nothing to commit, working tree clean

C:\Users\86184\Desktop\项目作业>git push
fatal: The current branch education has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin education


C:\Users\86184\Desktop\项目作业>git push
fatal: The current branch education has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin education


C:\Users\86184\Desktop\项目作业>