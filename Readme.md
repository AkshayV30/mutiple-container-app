This is simple app using node and redis 
nodejs framework is being used with doocker contaniner

Furthermore, In this app it just counts number of vists made by user.


## process exit status code :                          
|  status code | description                            |
| ------------ | :------------------------------------- |
|              |                                        |
|       0      | we exited everything is okay           |    
|              |                                        |
|       1      | we exited as something went wrong      |
|              |                                        |


| Restart Policies      |                                                                               |
| --------------------- | :-----------------------------------------------------------------------------:|
|                       |                                                                               |
|  "No"                 |  Never attempt to restart this conatiner if stops or crashes                  |
|                       |                                                                               |
|  "always"             | If this container stops "for any reason" always attempt to restatrt           |
|                       |                                                                               |
|  "on-failure"         |  Only restart if the container stops with an error code                       |
|                       |                                                                               |
|  "unless-stopped"     | Always restart unless we forcibilly stop it                                   |

