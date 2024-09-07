from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import GratitudeSerializer
from .serializers import ChallengeSerializer
from rest_framework.views import APIView  # Import APIView
from rest_framework.response import Response  # Also import Response
from rest_framework.permissions import IsAuthenticated
from .models import Gratitude, Challenge
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework import serializers
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from django.contrib.auth import logout



class GratitudeViewSet(viewsets.ModelViewSet):
    queryset = Gratitude.objects.all()
    serializer_class = GratitudeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
        
class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Return only challenges for the current user
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Save the challenge and assign the current logged-in user as the owner
        serializer.save(user=self.request.user)


class DashboardSummary(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        # Total counts
        total_gratitudes = Gratitude.objects.filter(user=user).count()
        total_challenges = Challenge.objects.filter(user=user).count()

        # Recent entries
        recent_gratitudes = Gratitude.objects.filter(user=user).order_by('-created_at')[:5]
        recent_challenges = Challenge.objects.filter(user=user).order_by('-created_at')[:5]

        data = {
            'total_gratitudes': total_gratitudes,
            'total_challenges': total_challenges,
            'recent_gratitudes': [
                {'content': g.content, 'created_at': g.created_at} for g in recent_gratitudes
            ],
            'recent_challenges': [
                {'title': c.title, 'completed': c.completed, 'created_at': c.created_at} for c in recent_challenges
            ],
        }

        return Response(data)
    
    
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        # Get username and password from the request
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate using the username and password
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)  # Log in the user
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        




class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated to log out

    def post(self, request):
        # Logout the user
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)