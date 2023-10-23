FROM node:18

# Asignamos permisos al directorio app
#RUN chown -R www-data:www-data /var/app


WORKDIR /app
RUN chmod 755 /app

COPY package.json .

RUN npm install

EXPOSE 3000

COPY . .
CMD npm start