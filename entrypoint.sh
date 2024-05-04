#!/bin/bash

echo "Iniciando o script entrypoint.sh"

# Espera o MySQL estar pronto
while ! mysqladmin ping -h"db" --silent; do
    sleep 1
done

echo "MySQL está pronto. Executando o dump SQL..."

# Executa o dump SQL e redireciona a saída para um arquivo de log
mysql -h db -uroot -proot -e nodedb < /docker-entrypoint-initdb.d/people.sql > /var/log/mysql-init.log 2>&1

echo "Dump SQL executado. Verifique /var/log/mysql-init.log para detalhes."