# Firefox Dark Theme Tweaks and Fixes
Interface tweaks for Firefox Quantum

*Broken in the Photon UI. Feel free to use elements from my theme if you want to mod the current UI. I am now using Vivaldi and I don't have the time to maintain a theme for a browser that I am not using anymore. You can actually theme Vivaldi's CSS too, so I will be doing that instead.*

1. Type about:config in your url bar, search *toolkit.legacyUserProfileCustomizations.stylesheets* and set it to *true*.
2. Create a *chrome* folder in *%appdata%\Mozilla\Firefox\Profiles\YOUR_PROFILE* and paste userChrome.css and userContent.css into it.
3. Change whatever values you want. *userChrome* modifies the browser UI, while *userContent* modifies pages, including newtab and extensions.
4. Restart Firefox and that's it!

NB: Be careful if you want to use just a few elements of my theme. I didn't take the time to make it perfectly modular and only a few elements currently work with the light theme, so there might be a lot of testing to do on your part so that everything keeps working.

PS: I made a darker, cleaner theme. Since I did it rather quickly, I didn't bother to clean up the code too much. Sorry in advance. I also won't be maintaining two themes at a time since I'm doing this for myself. You can still find the old theme, but it's up to you to piece it together with the new theme if it ever breaks.
