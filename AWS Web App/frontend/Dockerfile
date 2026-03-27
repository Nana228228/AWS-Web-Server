FROM nginx:alpine

# Copia o arquivo de configuração para o lugar certo
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o seu index.html para a pasta que o Nginx serve
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
