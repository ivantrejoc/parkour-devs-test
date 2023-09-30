CRUD Tech skills test 

Instructions:

1. Clone repository on your local storage.
2. Open the console and type npm install.
3. Once all dependences has been installed, type the command npm run dev.
4. Open your browser and type the URL: http://localhost:3000/.

Create and connect Database:
1. Open sqlShell.
2. Type the command: CREATE DATABASE dataBaseName;
3. Type the command: \c dataBaseName;
4. Inside the project create a .env file.
5. Declare the enviroment variable: DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE".

When:
USER = postgres user.
PASSWORD = postgres password.
HOST = postgres host.
PORT = postgres port.
DATABASE = postgres database name.

![postgresurl](<postgres url.png>)

6. in console type command npm run dev
7. The database will be connected with the app.

Using the app:
Sign up:
1. Type your email.
2. Create your password, this must have at least 8 characters, 1 letter uppercase, 1 number.
3. Confirm your password.
4. Click Sign up button.
![signup](signup.png)

Sign in:
1. Type your email.
2. Type yor password.
3. Click Sign in button.
![signin](signin.png)

Inside the app:
The app has a home view and a navbar with 3 links and sign out button.
![home](home.png)

Creating a new register:
1. Click Create a new register link on the navbar.
2. Fill the form.
3. Click Create Register button.
![create new employee](createnewemployee.png)


Data Employees table:
This table contains employees register with all data stored in the employee database table. 
In this table you can:
1. Search an employee by name. 
2. Sort data ascend or descend by name or salary amount.
3. delete registers using the options button (...) located in the last column.
![data employees](dataemployees.png) 

Techs applicated:

Typescript.

NextJS 13.

Zod.

NexthAuth.

Prisma.

Postgres.

Firebase.

TailwindCSS.

Flowbyte.

Shadcn/ui.


   
