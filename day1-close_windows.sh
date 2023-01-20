#! /bin/bash
#from https://askubuntu.com/questions/166279/how-can-i-close-all-opening-windows-with-a-script

WIN_IDs=$(wmctrl -l | grep -vwE "Desktop$|xfce4-panel$" | cut -f1 -d' ')
for i in $WIN_IDs; do wmctrl -ic "$i"; done

# Keep checking and waiting until all windows are closed 
while [ $WIN_IDs ]; do 
    sleep 0.1; 
    WIN_IDs=$(wmctrl -l | grep -vwE "Desktop$|xfce4-panel$" | cut -f1 -d' ')
done
