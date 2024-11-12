---
title: demo
createTime: 2024/11/13 12:21:25
permalink: /share/yovi553e/
---

在 pages 下新建一个 list 文件夹，然后在 list 文件夹处右键选择新建 Page，输入模块名称，就会自动创建出 4 个文件出来，且在 app.json 里也会自动添加页面路径。
![创建page](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/202411122321223.png)
:::tip TODO
接着在首页写一个按钮，添加点击事件，跳转到这个页面。

切换页面的 api 是 `wx.navigateTo`

```ts
wx.navigateTo({ url: "/pages/list/list" });
```

:::
由于使用的小程序里的 ts 模块创建的项目，在 app.json 的默认配置里有 `"navigationStyle": "custom"`,导致顶部导航栏没有默认显示，可以在页面对应的 json 文件里重新设置。

```json
{
  "usingComponents": {},
  "navigationStyle": "default",
  "navigationBarBackgroundColor": "#fff",
  "navigationBarTitleText": "HELLO",
  "navigationBarTextStyle": "black"
}
```

在微信开发者工具的右上角，打开详情，勾选`不校验合法域名`

在 `list.ts` 文件里写一个方法来请求数据

[使用 wx.request 请求数据](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

```ts
interface student {
  full_name: string;
  join_time: string;
  original_full_avatar_url: string;
  phone_number: string;
  score: string;
  [property: string]: any;
}

// pages/list.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: <student[]>[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getData();
  },

  getData() {
    wx.request({
      url: "https://apifoxmock.com/m1/946406-2579508-default/ybk/members",
      success: (res: any) => {
        console.log(res.data.data.member_data.data);
        this.setData({
          list: res.data.data.member_data.data,
        });
      },
      fail: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  },
});
```

然后在 wxml 文件里使用 `wx:for`指令进行列表渲染
[列表渲染](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html)

```html
<view>
  <view wx:for="{{list}}" wx:key="phone_number">
    <text>{{index}}: {{item.full_name}}</text>
    <text>--积分{{item.score}}</text>
  </view>
</view>
```

![](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/202411130012191.png#pic_center =300x400)

:::tip 课堂任务
查看 api 响应数据，渲染更多信息，试着将 wx:for 内的部分封装成一个组件；

[自定义组件](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html)
:::
