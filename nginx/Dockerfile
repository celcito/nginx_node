FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]