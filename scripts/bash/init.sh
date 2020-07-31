#!/usr/bin/env bash

COMMAND_CLI=("-help", "-run", "-create")

echo -n "Enter your config to init project \n"
read params
if [ $params = "-help" ]; then
    echo -n "-help    : get help \n"
    echo -n "-run     : run project \n"
    echo -n "-create  : create project \n";
    elif [ $params = "-run"]; then
        echo -n "project run ... \n";
        elif [ $params = "-create" ]; then
          touch "test.txt"
          echo -n "project has create \n";
          else
            ecoh "over \n";
fi
