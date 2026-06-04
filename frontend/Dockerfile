FROM nginx:alpine
# 1. Copiar tu archivo de configuración proxy personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 2. Copiar tus archivos web (index.html y script.js)
COPY src/ /usr/share/nginx/html/
# 3. Exponer el puerto estándar
EXPOSE 80       

