# 注意：
npm install redis --save的时候，如果出现如下的错误：
Refusing to install redis as a dependency of itself
则说明package.json文件的name属性是redis，可以将name属性的值修改为redis-app

今天的任务：
sort排序功能，用户有创建的时间
链表存储的是{userid，createAt}
如何创建一个随机的id