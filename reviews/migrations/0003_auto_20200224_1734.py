# Generated by Django 3.0.3 on 2020-02-24 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0002_auto_20200224_1657'),
    ]

    operations = [
        migrations.AddField(
            model_name='basemoviereview',
            name='title',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookreview',
            name='title',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='gamereview',
            name='title',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]