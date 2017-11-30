package com.wangkeke.reactnandroidone.util;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by wangdi on 14/11/16.
 */

public class SplashScreenModule extends ReactContextBaseJavaModule{


    public SplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SplashScreen";
    }

    @ReactMethod
    public void hide(){
        Log.e("splash","----> hide()");
        SplashScreen.hide(getCurrentActivity());
    }

}
