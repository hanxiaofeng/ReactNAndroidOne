package com.wangkeke.reactnandroidone;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactActivity;


public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
//        SplashScreen.show(this, true);
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "ReactNativeDemo";
    }


}
