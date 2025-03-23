from django.db import models

# Create your models here.
class Todo(models.Model):
    # task = models.CharField(max_length=30)
    # description = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    email = models.EmailField(default='chhagan@gmail.com')
    message = models.TextField(default="No message provided")

    def __str__(self):
        return self.name