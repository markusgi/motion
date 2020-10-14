#!/bin/bash
python manage.py migrate
python manage.py cokkectstatic --no-input
gunicorn -w 4 -b 0.0.0.0:8000 backend.wsgi.application