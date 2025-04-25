# Usa uma imagem leve do Nginx
FROM nginx:alpine

# Copia os arquivos do projeto para o diretório do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80 (default do Nginx)
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]