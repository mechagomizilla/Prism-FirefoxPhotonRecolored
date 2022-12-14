# Prism - Firefox Photon Recolored
The goal of this repo is to share my userChrome and userContent to help others in customizing Firefox's colors to their own image.

For now, only the userChrome and the newtab page are complete, but I plan to customize prompts and other internal pages in the near future, maybe. I also plan on simplifying the process of setting the colors by converting it all to rgba and unifying the colors under a few master variables.

*Not tested on the light theme*

I spent two years using Vivaldi (which can also be customized using CSS), and its integration of color settings was something that I felt was sorely missing from Firefox. Now that I'm back on Firefox, I realized that changing the colors is can *almost* be done using only variables, which is a good sign for the future. However, I can't wait for years for the Firefox dev team to get their shit together, so I'm starting my own easy-to customize "theme". It's really just a palette swap because I already like the photon theme, to the point where I had basically re-created it in Vivaldi (don't ask for it, though, because it keeps breaking every three months because of updates and I can't be bothered to fix it anymore.

The main reason for this theme being barely more than a palette swap is because it's much easier to fix when updates come. I'd say it's 75% variables, 5% fixes and 20% hard-coded color swaps.

Here's a little refresher on how to install your own custom theme:

1. Type about:config in your url bar, search *toolkit.legacyUserProfileCustomizations.stylesheets* and set it to *true*.
2. Create a *chrome* folder in *%appdata%\Mozilla\Firefox\Profiles\YOUR_PROFILE* and paste userChrome.css and userContent.css into it.
3. Change whatever values you want. *userChrome* modifies the browser UI, while *userContent* modifies pages, including newtab and extensions.
4. Restart Firefox and that's it!
