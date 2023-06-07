# syntax=docker/dockerfile:1.5-labs

#alpine has shell, busybox does not
#FROM klakegg/hugo:0.107.0-busybox AS hugo
FROM klakegg/hugo:0.107.0-alpine AS hugo

ADD https://github.com/FortinetCloudCSE/CentralRepo.git#main /home/CentralRepo

WORKDIR /home/CentralRepo

ENTRYPOINT [ "/bin/sh", "/home/CentralRepo/scripts/local_copy.sh"]
