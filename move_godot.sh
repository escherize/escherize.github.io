#! /bin/bash
echo "moving godot releases..."
cp ~/dv/coop_platforming/out/mac/evermeet.dmg evermeet.dmg

cp ~/dv/coop_platforming/out/linux/evermeet.x86_64 evermeet_linux.x86_64
cp ~/dv/coop_platforming/out/linux/evermeet.pck evermeet_linux.pck
zip -m evermeet_linux.zip evermeet_linux.x86_64 evermeet_linux.pck

cp ~/dv/coop_platforming/out/win/evermeet.exe evermeet_win.exe
cp ~/dv/coop_platforming/out/win/evermeet.pck evermeet_win.pck
zip -m evermeet_win.zip evermeet_win.exe evermeet_win.pck
