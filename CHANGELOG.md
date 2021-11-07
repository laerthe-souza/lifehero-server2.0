# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/Laerthe-Souza/lifehero-server2.0/compare/v1.1.0...v1.2.0) (2021-11-07)


### Features

* **incidents:** adding new route to create incident ([0d7211f](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/0d7211f9757e68412a36f07ca1d52de0684e2c5e))
* **incidents:** adding route to delete incident ([aaca8d7](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/aaca8d70ef134f476d1659cf79460066ecce86e4))
* **incidents:** adding route to list all incidents ([5db0c7d](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/5db0c7d1f13d88ea76b3bce1eb823f87eb5be4b3))
* **incidents:** generate migration to create incidents table and relation it with ongs table ([77e6cf7](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/77e6cf75e6079da572d6ce599c7a80ec3d7c73b7))
* **ong:** adding route for delete ONGs ([5fad7c9](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/5fad7c93fc6e3e38faee67ec272eec366cceaebf))
* **ongs:** adding route for authenticate ONGs ([62d795e](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/62d795e44779de6ea0cbef34043e4b63b3eeb6f9))
* **ongs:** adding route to list all ongs ([a027daf](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/a027dafe40ac62fd07b7b9e5423f82c460d09b69))
* **ongs:** include method delete of the ong controller into routes ([8f06866](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/8f068665b9a4ce739b41ff6e71e117b608169efa))
* **ongs:** return address info together ong data ([672f7a2](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/672f7a2baf32451f388b10f51ffcdde49b6ee98c))
* **ongs:** return all incidents together ong data ([2a4a894](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/2a4a894ee26d2cc0e4aef5442046581d26d98e97))
* **responses:** add class transformer lib to formatted, filter and clean the response data ([5e8748a](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/5e8748a25b30f0d824deb0627fe3aa630483fb76))
* **uploads:** adding multer middleware to handle with request of files ([32de6c3](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/32de6c37c2048a83063453b6727fb7fa815e4e5f))


### Bug Fixes

* adding exit child flag in dev script command because prisma cannot restart server ([d8a57a6](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/d8a57a6264cf1c67e4a6622e6ab6fd5bca0300cd))
* **database:** fix name in prisma schema ([5bad672](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/5bad67202dfb2eeed01c427bf503a3341108d3a2))
* **database:** generate migration to change relation between ong and addresses table ([c599149](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/c599149ad5e5c8ada62201ea83e1cd692aac9c82))
* **middlewares:** fixing variable name in auth middleware ([5467da8](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/5467da810d14576c37197bb3cc30d7ba7b53c5d3))
* **users:** generate token when creating a new user ([5fb4982](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/5fb49824b2f349fc3782335f4cfaaa0e33b43d4c))

## 1.1.0 (2021-11-05)


### Features

* **auth:** adding route to authenticate user ([af8cb68](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/af8cb68894937d448a1591f22987ddc0ab8a2b02))
* **auth:** create middleware for authenticated routes ([d61c62d](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/d61c62d0c2cfeec9986e6f169c622ff226258dfc))
* **auth:** generate jwt when user was logged successfully ([9b8e67f](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/9b8e67f7318a30a97816b1c007c77bb20b710df2))
* **database:** connecting with database using prisma client ([d5c1e33](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/d5c1e3343c91b9512c9598a59dc247b729cbb428))
* **error:** add express async errors tool ([6098ca4](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/6098ca43676297566d8bee238dcd266bdda233cc))
* **ongs:** adding route to create ong ([f125933](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/f125933d50a56bcaca8a63b9e8098c1f3046014f))
* **users:** adding route to create users ([4b48a16](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/4b48a16927a75dfbb19c014c1a44658bdca6356b))
* **users:** adding route to delete user ([96b9b18](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/96b9b18a7f4bdae93c80fd3f12f5372149164e9f))
* **users:** adding route to list all users ([b34d6a7](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/b34d6a749dcf3750aeb23da085a253630db311b8))
* **users:** adding route to list all users ([5b7a15d](https://github.com/Laerthe-Souza/lifehero-server2.0/commit/5b7a15d450c17914dc8e3ad08ca9ba32cf0cc401))
