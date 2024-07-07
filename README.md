# Documentacion

## Requisitos previos
  - Node.js (>= 20.x)
  - npm o yarn
  - PostgreSQL

## Cómo configurar y ejecutar el proyecto localmente.

1. Clonar el repositorio a la ruta deseada utilizando 'git clone':
   $ git clone https://github.com/emymatista/graphql_crud.git

2. Instalar las dependencias necesarias utilizando 'npm install'.

3. Para instalar las dependencias necesarias para poder utilizar GraphQL y typeORM se instala de la siguiente manera:
   $ npm install pg graphql @nestjs/graphql @nestjs/apollo apollo-server-express @nestjs/typeorm typeorm

4. Una vez instaladas todas las dependencias y haber configurado la base de datos de manera correcta (Ver siguiente punto), ya puedes ejecutar el proyecto de manera local utilizado el siguiente comando:
   $ npm run start:dev

5. Para poder entrar al playground de GraphQL, debe entrar en el navegador la siguiente ruta:
   $ localhost:3000/graphql


## Cómo configurar la base de datos PostgreSQL.

1. Para configurar PostgreSQL, primero debe tener instalado y configurado el PostrgreSQL y su instancia ya sea en una nube o local.
   
2. Debe crear una base de datos llamada 'User'.

3. Para configurar la base de datos dentro del proyecto, debe ir al archivo 'app.module.ts', y tener el siguiente codigo:
   TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', // Si tiene postgres conectado a la nube, aqui va la direccion de la nube
      port: 5432, // Default port
      username: 'postgres',
      password: '(Aqui va la contraseña del servidor)',
      database: 'User',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // Set to false in production
    }),

4. Debe ejecutar con el comando 'npm run start:dev' para asegurar si se conecta correctamente. No deberia dar ningun error si se configuro correctamente.


## Detalles sobre el pipeline de CI/CD.

Este proyecto utiliza GitHub Actions para manejar el pipeline de CI/CD. Se utilizo un archivo llamado 'ci-cd.yml' que se encuentra en '.github/workflows'.

