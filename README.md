### 功能背景

在作者以往工作期间，使用angularjs和requirejs搭建工程。彼时项目组启动一个MTS的平台功能，支持小网站小游戏作者上传静态文件包，并生成次级域名进行公网浏览。由于MTS平台自有数个工具包进行了AMD模块管理，平台开放小游戏小网站功能后，需回避小网站小游戏作者使用的各种模块化管理工具的关键字。其中requirejs对应的关键字"requirejs","require","define"须达到该标准。

经过requirejs的仔细探究后，本功能依据requirejs提供的namespace命名空间特性。实现以上需求背景。

###  md生成工具
[pandaoMarkdown工具](https://pandao.github.io/editor.md/)

### End