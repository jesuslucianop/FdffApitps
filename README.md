# FdffApitps

# Pasos para Correr el proyecto localmente despues del git clone, y ser descargado en la computadora.

## Paso #1:
### Abrir con un editor de Texto(Visual Studio Code o Nodepad++), Y crear un archivo .Env(Variable de entornos) con los siguientes valores
PORT = /puerto que deseas iniciar el api por ejemplo (3000).

NODE_ENV=development /Entorno en el que se desarrollara.

DB_HOST=localhost  // Host de la base de datos Mysql donde te estas conectando

DB_USER=root // Usuario de base de datos con el cual te estas conectando.

DB_PASSWORD= // password de base de datos con el cual te conectas a base de datos._

DB_NAME=fdff  // Nombre de base de datos que debes crear previamente en tu gestor de base de datos(puedes correr el comando create database nombrebasededatos).


## Paso #2: 
### Abrir el archivo en la ruta CONFIG/config.json

y configurar el ambiente correspondiente con las credenciales de base de datos.

## Paso #3 :

### Correr el comando npm install.

## Paso #4 
  Luego correr el comando npm run migrate para correr todas las migraciones de base de datos.

## Paso #5
  Luego correr el comando npm run build para transpirar el typescript a js 

## Paso #6 /
### npm run dev para correr el proyecto.  
  


