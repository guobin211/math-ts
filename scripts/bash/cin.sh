#!/usr/bin/env bash

echo -n "Enter the name of this project: "
read -r PROJECT
case $PROJECT in
math-ts | npm | node | yarn)
  echo -n "The $PROJECT is not allowed"
  ;;
2019)
  echo -n "The $PROJECT NOT BE NUMBER"
  ;;
*)
  echo -n "The $PROJECT is created "
  printf "SUCCESS CIN\n"
esac
