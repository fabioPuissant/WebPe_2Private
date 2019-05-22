#!/bin/bash
if [ -x "$(command -v sshpass)" ]; then
    sshpass -p "vagrant" scp -rp .htaccess ./api/* vagrant@192.168.33.22:/var/www/html/
    exit 1
else
    scp -rp .htaccess ./api/* vagrant@192.168.33.22:/var/www/html/
    exit 1
fi
