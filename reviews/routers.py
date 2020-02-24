from reviews.viewsets import MovieReviewViewSet, TVReviewViewSet, BookReviewViewSet, GameReviewViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'movies', MovieReviewViewSet)
router.register(r'tv_shows', TVReviewViewSet)
router.register(r'books', BookReviewViewSet)
router.register(r'games', GameReviewViewSet)
urlpatterns = router.urls
