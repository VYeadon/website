# Generated by Django 3.0.3 on 2020-02-27 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0002_tvreview_seasons'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookreview',
            name='headline',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='gamereview',
            name='headline',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='moviereview',
            name='headline',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tvreview',
            name='headline',
            field=models.TextField(blank=True, null=True),
        ),
    ]