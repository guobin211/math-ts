#!/usr/bin/env bash
### start redis

### default port http://127.0.0.1:6379

redis-server redis.conf

### stop redis

#> redis-cli shutdown