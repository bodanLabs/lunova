"""
URL configuration for lunova project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GratitudeViewSet
from .views import ChallengeViewSet
from .views import DashboardSummary  # Add this import
from .views import LoginView
from .views import SignupView
from .views import LogoutView

router = DefaultRouter()
router.register(r'gratitudes', GratitudeViewSet)
router.register(r'challenges', ChallengeViewSet)
urlpatterns = [
    path('api/', include(router.urls)),
    path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),
    path('api/dashboard-summary/', DashboardSummary.as_view(), name='dashboard-summary'),
    path('api/login/', LoginView.as_view(), name='login'),  # Add this line for login
    path('api/signup/', SignupView.as_view(), name='signup'),
    path('api/logout/', LogoutView.as_view(), name='logout'),

]