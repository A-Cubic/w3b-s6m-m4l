FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
ADD react.conf /etc/nginx/conf.d/
ADD dist /usr/share/nginx/html/mall/
