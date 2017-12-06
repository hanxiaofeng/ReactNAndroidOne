# ReactNAndroidOne

一个react native开发的Android app


#### <font color="#b348f3">调试方式：</font>

MyReactAppliation中开启调试模式，项目根目录执行npm start启动本地服务器！
```

@Override
public boolean getUseDeveloperSupport() {
      return true;
}

```

#### <font color="#b348f3">打包方式：</font>

MyReactAppliation中关闭调试模式，
```

@Override
public boolean getUseDeveloperSupport() {
      return false;
}

```



项目根目录执行：
```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest app/src/main/res/

```

打包方式：

[点我,点我,使劲点我](https://github.com/hanxiaofeng/ReactNativeAndroid)


#### <font color="#b348f3">更新日志：</font>

<br>
1.新增listview下拉上拉刷新，webview浏览网页;


