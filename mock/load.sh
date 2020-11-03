#!/bin/bash

mongoimport --host 0.0.0.0 --db ssmvit-demo --collection example --drop --jsonArray --file /docker-entrypoint-initdb.d/data.json