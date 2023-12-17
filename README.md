
# TODO APP ~

Todo App merupakan aplikasi sederhana yang dirancang untuk mempermudah melakukan pencatatan tugas berdasarkan prioritas level. Aplikasi ini dapat membantu untuk mengingat tugas-tugas apa saja yang harus dilakukan.
## Tech Stack

**Client:** React, Redux

**Server:** Node, Express Js

**Database:** MongoDB

**Authorization:** Json Web Token (JWT)


## Features

- Login 
- Sign Up
- Add Task
- Delete Task
- Logout


## Deployment

To deploy this project run

- **Backend Directory**
```bash
  npm install
```
```bash
  npm run dev
```

- **Frontend Directory**
```bash
  npm install
```
```bash
  npm start
```

## API Reference

#### Get All User Todo

```http
  GET /api/v01/todo
```
* **Authorization**

  | Type | Token     | Description                |
  | :-------- | :------- | :------------------------- |
  | `bearer token` | `~` | **Required** |

* **Response**

  * _id : id of task

  * task : detail of task

  * priority : level priority of task

  * user_id : user ID 

  * createdAt : date time of task has been created

  * updateAt : date time of task has been updated

#### Get Todo by ID

```http
  GET /api/V01/todo/${id}
```

* **Authorization**

  | Type | Token     | Description                |
  | :-------- | :------- | :------------------------- |
  | `bearer token` | `~` | **Required** |

* **Parameter**

  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | `id`      | `string` | **Required**. Id of item to fetch |

#### 

* **Response**

  * _id : id of task

  * task : detail of task

  * priority : level priority of task

  * user_id : user ID 

  * createdAt : date time of task has been created

  * updateAt : date time of task has been updated

#### Add Todo

```http
  POST /api/V01/todo/
```

* **Authorization**

  | Type | Token     | Description                |
  | :-------- | :------- | :------------------------- |
  | `bearer token` | `~` | **Required** |

* **Parameter**

  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | `task`      | `string` | **Required**. Id of item to fetch |
  | `priority`      | `string` | **Required**. Id of item to fetch |
  | `user_id`      | `string` | **Required**. Id of item to fetch |
#### 

#### Delete Todo

```http
  DELETE /api/V01/todo/
```

* **Authorization**

  | Type | Token     | Description                |
  | :-------- | :------- | :------------------------- |
  | `bearer token` | `~` | **Required** |

* **Parameter**

  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | `_id`      | `string` | **Required**. Id of item to fetch |

#### 

#### Login

```http
  POST /api/V01/user/login
```
* **Parameter**

  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | `email`      | `string` | **Required**. Id of item to fetch |
  | `password`      | `string` | **Required**. Id of item to fetch |

#### 

* **Response**

  * email : email from user

  * token : bearer token user

#### Sign Up

```http
  POST /api/V01/user/signup
```
* **Parameter**

  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | `name`      | `string` | **Required**. Id of item to fetch |
  | `gender`      | `string` | **Required**. Id of item to fetch |
  | `email`      | `string` | **Required**. Id of item to fetch 
  | `password`      | `string` | **Required**. Id of item to fetch 

#### 

* **Response**

  * email : email from user

  * token : bearer token user
## Screenshots

![App Screenshot](https://i.ibb.co/zR1YHBD/Desain-tanpa-judul-10.png)


## Authors

- [@sukmaaji](https://bradev.my.id/profile)

