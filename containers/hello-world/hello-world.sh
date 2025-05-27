#!/bin/sh -l

if [ "$1" == "Java" ]; then
    echo "We don't greet Java here!"
    exit 1
fi

echo "Hello $1"
echo "This is a test action"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT