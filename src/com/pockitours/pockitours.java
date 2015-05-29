package com.pockitours;

import android.os.Bundle;
import org.apache.cordova.*;

public class pockitours extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.loadUrl(Config.getStartUrl());
    }
}