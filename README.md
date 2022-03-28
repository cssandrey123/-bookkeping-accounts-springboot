# -bookkeping-accounts-springboot

Hello, this is the version with spring-boot backend for the bookkeping-accounts app (repo has the same name if you want to check out that one)

It's Angular on the frontend with SpringBoot (with JPA) on backend.
If you want to checkout and run the project, you should have a PostgreSQL client on your local machine and create a empty database called "bookkeeping-accounts". After that, in "application.properties" file found under on this path "server/src/main/resources/application.properties" you should configure your username and password that you login with in PostgreSQL

After you setup your DB, run npm install on the client "client/package.json" and mvn install on the server "server/pom.xml" and now you should be able to start the client and run the server from here "server/src/main/java/com/server/bookkepingaccounts/BookkepingAccountsApplication.java"
