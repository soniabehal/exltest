# Steps to Run containerized application with node.js and mysql

1. Clone the repository
2. In the config directory add .env file and you can refer sample env.
3. Run command 
```sh
$ docker-compose up --build
```
4. Check for the running processes using 
```sh
$ docker-compose ps
```
There must be two processes running.

5. By default your application will be running on following ports. If you want to change ports change in `docker-compose.yml` file.


| CONTAINER NAME | LANGUAGE | PORT |
| --- | --- | --- |
| exlskills-app | node.js | 9002 |
| db | MySql | 3008 |

6. Hit the route http://localhost:9002 

