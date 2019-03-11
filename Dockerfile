FROM nginx
ADD react.conf /etc/nginx/conf/
ADD dist /usr/share/nginx/html/
