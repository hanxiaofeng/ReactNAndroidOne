package com.wangkeke.reactnandroidone;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.wangkeke.reactnandroidone.pkg.MyReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import java.util.Arrays;
import java.util.List;

/**
 * Created by wangkeke on 2017/5/26.
 */

public class MyReactAppliation extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return true;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new VectorIconsPackage(),
                    new MyReactPackage()
            );
        }
    };


    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
