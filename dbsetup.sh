#!/usr/bin/env bash

if [[ ! -f .db_setup_done ]]; then
  initdb /usr/local/var/postgres
  pg_ctl start
  createdb development
  createuser development

  touch .db_setup_done
fi
