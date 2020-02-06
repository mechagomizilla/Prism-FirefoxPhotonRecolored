# Custom scrollbar for Firefox

## How to install

1. Copy the content of the Firefox folder in the Firefox install directory.
2. Copy the content of the userChrome folder in the chrome folder of your profile's root directory (type about:profiles to find it; create a chrome folder in it if there is none).
3. Close Firefox if it's open and then delete the startupCache folder in your profile's local directory (do this everytime you edit the JS files).

That's it. If you want to add more userscript files, you have to list them in the userChrome JS file.

The default colors are matched with Windows 10's dark theme (you can change them yourself by editing the file).

## Credits

Credit for the XML file / JS tweak to Aris-T2 at [https://github.com/Aris-t2/CustomJSforFx](https://github.com/Aris-t2/CustomJSforFx) (see method 3 - go there if anything is broken in a future update - working as of Firefox 72).
