#!/bin/bash

list=()
index=0
for dir_file in $(ls /users/guobin/); do
  echo $dir_file
  list[${index}]=${dir_file}
  index=${index}+1
done

echo ${#list[@]}

