# Generated by Django 3.0.3 on 2020-09-01 23:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tasks', '0008_auto_20200901_2333'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='updated_by',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='task_updated_by', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
