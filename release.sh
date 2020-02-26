#!/bin/bash

./link_games.joke && shadow-cljs release :app && git add -A && git commit -am hi && git push
