#!/bin/bash

project="math-ts"
echo ${project}

file_list=`ls`
echo ${file_list}

for f in ${file_list} ; do
    echo ${f}
done

my_arr=(ios web android "hybrid")
# arr length
echo ${#my_arr[@]}
echo ${my_arr[1]}

string_name="jackson"
start=1
length=2
# 截取字符串
echo ${string_name:$start:$length}

if [ ${string_name} = "jackson" ]; then
      echo "name is ${string_name}"
    else
      echo "name is not unknown"
fi

action_str="to be or not to be"
match_str="be"
replace_str="eat"
# ( //${match_str} 多次匹配替换 ) to eat or not to eat
echo ${action_str[@]//${match_str}/${replace_str}}

STRING="to be or not to be"
echo ${STRING[@]/#to be/eat now}    # eat now or not to be
echo ${STRING[@]/%be/eat}        # to be or not to eat
