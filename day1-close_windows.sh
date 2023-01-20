#! /bin/bash
#from https://askubuntu.com/questions/166279/how-can-i-close-all-opening-windows-with-a-script

WIN_IDs=$(wmctrl -l | grep -vwE "Desktop$|xfce4-panel$" | cut -f1 -d' ')
for i in $WIN_IDs; do wmctrl -ic "$i"; done

# Keep checking and waiting until all windows are closed 
while [ $WIN_IDs ]; do 
    sleep 0.1; 
    WIN_IDs=$(wmctrl -l | grep -vwE "Desktop$|xfce4-panel$" | cut -f1 -d' ')
done

#the script closes every window except for the actual desktop and panels (you can modify the "xfce4-panel" according to your desktop version)
#WIN_IDs lists all the windows and copies the window number, took me some time to go through this one 
#wmctrl -ic / i - interpret window arguments as numeric value c - close window gracefully
