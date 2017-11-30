package com.wangkeke.reactnandroidone.util;

import android.app.Activity;
import android.app.Dialog;
import android.util.Log;

import com.wangkeke.reactnandroidone.R;

import java.lang.ref.WeakReference;

public class SplashScreen {
    private static Dialog mSplashDialog;
    private static WeakReference<Activity> mActivity;

    public static void show(final Activity activity, final boolean fullScreen){
        Log.e("splash","----> show()");
        if (activity == null) return;
        mActivity = new WeakReference<Activity>(activity);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!activity.isFinishing()) {

                    mSplashDialog = new Dialog(activity, fullScreen ? R.style.SplashScreen_Fullscreen: R.style.SplashScreen_SplashTheme);
                    mSplashDialog.setContentView(R.layout.launch_screen);
                    mSplashDialog.setCancelable(false);

                    if (!mSplashDialog.isShowing()) {
                        Log.e("splash","---->mSplashDialog show()");
                        mSplashDialog.show();
                    }
                }
            }
        });
    }

    public static void hide(Activity activity){
        if (activity == null) activity = mActivity.get();
        if (activity == null) return;

        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (mSplashDialog != null && mSplashDialog.isShowing()) {
                    mSplashDialog.dismiss();
                }
            }
        });
    }
}
