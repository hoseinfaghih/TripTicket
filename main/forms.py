from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User

class CustomRegistrationForm(UserCreationForm):
    first_name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'class': 'form-control inp fname', 'placeholder': 'First Name *'}))
    last_name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'class': 'form-control inp lname', 'placeholder': 'Last Name *'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control inp email', 'placeholder': 'Email Address *'}))

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']

        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control inp usrname', 'placeholder': 'Username *'}),
            'password1': forms.PasswordInput(attrs={'class': 'form-control inp pswd', 'placeholder': 'Password *'}),
            'password2': forms.PasswordInput(attrs={'class': 'form-control inp cpswd', 'placeholder': 'Confirm Password *'}),
        }