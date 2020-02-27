from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.core.validators import MaxValueValidator, MinValueValidator


class Profile(models.Model):
    RANKS = [('contributor', 'Contributor')]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rank = models.TextField(choices=RANKS, max_length=100)


class BaseReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.TextField()
    headline = models.TextField(null=True, blank=True)
    rating = models.IntegerField(default=None, null=True,
                                 validators=[MaxValueValidator(5),
                                             MinValueValidator(1)])
    review_text = models.TextField()
    comments = models.ForeignKey(
        'Comment', on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        abstract = True


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    comment_text = models.TextField()


class BaseMovieTvReview(BaseReview):
    imdb_link = models.URLField(null=True)

    class Meta:
        abstract = True


class MovieReview(BaseMovieTvReview):
    def __str__(self):
        return '{}'.format(self.title)


class TvReview(BaseMovieTvReview):
    seasons = models.IntegerField(null=True, blank=True)


class BookReview(BaseReview):
    authors = ArrayField(
        models.TextField()
    )


class GameReview(BaseReview):
    studio = models.TextField()
