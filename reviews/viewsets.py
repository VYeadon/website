from reviews.models import MovieReview, TvReview, BookReview, GameReview
from reviews.serializers import BookReviewSerializer, MovieReviewSerializer, TvReviewSerializer, GameReviewSerializer
from rest_framework import viewsets


class MovieReviewViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = MovieReviewSerializer
    queryset = MovieReview.objects.all()


class TVReviewViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = TvReviewSerializer
    queryset = TvReview.objects.all()


class BookReviewViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = BookReviewSerializer
    queryset = BookReview.objects.all()


class GameReviewViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = GameReviewSerializer
    queryset = GameReview.objects.all()
