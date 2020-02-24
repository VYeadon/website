from rest_framework.serializers import ModelSerializer
from reviews.models import MovieReview, TvReview, BookReview, GameReview


class BaseReviewSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        read_only_fields = ['created_at']
        abstract = True


class MovieReviewSerializer(BaseReviewSerializer):
    class Meta:
        model = MovieReview
        fields = '__all__'
        read_only_fields = BaseReviewSerializer.Meta.read_only_fields


class TvReviewSerializer(BaseReviewSerializer):
    class Meta:
        model = MovieReview
        fields = '__all__'
        read_only_fields = BaseReviewSerializer.Meta.read_only_fields


class GameReviewSerializer(BaseReviewSerializer):
    class Meta:
        model = MovieReview
        fields = '__all__'
        read_only_fields = BaseReviewSerializer.Meta.read_only_fields


class BookReviewSerializer(BaseReviewSerializer):
    class Meta:
        model = MovieReview
        fields = '__all__'
        read_only_fields = BaseReviewSerializer.Meta.read_only_fields
