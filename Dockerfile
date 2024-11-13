FROM nginx
COPY ./scapular-info/dist/ /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/