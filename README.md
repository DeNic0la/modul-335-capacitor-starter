# ICT-BZ: Capacitor Starter Template

This a official starter template for using Ionic's capacatior native components used in M335.
--
## Requirements
* Node installed
* Ionic installed
* Android Studio with latest SDK installed

## Setup
```bash
git clone <THISREPO.git>
cd ./modul-335-capacitor-starter
npm install
```

## Usage
Edit/Add your regular capactior functions in the typescript code. Once your done with your code we need to build our Ionic application with:
```bash
ionic build
```

First we need to add Android to our project:
```
npx cap add android
```

Then you we need to run the Capacitor ```copy``` command, which copies all web assets from ```www``` folder (the Ionic Angular app in this case) into the native Android project:
```bash
npx cap copy
```

Next, run the Capacitor open command, which opens the native Android project in Android Studio:
```bash
npx cap open android
```

Similar to iOS, we must enable the correct permissions to use the Camera. Configure these in the ```AndroidManifest.xml``` file. Android Studio will likely open this file automatically, but in case it doesn't, locate it under ```android/app/src/main/```.

